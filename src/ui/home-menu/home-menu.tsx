import Link from "next/link";
import HomeCard from "../components/home-card";
import styles from "./style.module.scss";
import menuRoutes from "@/lib/menu-routes";

export default function HomeMenu() {
  return (
    <div className={styles.wrapper}>
      {menuRoutes
        .filter((el) => el.position !== null)
        .sort((a, b) => a.position + b.position)
        .map((el) => (
          <HomeCard
            key={el.position + el.imgClass}
            text={el.text}
            href={`./${el.href}`}
            imgClass={el.imgClass}
            desc={el.desc}
          />
        ))}
      <Link className={styles.resume} href={""}>
        База резюме соискателей. Свяжитесь с понравившемся кандидатами напрямую
      </Link>
      <aside className={styles.aside}>
        <p>Бесплатно</p>
        <h3 className={styles.aside_head}>Разместить вакансию</h3>
      </aside>
    </div>
  );
}
