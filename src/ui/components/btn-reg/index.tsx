import classNames from "classnames";
import styles from "./style.module.scss";

export default function BtnReg({
  text,
  imgClass,
}: {
  text: string;
  imgClass: string;
  onclick: () => void;
}) {
  const combinedClassName = classNames(imgClass, styles.text_conteiner);
  return (
    <button className={styles.btn} type="submit">
      <span className={combinedClassName}>{text}</span>
    </button>
  );
}
