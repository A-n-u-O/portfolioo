import React from "react";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Project from "./Components/Project";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero py-20 bg-gradient-to-b from-yellow-100 to-white text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">I'M ANUOLUWAPO</h1>
          <p className="text-xl text-gray-700 mt-4">
            A Front-end Developer
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600">
            Hire Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <section id="skills" className="py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">My Skills</h2>
        {/* You can add more structure for listing skills */}
      </section>

      {/* Projects Section */}
      <Project />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
