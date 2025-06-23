import { BACKEND_ENDPOINT, backendSpeciality } from "./constants";
import { AllResponse, LoginForm, Question, QuestionSearchParams, User, Vacancy, VacancySearchParams } from "./definitions";
import { cache } from 'react';

export const getAllVacancies = cache(async(params: VacancySearchParams): Promise<AllResponse<Vacancy>> => {
  if (params.speciality && params.speciality !== '') {
    params.speciality = backendSpeciality.get(params.speciality);
  }

  const getParams = new URLSearchParams(Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))).toString()

  const response = await fetch(`${BACKEND_ENDPOINT}/vacancies?${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
});

export const getVacancie = cache(async(id: number): Promise<Vacancy> => {
  console.log('get vacancie');
  const response = await fetch(`${BACKEND_ENDPOINT}/vacancies/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const json = await response.json();
  return json;
})

export const  getAllQuestions = cache(async(params: QuestionSearchParams): Promise<AllResponse<Question>> => {
  const getParams = new URLSearchParams(Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))).toString();
  console.log(getParams);
  const response = await fetch(`${BACKEND_ENDPOINT}/questions?${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const json = await response.json();
  console.log(json);
  return json;
});

export const getQuestion = cache(async(id: number): Promise<Question> => {
  const response = await fetch(`${BACKEND_ENDPOINT}/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const json = await response.json();
  console.log(id, response);
  return json;
});

export async function loginUserGetToken(data: LoginForm): Promise<User | null> {
  const response = await fetch(`${BACKEND_ENDPOINT}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)]))),
  });
  const json = await response.json();
  console.log(json);
  if (json.access_token) {
    return {...data, apiToken: json.access_token};
  }
  return null;
}

export async function getUserByToken(token: string): Promise<User> {
  const response = await fetch(`${BACKEND_ENDPOINT}/auth/users/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  });
  const json = await response.json();
  console.log(json);
  return json;
}