import styles from "./style.module.scss";

export default function BtnGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className={styles.btn} type="submit">
      {children}
    </button>
  );
}
