import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";

type Props = {
  text: string;
  href: string;
  imgClass: string;
  desc: string;
};

export default function HomeCard({ text, href, imgClass, desc }: Props) {
  const combinedClassName = classNames(styles.desc, imgClass);
  return (
    <Link className={styles.link} href={href}>
      <p className={combinedClassName}>{desc}</p>
      <h3 className={styles.head}>{text}</h3>
    </Link>
  );
}
