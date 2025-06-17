export const BACKEND_ENDPOINT = "http://jobs.yourcodereview.com:8005";

export const vacancyPerPage = 8;

export const stack = new Map([
  ["python", "Python"],
  ["java", "Java"],
  ["javascript", "JavaScript"],
  ["data-science", "Data Science"],
  ["qa", "QA"],
  ["c", "C#"],
]);

//backend havn't speciality like frontend(QA C#)
export const backendSpeciality = new Map([
  ["python", "Python"],
  ["java", "Java"],
  ["javascript", "JS"],
  ["data-science", "DataScience"],
  ["qa", "ML"],
  ["c", "Go"],
]);

export const source = new Map([
  ["linkedin", "LinkedIn"],
  ["hhru", "Hh.ru"],
  ["indeed", "Indeed"],
]);
