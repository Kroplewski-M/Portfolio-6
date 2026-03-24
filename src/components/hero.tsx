import { useState, useEffect } from "react";
import GridBackground from "./gridBackground";
import GithubSvg from "../svg/githubSvg";
import LinkedinSvg from "../svg/linkedinSvg";

const roles = ["full-stack developer", "backend engineer", "rust enthusiast"];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Rust",
  "PostgreSQL",
  "Docker",
  ".NET Core",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting) {
      if (charIndex < current.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsDeleting(true), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => setCharIndex((c) => c - 1), 40);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [charIndex, isDeleting, roleIndex]);

  const displayed = roles[roleIndex].slice(0, charIndex);

  return (
    <section className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <GridBackground />

      {/* Glow orb — top left */}
      <div className="pointer-events-none absolute top-[-80px] left-[-100px] h-[55vw] w-[55vw] rounded-full blur-3xl">
        <div className="h-full w-full rounded-full bg-teal-400/15" />
      </div>

      {/* Glow orb — bottom right */}
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[45vw] w-[45vw] rounded-full blur-3xl">
        <div className="h-full w-full rounded-full bg-blue-500/10" />
      </div>

      <div className="relative min-h-screen flex flex-col text-center items-center justify-center px-6 pb-16">
        {/* Typewriter role */}
        <p className="uppercase text-teal-500/80 pb-5 text-sm h-5 flex items-center justify-center gap-1">
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-3.5 bg-teal-400 animate-pulse" />
        </p>

        {/* Name */}
        <h1 className="text-[3.2rem] sm:text-[4.4rem] md:text-[6.8rem] leading-[0.92] tracking-tight text-white mb-2 [text-shadow:0_0_60px_rgba(45,212,191,0.12)]">
          Mateusz
        </h1>
        <h1 className="text-teal-400 text-shadow-lg text-shadow-teal-800 text-[3.2rem] sm:text-[4.4rem] md:text-[6.8rem] leading-[0.92] tracking-tight">
          Kroplewski
        </h1>

        {/* Bio */}
        <p className="text-gray-400/90 md:w-[60%] w-[80%] text-sm mt-8">
          Full-stack developer with a passion for building things from scratch —
          whether that's a Rust backend or a Next.js frontend.
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-5 md:w-[65%] w-[90%]">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs border border-teal-500/20 bg-teal-500/5 text-teal-400/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons + social links */}
        <div className="flex items-center gap-4 mt-10 flex-wrap justify-center">
          <a
            href="#projects"
            className="rounded-full bg-teal-400 py-2 px-5 text-black font-medium text-sm cursor-pointer transition-all duration-300 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-900/50"
          >
            View Projects
          </a>

          <div className="w-px h-6 bg-gray-700 mx-1" />

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <GithubSvg />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinSvg />
          </a>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
