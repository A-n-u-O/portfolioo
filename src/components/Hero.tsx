import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m Anuoluwapo
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Frontend Developer who builds clean, interactive web experiences.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>
          <a
            href="/Anu_Resume.pdf"
            download
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <Image
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
