import React from "react";
import "../about.css";

const About = ({ resume }) => {
  return (
    <section
      id="about"
      className="about py-10 px-3 md:px-16 bg-gray-100 text-center">
      {/* Image Section */}
      {/* <div className=" w-96 md:w-1/2 flex md:justify-start mb-6 md:mb-0">
        <img
          src="/assets/images/about.jpg"
          alt="About Me"
          className="w-72 h-auto md:w-96 rounded-lg shadow-lg"
        />
      </div> */}

      {/* Content Section */}
      {/* <div className="w-full md:w-1/2 px-3 md:px-8"> */}
      <h2 className="text-5xl font-bold text-cyan-900 mb-4">About Me</h2>
      <p className="text-3xl text-cyan-800 leading-relaxed">
        Hello! I’m Anuoluwapo, a Frontend Developer based in Lagos, Nigeria. I
        specialize in crafting engaging, user-friendly, and high-performance web
        applications using React.js, TypeScript, and Tailwind CSS.
      </p>
      <p className="text-3xl text-cyan-800 leading-relaxed mt-3">
        With 3+ years of experience, I have successfully developed interactive
        and responsive web solutions, focusing on clean code, UI/UX design
        principles, and seamless functionality.
      </p>
      <p className="text-3xl text-cyan-800 leading-relaxed mt-3">
        I’m passionate about turning ideas into reality, keeping up with modern
        web technologies, and collaborating on impactful projects. Let’s build
        something amazing together!
      </p>

      {/* Experience & Projects Count */}
      <div className="flex flex-row justify-between gap-8 mt-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-cyan-800">2+</h3>
          <p className="text-cyan-900 text-2xl">Years of Experience</p>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-cyan-800">10+</h3>
            <p className="text-cyan-900 text-2xl">Completed Projects</p>
          </div>
        </div>

        {/* </div> */}
      </div>
      {/* CTA Button */}
      <div className="mt-6">
        <a
          href={resume}
          download="Anuoluwapo_Resume.pdf"
          className=" px-14 py-11 bg-pink-900 text-cyan-500  text-2xl font-bold rounded-full hover:bg-pink-950 hover:text-cyan-300 transition inline-block">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
