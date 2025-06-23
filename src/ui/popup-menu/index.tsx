"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function PopupMenu({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
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
        {name ? name : "Специализация"}
      </button>
      <div className={classNames(styles.popup, isOpen ? styles.show : "")}>
        <div className={styles.popup_fon}>{children}</div>
      </div>
    </>
  );
}
