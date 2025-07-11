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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-15 items-center my-80">
        {/* About Text */}
        <div className="space-y-7">
          <h2 className="text-5xl lg:text-8xl font-bold mb-2">About Me</h2>
          <p className=" text-2xl lg:text-4xl text-gray-400">
            I&apos;m Anuoluwapo, a frontend developer with a passion for crafting clean and
            performant user interfaces. I enjoy turning complex problems into intuitive
            and delightful user experiences using modern web technologies.
          </p>
          <p className=" text-2xl lg:text-4xl text-gray-400">
            From dashboards to e-commerce and interactive apps, I aim to build pixel-perfect
            and scalable products that focus on real-world usability and performance.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="  w-35 lg:w-28 h-35 lg:h-28 bg-[#1a1a1a] border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={40}
                height={40}
              />
              <span className="text-xl text-gray-300 mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
