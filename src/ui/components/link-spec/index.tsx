import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";

export default function LinkSpec({ text, href, isAactive }: {text: string, href: string, isAactive: boolean}) {
  let cn = classNames(styles.li);
  if (isAactive) {
    cn += ' ' + styles.active;
  };
  return (
    <li className={cn}>
      <Link className={styles.link} href={href}>{text}</Link>
    </li>
  );
}