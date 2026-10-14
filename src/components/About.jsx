
import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and interactive web experiences with React.",
  },
  {
    icon: Palette,
    title: "Modern UI Design",
    description: "Creating clean layouts with thoughtful details and smooth effects.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description: "Exploring new tools and improving my development skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070610] px-5 py-24 text-white md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            About <span className="text-violet-400">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            I'm Zahra Ashraf, a frontend developer passionate about building
            modern, responsive and user-friendly web experiences with React.
            I enjoy learning new technologies and turning ideas into websites.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-violet-500/50 hover:bg-violet-500/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
