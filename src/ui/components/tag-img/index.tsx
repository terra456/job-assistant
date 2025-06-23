import styles from "./style.module.scss";
import classNames from "classnames";

export default function TagImg({
  text,
  type,
}: {
  text?: string;
  type: string;
}) {
  const validTypes = new Map([
    ["remote", "удаленно"],
    ["office", "в офис"],
    ["intern", "стажировка"],
    ["salary", "не указана"],
  ]);
  const combinedClassName = classNames(styles[type], styles.tag);
  return (
    <span className={combinedClassName}>
      {text ? text : validTypes.get(type)}
    </span>
  );
}
