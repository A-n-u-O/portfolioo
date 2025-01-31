import React, { useState } from "react";
import "../navbar.css";
import { motion } from "framer-motion";

const Navbar = ({ logoSrc, menuItems, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${className}`}>
      <div className="container mx-auto flex justify-between items-center p-3 relative">
        {/* Logo */}
        <motion.div
          animate={{ rotate: 360, scale: [0.5, 0.7, 1] }}
          transition={{ duration: 3 }}
          className="flex items-center">
          <img
            src={logoSrc}
            alt="Logo"
            className="w-28 h-12 rounded-full border-2 border-yellow-600 shadow-md"
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}>
          <img
            src={
              isOpen ? "/assets/icons/cancel.svg" : "/assets/icons/nav-icon.svg"
            }
            alt="Menu"
            className="w-8 h-8"
          />
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center text-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}>
          {menuItems?.map((item, index) => (
            <li key={index} className="py-3 mx-3 md:py-0 w-full">
              <a
                href={item.href}
                className="text-gray-800 hover:text-yellow-600 transition-colors block px-6 md:px-4 py-2"
                onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
