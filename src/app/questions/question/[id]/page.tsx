import { getQuestion } from "@/lib/api";
import styles from "./page.module.css";

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
        <h1>{question.question}</h1>
        <p>{question.answer}</p>
      </main>
    </div>
  );
}
