"use client";

import Link from "next/link";
import { getExam } from "@/lib/exam";
import PaperRunner from "./PaperRunner";

export default function ExamPaperView({ examId, paperId }: { examId: string; paperId: string }) {
  const exam = getExam(examId);
  const paper = exam ? [...exam.mcqPapers, ...exam.qaPapers].find((p) => p.id === paperId) : undefined;

  if (!exam || !paper) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Paper not found.</p>
        <Link href="/exams" className="btn btn-primary mt-4">
          Back to exams
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/exams" className="text-sm text-slate-400 hover:text-slate-600 no-print">
        ← Mock exams
      </Link>
      <h1 className="text-xl font-bold text-slate-900 mt-1 mb-5">{paper.title}</h1>
      <PaperRunner paper={paper} topicId="exam" topicTitle="Mock Exams" kind="exam" backHref="/exams" />
    </div>
  );
}
