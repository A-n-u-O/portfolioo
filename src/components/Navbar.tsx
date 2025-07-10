"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-16 bg-black border-b border-gray-800">
      <Link href="/" className="text-xl font-bold text-white">
        Anu.dev
      </Link>
      <div className="hidden md:flex gap-8">
        <Link href="#about" className="hover:text-blue-400 transition">About</Link>
        <Link href="#projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
