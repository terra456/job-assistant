"use client";
import { source, stack } from "@/lib/constants";
import SelectFilter from "../components/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import ChecboxFilter from "../components/checkbox";

export default function VacancyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSpeciality = searchParams.get("speciality");
  const currentSource = searchParams.get("source");

  const createQueryString = useCallback(
    (name: string, value: string | boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());
      return params.toString();
    },
    [searchParams]
  );

  return (
    <form
      onChange={(e) => {
        const opt = e.target as HTMLInputElement | HTMLSelectElement;
        if (e.target instanceof HTMLInputElement && opt.type === "checkbox") {
          router.push(
            pathname + "?" + createQueryString(opt.name, opt.checked)
          );
        } else {
          router.push(pathname + "?" + createQueryString(opt.name, opt.value));
        }
      }}
    >
      <SelectFilter
        name="speciality"
        options={Array.from(stack).map(([value, label]) => ({ value, label }))}
        defaultValue={currentSpeciality || undefined}
        title="специализация"
      />
      <SelectFilter
        name="source"
        title="источник"
        options={Array.from(source).map(([value, label]) => ({ value, label }))}
        defaultValue={currentSource || undefined}
      />
      <SelectFilter
        name="location"
        title="город"
        options={[{ value: "string", label: "string" }]}
      />
      <ChecboxFilter name="remote" label="Удаленно" defaultValue={false} />
      <ChecboxFilter
        name="internship"
        label="Стажировка"
        defaultValue={false}
      />
    </form>
  );
}
