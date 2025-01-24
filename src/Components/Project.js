import React from "react";

const Project = () => {
  return (
    <section id="projects" className="projects py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social App Project */}
          <a
            href="https://social-media-blue-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/assets/images/social.png"
              alt="Social app"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Social App Project</h3>
            <p className="text-sm text-gray-600 mt-2">
              Crafted UI for a cooking platform with smooth user experience...
            </p>
          </a>

          {/* Human Resources Management System Project */}
          <a
            href="https://hrms-wine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/assets/images/hr.png"
              alt="HR management system"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">
              Human Resources Management System Project
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Designed UI for Nike's web store with modern minimalism...
            </p>
          </a>

          {/* Shipping App Project */}
          <a
            href="https://example.com/shipping-app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/assets/images/shipping.png"
              alt="Shipping app"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Shipping App Project</h3>
            <p className="text-sm text-gray-600 mt-2">
              Built an intuitive interface for streaming...
            </p>
          </a>

          {/* Attendance Logging App Project */}
          <a
            href="https://attendance-logging-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/assets/images/attendance.png"
              alt="Attendance app"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">
              Attendance Logging App Project
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Built an intuitive interface for streaming...
            </p>
          </a>

           {/* Frontend Mentor - E-commerce product page Project */}
           <a
            href="https://e-commerce-page-two-tau.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/assets/images/product.png"
              alt="Frontend Mentor - E-commerce product page"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">
            Frontend Mentor - E-commerce product page
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Built an intuitive interface for streaming...
            </p>
          </a>

          {/* First Portfolio Project */}
          <a
            href="https://a-n-u-o-github-io.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/assets/images/old portfolio.png"
              alt="First Portfolio Project"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">
            First Portfolio Project
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Built an intuitive interface for streaming...
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
