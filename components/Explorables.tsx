"use client";

import { useState } from "react";
import type { ComponentType } from "react";

export interface Explorable {
  title: string;
  description: string;
  Component: ComponentType;
}

/* ------------------------------------------------------------------ */
/* Palette + small helpers                                             */
/* ------------------------------------------------------------------ */

const INDIGO = "#4f46e5";
const RED = "#dc2626";
const GREEN = "#16a34a";
const AMBER = "#f59e0b";
const GREY = "#64748b";

const SUP: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻",
};
/** 10^n written with unicode superscripts, e.g. sup(-4) → "⁻⁴". */
function sup(n: number): string {
  return String(n)
    .split("")
    .map((c) => SUP[c] ?? c)
    .join("");
}

/** Round to dp decimal places and drop trailing zeros. */
function fmt(n: number, dp = 2): string {
  const p = 10 ** dp;
  const r = Math.round(n * p) / p;
  return Object.is(r, -0) ? "0" : String(r);
}

function withCommas(intDigits: string): string {
  return intDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* ------------------------------------------------------------------ */
/* Shared controls                                                     */
/* ------------------------------------------------------------------ */

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  display?: string;
}) {
  const { label, value, min, max, step = 1, onChange, display } = props;
  return (
    <label className="block text-sm">
      <span className="mb-1 flex items-baseline justify-between gap-2 text-slate-600">
        <span className="font-medium">{label}</span>
        <span className="font-semibold text-indigo-700">{display ?? fmt(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-600"
      />
    </label>
  );
}

function Stepper(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  display?: string;
}) {
  const { label, value, min, max, step = 1, onChange, display } = props;
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <span className="font-medium text-slate-600">{label}</span>
      <span className="flex items-center gap-1">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value - step < min}
          onClick={() => onChange(Math.max(min, value - step))}
          className="h-7 w-7 rounded-md border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40"
        >
          −
        </button>
        <span className="min-w-10 text-center font-semibold text-indigo-700">
          {display ?? fmt(value)}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={value + step > max}
          onClick={() => onChange(Math.min(max, value + step))}
          className="h-7 w-7 rounded-md border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40"
        >
          +
        </button>
      </span>
    </div>
  );
}

function Caption(props: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm leading-relaxed text-slate-600">{props.children}</p>;
}

/* ------------------------------------------------------------------ */
/* Shared SVG helpers                                                  */
/* ------------------------------------------------------------------ */

/** Grid + axes for a square cartesian plot. */
function Grid(props: {
  lo: number;
  hi: number;
  step: number;
  toX: (v: number) => number;
  toY: (v: number) => number;
}) {
  const { lo, hi, step, toX, toY } = props;
  const ticks: number[] = [];
  for (let v = lo; v <= hi + 1e-9; v += step) ticks.push(Math.round(v * 100) / 100);
  return (
    <g>
      {ticks.map((v) => (
        <g key={v}>
          <line
            x1={toX(v)} y1={toY(lo)} x2={toX(v)} y2={toY(hi)}
            stroke={v === 0 ? GREY : "#e2e8f0"} strokeWidth={v === 0 ? 1.5 : 1}
          />
          <line
            x1={toX(lo)} y1={toY(v)} x2={toX(hi)} y2={toY(v)}
            stroke={v === 0 ? GREY : "#e2e8f0"} strokeWidth={v === 0 ? 1.5 : 1}
          />
        </g>
      ))}
      <text x={toX(hi) - 10} y={toY(0) - 4} fontSize={10} fill={GREY}>x</text>
      <text x={toX(0) + 4} y={toY(hi) + 10} fontSize={10} fill={GREY}>y</text>
    </g>
  );
}

/** Polyline points for y = f(x), clipped vertically. */
function curvePoints(
  f: (x: number) => number,
  xMin: number,
  xMax: number,
  toX: (v: number) => number,
  toY: (v: number) => number,
  yClip: number,
): string {
  const pts: string[] = [];
  const n = 160;
  for (let i = 0; i <= n; i++) {
    const x = xMin + ((xMax - xMin) * i) / n;
    let y = f(x);
    if (!Number.isFinite(y)) continue;
    if (y > yClip) y = yClip;
    if (y < -yClip) y = -yClip;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return pts.join(" ");
}

/** Point on a circle, angle in degrees measured anticlockwise from 3 o'clock (maths convention). */
function circPt(cx: number, cy: number, r: number, deg: number): { x: number; y: number } {
  const t = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(t), y: cy - r * Math.sin(t) };
}

