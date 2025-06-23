"use server";
import { getAllQuestions } from "@/lib/api";
import { questionPerPage } from "@/lib/constants";
import { QuestionSearchParams } from "@/lib/definitions";
import Pagination from "@/ui/components/pagination";
import QuestionItem from "@/ui/question-item";
import styles from "./page.module.scss";
import QuestionFilters from "@/ui/question-filters";
import Tags from "@/ui/components/tags";
import SophiAdvertismentLine from "@/ui/sophy-advertisment-line";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ page?: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const serchParams: QuestionSearchParams = {};
  const { page } = await params;
  const pageNumber = page ? Number(page.replace("page-", "")) : 1;
  const search = await searchParams;
  console.log("search", search);
  const reqSerchParams: QuestionSearchParams = {
    limit: questionPerPage,
    skip: (pageNumber - 1) * questionPerPage || 0,
    ...search,
  };
  const questions = await getAllQuestions(reqSerchParams);
  return (
    <>
      <h1 className="head1">
        {serchParams.stack ? `Вопросы по ${serchParams.stack}` : "Все вопросы "}
        на собеседовании
      </h1>
      <p className="head_desc">
        Раздел помогает пользователям подготовиться к техническим и
        поведенческим интервью. Здесь собраны реальные вопросы, которые задают
        работодатели, а также готовые ответы и пояснения. Вопросы сгруппированы
        по стеку и уровню сложности
      </p>
      <QuestionFilters />
      <ul className={styles.list}>
        <li className={styles.advertisment}>
          <SophiAdvertismentLine
            text={
              "Софи собрала все вопросы — тренируйся и получай офферы быстрее!"
            }
          />
        </li>
        {questions.items.map((el, i) => (
          <li key={el.id}>
            <QuestionItem
              question={el}
              page={pageNumber}
              questionNumber={i + 1}
              queryString={search}
            />
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        <Pagination
          search={search}
          countPerPage={questionPerPage}
          totalCount={questions.total}
          currentPage={pageNumber}
          soursePage="questions"
        />
      </div>
      <Tags
        str={[
          "вопросы на собеседовании junior разработчик",
          "технические вопросы фронтенд   ",
          "вопросы по JavaScript на собеседовании ",
          "вопросы по SQL для собеседования",
          "вопросы в Яндекс собеседование ",
          "частые вопросы на собеседовании.",
        ]}
      />
    </>
  );
}
