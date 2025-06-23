export function dateToString(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function convertSerchIntoUrl(serch: { [key: string]: string | undefined }) {
  return Object.entries(serch).map(([key, value]) => `${key}=${value}`).join('=');
}