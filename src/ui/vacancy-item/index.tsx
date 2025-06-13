import Link from "next/link";
import styles from "./style.module.scss";
import { Vacancy } from "@/lib/definitions";
import transliterate from "transliterate-cyrillic-text-to-latin-url";

export default function VacancyItem({ vacancie }: { vacancie: Vacancy }) {
  return (
    <Link
      href={`vacancies-and-internships/vacancie/${transliterate(vacancie.title)}/${vacancie.id}`}
    >
      <div>
        <h2>{vacancie.title}</h2>
        <p>{`${transliterate(vacancie.title)}/${vacancie.id}`}</p>
        <p>{vacancie.description}</p>
        <p>{vacancie.company_name}</p>
      </div>
    </Link>
  );
}
