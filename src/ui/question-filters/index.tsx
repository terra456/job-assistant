/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  positionOptions,
  specialityOptions,
  stackOptions,
} from "@/lib/constants";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import Select from "react-select";
import { customStyles, IndicatorSeparator } from "../select/utils";
import styles from "./style.module.scss";

export default function QuestionFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSpeciality = searchParams.get("speciality") || "";
  const currentStack = searchParams.get("stack") || "";
  const currentPosition = searchParams.get("position") || "";

  const createQueryString = useCallback(
    (name: string, value: string | boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());
      return params.toString();
    },
    [searchParams]
  );

  return (
    <form className={styles.filters}>
      <Select
        instanceId="speciality"
        styles={customStyles}
        defaultInputValue={currentSpeciality}
        options={specialityOptions}
        components={{ IndicatorSeparator }}
        onChange={(option: any) => {
          if (option?.value) {
            const newPathname = pathname.replace(/page-\d+/g, "");
            router.push(
              newPathname + "?" + createQueryString("speciality", option.value)
            );
          }
        }}
      />
      <Select
        instanceId="spec"
        styles={customStyles}
        defaultInputValue={currentStack}
        options={stackOptions}
        components={{ IndicatorSeparator }}
        onChange={(option: any) => {
          if (option?.value) {
            const newPathname = pathname.replace(/page-\d+/g, "");
            router.push(
              newPathname + "?" + createQueryString("stack", option.value)
            );
          }
        }}
      />
      <Select
        instanceId="spec"
        styles={customStyles}
        defaultInputValue={currentPosition}
        options={positionOptions}
        components={{ IndicatorSeparator }}
        onChange={(option: any) => {
          if (option?.value) {
            const newPathname = pathname.replace(/page-\d+/g, "");
            router.push(
              newPathname + "?" + createQueryString("position", option.value)
            );
          }
        }}
      />
    </form>
  );
}
