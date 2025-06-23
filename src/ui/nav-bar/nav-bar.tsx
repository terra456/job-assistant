"use client";
import styles from "./style.module.scss";
import { stack } from "@/lib/constants";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export default function NavBar({ speciality }: { speciality: string }) {
  const router = useRouter();
  const handleClick = (option: string) => {
    document.cookie =
      `speciality=${option}; expires=` +
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString() +
      "; path=/";
    router.refresh();
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {Array.from(stack).map(([elKey, value], i) => (
          <li key={elKey + i}>
            <button
              className={classNames(
                styles.myLink,
                elKey === speciality && styles.active
              )}
              onClick={() => handleClick(elKey)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
