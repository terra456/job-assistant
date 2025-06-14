"use server";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NavBar from "../nav-bar/nav-bar";
import MainMenu from "../main-menu/main-menu";
import styles from "./style.module.scss";
import LinkMenuImg from "../components/link-menu-img";
import PopupMenu from "../popup-menu";

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
            <PopupMenu>
              <NavBar />
              <MainMenu />
            </PopupMenu>
          </li>
          <li>
            <LinkMenuImg text="Войти" imgClass={"profile"} href={"login"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
