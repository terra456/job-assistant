/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LinkFooter from "../components/link-footer";
import styles from "./style.module.scss";
import LinkSocial from "../components/link-social";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.wrapper}>
        <ul>
          <li>
            <LinkFooter text={"Программа и тестирование"} href={""} />
          </li>
          <li>
            <LinkFooter text={"Тарифы"} href={""} />
          </li>
          <li>
            <LinkFooter text={"Команда"} href={""} />
          </li>
          <li>
            <LinkFooter text={"О нас"} href={""} />
          </li>
          <li>
            <LinkFooter text={"Блог"} href={""} />
          </li>
        </ul>
        <ul>
          <li>
            <LinkFooter text={"Вакансии"} href={""} />
          </li>
          <li>
            <LinkFooter text={"Запись"} href={""} />
          </li>
          <li>
            <LinkFooter text={"Отзывы"} href={""} />
          </li>
          <li>
            <LinkFooter text={"Вопросы и ответы"} href={""} />
          </li>
        </ul>
        <aside className={styles.aside}>
          На какую зарплату я могу претендовать?
        </aside>
        <div className={styles.contacts}>
          <Link href="/">
            <img src="/codereview-grey.svg" alt="codereview" />
          </Link>
          <a className={styles.phone} href="tel:+74991108276">
            +7 (499) 110-82-76
          </a>
          <a className={styles.mail} href="mailto:yourcodereview@gmail.com">
            yourcodereview@gmail.com
          </a>
        </div>
        <div className={styles.userful_links}>
          <LinkFooter text={"Политика конфиденциальности"} href={""} />
          <LinkFooter text={"Оферта"} href={""} />
        </div>
        <div className={styles.socials}>
          <LinkSocial href={"telegram"} imgClass={"telegram"} />
          <LinkSocial href={"youtube"} imgClass={"youtube"} />
          <LinkSocial href={"linkedin"} imgClass={"linkedin"} />
        </div>
      </nav>
      <div className={styles.info}>
        <p className={styles.data}>
          ИП Примак Максим Андреевич
          <br />
          ИНН 772142877813 ОГРН 322774600410191
        </p>
        <p className={styles.june}>junior for juniors</p>
      </div>
    </footer>
  );
}
