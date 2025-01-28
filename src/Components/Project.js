import React from "react";

const Project = ({ projects }) => {
  return (
    <section id="projects" className="projects py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects i have worked on </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${project.alt}`}
              className="project-card bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
