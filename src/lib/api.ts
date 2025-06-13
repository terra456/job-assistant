import { Vacancy, VacancySearchParams } from "./definitions";

export async function getVacancy(speciality: string): Promise<Vacancy> {
  return {
    id: 0,
    active: true,
    external_id: "string",
    company_name: "string",
    title: "string",
    salary: "string",
    location: "string",
    speciality: speciality,
    internship: false,
    remote: false,
    url: "string",
    description: "string",
    source: "string",
    image: "string",
    date_publication: "2019-08-24T14:15:22Z"
  };
}

export async function getAllVacancies(/*pageNumber: number*/params: VacancySearchParams): Promise<Vacancy[]> {
  const getParams = new URLSearchParams(params).toString();
  console.log(getParams);
  const response = await fetch(`${process.env.BACKEND_ENDPOINT}/vacancies?${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const json = await response.json();
  return json;
}

export async function getVacancie(id: number): Promise<Vacancy> {
  const response = await fetch(`${process.env.BACKEND_ENDPOINT}/vacancies/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const json = await response.json();
  console.log(id, response);
  return json;
}