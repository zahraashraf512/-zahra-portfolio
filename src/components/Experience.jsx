
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";

const experiences = [
  {
    date: "2026 — Present",
    type: "Experience",
    title: "Frontend Developer",
    place: "Exlonteach",
    description:
      "Working with frontend technologies to build responsive interfaces and improve my React development skills.",
    icon: BriefcaseBusiness,
    side: "left",
  },
  {
    date: "2026 — Present",
    type: "Learning Journey",
    title: "React Developer",
    place: "Personal Projects",
    description:
      "Practicing React, reusable components, API integration, responsive layouts and modern UI animations.",
    icon: Code2,
    side: "right",
  },
  {
    date: "2023 — 2024",
    type: "Education",
    title: "Intermediate",
    place: "GOVT WOMEN COLLEGE BHALWAL",
    description:
      "Completed my intermediate education and continued developing my technical skills.",
    icon: GraduationCap,
    side: "left",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#070610] px-5 py-24 text-white md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Experience <span className="text-violet-400">&</span>
            <br className="sm:hidden" /> Education
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Every project and every lesson is another step in my journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center glowing timeline */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-violet-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-violet-400 shadow-[0_0_12px_2px_rgba(139,92,246,0.7)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative grid grid-cols-[36px_minmax(0,1fr)] gap-4 md:grid-cols-[1fr_60px_1fr] md:gap-5 ${
                    item.side === "right" ? "md:[&>div:first-child]:col-start-3" : ""
                  }`}
                >
                  {/* Timeline node */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/60 bg-[#100b20] text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Timeline card */}
                  <div
                    className={`col-start-2 row-start-1 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/[0.06] md:col-start-1 md:row-start-1 md:p-7 ${
                      item.side === "right" ? "md:col-start-3" : ""
                    }`}
                  >
                    <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                      {item.date}
                    </span>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                      {item.type}
                    </p>

                    <h3 className="mt-2 text-xl font-bold md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-300">{item.place}</p>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
