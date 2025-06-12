import Link from "next/link";
import HomeCard from "../components/home-card";
import LinkMenuImg from "../components/link-menu-img";
import styles from "./style.module.scss";

export default function HomeMenu() {
  return (
    <div className={styles.wrapper}>
      <HomeCard
        text={"Вакансии и стажировки"}
        href={"vacancies-and-internships"}
        imgClass={"briefcase"}
        desc={
          "Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ"
        }
      />
      <HomeCard
        text={"Необходимые навыки"}
        href={""}
        imgClass={"stack"}
        desc={
          "Популярные навыки и ключевые слова из вакансий — можно использовать для улучшения резюме"
        }
      />
      <HomeCard
        text={"Тестовые задания"}
        href={""}
        imgClass={"code"}
        desc={
          "Реальные задания с отборов на стажировки и junior-позиции — для практики и портфолио"
        }
      />
      <HomeCard
        text={"Собеседования"}
        href={""}
        imgClass={"microphone"}
        desc={
          "Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности — с пояснениями и примерами ответов"
        }
      />
      <HomeCard
        text={"IT-мероприятия"}
        href={""}
        imgClass={"calendar-week"}
        desc={
          "Конференции, хакатоны, метапы и курсы — чтобы расширить кругозор, найти стажировку и завести связи"
        }
      />
      <HomeCard
        text={"Пет-проекты"}
        href={""}
        imgClass={"code-asterisk"}
        desc={
          "Проекты для портфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт"
        }
      />
      <HomeCard
        text={"Контакты рекрутеров"}
        href={""}
        imgClass={"message"}
        desc={
          "Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование"
        }
      />
      <HomeCard
        text={"ИИ инструменты"}
        href={""}
        imgClass={"sparkles"}
        desc={
          "Подборка AI-тулзов для автоматизации, разработки и поиска работы — с описаниями и рейтингом полезности"
        }
      />
      <Link className={styles.resume} href={""}>
        База резюме соискателей. Свяжитесь с понравившемся кандидатами напрямую
      </Link>
      <aside className={styles.aside}>
        <p>Бесплатно</p>
        <h3 className={styles.aside_head}>Разместить вакансию</h3>
      </aside>
    </div>
  );
}
