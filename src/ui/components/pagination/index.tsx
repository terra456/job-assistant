import classNames from "classnames";
import styles from "./style.module.scss";
import Link from "next/link";

export default async function Pagination({
  search,
  countPerPage,
  totalCount,
  currentPage = 1,
  soursePage,
}: {
  search: {
    [key: string]: string;
  };
  countPerPage: number;
  totalCount: number;
  currentPage?: number;
  soursePage: string;
}) {
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
          href={`/${soursePage}/page-${index + 1}${search ? `?${new URLSearchParams(search).toString()}` : ""}`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
}
