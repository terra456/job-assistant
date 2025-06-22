import Link from "next/link";
import { Question } from "@/lib/definitions";

export default function QuestionItem({ question }: { question: Question }) {
  return (
    <li>
      <Link href={`/questions/question/${question.id}`}>
        <h2>{question.answer}</h2>
        <p>
          <span>{question.stack}</span>
          <span>{question.freq} упоминаний</span>
        </p>
      </Link>
    </li>
  );
}
