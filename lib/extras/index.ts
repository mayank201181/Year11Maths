import type { TopicExtras } from "../types";
import number from "./number";
import ratio from "./ratio";
import indicesSurds from "./indices-surds";
import algebra from "./algebra";
import equations from "./equations";
import sequences from "./sequences";
import graphs from "./graphs";
import functionsCalculus from "./functions-calculus";
import geometry from "./geometry";
import trigonometry from "./trigonometry";
import mensuration from "./mensuration";
import vectors from "./vectors";
import probability from "./probability";
import statistics from "./statistics";

const ALL: TopicExtras[] = [
  number,
  ratio,
  indicesSurds,
  algebra,
  equations,
  sequences,
  graphs,
  functionsCalculus,
  geometry,
  trigonometry,
  mensuration,
  vectors,
  probability,
  statistics,
];

export const EXTRAS: Record<string, TopicExtras> = Object.fromEntries(ALL.map((e) => [e.topicId, e]));

export function getExtras(topicId: string): TopicExtras | undefined {
  return EXTRAS[topicId];
}
