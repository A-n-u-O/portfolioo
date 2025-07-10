"use client";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import Modal from "./Modal";
import { Project } from "@/types/dataTypes";
// import { Project } from "@app/types/project";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const cards = sectionRef.current?.querySelectorAll(".project-card") || [];
          animate([...cards], {
            opacity: [0, 1],
            translateY: [30, 0],
            delay: stagger(150),
            duration: 800,
            easing: "easeOutExpo",
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
      id="projects"
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white px-6 md:px-16 py-28"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="project-card cursor-pointer bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition duration-300 group"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
                {project.tech && (
                  <div className="flex flex-wrap mt-3 gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <div className="text-left space-y-6 max-h-[90vh] overflow-y-auto p-4 md:p-6">
            <Image
              src={selectedProject.image}
              alt={selectedProject.alt}
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full"
            />
            <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {selectedProject.description}
            </p>
            {selectedProject.tech && (
              <div className="flex flex-wrap gap-3 mt-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-900/30 text-sm px-3 py-1 rounded-full border border-blue-400 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-400 hover:underline text-lg"
            >
              View Live ↗
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}
