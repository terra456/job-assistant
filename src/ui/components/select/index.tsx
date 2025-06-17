// "use server";

import { RefObject } from "react";

type Props = {
  name: string;
  title?: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  ref?: RefObject<HTMLSelectElement | null>;
};

export default function SelectFilter({
  name,
  options,
  defaultValue,
  title,
}: Props) {
  return (
    <select name={name} defaultValue={defaultValue}>
      {title && <option value="">{title}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
