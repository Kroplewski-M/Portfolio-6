import { useState, useEffect } from "react";
import GridBackground from "./gridBackground";

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
          <button className="rounded-full bg-teal-400 py-2 px-5 text-black font-medium text-sm cursor-pointer transition-all duration-300 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-900/50">
            View Projects
          </button>
          <button className="rounded-full border border-teal-400 text-white py-2 px-5 text-sm cursor-pointer transition-all duration-300 hover:bg-teal-400/10 hover:shadow-lg hover:shadow-teal-900/50">
            Get in touch
          </button>

          <div className="w-px h-6 bg-gray-700 mx-1" />

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
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
