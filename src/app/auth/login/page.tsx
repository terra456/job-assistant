import { SignInForm } from "@/ui/sign-in-form";
import styles from "./styles.module.scss";
import LoginGreeting from "@/ui/components/login-greeting";
export default function Page() {
  return (
    <div className={styles.conteiner}>
      <LoginGreeting />
      <SignInForm />
    </div>
  );
}
