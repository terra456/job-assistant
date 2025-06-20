import { getQuestion } from "@/lib/api";
import "@/app/default.min.css";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await getQuestion(Number(id));

  return (
    <div>
      <main>
        <p>
          {question.position}
          {question.freq}
          {question.stack}
        </p>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: question.question }}
        ></div>
      </main>
    </div>
  );
}
