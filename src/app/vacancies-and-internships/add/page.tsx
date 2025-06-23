import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Добавить вакансию.",
  description:
    "На этой странице вы можете добавить информацию о вакансии в нашу базу",
};

export default function Page() {
  return <p>Сдесь будет форма для добавления вакансии</p>;
}
