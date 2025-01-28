import React from "react";
import '../navbar.css';
import { motion } from "framer-motion";

const Navbar = ({ logoSrc, menuItems, className }) => {
  return (
    <nav className={`navbar bg-white shadow-md ${className}`}>
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Dynamic Logo */}
        <motion.div
          animate={{ rotate: 360, scale: [0.5, 0.7, 1] }}
          transition={{ duration: 2 }}
          className="flex items-center"
        >
          <img
            src={logoSrc}
            alt="Logo"
            className="w-28 h-12 rounded-full border-2 border-yellow-600 shadow-md"
          />
        </motion.div>

        {/* Dynamic Menu Items */}
        <ul className="flex space-x-6">
          {menuItems?.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-gray-800 hover:text-yellow-600 transition-colors"
              >
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
