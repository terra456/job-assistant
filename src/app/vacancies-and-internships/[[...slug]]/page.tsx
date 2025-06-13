"use server";
import { getAllVacancies } from "@/lib/api";
import { vacancyPerPage } from "@/lib/constants";
import { VacancySearchParams } from "@/lib/definitions";
import VacancyItem from "@/ui/vacancy-item";
import styles from "./page.module.scss";

export default async function Vacancies({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const serchParams: VacancySearchParams = { limit: vacancyPerPage };
  const { slug } = await params;
  slug?.forEach((el) => {
    if (el.includes("page")) {
      serchParams.skip = (Number(el.replace("page-", "")) - 1) * vacancyPerPage;
    } else {
      serchParams.speciality = el;
    }
  });
  const vacancies = await getAllVacancies(serchParams);
  console.log(vacancies);
  return (
    <>
      <h1>
        {serchParams.speciality
          ? `Вакансии по Data Science${serchParams.speciality}`
          : "Все вакансии"}
      </h1>
      <p>
        На этой странице агрегируются junior-вакансии и стажировки из различных
        источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие
        другие
      </p>
      <div>Filters</div>
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
