import Link from "next/link";
import styles from "./style.module.scss";

export default function LinkBtnSecond({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link className={styles.link} href={href}>
      {text}
    </Link>
  );
}
