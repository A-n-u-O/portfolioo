"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 md:p-6">
      <div className="relative w-full max-w-4xl bg-[#0d0d0d] p-6 md:p-8 rounded-2xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
