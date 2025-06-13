import { Question, QuestionSearchParams, Vacancy, VacancySearchParams } from "./definitions";

export async function getAllVacancies(params: VacancySearchParams): Promise<Vacancy[]> {
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

export async function getAllQuestions(params: QuestionSearchParams): Promise<Question[]> {
  const getParams = new URLSearchParams(params).toString();
  console.log(getParams);
  const response = await fetch(`${process.env.BACKEND_ENDPOINT}/questions?${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const json = await response.json();
  return json;
}

export async function getQuestion(id: number): Promise<Question> {
  const response = await fetch(`${process.env.BACKEND_ENDPOINT}/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const json = await response.json();
  console.log(id, response);
  return json;
}