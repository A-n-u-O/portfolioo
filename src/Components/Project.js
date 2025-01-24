import React from "react";
const Project = () => {
  return (
    <section id="projects" className="projects py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="project-card bg-gray-100 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Culinary Book UI Design</h3>
            <p className="text-sm text-gray-600 mt-2">
              Crafted UI for a cooking platform with smooth user experience...
            </p>
            {/* Add project image here */}
          </div>
          <div className="project-card bg-gray-100 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Nike Web UI Design</h3>
            <p className="text-sm text-gray-600 mt-2">
              Designed UI for Nike's web store with modern minimalism...
            </p>
            {/* Add project image here */}
          </div>
          <div className="project-card bg-gray-100 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Streaming Platform UI Design</h3>
            <p className="text-sm text-gray-600 mt-2">
              Built an intuitive interface for streaming...
            </p>
            {/* Add project image here */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
