"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import classNames from "classnames";
import { stack } from "@/lib/constants";

export default function PopupMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const currentSpeciality = searchParams.get("speciality");
  const spec = stack.get(currentSpeciality || "") || "Специализация";
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClick() {
      setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleDropdown}
        className={classNames(styles.btn, isOpen ? styles.down : styles.up)}
      >
        {spec}
      </button>
      <div className={classNames(styles.popup, isOpen ? styles.show : "")}>
        <div className={styles.popup_fon}>{children}</div>
      </div>
    </>
  );
}
