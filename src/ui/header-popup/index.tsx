import styles from "./style.module.scss";
import { cookies } from "next/headers";
import PopupMenu from "../popup-menu";
import NavBar from "../nav-bar/nav-bar";
import MainMenu from "../main-menu/main-menu";

export default async function HeaderPopup() {
  const cookieStore = await cookies();
  const speciality = cookieStore.get("speciality")?.value || "Специализация";
  return (
    <PopupMenu name={speciality}>
      <div className={styles.popup_wrapper}>
        <NavBar speciality={speciality} />
        <MainMenu />
      </div>
    </PopupMenu>
  );
}
