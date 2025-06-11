/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import NavBar from "@/ui/nav-bar/nav-bar";

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.promo}>
          <img
            src="/sophi.png"
            alt="Sophi photo"
          />
          <h1>Твой Ассистент по поиску работы</h1>
          <h2>Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу</h2>
        </div>
        
        <NavBar />

        <div>
          cards
        </div>
      </main>
  );
}
