import classNames from "classnames";
import styles from "./style.module.scss";
import Link from "next/link";
import { convertSerchIntoUrl } from "@/lib/utils";
import { auth } from "@/auth";
import LinkBtn from "../link-btn";

export default async function Pagination({
  search,
  countPerPage,
  totalCount,
  currentPage = 1,
  soursePage,
}: {
  search?: {
    [key: string]: string | undefined;
  };
  countPerPage: number;
  totalCount: number;
  currentPage?: number;
  soursePage: string;
}) {
  const session = await auth();
  const length = Math.ceil(totalCount / countPerPage);
  return (
    <div className={styles.pagination}>
      {Array.from({ length }, (_, index) => (
        <Link
          key={"page" + index}
          className={
            currentPage - 1 === index
              ? classNames(styles.page, styles.active)
              : styles.page
          }
          href={`/${soursePage}/page-${index + 1}${search ? `?${convertSerchIntoUrl(search)}` : ""}`}
        >
          {index + 1}
        </Link>
      ))}
      {!session && (
        <div className={styles.hover}>
          <p className={styles.head}>
            Получите доступ к 1200 вакансиям и стажировкам
          </p>
          <p className={styles.desc}>
            Сервис можно использовать бесплатно, без ограничений.Чтобы получить
            полный доступ, вам необходимо зарегистрироваться.{" "}
          </p>
          <LinkBtn text={"Зарегистрироваться"} href={"/auth/login"} />
        </div>
      )}
    </div>
  );
}
