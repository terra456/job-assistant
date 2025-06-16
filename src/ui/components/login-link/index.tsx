import Link from "next/link";
import LinkMenuImg from "../link-menu-img";
import { auth } from "@/auth";

export default async function LoginLink() {
  const session = await auth();

  return (
    <>
      {!session?.user ? (
        <Link href="/auth/login">Войти</Link>
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
