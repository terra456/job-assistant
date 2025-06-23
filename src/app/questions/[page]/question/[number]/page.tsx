import { getAllQuestions } from "@/lib/api";
import "@/app/default.min.css";
import { questionPerPage } from "@/lib/constants";
import { QuestionSearchParams } from "@/lib/definitions";
import QuestionItem from "@/ui/question-item";
import styles from "./page.module.scss";
import SophiAdvertismentYelow from "@/ui/sophy-advertisment-yelow";
import Tags from "@/ui/components/tags";
import { Metadata } from "next";

const keyWords = [
  "как отвечать на вопрос",
  "пример собеседования",
  "фреймворки на собеседовании",
  "типичные вопросы junior",
  "интервью вопросы и ответы",
];

type Props = {
  params: Promise<{ page: string; number: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { page, number } = await params;
  const questionNumber = number ? Number(number) : 1;
  const pageNumber = page ? Number(page.replace("page-", "")) : 1;
  const search = await searchParams;
  console.log("search", search);
  const reqSerchParams: QuestionSearchParams = {
    limit: questionPerPage,
    skip: (pageNumber - 1) * questionPerPage || 0,
    ...search,
  };
  console.log(reqSerchParams);
  const { items } = await getAllQuestions(reqSerchParams);
  const question = items[questionNumber - 1];
  return {
    title: question.question.slice(0, 50),
    description: `Ответ на вопрос ${question.question}`,
    keywords: keyWords,
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { page, number } = await params;
  const questionNumber = number ? Number(number) : 1;
  const pageNumber = page ? Number(page.replace("page-", "")) : 1;
  const search = await searchParams;
  console.log("search", search);
  const reqSerchParams: QuestionSearchParams = {
    limit: questionPerPage,
    skip: (pageNumber - 1) * questionPerPage || 0,
    ...search,
  };
  console.log(reqSerchParams);
  const { items } = await getAllQuestions(reqSerchParams);
  const question = items[questionNumber - 1];
  let nextQuestion;

  if (questionNumber === questionPerPage) {
    const reqSerchParamsNext: QuestionSearchParams = {
      limit: questionPerPage,
      skip: (pageNumber + 1 - 1) * questionPerPage || 0,
      ...search,
    };
    const { items } = await getAllQuestions(reqSerchParamsNext);
    nextQuestion = items[0];
  } else {
    nextQuestion = items[questionNumber - 1 + 1];
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <p className={styles.info}>
          <span className={styles.info_span}>{question.position}</span>
          <span className={styles.info_span}>{question.freq} упоминаний</span>
          <span className={styles.info_span}>{question.tags}</span>
        </p>
        <h1 className="head2">{question.question}</h1>
        <div
          className={styles.question_data}
          dangerouslySetInnerHTML={{
            __html: question.answer ? question.answer : question.question,
          }}
        ></div>
      </div>
      <div className={styles.right}>
        <SophiAdvertismentYelow
          text={
            "Софи собрала все вопросы. Тренируйся и получай офферы быстрее!"
          }
        />
        <QuestionItem
          isNext={true}
          question={nextQuestion}
          page={
            questionNumber === questionPerPage ? pageNumber + 1 : pageNumber
          }
          questionNumber={
            questionNumber === questionPerPage ? 1 : questionNumber + 1
          }
          queryString={search}
        />
      </div>
      <Tags str={keyWords} />
    </div>
  );
}
