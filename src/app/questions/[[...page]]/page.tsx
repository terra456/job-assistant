"use server";
import { getAllQuestions } from "@/lib/api";
import { QuestionSearchParams } from "@/lib/definitions";
import QuestionItem from "@/ui/question-item";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const serchParams: QuestionSearchParams = {};
  const { slug } = await params;
  slug?.forEach((el) => {
    if (el.includes("page")) {
      serchParams.skip = (Number(el.replace("page-", "")) - 1) * 10;
    } else {
      serchParams.stack = el;
    }
  });
  const questions = await getAllQuestions(serchParams);
  console.log(questions);
  return (
    <>
      <h1>
        {serchParams.stack ? `Вопросы по ${serchParams.stack}` : "Все Вопросы "}
        на собеседовании
      </h1>
      <p>
        Раздел помогает пользователям подготовиться к техническим и
        поведенческим интервью. Здесь собраны реальные вопросы, которые задают
        работодатели, а также готовые ответы и пояснения. Вопросы сгруппированы
        по стеку и уровню сложности
      </p>
      <div>Filters</div>
      <ul>
        {questions.map((el) => (
          <QuestionItem key={el.id} question={el} />
        ))}
      </ul>
    </>
  );
}
