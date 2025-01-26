import { motion } from "framer-motion";
import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="contact py-20 text-center bg-gray-100">
      <div className="container mx-auto">
        <motion.h2 animate={{}} className="text-3xl font-bold text-gray-900 mb-5">Get in Touch</motion.h2>
        <p className="text-lg text-gray-700 mb-10">
          Feel free to reach out to discuss new projects or opportunities.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <textarea
              placeholder="Message"
              rows="5"
              className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-yellow-500"></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
