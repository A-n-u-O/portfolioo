import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "/assets/icons/html-5-svgrepo-com.svg" },
    { name: "CSS", icon: "/assets/icons/css-3-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/assets/icons/javascript-svgrepo-com.svg" },
    { name: "React", icon: "/assets/icons/react-svgrepo-com.svg" },
    { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss-icon-svgrepo-com.svg" },
    { name: "Git", icon: "/assets/icons/git.svg" },
    { name: "Typescript", icon: "/assets/icons/typescript.svg" },
  ];

  return (
    <section id="skills" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 mx-auto max-w-7xl">
          {skills?.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="skill-card flex flex-col items-center p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
