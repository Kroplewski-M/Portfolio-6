import GridBackground from "./gridBackground";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <GridBackground />
      {/*GLOW ORB*/}
      <div className="pointer-events-none top-[-50px] left-[-70px] absolute h-[50vw] w-[50vw] rounded-full blur-3xl">
        <div className="h-full w-full rounded-full bg-teal-400/8" />
      </div>
      <div className="relative min-h-screen flex flex-col text-center items-center justify-center px-6 pb-16">
        <p className="uppercase text-teal-500/80 pb-5 text-sm">
          full-stack developer
        </p>
        <h1 className="text-[3.2rem] sm:text-[4.4rem] md:text-[6.8rem] leading-[0.92] tracking-tight text-white mb-7">
          Mateusz
        </h1>
        <h1 className="text-teal-400 text-shadow-lg text-shadow-teal-800 text-[3.2rem] sm:text-[4.4rem] md:text-[6.8rem] leading-[0.92] tracking-tight ">
          Kroplewski
        </h1>
        <p className="text-gray-400/90 md:w-[60%] w-[80%] text-sm mt-15">
          Full-stack developer with a passion for building things from scratch
          whether that's a Rust backend or a Next.js frontend.
        </p>
        <div className="flex mt-10">
          <button className="rounded-full bg-teal-400 py-2 px-4 hover:shadow-lg shadow-teal-800 cursor-pointer">
            View Projects
          </button>
          <button className="rounded-full border-teal-400 border text-white ml-5 py-2 px-4 hover:shadow-lg shadow-teal-800 cursor-pointer">
            Get in touch{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
