"use client";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Image from "next/image";
import { techStack } from "@/app/data/techStack";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    animate(sectionRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#0d0d0d] text-white px-6 md:px-16 py-28"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* About Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-lg text-gray-400">
            I’m Anuoluwapo, a frontend developer with a passion for crafting clean and
            performant user interfaces. I enjoy turning complex problems into intuitive
            and delightful user experiences using modern web technologies.
          </p>
          <p className="text-lg text-gray-400">
            From dashboards to e-commerce and interactive apps, I aim to build pixel-perfect
            and scalable products that focus on real-world usability and performance.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="w-20 h-20 bg-[#1a1a1a] border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
              />
              <span className="text-sm text-gray-300 mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
