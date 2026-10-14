
import { motion } from "framer-motion";


import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";

const techs = ["React.js", "JavaScript", "Tailwind CSS"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-10 -z-10 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Frontend Developer
          </div>

          <p className="mb-2 text-xl text-gray-300 md:text-2xl">
            Hi, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Zahra
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
              Ashraf.
            </span>
          </h1>

          <h2 className="mt-5 text-lg font-medium text-violet-200 md:text-xl">
            React Developer <span className="text-gray-500">/</span>{" "}
            Frontend Developer
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-gray-400">
            I build modern, responsive and user-friendly web experiences
            using React.js and modern frontend technologies. I love
            turning ideas into clean and beautiful interfaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 font-medium shadow-lg shadow-violet-900/30 transition hover:-translate-y-1 hover:shadow-violet-500/30"
            >
              View My Projects
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-gray-200 transition hover:border-violet-400 hover:text-violet-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/zahra512"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-violet-400 hover:text-violet-300"
            >
              <Code2 size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/zahra-ashraf-759ba4420/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-violet-400 hover:text-violet-300"
            >
              <Code2 size={19} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center py-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-violet-400/40 sm:h-[370px] sm:w-[370px]"
          />

          <div className="absolute h-[260px] w-[260px] rounded-full bg-violet-600/20 blur-[70px] sm:h-[330px] sm:w-[330px]" />

          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-[45%_55%_55%_45%/45%_45%_55%_55%] border border-violet-400/70 bg-gradient-to-br from-violet-500/20 via-[#110c23] to-fuchsia-500/20 shadow-[0_0_60px_rgba(139,92,246,0.22)] sm:h-[350px] sm:w-[350px]">
            <div className="absolute inset-3 rounded-[inherit] border border-white/10" />

            <div className="px-6 text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-7xl font-black text-violet-300 sm:text-8xl"
              >
                Z.
              </motion.div>
              <p className="mt-4 text-lg font-semibold">Creative Developer</p>
              <p className="mt-2 text-sm text-gray-400">
                Design · Code · Create
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-3 top-12 rounded-xl border border-violet-400/30 bg-[#100b20]/90 p-3 shadow-xl backdrop-blur-xl sm:-right-8"
            >
              <span className="text-sm font-semibold text-cyan-300">
                {"</>"} React
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-3 -left-2 rounded-xl border border-violet-400/30 bg-[#100b20]/90 p-3 shadow-xl backdrop-blur-xl sm:-left-8"
            >
              <span className="text-sm text-violet-200">
                ✦ Always Learning
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="mx-auto mb-6 flex w-fit items-center gap-2 text-xs tracking-widest text-gray-500 transition hover:text-violet-300"
      >
        SCROLL TO EXPLORE <ArrowDown size={14} />
      </a>
    </section>
  );
}
