"use client";
import { source, stack } from "@/lib/constants";
import SelectFilter from "../components/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function VacancyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSpeciality = searchParams.get("speciality");
  const currentSource = searchParams.get("source");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <form
      onChange={(e) => {
        const opt = e.target as HTMLInputElement | HTMLSelectElement;
        router.push(pathname + "?" + createQueryString(opt.name, opt.value));
      }}
    >
      <SelectFilter
        name="speciality"
        options={Array.from(stack).map(([value, label]) => ({ value, label }))}
        defaultValue={currentSpeciality || undefined}
      />
      <SelectFilter
        name="source"
        options={Array.from(source).map(([value, label]) => ({ value, label }))}
        defaultValue={currentSource || undefined}
      />
    </form>
  );
}
