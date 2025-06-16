import { signIn } from "@/auth";
import LoginInput from "../components/login-input";
import BtnGradient from "../components/btn-gradient";
import styles from "./style.module.scss";
import BtnReg from "../components/btn-reg";

export function SignInForm() {
  return (
    <div className={styles.container}>
      <BtnReg
        text="Войти через Telegram"
        imgClass="tg-img"
        onclick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <BtnReg
        text="Войти через HH.ru"
        imgClass="hh-img"
        onclick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <form
        className={styles.form}
        action={async (formData) => {
          "use server";
          console.log(formData);
          await signIn("credentials", formData);
        }}
      >
        <LoginInput
          name="username"
          type="text"
          placeholder="example@mail.ru"
          label="Почта"
        />
        <LoginInput
          name="password"
          type="password"
          placeholder="****"
          label="Пароль"
        />
        <p className={styles.desc}>Забыли пароль?</p>
        <BtnGradient>Войти</BtnGradient>
      </form>
      <p className={styles.desc}>Ещё нет аккаунта? Регистрация</p>
    </div>
  );
}
