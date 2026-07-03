import TopicView from "@/components/TopicView";
import { TOPICS } from "@/lib/topics";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <TopicView topicId={id} />;
}
