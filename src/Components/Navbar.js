import React from "react";
import '../navbar.css';
import { motion } from "framer-motion";

const Navbar = ({ logoSrc, title, menuItems }) => {
  return (
    <nav className="shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Dynamic Logo */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ rotate:360, scale: [1,1.5,1]}}
          transition={{ duration: 2 }}
          className="flex items-center"
        >
          <img
            src={logoSrc}
            alt="Logo"
            className=" w-36 h-16 rounded-full border-2 border-yellow-600 shadow-md"
          />
          {/* <h1 className="text-2xl font-bold ml-3 text-gray-800">{title}</h1> */}
        </motion.div>

        {/* Dynamic Menu Items */}
        <ul className="flex space-x-9">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-yellow-600 text-gray-800"
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
