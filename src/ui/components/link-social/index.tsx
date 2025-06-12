import styles from "./style.module.scss";
import classNames from "classnames";

export default function LinkSocial({
  href,
  imgClass,
}: {
  href: string;
  imgClass: string;
}) {
  const combinedClassName = classNames(imgClass, styles.link);
  return (
    <a
      className={combinedClassName}
      href={href}
      target="_blank"
      rel="noreferrer"
    ></a>
  );
}
