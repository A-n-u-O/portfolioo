"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { socialIcons } from "@/app/data/socials";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !imageRef.current || !buttonsRef.current || !subTextRef.current || !iconsRef.current)
      return;

    animate(headingRef.current, {
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
    });

    animate(subTextRef.current, {
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeOutExpo",
      delay: 300,
      duration: 800,
    });

    animate(imageRef.current, {
      scale: [0.92, 1],
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: 400,
      duration: 1000,
    });

    [...buttonsRef.current.children].forEach((child, index) => {
      animate(child, {
        opacity: [0, 1],
        translateY: [10, 0],
        easing: "easeOutExpo",
        delay: 600 + index * 150,
        duration: 600,
      });
    });

    animate([...iconsRef.current.children], {
      opacity: [0, 1],
      translateY: [10, 0],
      delay: 800,
      duration: 800,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-12 py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Hi, I&apos;m Anuoluwapo
          </h1>
          <p
            ref={subTextRef}
            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0"
          >
            Frontend Developer passionate about building clean, performant, and interactive user interfaces.
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              View Projects
            </a>
            <a
              href="/files/Anu_Resume.pdf"
              download
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          <div
            ref={iconsRef}
            className="flex gap-4 mt-6 justify-center md:justify-start"
          >
            {socialIcons.map((icon, idx) => (
              <a
                key={idx}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <Image src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Avatar Section */}
        <div className="flex justify-center">
          <Image
            ref={imageRef}
            src="/assets/images/hero-avatar.png"
            alt="Anu Avatar"
            width={380}
            height={380}
            className="rounded-full border border-gray-700"
          />
        </div>
      </div>
    </section>
  );
}
