import styles from "./style.module.scss";
import classNames from "classnames";

export default function BtnMenuImg({ text, imgClass }: {text: string, imgClass: string}) {
  const combinedClassName = classNames(imgClass, styles.link);
  return (
    <button className={combinedClassName}>{text}</button>
  );
}