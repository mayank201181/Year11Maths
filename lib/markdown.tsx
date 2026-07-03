import React from "react";

/** Render markdown-lite: blank-line paragraphs, "- " bullets, **bold**. */
export function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export function MarkdownLite({ text }: { text: string }) {
  const blocks = text.split(/\n\s*\n/);
  return (
    <div className="space-y-3">
      {blocks.map((block, bi) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        if (lines.length === 0) return null;
        const isList = lines.every((l) => l.startsWith("- "));
        if (isList) {
          return (
            <ul key={bi} className="list-disc pl-5 space-y-1.5 text-slate-700">
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.slice(2))}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={bi} className="text-slate-700 leading-relaxed">
            {lines.map((l, li) => (
              <React.Fragment key={li}>
                {li > 0 && <br />}
                {l.startsWith("- ") ? renderInline(l) : renderInline(l)}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