/** Pie-wedge path from angle a0 to a1 (degrees, clockwise from 12 o'clock). */
function wedgePath(cx: number, cy: number, r: number, a0: number, a1: number): string {
  const pt = (deg: number) => {
    const t = (deg * Math.PI) / 180;
    return { x: cx + r * Math.sin(t), y: cy - r * Math.cos(t) };
  };
  const p0 = pt(a0);
  const p1 = pt(a1);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} Z`;
}

/* ------------------------------------------------------------------ */
/* 1. standard-form                                                    */
/* ------------------------------------------------------------------ */

function ordinary(m: number, e: number): string {
  const digits = String(Math.round(m * 10)); // "10"…"99"
  const p = e + 1; // digits before the decimal point
  if (p >= digits.length) return withCommas(digits + "0".repeat(p - digits.length));
  if (p > 0) {
    const frac = digits.slice(p).replace(/0+$/, "");
    return frac ? `${digits.slice(0, p)}.${frac}` : digits.slice(0, p);
  }
  const frac = ("0".repeat(-p) + digits).replace(/0+$/, "");
  return `0.${frac || "0"}`;
}

function StandardFormWidget() {
  const [m, setM] = useState(3.5);
  const [e, setE] = useState(4);
  const logV = Math.log10(m) + e;

  const LO = -6;
  const HI = 12;
  const xOf = (lg: number) => 16 + ((lg - LO) / (HI - LO)) * 288;
  const refs: Array<{ lg: number; label: string }> = [
    { lg: -4, label: "hair width 10⁻⁴ m" },
    { lg: 0, label: "human 10⁰ m" },
    { lg: 7, label: "Earth 10⁷ m" },
    { lg: 11, label: "to the Sun 10¹¹ m" },
  ];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Mantissa" value={m} min={1} max={9.9} step={0.1} onChange={setM} display={m.toFixed(1)} />
        <Stepper label="Exponent (power of 10)" value={e} min={-6} max={9} onChange={setE} />
      </div>
      <p className="text-base font-semibold text-slate-800">
        {m.toFixed(1)} × 10{sup(e)} = <span className="text-indigo-700">{ordinary(m, e)}</span>
      </p>
      <svg
        viewBox="0 0 320 110"
        role="img"
        aria-label={`Log scale showing ${m.toFixed(1)} times ten to the ${e} compared with everyday sizes`}
        className="h-auto w-full max-w-full"
      >
        <line x1={xOf(LO)} y1={62} x2={xOf(HI)} y2={62} stroke={GREY} strokeWidth={2} />
        {[-6, -4, -2, 0, 2, 4, 6, 8, 10, 12].map((lg) => (
          <g key={lg}>
            <line x1={xOf(lg)} y1={58} x2={xOf(lg)} y2={66} stroke={GREY} />
            <text x={xOf(lg)} y={78} fontSize={8} fill={GREY} textAnchor="middle">10{sup(lg)}</text>
          </g>
        ))}
        {refs.map((r, i) => (
          <g key={r.label}>
            <circle cx={xOf(r.lg)} cy={62} r={3} fill={GREY} />
            <text x={xOf(r.lg)} y={i % 2 === 0 ? 96 : 106} fontSize={8} fill={GREY} textAnchor="middle">
              {r.label}
            </text>
          </g>
        ))}
        <rect x={xOf(LO)} y={38} width={Math.max(2, xOf(logV) - xOf(LO))} height={10} rx={3} fill={INDIGO} opacity={0.85} />
        <polygon points={`${xOf(logV)},54 ${xOf(logV) - 5},44 ${xOf(logV) + 5},44`} fill={INDIGO} />
        <text
          x={Math.min(300, Math.max(20, xOf(logV)))}
          y={30}
          fontSize={10}
          fontWeight="bold"
          fill={INDIGO}
          textAnchor="middle"
        >
          your number ≈ 10{sup(Math.round(logV))} m
        </text>
      </svg>
      <Caption>
        Each step right on this bar is ×10, so the exponent counts <em>place-value jumps</em>, not size directly.
        Nudging the exponent by 1 moves the marker one whole tick — that is why 10{sup(9)} is a thousand times 10{sup(6)},
        not just “a bit more”.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. percentage-machine                                               */
/* ------------------------------------------------------------------ */

function PercentageMachineWidget() {
  const [start, setStart] = useState(500);
  const [rate, setRate] = useState(15);
  const [years, setYears] = useState(5);

  const mult = 1 + rate / 100;
  const values: number[] = [];
  for (let i = 0; i <= years; i++) values.push(start * mult ** i);
  const final = values[years] ?? start;
  const simpleFinal = start * (1 + (rate / 100) * years);
  const maxV = Math.max(...values, start, 1);

  const W = 320;
  const H = 170;
  const plotH = 120;
  const barW = Math.min(30, (W - 30) / (years + 1) - 6);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <Slider label="Start amount" value={start} min={100} max={1000} step={50} onChange={setStart} />
        <Slider
          label="Rate per year"
          value={rate}
          min={-30}
          max={30}
          onChange={setRate}
          display={`${rate >= 0 ? "+" : "−"}${Math.abs(rate)}%`}
        />
        <Stepper label="Years" value={years} min={1} max={10} onChange={setYears} />
      </div>
      <p className="text-sm font-semibold text-slate-800">
        Multiplier ×{mult.toFixed(2)} each year → after {years} year{years > 1 ? "s" : ""}:{" "}
        {start} × {mult.toFixed(2)}{sup(years)} = <span className="text-indigo-700">{final.toFixed(2)}</span>
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Bar chart of ${start} compounding at ${rate} percent for ${years} years`}
        className="h-auto w-full max-w-full"
      >
        {values.map((v, i) => {
          const h = (v / maxV) * plotH;
          const x = 18 + i * ((W - 30) / (years + 1));
          return (
            <g key={i}>
              <rect
                x={x}
                y={14 + plotH - h}
                width={barW}
                height={Math.max(1, h)}
                rx={2}
                fill={i === 0 ? GREY : rate >= 0 ? INDIGO : AMBER}
              />
              <text x={x + barW / 2} y={10 + plotH - h} fontSize={7.5} fill={GREY} textAnchor="middle">
                {Math.round(v)}
              </text>
              <text x={x + barW / 2} y={H - 14} fontSize={8} fill={GREY} textAnchor="middle">
                yr {i}
              </text>
            </g>
          );
        })}
        <text x={W / 2} y={H - 2} fontSize={9} fill={GREY} textAnchor="middle">
          each bar = previous bar × {mult.toFixed(2)}
        </text>
      </svg>
      <Caption>
        Compound {rate >= 0 ? "growth" : "decay"} multiplies by ×{mult.toFixed(2)} every year, so the {rate >= 0 ? "rises get bigger" : "drops get smaller"} each time.
        Simple interest would change by the same {Math.abs((start * rate) / 100).toFixed(0)} each year, ending at {simpleFinal.toFixed(2)} instead of {final.toFixed(2)}.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. indices-explorer                                                 */
/* ------------------------------------------------------------------ */

const BASES = [2, 3, 5, 10] as const;

function indexValueStr(base: number, e: number): string {
  if (e >= 0) return withCommas(String(base ** e));
  return `1/${withCommas(String(base ** -e))}`;
}

function expandedStr(base: number, e: number): string {
  if (e === 0) return "the pattern's resting point";
  const chain = Array(Math.abs(e)).fill(String(base)).join(" × ");
  return e > 0 ? chain : `1 / (${chain})`;
}

