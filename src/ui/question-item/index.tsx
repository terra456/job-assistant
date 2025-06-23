import Link from "next/link";
import { Question } from "@/lib/definitions";
import styles from "./style.module.scss";
import { convertSerchIntoUrl } from "@/lib/utils";

export default function QuestionItem({
  question,
  page,
  questionNumber,
  queryString,
  isNext,
}: {
  question: Question;
  page: number;
  questionNumber: number;
  queryString: {
    [key: string]: string | undefined;
  };
  isNext?: boolean;
}) {
  return (
    <Link
      href={`/questions/page-${page}/question/${questionNumber}?${convertSerchIntoUrl(queryString)}`}
      className={styles.item}
    >
      {isNext && <p className={styles.next}>Следующий вопрос</p>}
      <h2 className={styles.item_head}>
        {question.answer ? question.answer : question.question}
      </h2>
      <p className={styles.item_info}>
        <span className={styles.item_span}>{question.stack}</span>
        <span className={styles.item_span}>{question.freq} упоминаний</span>
      </p>
    </Link>
  );
}
