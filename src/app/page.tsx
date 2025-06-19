/* eslint-disable @next/next/no-img-element */
import HomeMenu from "@/ui/home-menu/home-menu";
import styles from "./page.module.scss";
import NavBar from "@/ui/nav-bar/nav-bar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.promo}>
        <img src="/sophi-main.png" alt="Sophi photo" width={97} height={99} />
        <h1 className={styles.head1}>Твой Ассистент по&nbsp;поиску работы</h1>
        <h2 className={styles.head2}>
          Я собрала для тебя все в одном месте, чтобы ты смог быстро найти
          работу
        </h2>
      </div>
      <Suspense>
        <NavBar />
      </Suspense>

      <div className={styles.cards_wrapper}>
        <HomeMenu />
      </div>
    </div>
  );
}
