import React, { useState } from "react";
import "../contact.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_l52lsn8", // your Service ID
        "template_dq3sdfn", // your Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "WV_RNMjUVVb3TJXMy" // your User ID or public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
      <motion.h2 whileInView={{scale: [1,2,1.5], y:[0,30,-30,0]}} className="text-3xl font-bold text-gray-900 mb-5">Get in Touch</motion.h2>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded text-black"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded text-black"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            required
            className="w-full p-3 border rounded text-black"></textarea>
          <button
            type="submit"
            className=" text-white px-6 py-3 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
