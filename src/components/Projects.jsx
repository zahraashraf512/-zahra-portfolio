
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Store",
    category: "React.js / API Integration",
    description:
      "A product store featuring API-based product listings, reusable components, and a responsive shopping interface.",
    tech: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    live: "",
    github: "",
    accent: "from-violet-500/20 via-purple-500/5 to-transparent",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A personal portfolio designed to showcase my skills, journey, projects, and frontend development experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "",
    github: "",
    accent: "from-fuchsia-500/20 via-violet-500/5 to-transparent",
  },
  {
    number: "03",
    title: "Users Dashboard",
    category: "React.js / Data Fetching",
    description:
      "A user listing interface that fetches data from an API and displays information in a clean, responsive layout.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    live: "",
    github: "",
    accent: "from-indigo-500/20 via-purple-500/5 to-transparent",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070610] px-5 py-24 text-white md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            My <span className="text-violet-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            A collection of projects where I practice my skills and turn ideas
            into interactive web experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-violet-500/50"
            >
              <div
                className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
              >
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(167,139,250,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.2)_1px,transparent_1px)] [background-size:28px_28px]" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-violet-400/30 bg-[#100b20]/80 text-violet-300 shadow-[0_0_45px_rgba(139,92,246,0.18)] transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Code2 size={35} strokeWidth={1.5} />
                </div>

                <span className="absolute left-5 top-5 text-sm font-semibold tracking-widest text-violet-300">
                  PROJECT / {project.number}
                </span>

                <ArrowUpRight
                  size={22}
                  className="absolute right-5 top-5 text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold transition-colors group-hover:text-violet-300">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-24 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-violet-500 px-3 py-3 text-sm font-semibold transition hover:bg-violet-400"
                    >
                      Live Demo <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span className="flex-1 rounded-lg border border-white/10 px-3 py-3 text-center text-sm text-gray-500">
                      Add Live URL
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-3 text-sm font-semibold transition hover:border-violet-400/50 hover:text-violet-300"
                    >
                      Source Code <Code2 size={15} />
                    </a>
                  ) : (
                    <span className="flex-1 rounded-lg border border-white/10 px-3 py-3 text-center text-sm text-gray-500">
                      Add GitHub URL
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
