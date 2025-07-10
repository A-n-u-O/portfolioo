"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && sectionRef.current) {
          animate(sectionRef.current, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            easing: "easeOutExpo",
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white px-6 md:px-16 py-28 opacity-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Let’s Connect
        </h2>
        <form
          action="mailto:anuoluwa2051@gmail.com"
          method="POST"
          className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg resize-none focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium self-center">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
