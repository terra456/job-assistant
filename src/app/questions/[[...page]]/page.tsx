"use server";
import { getAllQuestions } from "@/lib/api";
import { questionPerPage } from "@/lib/constants";
import { QuestionSearchParams } from "@/lib/definitions";
import Pagination from "@/ui/components/pagination";
import QuestionItem from "@/ui/question-item";
import styles from "./page.module.scss";
import QuestionFilters from "@/ui/question-filters";
import Link from "next/link";
import Tags from "@/ui/components/tags";
import SophiAdvertismentLine from "@/ui/sophy-advertisment-line";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ page?: string[] }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const serchParams: QuestionSearchParams = {};
  const { page } = await params;
  const pageNumber = page ? Number(page[0].replace("page-", "")) : 1;
  const rawSearch = await searchParams;
  const search = Object.fromEntries(
    Object.entries(rawSearch).filter(([, value]) => value !== undefined)
  ) as { [key: string]: string };
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
        {questions.items.map((el) => (
          <li key={el.id}>
            <Link href={`/questions/question/${el.id}`} className={styles.item}>
              <h2 className={styles.item_head}>
                {el.answer ? el.answer : el.question}
              </h2>
              <p className={styles.item_info}>
                <span className={styles.item_span}>{el.stack}</span>
                <span className={styles.item_span}>{el.freq} упоминаний</span>
              </p>
            </Link>
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
