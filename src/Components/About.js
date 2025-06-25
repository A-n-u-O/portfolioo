import React from "react";
import "../about.css";

const About = ({ resume }) => {
  return (
    <section
      id="about"
      className="about py-16 px-8 md:px-16 bg-gray-100 flex flex-col md:flex-row items-center text-left">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src="/assets/images/about.jpg"
          alt="About Me"
          className="w-72 h-auto md:w-96 rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello! I’m Anuoluwapo, a Frontend Developer based in Lagos, Nigeria. I
          specialize in crafting engaging, user-friendly, and high-performance
          web applications using React.js, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          With 3+ years of experience, I have successfully developed interactive
          and responsive web solutions, focusing on clean code, UI/UX design
          principles, and seamless functionality.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          I’m passionate about turning ideas into reality, keeping up with
          modern web technologies, and collaborating on impactful projects.
          Let’s build something amazing together!
        </p>

        {/* Experience & Projects Count */}
        <div className="flex justify-start gap-8 mt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">3+</h3>
            <p className="text-gray-700 text-sm">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">10+</h3>
            <p className="text-gray-700 text-sm">Completed Projects</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href={resume}
            download="Anuoluwapo_Resume.pdf"
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition inline-block">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
