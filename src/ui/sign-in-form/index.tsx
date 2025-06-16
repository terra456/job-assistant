import { signIn } from "@/auth";

export function SignInForm() {
  return (
    <form
      action={async (formData) => {
        "use server";
        console.log(formData);
        await signIn("credentials", formData);
      }}
    >
      <h1>Это мой компонент для входа</h1>
      <label>
        Email
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}
