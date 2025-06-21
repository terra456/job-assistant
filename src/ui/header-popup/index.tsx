import styles from "./style.module.scss";
// import { useSearchParams } from "next/navigation";
// import { stack } from "@/lib/constants";
import { cookies } from "next/headers";
import PopupMenu from "../popup-menu";
import NavBar from "../nav-bar/nav-bar";
import MainMenu from "../main-menu/main-menu";

export default async function HeaderPopup() {
  const cookieStore = await cookies();
  const spec = cookieStore.get("speciality")?.value || "Специализация";
  return (
    <PopupMenu name={spec}>
      <div className={styles.popup_wrapper}>
        <NavBar />
        <MainMenu />
      </div>
    </PopupMenu>
  );
}
