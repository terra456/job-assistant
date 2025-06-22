export const BACKEND_ENDPOINT = "http://jobs.yourcodereview.com:8005";

export const vacancyPerPage = {
  mobile: 4,
  desktop: 7,
};

export const stack = new Map([
  ["python", "Python"],
  ["java", "Java"],
  ["javascript", "JavaScript"],
  ["data-science", "Data Science"],
  ["qa", "QA"],
  ["c", "C#"],
]);

export const stackOptions = [
  { value: "python", label: "Python"},
  { value: "java", label: "Java"},
  { value: "javascript", label: "JavaScript"},
  { value: "data-science", label: "Data Science"},
  { value: "qa", label: "QA"},
  { value: "c", label: "C#"},
];

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

export const sourceOptions = [
  { value: "linkedin", label: "LinkedIn"},
  { value: "hhru", label: "Hh.ru"},
  { value: "indeed", label: "Indeed"},
];
