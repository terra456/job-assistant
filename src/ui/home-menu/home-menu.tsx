/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import HomeCard from "../components/home-card";
import styles from "./style.module.scss";
import menuRoutes from "@/lib/menu-routes";

export default function HomeMenu() {
  return (
    <div className={styles.wrapper}>
      {menuRoutes
        .filter((_el, i) => i !== menuRoutes.length - 1)
        .map((el) => (
          <HomeCard
            key={el.position + el.imgClass}
            text={el.text}
            href={`./${el.href}`}
            imgClass={el.imgClass}
            desc={el.desc}
          />
        ))}
      <Link className={styles.resume} href={menuRoutes[8].href}>
        <img
          className={styles.resume_foto}
          src={"/photo-cont.png"}
          alt="resume foto"
        />
        <h2 className={styles.resume_head}>{menuRoutes[8].desc}</h2>
      </Link>
      <aside className={styles.aside}>
        <p className={styles.aside_tag}>Бесплатно</p>
        <h3 className={styles.aside_head}>Разместить вакансию</h3>
      </aside>
    </div>
  );
}
