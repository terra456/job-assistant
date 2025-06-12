import styles from "./style.module.scss";

export default function Head1({ text }: {text: string}) {
  return (
    <h1 className={styles.head1}>{text}</h1>
  );
}