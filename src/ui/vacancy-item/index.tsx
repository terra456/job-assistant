/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./style.module.scss";
import { Vacancy } from "@/lib/definitions";
import transliterate from "transliterate-cyrillic-text-to-latin-url";

export default function VacancyItem({ vacancie }: { vacancie: Vacancy }) {
  return (
    <Link
      className={styles.card}
      href={`./vacancies-and-internships/vacancie/${transliterate(vacancie.title)}/${vacancie.id}`}
    >
      <div>
        <h2 className={styles.head}>{vacancie.title}</h2>
        <div className={styles.info}>
          <span>{vacancie.remote}</span>
          <span>{vacancie.internship}</span>
          <span>{vacancie.salary}</span>
        </div>
        <img
          src={vacancie.image}
          alt={vacancie.company_name}
          width={42}
          height={42}
        />
        <p className={styles.name}>{vacancie.company_name}</p>
        <p className={styles.locate}>{vacancie.location}</p>
        <span className={styles.date}>
          {new Date(vacancie.date_publication).toDateString()}
        </span>
      </div>
    </Link>
  );
}
