"use server";
import { getAllVacancies } from "@/lib/api";
import { VacancySearchParams } from "@/lib/definitions";
import VacancyItem from "@/ui/vacancy-item";
import VacancyList from "@/ui/vacancy-list";

export default async function Vacancies({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const serchParams: VacancySearchParams = {};
  const { slug } = await params;
  slug?.forEach((el) => {
    if (el.includes("page")) {
      serchParams.skip = (Number(el.replace("page-", "")) - 1) * 10;
    } else {
      serchParams.speciality = el;
    }
  });
  const vacancies = await getAllVacancies(serchParams);
  console.log(vacancies);
  return (
    <ul>
      {vacancies.map((el) => (
        <VacancyItem key={el.id} vacancie={el} />
      ))}
    </ul>
  );
}
