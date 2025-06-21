import style from "./style.module.scss";

type Props = {
  name: string;
  label: string;
  defaultValue?: boolean;
};

export default function ChecboxFilter({ name, defaultValue, label }: Props) {
  return (
    <>
      <label className={style.label}>
        {label}
        <input
          className={style.checkbox}
          id={name}
          type="checkbox"
          name={name}
          defaultChecked={defaultValue}
        />
        <span className={style.switch}></span>
      </label>
    </>
  );
}
