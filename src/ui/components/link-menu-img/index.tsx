import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";

export default function LinkMenuImg({ text, href, imgClass }: {text: string, href: string, imgClass: string}) {
  const combinedClassName = classNames(imgClass, styles.link);
  return (
    <Link className={combinedClassName} href={href}>{text}</Link>
  );
}