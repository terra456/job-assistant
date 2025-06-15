"use server";
import menuRoutes from "@/lib/menu-routes";
import LinkMenuImg from "../components/link-menu-img";
import styles from "./style.module.scss";

export default async function MainMenu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {menuRoutes.map((el, i) => (
          <li key={el.imgClass + i}>
            <LinkMenuImg
              text={el.text}
              href={`/${el.href}`}
              imgClass={el.imgClass}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