function IndicesExplorerWidget() {
  const [baseIdx, setBaseIdx] = useState(0);
  const [e, setE] = useState(3);
  const base = BASES[baseIdx] ?? 2;

  // window of exponents shown, always including current and (when nearby) zero
  let top = Math.min(6, e + 2);
  let bottom = top - 4;
  if (bottom < -4) { bottom = -4; top = 0; }
  const rows: number[] = [];
  for (let k = top; k >= bottom; k--) rows.push(k);

  const rowH = 30;
  const H = rows.length * rowH + 20;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Stepper label="Base" value={baseIdx} min={0} max={BASES.length - 1} onChange={setBaseIdx} display={String(base)} />
        <Slider label="Exponent n" value={e} min={-4} max={6} onChange={setE} />
      </div>
      <p className="text-base font-semibold text-slate-800">
        {base}{sup(e)} = {expandedStr(base, e)} = <span className="text-indigo-700">{indexValueStr(base, e)}</span>
      </p>
      <svg
        viewBox={`0 0 320 ${H}`}
        role="img"
        aria-label={`Pattern table of powers of ${base} around exponent ${e}`}
        className="h-auto w-full max-w-full"
      >
        {rows.map((k, i) => {
          const y = 14 + i * rowH;
          const isCurrent = k === e;
          const isZero = k === 0;
          return (
            <g key={k}>
              <rect
                x={8}
                y={y - 11}
                width={220}
                height={24}
                rx={5}
                fill={isCurrent ? INDIGO : isZero ? "#fef3c7" : "#f1f5f9"}
              />
              <text x={20} y={y + 5} fontSize={12} fontWeight={isCurrent || isZero ? "bold" : "normal"} fill={isCurrent ? "#ffffff" : "#0f172a"}>
                {base}{sup(k)} = {indexValueStr(base, k)}
              </text>
              {isZero && (
                <text x={236} y={y + 4} fontSize={9} fill={AMBER} fontWeight="bold">← always 1</text>
              )}
              {i < rows.length - 1 && (
                <g>
                  <line x1={280} y1={y + 2} x2={280} y2={y + rowH - 6} stroke={GREEN} strokeWidth={1.5} />
                  <polygon points={`280,${y + rowH - 3} 276,${y + rowH - 9} 284,${y + rowH - 9}`} fill={GREEN} />
                  <text x={288} y={y + rowH / 2 + 3} fontSize={10} fill={GREEN} fontWeight="bold">÷{base}</text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      <Caption>
        Going down one row divides by {base} every time. Follow the pattern past {base}¹ = {base} and the next step
        <em> must </em>be {base}⁰ = 1, then {base}⁻¹ = 1/{base} — negative indices are just the division pattern continuing.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. expand-visualiser                                                */
/* ------------------------------------------------------------------ */

function ExpandVisualiserWidget() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(2);

  const X = 90; // drawn length of "x"
  const U = 11; // drawn length of one unit
  const w = X + a * U;
  const h = X + b * U;
  const pad = 26;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Stepper label="a in (x + a)" value={a} min={1} max={9} onChange={setA} />
        <Stepper label="b in (x + b)" value={b} min={1} max={9} onChange={setB} />
      </div>
      <svg
        viewBox={`0 0 ${w + pad + 14} ${h + pad + 14}`}
        role="img"
        aria-label={`Area model for (x plus ${a}) times (x plus ${b})`}
        className="mx-auto h-auto w-full max-w-80"
      >
        {/* side labels */}
        <text x={pad + X / 2} y={16} fontSize={12} fill={GREY} textAnchor="middle">x</text>
        <text x={pad + X + (a * U) / 2} y={16} fontSize={12} fill={GREY} textAnchor="middle">{a}</text>
        <text x={12} y={pad + X / 2 + 4} fontSize={12} fill={GREY} textAnchor="middle">x</text>
        <text x={12} y={pad + X + (b * U) / 2 + 4} fontSize={12} fill={GREY} textAnchor="middle">{b}</text>
        {/* four regions */}
        <rect x={pad} y={pad} width={X} height={X} fill="#c7d2fe" stroke={INDIGO} />
        <rect x={pad + X} y={pad} width={a * U} height={X} fill="#bbf7d0" stroke={GREEN} />
        <rect x={pad} y={pad + X} width={X} height={b * U} fill="#fde68a" stroke={AMBER} />
        <rect x={pad + X} y={pad + X} width={a * U} height={b * U} fill="#fecaca" stroke={RED} />
        <text x={pad + X / 2} y={pad + X / 2 + 4} fontSize={14} fontWeight="bold" fill={INDIGO} textAnchor="middle">x²</text>
        <text x={pad + X + (a * U) / 2} y={pad + X / 2 + 4} fontSize={12} fontWeight="bold" fill={GREEN} textAnchor="middle">{a}x</text>
        <text x={pad + X / 2} y={pad + X + (b * U) / 2 + 4} fontSize={12} fontWeight="bold" fill="#b45309" textAnchor="middle">{b}x</text>
        <text x={pad + X + (a * U) / 2} y={pad + X + (b * U) / 2 + 4} fontSize={11} fontWeight="bold" fill={RED} textAnchor="middle">{a * b}</text>
      </svg>
      <p className="text-center text-base font-semibold text-slate-800">
        (x + {a})(x + {b}) = x² + {a}x + {b}x + {a * b} ={" "}
        <span className="text-indigo-700">x² + {a + b}x + {a * b}</span>
      </p>
      <Caption>
        The big rectangle is (x + {a}) wide and (x + {b}) tall, so its area is the product of the brackets.
        Cutting it along the x-lines gives the four pieces x², {a}x, {b}x and {a * b} — expanding brackets is just
        adding up areas, and the two middle strips merge into {a + b}x.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. quadratic-explorer                                               */
/* ------------------------------------------------------------------ */

function quadStr(a: number, b: number, c: number): string {
  const aPart = a === 1 ? "x²" : a === -1 ? "−x²" : `${a < 0 ? "−" : ""}${Math.abs(a)}x²`;
  const bPart = b === 0 ? "" : ` ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}x`;
  const cPart = c === 0 ? "" : ` ${c < 0 ? "−" : "+"} ${Math.abs(c)}`;
  return `y = ${aPart}${bPart}${cPart}`;
}

function QuadraticExplorerWidget() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);

  const D = b * b - 4 * a * c;
  const xv = -b / (2 * a);
  const yv = c - (b * b) / (4 * a);
  const roots: number[] =
    D > 0
      ? [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)]
      : D === 0
        ? [xv]
        : [];

  const toX = (x: number) => 150 + x * 14;
  const toY = (y: number) => 150 - y * 14;
  const inRange = (v: number) => Math.abs(v) <= 10;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <Slider
          label="a (never 0)"
          value={a}
          min={-3}
          max={3}
          onChange={(v) => setA(v === 0 ? (a > 0 ? -1 : 1) : v)}
        />
        <Slider label="b" value={b} min={-10} max={10} onChange={setB} />
        <Slider label="c" value={c} min={-10} max={10} onChange={setC} />
      </div>
      <p className="text-sm font-semibold text-slate-800">
        {quadStr(a, b, c)} &nbsp;|&nbsp; discriminant b² − 4ac = {b}² − 4({a})({c}) ={" "}
        <span className="text-indigo-700">{D}</span> →{" "}
        {D > 0 ? "2 real roots (parabola crosses the x-axis twice)" : D === 0 ? "1 repeated root (it just touches)" : "0 real roots (it never reaches the x-axis)"}
      </p>
      <svg
        viewBox="0 0 300 300"
        role="img"
        aria-label={`Parabola for ${quadStr(a, b, c)}`}
        className="mx-auto h-auto w-full max-w-80"
      >
        <Grid lo={-10} hi={10} step={2} toX={toX} toY={toY} />
        <polyline
          points={curvePoints((x) => a * x * x + b * x + c, -10, 10, toX, toY, 10.7)}
          fill="none"
          stroke={INDIGO}
          strokeWidth={2.5}
        />
        {roots.filter(inRange).map((r, i) => (
          <g key={i}>
            <circle cx={toX(r)} cy={toY(0)} r={4} fill={RED} />
            <text x={toX(r)} y={toY(0) - 8} fontSize={9} fill={RED} textAnchor="middle" fontWeight="bold">
              x = {fmt(r, 2)}
            </text>
          </g>
        ))}
        {inRange(c) && (
          <g>
            <circle cx={toX(0)} cy={toY(c)} r={4} fill={GREEN} />
            <text x={toX(0) + 8} y={toY(c) + 3} fontSize={9} fill={GREEN} fontWeight="bold">(0, {c})</text>
          </g>
        )}
        {inRange(xv) && inRange(yv) && (
          <g>
            <circle cx={toX(xv)} cy={toY(yv)} r={4} fill={AMBER} />
            <text x={toX(xv)} y={toY(yv) + (a > 0 ? 16 : -10)} fontSize={9} fill="#b45309" textAnchor="middle" fontWeight="bold">
              turning point ({fmt(xv, 2)}, {fmt(yv, 2)})
            </text>
          </g>
        )}
      </svg>
      <Caption>
        Red dots are the roots, green is the y-intercept (0, {c}), amber is the turning point.
        The discriminant b² − 4ac lives under the square root in the quadratic formula, so its sign decides
        whether the formula gives two answers, one, or none.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. sequence-machine                                                 */
/* ------------------------------------------------------------------ */

function nthTermStr(a: number, d: number): string {
  const k = a - d;
  if (d === 0) return String(a);
  const dn = d === 1 ? "n" : d === -1 ? "−n" : `${d < 0 ? "−" : ""}${Math.abs(d)}n`;
  if (k === 0) return dn;
  return `${dn} ${k < 0 ? "−" : "+"} ${Math.abs(k)}`;
}

function SequenceMachineWidget() {
  const [a, setA] = useState(3);
  const [d, setD] = useState(4);

  const terms: number[] = [];
  const sums: number[] = [];
  let run = 0;
  for (let n = 1; n <= 8; n++) {
    const t = a + (n - 1) * d;
    terms.push(t);
    run += t;
    sums.push(run);
  }
  const maxAbs = Math.max(1, ...terms.map((t) => Math.abs(t)));
  const base = 100;
  const scale = 70 / maxAbs;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Stepper label="First term a" value={a} min={-10} max={10} onChange={setA} />
        <Stepper label="Common difference d" value={d} min={-10} max={10} onChange={setD} />
      </div>
      <p className="text-sm font-semibold text-slate-800">
        nth term = a + (n − 1)d = {a} + (n − 1)({d}) = <span className="text-indigo-700">{nthTermStr(a, d)}</span>
      </p>
      <svg
        viewBox="0 0 340 210"
        role="img"
        aria-label={`First eight terms of the sequence starting at ${a} with difference ${d}`}
        className="h-auto w-full max-w-full"
      >
        <line x1={10} y1={base} x2={330} y2={base} stroke={GREY} strokeWidth={1.5} />
        {terms.map((t, i) => {
          const x = 16 + i * 40;
          const h = Math.abs(t) * scale;
          const y = t >= 0 ? base - h : base;
          return (
            <g key={i}>
              <rect x={x} y={y} width={26} height={Math.max(1, h)} rx={2} fill={INDIGO} opacity={0.85} />
              <text x={x + 13} y={t >= 0 ? y - 4 : y + h + 10} fontSize={9} fill={INDIGO} fontWeight="bold" textAnchor="middle">
                {t}
              </text>
              <text x={x + 13} y={188} fontSize={8.5} fill={GREY} textAnchor="middle">n={i + 1}</text>
              <text x={x + 13} y={202} fontSize={8.5} fill={GREEN} fontWeight="bold" textAnchor="middle">
                {sums[i]}
              </text>
            </g>
          );
        })}
        <text x={334} y={202} fontSize={8.5} fill={GREEN} textAnchor="end">←Sn</text>
      </svg>
      <Caption>
        Every bar is {d >= 0 ? `${d} taller` : `${Math.abs(d)} shorter`} than the one before — that constant step is what
        makes the sequence arithmetic. The green row keeps a running total: S{"n"} adds the first n terms,
        so S8 = {sums[7]}.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 7. function-grapher                                                 */
/* ------------------------------------------------------------------ */

type FnType = "linear" | "quadratic" | "cubic";

function FunctionGrapherWidget() {
  const [kind, setKind] = useState<FnType>("linear");
  const [A, setA] = useState(1);
  const [B, setB] = useState(2);
  const [C, setC] = useState(-3);

  const f = (x: number): number =>
    kind === "linear" ? B * x + C : kind === "quadratic" ? A * x * x + B * x + C : (A * x * x * x) / 10 + B * x + C;

  const eqn =
    kind === "linear"
      ? `y = ${B}x ${C < 0 ? "−" : "+"} ${Math.abs(C)}`
      : kind === "quadratic"
        ? quadStr(A, B, C)
        : `y = ${A}x³/10 ${B < 0 ? "−" : "+"} ${Math.abs(B)}x ${C < 0 ? "−" : "+"} ${Math.abs(C)}`;

  const toX = (x: number) => 150 + x * 14;
  const toY = (y: number) => 150 - y * 14;

  const D = B * B - 4 * A * C;
  const quadRoots: number[] =
    kind === "quadratic" && A !== 0 && D >= 0
      ? D === 0
        ? [-B / (2 * A)]
        : [(-B - Math.sqrt(D)) / (2 * A), (-B + Math.sqrt(D)) / (2 * A)]
      : [];
  const vx = A !== 0 ? -B / (2 * A) : 0;
  const vy = A !== 0 ? C - (B * B) / (4 * A) : C;

  const btn = (t: FnType, label: string) => (
    <button
      type="button"
      onClick={() => setKind(t)}
      aria-pressed={kind === t}
      className={`rounded-md border px-3 py-1 text-sm font-medium ${
        kind === t ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 text-slate-700 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">{btn("linear", "Linear")}{btn("quadratic", "Quadratic")}{btn("cubic", "Cubic")}</div>
      <div className="grid gap-3 sm:grid-cols-3">
        {kind !== "linear" && (
          <Slider
            label={kind === "cubic" ? "a (x³/10 coefficient)" : "a (x² coefficient)"}
            value={A}
            min={-3}
            max={3}
            onChange={(v) => setA(v === 0 && kind === "quadratic" ? (A > 0 ? -1 : 1) : v)}
          />
        )}
        <Slider label={kind === "linear" ? "gradient m" : "b (x coefficient)"} value={B} min={-5} max={5} onChange={setB} />
        <Slider label={kind === "linear" ? "intercept c" : "c (constant)"} value={C} min={-10} max={10} onChange={setC} />
      </div>
      <p className="text-sm font-semibold text-slate-800">{eqn}</p>
      <svg viewBox="0 0 300 300" role="img" aria-label={`Graph of ${eqn}`} className="mx-auto h-auto w-full max-w-80">
        <Grid lo={-10} hi={10} step={2} toX={toX} toY={toY} />
        <polyline points={curvePoints(f, -10, 10, toX, toY, 10.7)} fill="none" stroke={INDIGO} strokeWidth={2.5} />
        {Math.abs(C) <= 10 && (
          <g>
            <circle cx={toX(0)} cy={toY(C)} r={4} fill={GREEN} />
            <text x={toX(0) + 8} y={toY(C) + 3} fontSize={9} fill={GREEN} fontWeight="bold">
              intercept (0, {C})
            </text>
          </g>
        )}
        {kind === "linear" && (
          <text x={20} y={20} fontSize={10} fill={INDIGO} fontWeight="bold">
            gradient = {B} (up {B} for every 1 across)
          </text>
        )}
        {kind === "quadratic" &&
          quadRoots
            .filter((r) => Math.abs(r) <= 10)
            .map((r, i) => (
              <g key={i}>
                <circle cx={toX(r)} cy={toY(0)} r={4} fill={RED} />
                <text x={toX(r)} y={toY(0) - 8} fontSize={9} fill={RED} textAnchor="middle" fontWeight="bold">
                  {fmt(r, 2)}
                </text>
              </g>
            ))}
        {kind === "quadratic" && Math.abs(vx) <= 10 && Math.abs(vy) <= 10 && (
          <g>
            <circle cx={toX(vx)} cy={toY(vy)} r={4} fill={AMBER} />
            <text x={toX(vx)} y={toY(vy) + (A > 0 ? 16 : -10)} fontSize={9} fill="#b45309" textAnchor="middle" fontWeight="bold">
              vertex ({fmt(vx, 2)}, {fmt(vy, 2)})
            </text>
          </g>
        )}
      </svg>
      <Caption>
        {kind === "linear" &&
          "A straight line has one constant gradient: m tells you the steepness, c is where it cuts the y-axis. Slide m through 0 and watch the line lie flat, then tip the other way."}
        {kind === "quadratic" &&
          "The x² term bends the graph into a parabola. Roots (red) are where y = 0; the vertex (amber) is its lowest or highest point, halfway between the roots when they exist."}
        {kind === "cubic" &&
          "A cubic can rise, fall, and rise again — up to two turning points. Try a negative x coefficient with a positive a to see the classic S-shape with a local hill and valley."}
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 8. derivative-explorer                                              */
/* ------------------------------------------------------------------ */

function DerivativeExplorerWidget() {
  const [x0, setX0] = useState(0.5);
  const f = (x: number) => (x * x * x) / 10 - x;
  const df = (x: number) => (3 * x * x) / 10 - 1;

  const toX = (x: number) => 160 + x * 32;
  const toY = (y: number) => 110 - y * 32;
  const g = df(x0);
  const y0 = f(x0);
  const tangent = (x: number) => y0 + g * (x - x0);

  return (
    <div className="space-y-3">
      <Slider label="Point x on the curve" value={x0} min={-4} max={4} step={0.1} onChange={setX0} display={x0.toFixed(1)} />
      <p className="text-sm font-semibold text-slate-800">
        y = x³/10 − x, so dy/dx = 3x²/10 − 1. At x = {x0.toFixed(1)}: gradient ={" "}
        <span className="text-indigo-700">{g.toFixed(2)}</span>{" "}
        {Math.abs(g) < 0.05 ? "— flat!" : g > 0 ? "(uphill)" : "(downhill)"}
      </p>
      <svg
        viewBox="0 0 320 220"
        role="img"
        aria-label={`Cubic curve with tangent line of gradient ${g.toFixed(2)} at x equals ${x0.toFixed(1)}`}
        className="mx-auto h-auto w-full max-w-96"
      >
        <defs>
          <clipPath id="dx-clip">
            <rect x={10} y={8} width={300} height={204} />
          </clipPath>
        </defs>
        <line x1={10} y1={toY(0)} x2={310} y2={toY(0)} stroke={GREY} />
        <line x1={toX(0)} y1={8} x2={toX(0)} y2={212} stroke={GREY} />
        {[-4, -2, 2, 4].map((t) => (
          <text key={t} x={toX(t)} y={toY(0) + 12} fontSize={8} fill={GREY} textAnchor="middle">{t}</text>
        ))}
        <polyline
          points={curvePoints(f, -4.4, 4.4, toX, toY, 3.1)}
          fill="none"
          stroke={INDIGO}
          strokeWidth={2.5}
        />
        <g clipPath="url(#dx-clip)">
          <line x1={toX(-4.4)} y1={toY(tangent(-4.4))} x2={toX(4.4)} y2={toY(tangent(4.4))} stroke={RED} strokeWidth={2} />
        </g>
        <circle cx={toX(x0)} cy={toY(y0)} r={5} fill={RED} />
        <text x={toX(x0)} y={toY(y0) - 10} fontSize={10} fill={RED} fontWeight="bold" textAnchor="middle">
          gradient {g.toFixed(2)}
        </text>
      </svg>
      <Caption>
        The red tangent shows the curve&apos;s steepness at that exact point, and dy/dx = 3x²/10 − 1 predicts it.
        Slide towards x ≈ ±1.8 (the hilltop and valley): the tangent lies flat and the gradient reads 0 —
        turning points are exactly where the derivative vanishes.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 9. circle-theorem-explorer                                          */
/* ------------------------------------------------------------------ */

function angleBetween(P: { x: number; y: number }, A: { x: number; y: number }, B: { x: number; y: number }): number {
  const v1 = { x: A.x - P.x, y: A.y - P.y };
  const v2 = { x: B.x - P.x, y: B.y - P.y };
  const dot = v1.x * v2.x + v1.y * v2.y;
  const m = Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y);
  if (m === 0) return 0;
  return (Math.acos(Math.min(1, Math.max(-1, dot / m))) * 180) / Math.PI;
}

function CircleTheoremWidget() {
  const [bDeg, setBDeg] = useState(320);
  const [pFrac, setPFrac] = useState(50);

  const cx = 150;
  const cy = 132;
  const r = 100;
  const aDeg = 210; // A fixed on lower-left

  const minor = bDeg - aDeg; // central angle AOB across the bottom
  const pad = 14;
  const pDeg = (bDeg + pad + (pFrac / 100) * (360 - minor - 2 * pad)) % 360;

  const A = circPt(cx, cy, r, aDeg);
  const B = circPt(cx, cy, r, bDeg);
  const P = circPt(cx, cy, r, pDeg);
  const O = { x: cx, y: cy };

  const apb = angleBetween(P, A, B);
  const aob = minor;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Move P around the major arc" value={pFrac} min={0} max={100} onChange={setPFrac} display="" />
        <Slider label="Move B (changes the chord)" value={bDeg} min={280} max={340} onChange={setBDeg} display="" />
      </div>
      <p className="text-sm font-semibold text-slate-800">
        Angle at centre AOB = <span className="text-green-700">{aob.toFixed(1)}°</span> &nbsp;|&nbsp; angle at circumference APB ={" "}
        <span className="text-indigo-700">{apb.toFixed(1)}°</span> = {aob.toFixed(1)}° ÷ 2
      </p>
      <svg
        viewBox="0 0 300 250"
        role="img"
        aria-label={`Circle with chord AB, centre angle ${aob.toFixed(0)} degrees and circumference angle ${apb.toFixed(0)} degrees`}
        className="mx-auto h-auto w-full max-w-72"
      >
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={GREY} strokeWidth={1.5} />
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={GREY} strokeWidth={1.5} strokeDasharray="4 3" />
        <line x1={O.x} y1={O.y} x2={A.x} y2={A.y} stroke={GREEN} strokeWidth={2} />
        <line x1={O.x} y1={O.y} x2={B.x} y2={B.y} stroke={GREEN} strokeWidth={2} />
        <line x1={P.x} y1={P.y} x2={A.x} y2={A.y} stroke={INDIGO} strokeWidth={2} />
        <line x1={P.x} y1={P.y} x2={B.x} y2={B.y} stroke={INDIGO} strokeWidth={2} />
        <circle cx={O.x} cy={O.y} r={3.5} fill={GREEN} />
        <circle cx={A.x} cy={A.y} r={4} fill={GREY} />
        <circle cx={B.x} cy={B.y} r={4} fill={AMBER} />
        <circle cx={P.x} cy={P.y} r={5} fill={INDIGO} />
        <text x={A.x - 10} y={A.y + 12} fontSize={11} fontWeight="bold" fill={GREY}>A</text>
        <text x={B.x + 6} y={B.y + 12} fontSize={11} fontWeight="bold" fill="#b45309">B</text>
        <text x={O.x + 7} y={O.y + 12} fontSize={11} fontWeight="bold" fill={GREEN}>O</text>
        <text
          x={P.x + (P.x > cx ? 9 : -9)}
          y={P.y + (P.y > cy ? 14 : -8)}
          fontSize={11}
          fontWeight="bold"
          fill={INDIGO}
          textAnchor={P.x > cx ? "start" : "end"}
        >
          P {apb.toFixed(0)}°
        </text>
        <text x={O.x} y={O.y + 26} fontSize={9.5} fontWeight="bold" fill={GREEN} textAnchor="middle">
          {aob.toFixed(0)}°
        </text>
      </svg>
      <Caption>
        Slide P anywhere on the major arc: angle APB never budges — angles in the same segment are equal —
        and it always equals exactly half of the centre angle AOB. Move B instead and both angles change together,
        keeping the 2 : 1 ratio.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 10. trig-explorer                                                   */
/* ------------------------------------------------------------------ */

function TrigExplorerWidget() {
  const [deg, setDeg] = useState(35);
  const rad = (deg * Math.PI) / 180;
  const sin = Math.sin(rad);
  const cos = Math.cos(rad);
  const tan = Math.tan(rad);

  const S = 185; // pixels for hypotenuse of length 1
  const ox = 30;
  const oy = 205;
  const bx = ox + cos * S;
  const cyTop = oy - sin * S;

  return (
    <div className="space-y-3">
      <Slider label="Angle θ" value={deg} min={5} max={85} onChange={setDeg} display={`${deg}°`} />
      <svg
        viewBox="0 0 260 225"
        role="img"
        aria-label={`Right triangle with angle ${deg} degrees and hypotenuse 1`}
        className="mx-auto h-auto w-full max-w-72"
      >
        <polygon points={`${ox},${oy} ${bx},${oy} ${bx},${cyTop}`} fill="#eef2ff" stroke={INDIGO} strokeWidth={2} />
        {/* right-angle marker */}
        <polyline points={`${bx - 12},${oy} ${bx - 12},${oy - 12} ${bx},${oy - 12}`} fill="none" stroke={GREY} />
        {/* angle arc */}
        <path d={`M ${ox + 28} ${oy} A 28 28 0 0 0 ${ox + 28 * Math.cos(rad)} ${oy - 28 * Math.sin(rad)}`} fill="none" stroke={AMBER} strokeWidth={2} />
        <text x={ox + 40} y={oy - 8} fontSize={11} fill="#b45309" fontWeight="bold">θ = {deg}°</text>
        <text x={(ox + bx) / 2} y={oy + 14} fontSize={10.5} fill={GREEN} fontWeight="bold" textAnchor="middle">
          adjacent = cos θ = {cos.toFixed(3)}
        </text>
        <text x={bx + 6} y={(oy + cyTop) / 2} fontSize={10.5} fill={RED} fontWeight="bold">
          opp = sin θ
        </text>
        <text x={bx + 6} y={(oy + cyTop) / 2 + 13} fontSize={10.5} fill={RED} fontWeight="bold">
          = {sin.toFixed(3)}
        </text>
        <text
          x={(ox + bx) / 2 - 12}
          y={(oy + cyTop) / 2 - 10}
          fontSize={10.5}
          fill={INDIGO}
          fontWeight="bold"
          transform={`rotate(${-deg} ${(ox + bx) / 2 - 12} ${(oy + cyTop) / 2 - 10})`}
        >
          hypotenuse = 1
        </text>
      </svg>
      <p className="text-sm font-semibold text-slate-800">
        sin {deg}° = {sin.toFixed(3)} &nbsp; cos {deg}° = {cos.toFixed(3)} &nbsp; tan {deg}° = {sin.toFixed(3)}/{cos.toFixed(3)} = {tan.toFixed(3)}
      </p>
      <Caption>
        With the hypotenuse fixed at 1, SOHCAHTOA collapses beautifully: the opposite side simply <em>is</em> sin θ and the
        adjacent side <em>is</em> cos θ, with tan θ = opposite ÷ adjacent. Push θ towards 85° and watch sin creep to 1
        while cos shrinks — they trade places as the triangle tips upright.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 11. sector-explorer                                                 */
/* ------------------------------------------------------------------ */

function SectorExplorerWidget() {
  const [rVal, setRVal] = useState(5);
  const [theta, setTheta] = useState(120);

  const frac = theta / 360;
  const arc = frac * 2 * Math.PI * rVal;
  const area = frac * Math.PI * rVal * rVal;

  const cx = 130;
  const cy = 120;
  const rPix = 20 + rVal * 8.5;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Radius r" value={rVal} min={1} max={10} onChange={setRVal} />
        <Slider label="Angle θ" value={theta} min={10} max={350} onChange={setTheta} display={`${theta}°`} />
      </div>
      <svg
        viewBox="0 0 260 240"
        role="img"
        aria-label={`Sector of radius ${rVal} and angle ${theta} degrees`}
        className="mx-auto h-auto w-full max-w-64"
      >
        <circle cx={cx} cy={cy} r={rPix} fill="none" stroke="#e2e8f0" strokeWidth={1.5} strokeDasharray="4 3" />
        <path d={wedgePath(cx, cy, rPix, 0, theta)} fill="#c7d2fe" stroke={INDIGO} strokeWidth={2} />
        <text x={cx} y={cy - rPix - 8} fontSize={10} fill={GREY} textAnchor="middle">full circle for comparison</text>
        <text x={cx + 8} y={cy - rPix / 2} fontSize={10.5} fill={INDIGO} fontWeight="bold">r = {rVal}</text>
        <text x={cx} y={cy + rPix + 16} fontSize={11} fill="#3730a3" fontWeight="bold" textAnchor="middle">
          θ = {theta}° which is {theta}/360 = {fmt(frac, 3)} of the circle
        </text>
      </svg>
      <p className="text-sm font-semibold text-slate-800">
        Arc length = (θ/360) × 2πr = {fmt(frac, 3)} × 2π × {rVal} = <span className="text-indigo-700">{arc.toFixed(2)}</span>
        <br />
        Sector area = (θ/360) × πr² = {fmt(frac, 3)} × π × {rVal}² = <span className="text-indigo-700">{area.toFixed(2)}</span>
      </p>
      <Caption>
        Both formulas are the full-circle answers (2πr and πr²) scaled by the same fraction θ/360 — the sector is just
        that slice of the whole pie. Doubling θ doubles both; doubling r doubles the arc but quadruples the area.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 12. vector-playground                                               */
/* ------------------------------------------------------------------ */

function VectorPlaygroundWidget() {
  const [ax, setAx] = useState(3);
  const [ay, setAy] = useState(1);
  const [bx, setBx] = useState(1);
  const [by, setBy] = useState(3);

  const toX = (x: number) => 150 + x * 13;
  const toY = (y: number) => 150 - y * 13;
  const magA = Math.hypot(ax, ay);
  const magB = Math.hypot(bx, by);
  const magS = Math.hypot(ax + bx, ay + by);

  const arrow = (x1: number, y1: number, x2: number, y2: number, color: string, id: string, dash?: string) =>
    x1 === x2 && y1 === y2 ? null : (
      <line
        x1={toX(x1)} y1={toY(y1)} x2={toX(x2)} y2={toY(y2)}
        stroke={color} strokeWidth={2.5} markerEnd={`url(#${id})`} strokeDasharray={dash}
      />
    );

  const marker = (id: string, color: string) => (
    <marker id={id} markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 z" fill={color} />
    </marker>
  );

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Stepper label="a x-part" value={ax} min={-5} max={5} onChange={setAx} />
        <Stepper label="a y-part" value={ay} min={-5} max={5} onChange={setAy} />
        <Stepper label="b x-part" value={bx} min={-5} max={5} onChange={setBx} />
        <Stepper label="b y-part" value={by} min={-5} max={5} onChange={setBy} />
      </div>
      <svg
        viewBox="0 0 300 300"
        role="img"
        aria-label={`Vectors a (${ax}, ${ay}) and b (${bx}, ${by}) with their sum and difference`}
        className="mx-auto h-auto w-full max-w-80"
      >
        <defs>
          {marker("vp-ind", INDIGO)}
          {marker("vp-red", RED)}
          {marker("vp-grn", GREEN)}
          {marker("vp-amb", AMBER)}
        </defs>
        <Grid lo={-10} hi={10} step={2} toX={toX} toY={toY} />
        {arrow(ax, ay, ax + bx, ay + by, RED, "vp-red", "5 4")}
        {arrow(0, 0, ax, ay, INDIGO, "vp-ind")}
        {arrow(0, 0, bx, by, RED, "vp-red")}
        {arrow(0, 0, ax + bx, ay + by, GREEN, "vp-grn")}
        {arrow(0, 0, ax - bx, ay - by, AMBER, "vp-amb")}
        <text x={toX(ax)} y={toY(ay) - 6} fontSize={10} fontWeight="bold" fill={INDIGO} textAnchor="middle">a</text>
        <text x={toX(bx)} y={toY(by) - 6} fontSize={10} fontWeight="bold" fill={RED} textAnchor="middle">b</text>
        <text x={toX(ax + bx)} y={toY(ay + by) - 6} fontSize={10} fontWeight="bold" fill={GREEN} textAnchor="middle">a+b</text>
        <text x={toX(ax - bx)} y={toY(ay - by) - 6} fontSize={10} fontWeight="bold" fill="#b45309" textAnchor="middle">a−b</text>
      </svg>
      <p className="text-sm font-semibold text-slate-800">
        a + b = ({ax + bx}, {ay + by}) &nbsp; a − b = ({ax - bx}, {ay - by})
        <br />
        |a| = √({ax}² + {ay}²) = {fmt(magA)} &nbsp; |b| = {fmt(magB)} &nbsp; |a + b| = {fmt(magS)}
      </p>
      <Caption>
        The dashed red copy of b starts where a finishes — that tip-to-tail walk lands exactly on a + b (green),
        because you just add the x-parts and the y-parts. Magnitudes come from Pythagoras on those parts, and notice
        |a + b| is usually <em>less</em> than |a| + |b| unless the arrows point the same way.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 13. probability-spinner                                             */
/* ------------------------------------------------------------------ */

function ProbabilitySpinnerWidget() {
  const [nRed, setNRed] = useState(2);
  const [nBlue, setNBlue] = useState(1);
  const [nGreen, setNGreen] = useState(3);
  const [counts, setCounts] = useState({ red: 0, blue: 0, green: 0 });

  const total = nRed + nBlue + nGreen;
  const spins = counts.red + counts.blue + counts.green;
  const pRed = nRed / total;
  const pBlue = nBlue / total;

  const setAndReset = (setter: (v: number) => void) => (v: number) => {
    setter(v);
    setCounts({ red: 0, blue: 0, green: 0 });
  };

  const spin50 = () => {
    let r = 0, b = 0, g = 0;
    for (let i = 0; i < 50; i++) {
      const u = Math.random();
      if (u < pRed) r++;
      else if (u < pRed + pBlue) b++;
      else g++;
    }
    setCounts((c) => ({ red: c.red + r, blue: c.blue + b, green: c.green + g }));
  };

  const sectors: Array<{ color: string }> = [
    ...Array(nRed).fill({ color: RED }),
    ...Array(nBlue).fill({ color: "#2563eb" }),
    ...Array(nGreen).fill({ color: GREEN }),
  ];
  const step = 360 / total;

  const bars: Array<{ name: string; obs: number; theo: number; color: string }> = [
    { name: "red", obs: spins ? counts.red / spins : 0, theo: nRed / total, color: RED },
    { name: "blue", obs: spins ? counts.blue / spins : 0, theo: nBlue / total, color: "#2563eb" },
    { name: "green", obs: spins ? counts.green / spins : 0, theo: nGreen / total, color: GREEN },
  ];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stepper label="Red sectors" value={nRed} min={1} max={6} onChange={setAndReset(setNRed)} />
        <Stepper label="Blue sectors" value={nBlue} min={1} max={6} onChange={setAndReset(setNBlue)} />
        <Stepper label="Green sectors" value={nGreen} min={1} max={6} onChange={setAndReset(setNGreen)} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={spin50}
          className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Spin ×50
        </button>
        <button
          type="button"
          onClick={() => setCounts({ red: 0, blue: 0, green: 0 })}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Reset
        </button>
        <span className="text-sm text-slate-600">
          {spins} spins so far · P(red) = {nRed}/{total} = {fmt(pRed, 3)}
        </span>
      </div>
      <svg
        viewBox="0 0 340 170"
        role="img"
        aria-label={`Spinner with ${nRed} red, ${nBlue} blue and ${nGreen} green sectors, and relative frequency bars from ${spins} spins`}
        className="h-auto w-full max-w-full"
      >
        {sectors.map((s, i) => (
          <path key={i} d={wedgePath(80, 85, 70, i * step, (i + 1) * step)} fill={s.color} stroke="#ffffff" strokeWidth={1.5} />
        ))}
        <circle cx={80} cy={85} r={5} fill="#0f172a" />
        <polygon points="80,6 74,20 86,20" fill="#0f172a" />
        {/* relative frequency chart */}
        {bars.map((bar, i) => {
          const x = 185 + i * 50;
          const h = bar.obs * 120;
          const th = bar.theo * 120;
          return (
            <g key={bar.name}>
              <rect x={x} y={140 - h} width={30} height={Math.max(0.5, h)} fill={bar.color} opacity={0.55} />
              <line x1={x - 5} y1={140 - th} x2={x + 35} y2={140 - th} stroke={bar.color} strokeWidth={2} strokeDasharray="4 3" />
              <text x={x + 15} y={152} fontSize={8.5} fill={GREY} textAnchor="middle">{bar.name}</text>
              <text x={x + 15} y={162} fontSize={8.5} fill={GREY} textAnchor="middle">
                {spins ? fmt(bar.obs, 2) : "–"}
              </text>
            </g>
          );
        })}
        <line x1={180} y1={140} x2={330} y2={140} stroke={GREY} />
        <text x={255} y={16} fontSize={9} fill={GREY} textAnchor="middle">
          bars = experiment, dashed lines = theory
        </text>
      </svg>
      <Caption>
        Each equal sector is equally likely, so P(colour) = its sectors ÷ {total}. With few spins the experimental bars
        wobble; keep pressing Spin ×50 and they settle towards the dashed theoretical lines — that is the law of large
        numbers in action.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 14. histogram-builder                                               */
/* ------------------------------------------------------------------ */

const CLASSES = [
  { lo: 0, hi: 10 },
  { lo: 10, hi: 15 },
  { lo: 15, hi: 25 },
  { lo: 25, hi: 45 },
] as const;

function HistogramBuilderWidget() {
  const [freqs, setFreqs] = useState<number[]>([10, 10, 12, 8]);
  const [naive, setNaive] = useState(false);

  const setFreq = (i: number) => (v: number) =>
    setFreqs((f) => f.map((old, j) => (j === i ? v : old)));

  const heights = CLASSES.map((c, i) => {
    const f = freqs[i] ?? 0;
    return naive ? f : f / (c.hi - c.lo);
  });
  const maxH = Math.max(...heights, 0.1);
  const xOf = (v: number) => 30 + (v / 45) * 280;
  const plotH = 130;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CLASSES.map((c, i) => (
          <Stepper key={i} label={`${c.lo}–${c.hi}`} value={freqs[i] ?? 0} min={0} max={20} onChange={setFreq(i)} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setNaive((n) => !n)}
        aria-pressed={naive}
        className={`rounded-md border px-3 py-1.5 text-sm font-medium ${
          naive ? "border-amber-500 bg-amber-500 text-white" : "border-slate-300 text-slate-700 hover:bg-slate-100"
        }`}
      >
        {naive ? "Showing naive bars (by frequency) — click for density" : "Show naive bars (by frequency)"}
      </button>
      <svg
        viewBox="0 0 330 185"
        role="img"
        aria-label={`Histogram drawn by ${naive ? "raw frequency" : "frequency density"}`}
        className="h-auto w-full max-w-full"
      >
        {CLASSES.map((c, i) => {
          const h = ((heights[i] ?? 0) / maxH) * plotH;
          const f = freqs[i] ?? 0;
          const w = c.hi - c.lo;
          return (
            <g key={i}>
              <rect
                x={xOf(c.lo)}
                y={150 - h}
                width={xOf(c.hi) - xOf(c.lo) - 1}
                height={Math.max(0.5, h)}
                fill={naive ? AMBER : INDIGO}
                opacity={0.8}
              />
              <text x={(xOf(c.lo) + xOf(c.hi)) / 2} y={146 - h} fontSize={8.5} fill={GREY} textAnchor="middle">
                {naive ? `f=${f}` : `${f}÷${w}=${fmt(f / w, 2)}`}
              </text>
            </g>
          );
        })}
        <line x1={30} y1={150} x2={310} y2={150} stroke={GREY} strokeWidth={1.5} />
        {[0, 10, 15, 25, 45].map((v) => (
          <g key={v}>
            <line x1={xOf(v)} y1={150} x2={xOf(v)} y2={155} stroke={GREY} />
            <text x={xOf(v)} y={166} fontSize={9} fill={GREY} textAnchor="middle">{v}</text>
          </g>
        ))}
        <text x={12} y={90} fontSize={9} fill={GREY} transform="rotate(-90 12 90)" textAnchor="middle">
          {naive ? "frequency" : "freq. density"}
        </text>
        <text x={170} y={181} fontSize={9} fill={GREY} textAnchor="middle">
          {naive ? "misleading: wide classes look too big" : "area of each bar = its frequency"}
        </text>
      </svg>
      <Caption>
        Classes here have different widths (10, 5, 10, 20), so plotting raw frequency lets wide classes hog attention.
        Frequency density = frequency ÷ class width fixes that: height shows how <em>crowded</em> each interval is,
        and the bar&apos;s area (width × density) gets back the frequency. Toggle the naive view to see the distortion.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Registry + defaults                                                 */
/* ------------------------------------------------------------------ */

export const EXPLORABLES_ALL: Record<string, Explorable> = {
  "standard-form": {
    title: "Standard Form Scale",
    description: "Slide the mantissa and exponent and see the number on a log scale next to real-world sizes.",
    Component: StandardFormWidget,
  },
  "percentage-machine": {
    title: "Percentage Machine",
    description: "Watch compound growth or decay build year by year from a single multiplier.",
    Component: PercentageMachineWidget,
  },
  "indices-explorer": {
    title: "Indices Explorer",
    description: "A pattern table of powers that makes x⁰ = 1 and negative indices inevitable.",
    Component: IndicesExplorerWidget,
  },
  "expand-visualiser": {
    title: "Expansion Visualiser",
    description: "An area model that turns (x + a)(x + b) into four labelled rectangles.",
    Component: ExpandVisualiserWidget,
  },
  "quadratic-explorer": {
    title: "Quadratic Explorer",
    description: "Move a, b and c to see roots, intercept, turning point and what the discriminant decides.",
    Component: QuadraticExplorerWidget,
  },
  "sequence-machine": {
    title: "Sequence Machine",
    description: "Arithmetic sequences as bars, with the nth-term formula and running totals.",
    Component: SequenceMachineWidget,
  },
  "function-grapher": {
    title: "Function Grapher",
    description: "Graph linear, quadratic and cubic functions with their key features labelled.",
    Component: FunctionGrapherWidget,
  },
  "derivative-explorer": {
    title: "Derivative Explorer",
    description: "Slide a point along a cubic and watch the tangent's gradient — zero at the hilltops.",
    Component: DerivativeExplorerWidget,
  },
  "circle-theorem-explorer": {
    title: "Circle Theorem Explorer",
    description: "Move P around the major arc: the angle at the circumference stays half the angle at the centre.",
    Component: CircleTheoremWidget,
  },
  "trig-explorer": {
    title: "Trig Explorer",
    description: "A unit-hypotenuse right triangle where the sides literally are sin θ and cos θ.",
    Component: TrigExplorerWidget,
  },
  "sector-explorer": {
    title: "Sector Explorer",
    description: "Arc length and sector area as the fraction θ/360 of the whole circle.",
    Component: SectorExplorerWidget,
  },
  "vector-playground": {
    title: "Vector Playground",
    description: "Add and subtract vectors tip-to-tail on a grid, with magnitudes from Pythagoras.",
    Component: VectorPlaygroundWidget,
  },
  "probability-spinner": {
    title: "Probability Spinner",
    description: "Build a spinner, run 50 spins at a time, and watch relative frequency approach theory.",
    Component: ProbabilitySpinnerWidget,
  },
  "histogram-builder": {
    title: "Histogram Builder",
    description: "Unequal class widths drawn by frequency density — and a toggle showing why raw bars mislead.",
    Component: HistogramBuilderWidget,
  },
};

export const DEFAULT_WIDGETS: Record<string, string[]> = {
  number: ["standard-form"],
  ratio: ["percentage-machine"],
  "indices-surds": ["indices-explorer"],
  algebra: ["expand-visualiser"],
  equations: ["quadratic-explorer"],
  sequences: ["sequence-machine"],
  graphs: ["function-grapher"],
  "functions-calculus": ["derivative-explorer"],
  geometry: ["circle-theorem-explorer"],
  trigonometry: ["trig-explorer"],
  mensuration: ["sector-explorer"],
  vectors: ["vector-playground"],
  probability: ["probability-spinner"],
  statistics: ["histogram-builder"],
};
