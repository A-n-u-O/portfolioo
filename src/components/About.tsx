"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function About() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate(entry.target, {
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
    <section id="about" ref={sectionRef} className="bg-[#111] px-6 md:px-16 py-20 opacity-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I&apos;m Anuoluwapo — a frontend developer passionate about building responsive, accessible,
          and interactive web experiences. I enjoy working with modern tools like React, TypeScript,
          Tailwind, and Next.js to create pixel-perfect user interfaces.
        </p>
      </div>
    </section>
  );
}
