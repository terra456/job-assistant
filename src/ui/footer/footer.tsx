import LinkFooter from "../components/link-footer";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <nav className={styles.nav}>
            <ul>
              <li><LinkFooter text={"Программа и тестирование"} href={""} /></li>
              <li><LinkFooter text={"Тарифы"} href={""} /></li>
              <li><LinkFooter text={"Команда"} href={""} /></li>
              <li><LinkFooter text={"О нас"} href={""} /></li>
              <li><LinkFooter text={"Блог"} href={""} /></li>
            </ul>
            <ul>
              <li><LinkFooter text={"Вакансии"} href={""} /></li>
              <li><LinkFooter text={"Запись"} href={""} /></li>
              <li><LinkFooter text={"Отзывы"} href={""} /></li>
              <li><LinkFooter text={"Вопросы и ответы"} href={""} /></li>
            </ul>
            <aside className={styles.aside}>На какую зарплату я могу претендовать?</aside>
          </nav>
          <div className={styles.contacts}>
            <div className={styles.logo}>{`<codereview />`}</div>
            <div className={styles.phone_wrapper}>
              <div className={styles.phone}>+7 (499) 110-82-76</div>
              <div className={styles.mail}>yourcodereview@gmail.com</div>
            </div>
          </div>
        </div>
        <div>
          соцсети и пр
        </div>
      </div>
    </footer>
  );
}