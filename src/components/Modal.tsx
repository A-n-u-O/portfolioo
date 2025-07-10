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
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6">
      <div className="bg-[#0d0d0d] p-6 rounded-xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
