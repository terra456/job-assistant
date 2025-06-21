"use server";
import { getAllVacancies } from "@/lib/api";
import { stack, vacancyPerPage } from "@/lib/constants";
import { VacancySearchParams } from "@/lib/definitions";
import VacancyItem from "@/ui/vacancy-item";
import styles from "./page.module.scss";
import VacancyFilters from "@/ui/vacancy-filters";
import { Suspense } from "react";
import Pagination from "@/ui/components/pagination";
import Tags from "@/ui/components/tags";
import LinkBtn from "@/ui/components/link-btn";
import LinkBtnSecond from "@/ui/components/link-btn-second";
import SophiAdvertismentGradient from "@/ui/sophy-advertisment-gradient";

export default async function Vacancies({
  params,
  searchParams,
}: {
  params: Promise<{ page?: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { page } = await params;
  console.log("page", page);
  const pageNubber = page ? Number(page[0].replace("page-", "")) : 1;
  const search = await searchParams;

  const reqSerchParams: VacancySearchParams = {
    limit: vacancyPerPage,
    skip: (pageNubber - 1) * vacancyPerPage || 0,
    ...search,
  };

  const vacancies = await getAllVacancies(reqSerchParams);
  const title = stack.get(search.speciality || "") || null;
  return (
    <>
      <h1 className={styles.head}>
        {title ? `Вакансии по ${title}` : "Все вакансии"}
      </h1>
      <p className={styles.desc}>
        На этой странице агрегируются junior-вакансии и стажировки из различных
        источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие
        другие
      </p>
      <div className={styles.filters}>
        <LinkBtnSecond
          text={"Добавить вакансию"}
          href={"/vacancies-and-internships/add"}
        />
        <VacancyFilters />
      </div>
      <div className={styles.cards}>
        <SophiAdvertismentGradient
          text={
            "Больше никакого поиска и откликов — автоматизируй свой путь к работе вместе с Софи!"
          }
        />
        {vacancies.items.map((el) => (
          <VacancyItem key={el.id} vacancie={el} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          search={search}
          countPerPage={vacancyPerPage}
          totalCount={vacancies.total}
          currentPage={pageNubber}
          soursePage="vacancies-and-internships"
        />
      </div>
      <div className={styles.tags}>
        <Tags
          str={[
            "стажировка без опыта",
            "вакансии джуниор",
            "как откликнуться на вакансию",
            "примеры вакансий junior",
            "стажировки по Java",
            "Junior Java Developer",
            "Вакансии Java без опыта",
            "Java Spring Boot вакансии",
          ]}
        />
      </div>
    </>
  );
}
