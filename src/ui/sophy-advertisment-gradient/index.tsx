/* eslint-disable @next/next/no-img-element */
import styles from "./style.module.scss";

export default function SophiAdvertismentGradient({ text }: { text: string }) {
  return (
    <a className={styles.card} href={`https://jobs.yourcodereview.com/ai/`}>
      <div className={styles.wrapper}>
        <h2 className={styles.head}>{text}</h2>
        <p className={styles.tag}>Попробовать бесплатно</p>
        <img
          className={styles.sophi_img}
          src={"/sophi_94.png"}
          alt="Sophi"
          width={94}
          height={94}
        />
      </div>
    </a>
  );
}
