type Props = {
  name: string;
  label: string;
  defaultValue?: boolean;
};

export default function ChecboxFilter({ name, defaultValue, label }: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="checkbox" name={name} checked={defaultValue} />
    </>
  );
}
