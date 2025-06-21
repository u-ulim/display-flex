// src/app/components/ui/Dialog.tsx
import { ReactNode, useEffect } from "react";

import { IModalProps } from "./modal.type";

export const Modal = ({ open, onOpenChange, children }: IModalProps) => {
  // ESC 키로 닫기
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 cursor-pointer"
      onClick={() => onOpenChange(false)}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-full  w-full cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

// ModalContent
Modal.Content = function ModalContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

// ModalHeader
Modal.Header = function ModalHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

// ModalTitle
Modal.Title = function ModalTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
};
