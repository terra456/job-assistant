import Link from "next/link";
import { Question } from "@/lib/definitions";

export default function QuestionItem({ question }: { question: Question }) {
  return (
    <li>
      <Link href={`/questions/question/${question.id}`}>
        <h2>{question.question}</h2>
        <p>{question.tags}</p>
      </Link>
    </li>
  );
}
