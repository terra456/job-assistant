export interface Vacancy {
  id: number,
  active: boolean,
  external_id: string,
  company_name: string,
  title: string,
  salary: string,
  location: string,
  speciality: string,
  internship: boolean,
  remote: boolean,
  url: string,
  description: string,
  source: string,
  image: string,
  date_publication: string,
}

export interface VacancySearchParams {
            search?: string;
            speciality?: string;
            location?: string;
            company_name?: string;
            skip?: number;
            limit?: number;
            sort_by?: string;
            order?: "asc" | "desc";
          }
