import type { ComprehensiveExam } from "../types";
import exam1 from "./exam1";
import exam2 from "./exam2";

export interface NamedExam extends ComprehensiveExam {
  id: string;
  title: string;
  blurb: string;
}

export const EXAMS: NamedExam[] = [exam1, exam2];

export function getExam(id: string): NamedExam | undefined {
  return EXAMS.find((e) => e.id === id);
}
