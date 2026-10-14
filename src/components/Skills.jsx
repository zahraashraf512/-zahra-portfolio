
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Wind,
  GitBranch,
  Smartphone,
  Zap,
  Globe,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "JavaScript", level: "Learning" },
      { name: "React.js", level: "Learning" },
    ],
  },
  {
    title: "Styling & UI",
    description: "Creating clean, modern and responsive designs.",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: "Learning" },
      { name: "Responsive Design", level: "Core" },
      { name: "UI Design", level: "Practicing" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use to develop and manage projects.",
    icon: GitBranch,
    skills: [
      { name: "Git", level: "Learning" },
      { name: "GitHub", level: "Learning" },
      { name: "VS Code", level: "Core" },
      { name: "Vite & NPM", level: "Learning" },
    ],
  },
];

const floatingIcons = [
  { Icon: Braces, label: "JavaScript" },
  { Icon: Wind, label: "Tailwind CSS" },
  { Icon: Smartphone, label: "Responsive UI" },
  { Icon: Zap, label: "React" },
  { Icon: Globe, label: "Web Development" },
];

export default function Skills() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.15 }}
transition={{ duration: 0.4, ease: "easeOut" }}

      id="skills"
      className="relative overflow-hidden bg-[#070610] px-5 py-24 text-white md:px-10"
    >
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            My <span className="text-violet-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Technologies and tools I use while learning and building modern
            web experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-violet-500/50 hover:bg-violet-500/[0.05] md:p-7"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={23} />
                </div>

                <h3 className="text-xl font-bold">{group.title}</h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-400">
                  {group.description}
                </p>

                <div className="my-5 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition duration-300 hover:border-violet-400/50 hover:text-violet-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {floatingIcons.map(({ Icon, label }, index) => (
            <motion.div
              key={label}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.5,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-4 py-2 text-sm text-gray-300"
            >
              <Icon size={16} className="text-violet-400" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
