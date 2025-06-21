/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { sourceOptions, stackOptions } from "@/lib/constants";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import ChecboxFilter from "../components/checkbox";
import style from "./style.module.scss";
import Select from "react-select";
import { customStyles, IndicatorSeparator } from "../select/utils";

export default function VacancyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSpeciality = searchParams.get("speciality") || "";
  const currentSource = searchParams.get("source") || "";
  const currentRemote = searchParams.get("remote") === "true";
  const currentInternship = searchParams.get("internship") === "true";

  const createQueryString = useCallback(
    (name: string, value: string | boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());
      return params.toString();
    },
    [searchParams]
  );

  const removeFromQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <form
      name="filterForm"
      className={style.filters}
      onChange={(e) => {
        if (e.target instanceof HTMLInputElement) {
          const opt = e.target as HTMLInputElement;
          const newPathname = pathname.replace(/page-\d+/g, "");
          if (opt.checked === false) {
            router.push(newPathname + "?" + removeFromQueryString(opt.name));
          } else {
            router.push(
              newPathname + "?" + createQueryString(opt.name, opt.checked)
            );
          }
        }
      }}
    >
      <Select
        instanceId="spec"
        styles={customStyles}
        defaultInputValue={currentSpeciality}
        options={stackOptions}
        components={{ IndicatorSeparator }}
        onChange={(option) => {
          if (option) {
            const newPathname = pathname.replace(/page-\d+/g, "");
            router.push(
              newPathname + "?" + createQueryString("speciality", option.value)
            );
          }
        }}
      />
      <Select
        instanceId="sourse"
        styles={customStyles}
        defaultInputValue={currentSource}
        options={sourceOptions}
        components={{ IndicatorSeparator }}
        onChange={(option) => {
          if (option) {
            const newPathname = pathname.replace(/page-\d+/g, "");
            router.push(
              newPathname + "?" + createQueryString("source", option.value)
            );
          }
        }}
      />
      <Select
        instanceId="city"
        styles={customStyles}
        components={{ IndicatorSeparator }}
        options={[{ value: "string", label: "string" }]}
        onChange={(option) => {
          if (option) {
            router.push(
              pathname + "?" + createQueryString("city", option.value)
            );
          }
        }}
      />

      <ChecboxFilter
        name="remote"
        label="Удаленно"
        defaultValue={currentRemote}
      />
      <ChecboxFilter
        name="internship"
        label="Стажировка"
        defaultValue={currentInternship}
      />
    </form>
  );
}
