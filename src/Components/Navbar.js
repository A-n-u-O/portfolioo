import React from "react";
import '../navbar.css';

const Navbar = () => {
  return (
    <nav className="shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-yellow-600">About</a>
          </li>
          <li>
            <a href="#skills" className=" hover:text-yellow-600">Skills</a>
          </li>
          <li>
            <a href="#projects" className=" hover:text-yellow-600">Projects</a>
          </li>
          <li>
            <a href="#contact" className=" hover:text-yellow-600">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
