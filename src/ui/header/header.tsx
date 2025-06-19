"use server";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NavBar from "../nav-bar/nav-bar";
import MainMenu from "../main-menu/main-menu";
import styles from "./style.module.scss";
import PopupMenu from "../popup-menu";
import LoginLink from "../components/login-link";
import { Suspense } from "react";

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
            <Suspense>
              <PopupMenu>
                <NavBar />
                <MainMenu />
              </PopupMenu>
            </Suspense>
          </li>
          <li className={styles.item}>
            <LoginLink />
          </li>
        </ul>
      </nav>
    </header>
  );
}
