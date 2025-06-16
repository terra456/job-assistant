import styles from "./style.module.scss";
// import classNames from "classnames";

type Props = {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  error?: string;
};

export default function LoginInput({
  name,
  type,
  placeholder,
  label,
  error,
}: Props) {
  return (
    <>
      <label className={styles.label}>
        <span className={styles.name}>{label}</span>
        <input
          className={styles.input}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        <span className={styles.error}>{error}</span>
      </label>
    </>
  );
}
