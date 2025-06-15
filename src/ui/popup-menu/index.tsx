"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function PopupMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const spec = pathname.split("/").find((el) => el);
  console.log(pathname);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
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
      <button onClick={toggleDropdown} className={styles.btn}>
        {spec ? spec : "Специализация"}
      </button>
      <div className={classNames(styles.popup, isOpen ? styles.show : "")}>
        <div className={styles.popup_fon}>{children}</div>
      </div>
    </>
  );
}
