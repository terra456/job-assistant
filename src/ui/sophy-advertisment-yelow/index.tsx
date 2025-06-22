/* eslint-disable @next/next/no-img-element */
import styles from "./style.module.scss";

export default function SophiAdvertismentYelow({ text }: { text: string }) {
  return (
    <a className={styles.card} href={`https://jobs.yourcodereview.com/ai/`}>
      <div className={styles.wrapper}>
        <img
          className={styles.sophi_img}
          src={"/sophi-adv-white-transp.png"}
          alt="Sophi"
          width={60}
          height={60}
        />
        <h2 className={styles.head}>{text}</h2>
        <p className={styles.tag}>Попробовать бесплатно</p>
      </div>
    </a>
  );
}
