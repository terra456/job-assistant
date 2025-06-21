"use server";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./style.module.scss";
import LoginLink from "../components/login-link";
import HeaderPopup from "../header-popup";

export default async function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <picture>
                <source
                  media="(max-width: 590px)"
                  srcSet="codereview_small.svg"
                />
                <img src="/codereview.svg" alt="codereview" />
              </picture>
            </Link>
          </li>
          <li className={styles.item}>
            <HeaderPopup />
          </li>
          <li className={styles.item}>
            <LoginLink />
          </li>
        </ul>
      </nav>
    </header>
  );
}
