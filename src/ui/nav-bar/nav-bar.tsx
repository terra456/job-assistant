"use client";

import { usePathname, useSearchParams } from "next/navigation";
import styles from "./style.module.scss";
import LinkSpec from "../components/link-spec";
import { stack } from "@/lib/constants";
import { useCallback } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSpeciality = searchParams.get("speciality");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <nav>
      <ul className={styles.list}>
        {Array.from(stack).map((el, i) => (
          <LinkSpec
            key={el[0] + i}
            isAactive={currentSpeciality === el[0]}
            href={`./${pathname + "?" + createQueryString("speciality", el[0])}`}
            text={el[1]}
          />
        ))}
      </ul>
    </nav>
  );
}
