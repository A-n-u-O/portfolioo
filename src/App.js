import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    // Social App Project
    {
      title: "Social App Project",
      description:
        "Crafted UI for a cooking platform with smooth user experience...",
      image: "/assets/images/social.png",
      alt: "Social app",
      link: "https://social-media-blue-theta.vercel.app/",
    },
    // Human Resources Management System Project
    {
      title: "Human Resources Management System Project",
      description: "Designed UI for Nike's web store with modern minimalism...",
      image: "/assets/images/hr.png",
      alt: "HR management system",
      link: "https://hrms-wine.vercel.app/",
    },
    // Shipping App Project
    {
      title: "Shipping App Project",
      description: "Built an intuitive interface for streaming...",
      image: "/assets/images/shipping.png",
      alt: "Shipping app",
      link: "https://hrms-wine.vercel.app/",
    },
    // Attendance Logging App Project
    {
      title: "Attendance Logging App Project",
      description: "Designed UI for Nike's web store with modern minimalism...",
      image: "/assets/images/attendance.png",
      alt: "Attendance app",
      link: "https://attendance-logging-app.vercel.app/",
    },
    // Frontend Mentor - E-commerce product page Project
    {
      title: "Frontend Mentor - E-commerce product page Project",
      description: "Designed UI for Nike's web store with modern minimalism...",
      image: "/assets/images/product.png",
      alt: "E-commerce product page",
      link: "https://e-commerce-page-two-tau.vercel.app/",
    },
    // First Portfolio Project
    {
      title: "First Portfolio Project",
      description: "Designed UI for Nike's web store with modern minimalism...",
      image: "/assets/images/old portfolio.png",
      alt: "Portfolio Project",
      link: "https://a-n-u-o-github-io.vercel.app/",
    },
  ];

  const socialIcons = [
    {
      src: "/assets/icons/icons8-github.svg",
      alt: "github icon",
      link: "https://github.com/A-n-u-O",
    },
    {
      src: "/assets/icons/icons8-x.svg",
      alt: "x icon",
      link: "https://www.linkedin.com/in/anuoluwapo-victor-23ab97253",
    },
    {
      src: "/assets/icons/gmail-svgrepo-com.svg",
      alt: "mail icon",
      link: "mailto:anuoluwa2051@gmail.com",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar
        logoSrc="/assets/images/logo.png"
        title="My Portfolio"
        menuItems={menuItems}
      />

      {/* Hero Section */}
      <section className="hero py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white">ANUOLUWAPO</h1>
          <p className="text-xl text-gray-200 mt-4">Front-end Developer</p>
          <motion.div className=" mt-4">
            {socialIcons.map((icon, index) => (
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="mx-2 rounded-xl p-4">
                  <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
                </motion.button>
              </a>
            ))}
          </motion.div>

          {/* <motion.button
            whileHover={{ scale: 1.2 }}
            className="mt-6 px-6 py-3 bg-yellow-400 text-gray-800 font-bold rounded-full hover:bg-yellow-500">
            Hire Me
          </motion.button> */}
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
     <Skills/>

      {/* Projects Section */}
      <Project projects={projects} />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
