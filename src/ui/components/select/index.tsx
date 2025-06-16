// "use server";

type Props = {
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
};

export default function SelectFilter({ name, options, defaultValue }: Props) {
  return (
    <select name={name} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
