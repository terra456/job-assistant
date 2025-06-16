"use client";

import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import LinkSpec from "../components/link-spec";
import { stack } from "@/lib/constants";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.list}>
        {Array.from(stack).map((el, i) => (
          <LinkSpec
            key={el[0] + i}
            isAactive={pathname.includes(el[0])}
            href={`/${el[0]}`}
            text={el[1]}
          />
        ))}
      </ul>
    </nav>
  );
}
