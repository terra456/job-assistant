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
          <li>
            <Link href="/">
              <img src="/codereview.svg" alt="codereview" />
            </Link>
          </li>
          <li className={styles.for_popup}>
            <Suspense>
              <PopupMenu>
                <NavBar />
                <MainMenu />
              </PopupMenu>
            </Suspense>
          </li>
          <li>
            <LoginLink />
          </li>
        </ul>
      </nav>
    </header>
  );
}
