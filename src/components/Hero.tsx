"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!headingRef.current || !imageRef.current || !buttonsRef.current || !subTextRef.current)
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
      scale: [0.8, 1],
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: 400,
      duration: 1200,
    });

    animate([...buttonsRef.current.children], {
      opacity: [0, 1],
      translateY: [10, 0],
      easing: "easeOutExpo",
      delay: 600,
      duration: 800,
      delayEach: 150, // Only works with some versions. Use stagger alternatives if needed.
    });
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20">
      <div className="flex-1 text-center md:text-left">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m Anuoluwapo
        </h1>
        <p ref={subTextRef} className="text-lg text-gray-400 mb-6">
          Frontend Developer who builds clean, interactive web experiences.
        </p>
        <div ref={buttonsRef} className="flex gap-4 justify-center md:justify-start">
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
      </div>

      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <Image
          ref={imageRef}
          src="/assets/images/hero-avatar.png"
          alt="Anu Avatar"
          width={350}
          height={350}
          className="rounded-full"
        />
      </div>
    </section>
  );
}