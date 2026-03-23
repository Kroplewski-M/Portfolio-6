import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-teal-400/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="text-teal-400 font-bold text-[2em]">
          MK<span className="text-gray-200">.</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm text-white/50 items-center">
          <a href="#about" className="hover:border-b-2 hover:border-teal-400">
            About
          </a>
          <a
            href="#projects"
            className="hover:border-b-2 hover:border-teal-400"
          >
            Projects
          </a>
          <a href="#contact" className="hover:border-b-2 hover:border-teal-400">
            Contact
          </a>
          <a
            href="https://github.com/Kroplewski-M"
            target="_blank"
            referrerPolicy="no-referrer"
            className="rounded-full border border-teal-800 py-2 px-4 hover:shadow-lg shadow-teal-800"
          >
            GitHub&thinsp;↗
          </a>
        </div>
        {!menuOpen && (
          <button
            className="md:hidden text-white/60 text-[2em]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen z-100 w-screen bg-black/90 text-white/60">
          <div className="w-full flex justify-end">
            <button
              className="text-white/60 text-[2em] mr-5 mt-5 font-extrabold"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              X
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 mt-16">
            <a
              href="#about"
              className="hover:border-b-2 hover:border-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:border-b-2 hover:border-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:border-b-2 hover:border-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://github.com/Kroplewski-M"
              target="_blank"
              referrerPolicy="no-referrer"
              className="rounded-full border border-teal-800 py-2 px-4 hover:shadow-lg shadow-teal-800"
            >
              GitHub&thinsp;↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
