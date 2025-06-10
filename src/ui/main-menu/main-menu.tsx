import Link from 'next/link';

export default function MainMenu() {
  return (
      <nav>
        <ul>
          <li>
            <Link href="/python">Вакансии / Cтажировки</Link>
          </li>
          <li>
            <Link href="/java">Тестовые задания</Link>
          </li>
          <li>
            <Link href="/javascript">IT-мероприятия</Link>
          </li>
          <li>
            <Link href="/data-science">Контакты рекрутеров</Link>
          </li>
          <li>
            <Link href="/qa">Резюме соискателей</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/c">Необходимые навыки</Link>
          </li>
          <li>
            <Link href="/c">Собеседования</Link>
          </li>
          <li>
            <Link href="/c">Пет-проекты</Link>
          </li>
          <li>
            <Link href="/c">ИИ инструменты</Link>
          </li>
        </ul>
      </nav>
  );
}