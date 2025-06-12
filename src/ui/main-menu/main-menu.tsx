import LinkMenuImg from "../components/link-menu-img";
import styles from "./style.module.scss";

export default function MainMenu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li>
          <LinkMenuImg
            text={"Вакансии и стажировки"}
            href={"vacancies-and-internships"}
            imgClass={"briefcase"}
          />
        </li>
        <li>
          <LinkMenuImg text={"Тестовые задания"} href={""} imgClass={"code"} />
        </li>
        <li>
          <LinkMenuImg
            text={"IT-мероприятия"}
            href={""}
            imgClass={"calendar-week"}
          />
        </li>
        <li>
          <LinkMenuImg
            text={"Контакты рекрутеров"}
            href={""}
            imgClass={"message"}
          />
        </li>
        <li>
          <LinkMenuImg
            text={"Резюме соискателей"}
            href={""}
            imgClass={"frame"}
          />
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <LinkMenuImg
            text={"Необходимые навыки"}
            href={""}
            imgClass={"stack"}
          />
        </li>
        <li>
          <LinkMenuImg
            text={"Собеседования"}
            href={""}
            imgClass={"microphone"}
          />
        </li>
        <li>
          <LinkMenuImg
            text={"Пет-проекты"}
            href={""}
            imgClass={"code-asterisk"}
          />
        </li>
        <li>
          <LinkMenuImg
            text={"ИИ инструменты"}
            href={""}
            imgClass={"sparkles"}
          />
        </li>
      </ul>
    </nav>
  );
}
