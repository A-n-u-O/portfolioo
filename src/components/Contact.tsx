"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && sectionRef.current) {
          animate(sectionRef.current, {
            opacity: [0, 1],
            translateY: [40, 0],
            easing: "easeOutExpo",
            duration: 1000,
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="opacity-0 bg-[#0d0d0d] px-6 md:px-16 py-20 text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
        <p className="text-gray-400 mb-10">
          Got a project, collaboration, or just want to say hi? Drop a message — I&apos;ll get back to you!
        </p>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission handling goes here.");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
