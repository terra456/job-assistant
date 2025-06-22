import { getAllVacancies, getVacancie } from "@/lib/api";
import style from "./page.module.scss";
import TagImg from "@/ui/components/tag-img";
import CompanyInfo from "@/ui/company-info";
import { dateToString } from "@/lib/date-converce";
import LinkBtnSecond from "@/ui/components/link-btn-second";
import SophiAdvertismentYelow from "@/ui/sophy-advertisment-yelow";
import Tags from "@/ui/components/tags";
import Link from "next/link";
import transliterate from "transliterate-cyrillic-text-to-latin-url";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vacancie = await getVacancie(Number(id));
  const sameVacancies = await getAllVacancies({
    search: vacancie.title,
    limit: 2,
  });

  return (
    <div className={style.wrapper}>
      <div className={style.vacancie}>
        <div className={style.about}>
          <p className={style.date}>
            Опубликовано {dateToString(vacancie.date_publication)}
          </p>
          <h1 className={style.head}>{vacancie.title}</h1>
          <div className={style.info}>
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
        <div className={style.vacancie_data}>{vacancie.description}</div>
      </div>
      <div className={style.right_block}>
        <div className={style.company}>
          <CompanyInfo
            image={vacancie.image}
            company_name={vacancie.company_name}
            location={vacancie.location}
          />
          <LinkBtnSecond
            text={"Получить оффер"}
            href={"https://jobs.yourcodereview.com/ai/"}
          />
          <LinkBtnSecond text={"Откликнуться"} href={vacancie.url} />
        </div>
        <SophiAdvertismentYelow
          text={
            "Не зовут на интервью? Автоматизируй поиск работы своему AI ассистенту Софи"
          }
        />
        <div className={style.same}>
          <h2 className={style.same_head}>Похожие вакансии</h2>
          {sameVacancies.items.slice(3, 5).map((el) => (
            <Link
              key={"same" + el.id}
              className={style.same_item}
              href={`/vacancies-and-internships/vacancie/${transliterate(el.title)}/${el.id}`}
            >
              <h3 className={style.same_subhead}>{el.title}</h3>
              <p className={style.same_company}>{el.company_name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={style.tags}>
        <Tags
          str={[
            "вакансии джуниор",
            "как откликнуться на вакансию",
            "примеры вакансий junior",
            "Вакансии Java",
            "стажировки по Java",
          ]}
        />
      </div>
    </div>
  );
}
