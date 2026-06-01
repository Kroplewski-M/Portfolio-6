import experience from "../experience.json";

interface experienceProps {
  title: string;
  company: string;
  from: string;
  to: string;
  tools: string[];
}
export default function About() {
  const expHistory: experienceProps[] = experience;
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Glow orb — bottom left */}
      <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-[40vw] w-[40vw] rounded-full blur-3xl">
        <div className="h-full w-full rounded-full bg-teal-400/10" />
      </div>

      <div className="relative w-full max-w-3xl">
        {/* Section label */}
        <p className="uppercase text-teal-500/80 text-sm tracking-widest mb-3">
          background
        </p>

        <h2 className="text-white text-4xl sm:text-5xl font-medium tracking-tight mb-12">
          About <span className="text-teal-400">me</span>
        </h2>

        {/* Education */}
        <div className="mb-10">
          <p className="uppercase text-gray-500 text-xs tracking-widest mb-4">
            Education
          </p>

          <div className="border border-teal-500/20 bg-teal-500/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-teal-500/20 bg-teal-500/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-400"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="text-white font-medium">
                  University of Huddersfield
                </h3>
                <span className="text-xs text-gray-500">2022 — May 2026</span>
              </div>
              <p className="text-teal-400/80 text-sm">BSc Web Programming</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <p className="uppercase text-gray-500 text-xs tracking-widest mb-4">
            Experience
          </p>
          {expHistory.map((job) => (
            <div className="border border-teal-500/20 bg-teal-500/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-teal-500/20 bg-teal-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-400"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-white font-medium">{job.company}</h3>
                  <span className="text-xs text-gray-500">
                    {job.from} — {job.to}
                  </span>
                </div>
                <p className="text-teal-400/80 text-sm mb-3">{job.title}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {job.tools.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs border border-teal-500/20 bg-teal-500/5 text-teal-400/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
