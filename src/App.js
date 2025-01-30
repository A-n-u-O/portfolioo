import React, { useEffect, useState } from "react";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Social App Project",
    description: "Crafted UI for a cooking platform with smooth user experience.",
    image: "/assets/images/social.png",
    alt: "Social app",
    link: "https://social-media-blue-theta.vercel.app/",
  },
  {
    title: "Human Resources Management System",
    description: "Developed an HRMS dashboard for efficient employee management.",
    image: "/assets/images/hr.png",
    alt: "HR management system",
    link: "https://hrms-wine.vercel.app/",
  },
  {
    title: "Shipping App",
    description: "Built an intuitive shipment tracking system with a clean UI.",
    image: "/assets/images/shipping.png",
    alt: "Shipping app",
    link: "https://hrms-wine.vercel.app/",
  },
  {
    title: "Attendance Logging App",
    description: "Designed a logging system for attendance tracking.",
    image: "/assets/images/attendance.png",
    alt: "Attendance app",
    link: "https://attendance-logging-app.vercel.app/",
  },
  {
    title: "E-commerce Product Page",
    description: "A fully responsive product page UI based on a Frontend Mentor challenge.",
    image: "/assets/images/product.png",
    alt: "E-commerce product page",
    link: "https://e-commerce-page-two-tau.vercel.app/",
  },
  {
    title: "First Portfolio",
    description: "My first portfolio website showcasing projects and skills.",
    image: "/assets/images/old-portfolio.png",
    alt: "Portfolio Project",
    link: "https://a-n-u-o-github-io.vercel.app/",
  },
];

const socialIcons = [
  {
    src: "/assets/icons/icons8-github.svg",
    alt: "GitHub icon",
    link: "https://github.com/A-n-u-O",
  },
  {
    src: "/assets/icons/icons8-linkedin.svg",
    alt: "LinkedIn icon",
    link: "https://www.linkedin.com/in/anuoluwapo-victor-23ab97253",
  },
  {
    src: "/assets/icons/gmail-svgrepo-com.svg",
    alt: "Mail icon",
    link: "mailto:anuoluwa2051@gmail.com",
  },
];

function App() {
  const [IsFixed, setIsFixed] = useState(false);
  const { scrollYProgress } = useScroll();

  // Apply smooth animation to the progress bar
  const progressBarWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        logoSrc="/assets/images/logo.png"
        menuItems={menuItems}
        className={`navbar ${IsFixed ? "fixed" : ""}`}
      />

      {/* Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: progressBarWidth }}
      />

      {/* Hero Section */}
      <section className="hero py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white">ANUOLUWAPO</h1>
          <p className="text-xl text-gray-200 mt-4">Front-end Developer</p>
          <motion.div className="mt-4">
            {socialIcons.map((icon, index) => (
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                aria-label={`Visit my ${icon.alt}`}
              >
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="mx-2 rounded-xl p-4"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </motion.button>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <About />
      <Skills />
      <Project projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
