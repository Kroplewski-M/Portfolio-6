import GridBackground from "./gridBackground";

const projects = [
  {
    name: "student_showcase",
    description:
      "A platform for students to showcase their projects and portfolios. External users can find students based on semantic search.",
    tags: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "Rust",
      "Actix",
      "Docker",
      "Nginx",
      "Postgres",
      "Semantic Search",
      "FastEmbed",
    ],
    url: "https://github.com/Kroplewski-M/student_showcase",
    live_url: "https://huddersfieldshowcase.cloud/",
  },
  {
    name: "CodeConnect",
    description:
      "A social media platform built for developers. Create profiles, share work, and connect with like-minded people. Built with Blazor WebAssembly and a C# Web API backend.",
    tags: [
      "Blazor",
      "C#",
      ".NET",
      "EF Core",
      "Azure",
      "SignalR",
      "MSSQL",
      "TailwindCSS",
    ],
    url: "https://github.com/Kroplewski-M/CodeConnect",
    live_url: "",
  },
  {
    name: "rust_auth",
    description:
      "An authentication service written in Rust, covering registration, login, and token-based session management.",
    tags: ["Rust", "Actix"],
    url: "https://github.com/Kroplewski-M/rust_auth",
    live_url: "",
  },
  {
    name: "cargo play",
    description: "A terminal based music player written in Rust.",
    tags: ["Rust", "Ratatui"],
    url: "https://github.com/Kroplewski-M/Cargo-Play/tree/master",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      <GridBackground />
      {/* Glow orb — top right */}
      <div className="pointer-events-none absolute top-[-60px] right-[-80px] h-[40vw] w-[40vw] rounded-full blur-3xl">
        <div className="h-full w-full rounded-full bg-blue-500/8" />
      </div>

      <div className="relative w-full max-w-3xl">
        {/* Section label */}
        <p className="uppercase text-teal-500/80 text-sm tracking-widest mb-3">
          work
        </p>

        <h2 className="text-white text-4xl sm:text-5xl font-medium tracking-tight mb-12">
          My <span className="text-teal-400">projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-teal-500/20 bg-teal-500/5 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-teal-500/40 hover:bg-teal-500/10 hover:shadow-lg hover:shadow-teal-900/30"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-medium">{project.name}</h3>
                <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
                      aria-label="Live site"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GlobeIcon />
                    </a>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-teal-400 transition-colors duration-300"
                    aria-label="GitHub repo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs border border-teal-500/20 bg-teal-500/5 text-teal-400/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/Kroplewski-M"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-teal-400 text-white py-2 px-5 text-sm transition-all duration-300 hover:bg-teal-400/10 hover:shadow-lg hover:shadow-teal-900/50"
          >
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
