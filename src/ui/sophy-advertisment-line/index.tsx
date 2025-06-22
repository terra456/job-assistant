/* eslint-disable @next/next/no-img-element */
import styles from "./style.module.scss";

export default function SophiAdvertismentLine({ text }: { text: string }) {
  return (
    <a className={styles.card} href={`https://jobs.yourcodereview.com/ai/`}>
      <div className={styles.wrapper}>
        <img
          className={styles.sophi_img}
          src={"/sophi_49.png"}
          alt="Sophi"
          width={49}
          height={49}
        />
        <div>
          <h2 className={styles.head}>{text}</h2>
          <p className={styles.tag}>Попробовать бесплатно</p>
        </div>
      </div>
    </a>
  );
}
