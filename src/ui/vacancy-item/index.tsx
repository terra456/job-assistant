import Link from "next/link";
import styles from "./style.module.scss";
import { Vacancy } from "@/lib/definitions";
import transliterate from "transliterate-cyrillic-text-to-latin-url";
import TagImg from "../components/tag-img";
import { dateToString } from "@/lib/utils";
import CompanyInfo from "../company-info";

export default function VacancyItem({ vacancie }: { vacancie: Vacancy }) {
  return (
    <Link
      className={styles.card}
      href={`/vacancies-and-internships/vacancie/${transliterate(vacancie.title)}/${vacancie.id}`}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.head}>{vacancie.title}</h2>
          <div className={styles.info}>
            {vacancie.remote ? (
              <TagImg type="remote" />
            ) : (
              <TagImg type="office" />
            )}
            {vacancie.internship && <TagImg type="intern" />}
            {vacancie.salary ? (
              <TagImg type="salary" text={`${vacancie.salary} P`} />
            ) : (
              <TagImg type="salary" />
            )}
          </div>
        </div>
        <CompanyInfo
          image={vacancie.image}
          company_name={vacancie.company_name}
          location={vacancie.location}
        />
        <span className={styles.date}>
          {dateToString(vacancie.date_publication)}
        </span>
      </div>
    </Link>
  );
}
