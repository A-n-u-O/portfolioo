import React from "react";
import "../about.css";

const About = () => {
  return (
    <section id="about" className="about py-20 px-20 bg-gray-100 flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="w-full h-full md:w-1/2 flex justify-center">
        <img src="/assets/images/about.jpg" alt="About Me" className="w-100 h-100 rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">About Me</h2>
        <p className="text-lg text-gray-700 max-w-xl">
          I’m Anuoluwapo, a results-driven web developer based in Lagos, Nigeria, with over three years of experience crafting seamless and visually compelling digital experiences. My expertise lies in building modern, responsive, and user-friendly web applications using cutting-edge technologies like <strong>React.js, TypeScript, and Tailwind CSS</strong>.
        </p>
        <p className="text-lg text-gray-700 max-w-xl mt-4">
          Beyond writing clean and efficient code, I’m passionate about delivering solutions that are not only functional but also intuitive and engaging. I have successfully completed <strong>10+ projects</strong>, ranging from <strong>dynamic web applications</strong> to <strong>interactive UI components</strong>, ensuring performance, accessibility, and scalability.
        </p>
        <p className="text-lg text-gray-700 max-w-xl mt-4">
          In addition to development, I stay updated with the latest industry trends, continuously improving my skills in <strong>frontend frameworks, API integration, and deployment strategies</strong>. Whether collaborating with teams or working independently, I am committed to delivering excellence, maintaining best practices, and ensuring high-quality user experiences.
        </p>
        <div className="flex justify-center md:justify-start mt-10">
          <div className="mx-5">
            <h3 className="text-xl font-bold">3+</h3>
            <p>Years Experience</p>
          </div>
          <div className="mx-5">
            <h3 className="text-xl font-bold">10+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;
