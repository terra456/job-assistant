import styles from "./style.module.scss";

export default async function Tags({ str }: { str: string[] }) {
  return (
    <p className={styles.tags}>
      {str.map((el, index) => (
        <span key={"tag" + index} className={styles.tag}>
          {el}
        </span>
      ))}
    </p>
  );
}
