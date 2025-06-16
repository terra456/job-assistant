/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./style.module.scss";

export default function LoginGreeting() {
  return (
    <div className={styles.greeting}>
      <h1 className={styles.title}>
        Вы готовы к большему.
        <br />
        Мы поможем начать.
      </h1>
      <img className={styles.image} src="/img.png" alt="Sophy" />
      <Link href="/">
        <img src="/codereview-grey.svg" alt="codereview" />
      </Link>
    </div>
  );
}
