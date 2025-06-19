import LinkMenuImg from "../link-menu-img";
import { auth } from "@/auth";
import styles from "./style.module.scss";

export default async function LoginLink() {
  const session = await auth();

  return (
    <>
      {!session?.user ? (
        <LinkMenuImg text="Войти" imgClass={"profile"} href={"/auth/login"} />
      ) : (
        <LinkMenuImg
          text="Выйти"
          imgClass={"profile"}
          href={"/api/auth/signout"}
        />
      )}
    </>
  );
}
