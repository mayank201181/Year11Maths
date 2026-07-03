import ExamPaperView from "@/components/ExamPaperView";
import { EXAMS } from "@/lib/exam";

export function generateStaticParams() {
  return EXAMS.flatMap((exam) =>
    [...exam.mcqPapers, ...exam.qaPapers].map((p) => ({ examId: exam.id, paperId: p.id }))
  );
}

export default async function ExamPaperPage({
  params,
}: {
  params: Promise<{ examId: string; paperId: string }>;
}) {
  const { examId, paperId } = await params;
  return <ExamPaperView examId={examId} paperId={paperId} />;
}
