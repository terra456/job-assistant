"use server";
import { getAllVacancies } from "@/lib/api";
import { vacancyPerPage } from "@/lib/constants";
import { VacancySearchParams } from "@/lib/definitions";
import VacancyItem from "@/ui/vacancy-item";
import styles from "./page.module.scss";
import VacancyFilters from "@/ui/vacancy-filters";

export default async function Vacancies({
  params,
  searchParams,
}: {
  params: Promise<{ page?: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await params;
  const search = await searchParams;

  const reqSerchParams: VacancySearchParams = {
    limit: vacancyPerPage,
    skip: (Number(page) - 1) * vacancyPerPage || 0,
    ...search,
  };
  console.log("reqSerchParams", search);

  const vacancies = await getAllVacancies(reqSerchParams);
  console.log(vacancies);
  return (
    <>
      <h1>
        {reqSerchParams.speciality
          ? `Вакансии по ${reqSerchParams.speciality}`
          : "Все вакансии"}
      </h1>
      <p>
        На этой странице агрегируются junior-вакансии и стажировки из различных
        источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие
        другие
      </p>
      <div>
        <VacancyFilters />
      </div>
      <div className={styles.cards}>
        {vacancies.map((el) => (
          <VacancyItem key={el.id} vacancie={el} />
        ))}
      </div>
      <div>Pagination</div>
      <div>
        <span>стажировка без опыта</span>
        <span>вакансии джуниор</span>
        <span>как откликнуться на вакансию</span>
        <span>примеры вакансий junior</span>
        <span>стажировки по Java</span>
        <span>Junior Java Developer</span>
        <span>Вакансии Java без опыта</span>
        <span>Java Spring Boot вакансии</span>
      </div>
    </>
  );
}
