"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-16 bg-black border-b border-gray-800">
      <Link href="/" className="text-xl font-bold text-white">
        Anu.dev
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <Link href="#about" className="hover:text-blue-400 transition">About</Link>
        <Link href="#projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black py-4 px-6 flex flex-col gap-4 border-b border-gray-800">
          <Link href="#about" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#projects" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#contact" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}