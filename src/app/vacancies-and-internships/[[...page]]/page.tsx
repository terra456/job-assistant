"use server";
import { getAllVacancies } from "@/lib/api";
import { stack, vacancyPerPage } from "@/lib/constants";
import { VacancySearchParams } from "@/lib/definitions";
import VacancyItem from "@/ui/vacancy-item";
import styles from "./page.module.scss";
import VacancyFilters from "@/ui/vacancy-filters";
import Pagination from "@/ui/components/pagination";
import Tags from "@/ui/components/tags";
import LinkBtnSecond from "@/ui/components/link-btn-second";
import SophiAdvertismentGradient from "@/ui/sophy-advertisment-gradient";
import { userAgent } from "next/server";
import { headers } from "next/headers";

import type { Metadata } from "next";

const keyWords = [
  "стажировка без опыта",
  "вакансии джуниор",
  "как откликнуться на вакансию",
  "примеры вакансий junior",
  "стажировки по Java",
  "Junior Java Developer",
  "Вакансии Java без опыта",
  "Java Spring Boot вакансии",
];

type Props = {
  params: Promise<{ page?: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const rawSearch = await searchParams;
  const currentSpeciality = rawSearch["speciality"] || "";
  const currentRemote = rawSearch["remote"] === "true";
  const currentInternship = rawSearch["internship"] === "true";
  const speciality = stack.get(currentSpeciality) || null;
  const internship = currentInternship
    ? "Стажировки"
    : "Ваканссии и стажировки";

  const title = `${speciality ? `${internship} по ${speciality}` : `все ${internship}`}${currentRemote ? " удаленнo" : ""}`;
  return {
    title: title,
    description: `Вакансии и стажировки по направлениям ${Array.from(stack.values()).join(", ")}`,
    keywords: keyWords.join(", "),
  };
}

export default async function Vacancies({ params, searchParams }: Props) {
  const { page } = await params;
  const { device } = userAgent({ headers: await headers() });
  const deviceType = device?.type === "mobile" ? "mobile" : "desktop";
  console.log("device", deviceType);
  const pageNubber = page ? Number(page[0].replace("page-", "")) : 1;
  const rawSearch = await searchParams;
  const search = Object.fromEntries(
    Object.entries(rawSearch).filter(([, value]) => value !== undefined)
  ) as { [key: string]: string };

  const reqSerchParams: VacancySearchParams = {
    limit: vacancyPerPage[deviceType],
    skip: (pageNubber - 1) * vacancyPerPage[deviceType] || 0,
    ...search,
  };

  const vacancies = await getAllVacancies(reqSerchParams);
  const title = stack.get(search.speciality || "") || null;
  return (
    <>
      <h1 className="head1">
        {title ? `Вакансии по ${title}` : "Все вакансии"}
      </h1>
      <p className="head_desc">
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
      <Pagination
        search={search}
        countPerPage={vacancyPerPage[deviceType]}
        totalCount={vacancies.total}
        currentPage={pageNubber}
        soursePage="vacancies-and-internships"
      />
      <Tags str={keyWords} />
    </>
  );
}
