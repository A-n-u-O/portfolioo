"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

const projectData = [
  {
    title: "Mini-Commerce",
    description: "A modern e-commerce prototype built with Next.js App Router, Zustand, Tailwind.",
    link: "https://your-live-demo-link.com",
  },
  {
    title: "Dev Dashboard",
    description: "A network anomaly detection dashboard built with React + Streamlit.",
    link: "https://your-dashboard-link.com",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && sectionRef.current) {
          const cards = sectionRef.current.querySelectorAll(".project-card");

          [...cards].forEach((card, index) => {
            animate(card, {
              opacity: [0, 1],
              translateY: [30, 0],
              delay: index * 150,
              duration: 800,
              easing: "easeOutExpo",
            });
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
    <section id="projects" ref={sectionRef} className="bg-[#0d0d0d] px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="project-card opacity-0 bg-[#1a1a1a] p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-blue-500 hover:underline text-sm"
            >
              Live Demo ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
