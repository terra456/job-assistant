import { Vacancy } from "./definitions";

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