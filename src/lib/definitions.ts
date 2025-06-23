export interface AllResponse<T> {
  items: T[]
  total: number,
  skip: number,
  limit: number
}

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
  order?: 'asc' | 'desc';
}

export interface Question {
  id: number,
  stack: string,
  question: string,
  position: string,
  freq: number,
  answer: string | null,
  tags: string
}

export interface QuestionSearchParams {
  search?: string;
  stack?: string;
  position?: string
  tags?: string;
  skip?: number;
  limit?: number,
  sort_by?: string;
  order?: 'asc'|'desc';
}

export interface LoginForm {
  username: string,
  password: string,
}

export interface User {
  username: string,
  password: string,
  apiToken: string,
}

export interface UserFromDB {
  username: string,
  password: string,
  is_superuser: boolean,
}

export interface LoginResponse {
  access_token: string,
  token_type: string,
}
