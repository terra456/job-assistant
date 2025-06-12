/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NavBar from "../nav-bar/nav-bar";
import MainMenu from "../main-menu/main-menu";
import styles from "./style.module.scss";
import BtnMenuImg from "../components/btn-menu-img";
import LinkMenuImg from "../components/link-menu-img";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <img src="/codereview.svg" alt="codereview" />
            </Link>
          </li>
          <li>
            <BtnMenuImg text="Специализация" imgClass={"menu"} />
          </li>
          <li>
            <LinkMenuImg text="Войти" imgClass={"profile"} href={"login"} />
          </li>
        </ul>
      </nav>
      <div className={styles.popup}>
        <NavBar />
        <MainMenu />
      </div>
    </header>
  );
}
