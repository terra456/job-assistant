"use client";

import { type ComponentRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import styles from "./style.module.scss";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ComponentRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  function onDismiss() {
    router.back();
  }

  const modalRoot =
    typeof window !== "undefined"
      ? document.getElementById("modal-root")
      : null;
  if (!modalRoot) return null;

  return createPortal(
    <div className={styles.backdrop}>
      <dialog ref={dialogRef} className={styles.modal} onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} />
      </dialog>
    </div>,
    modalRoot
  );
}
