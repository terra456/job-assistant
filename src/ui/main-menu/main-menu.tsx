import LinkMenuImg from '../components/link-menu-img';
import styles from "./style.module.scss";

export default function MainMenu() {
  return (
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li>
            <LinkMenuImg text={'Вакансии и стажировки'} href={'vacancies-and-internships'} imgClass={''} />
          </li>
          <li>
          <LinkMenuImg text={'Тестовые задания<'} href={''} imgClass={''} />
          </li>
          <li>
          <LinkMenuImg text={'IT-мероприятия'} href={''} imgClass={''} />
          </li>
          <li>
            <LinkMenuImg text={'Контакты рекрутеров'} href={''} imgClass={''} />
          </li>
          <li>
            <LinkMenuImg text={'Резюме соискателей'} href={''} imgClass={''} />
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <LinkMenuImg text={'Необходимые навыки'} href={''} imgClass={''} />
          </li>
          <li>
            <LinkMenuImg text={'Собеседования'} href={''} imgClass={''} />
          </li>
          <li>
            <LinkMenuImg text={'Пет-проекты'} href={''} imgClass={''} />
          </li>
          <li>
            <LinkMenuImg text={'ИИ инструменты'} href={''} imgClass={''} />
          </li>
        </ul>
      </nav>
  );
}