import React from "react";
const About = () => {
  return (
    <section id="about" className="about py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">About Me</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          I’m Anuoluwapo, a web developer based in Lagos, Nigeria. I have over
          3 years of experience...
        </p>
        <div className="flex justify-center mt-10">
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
