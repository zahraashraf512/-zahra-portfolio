
import { motion } from "framer-motion";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "GitHub",
  "Vite",
];

export default function TechMarquee() {
  return (
    <section className="overflow-hidden border-y border-violet-500/20 bg-[#0b0815] py-12">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
        Technologies I Explore
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex w-max shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-6 px-6 md:px-10"
            >
              <span className="whitespace-nowrap text-2xl font-bold text-gray-300 transition-colors hover:text-violet-400 md:text-3xl">
                {tech}
              </span>

              <span className="h-2 w-2 rotate-45 bg-violet-500 shadow-[0_0_12px_#8b5cf6]" />
            </div>
          ))}
        </motion.div>
      </div>

      <p className="mt-7 text-center text-xs text-gray-500">
        Always learning. Always building.
      </p>
    </section>
  );
}
