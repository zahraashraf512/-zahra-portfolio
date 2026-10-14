
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#070610]/90 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-3">
  <img
    src="/LOGO.png"
    alt="ZA Zahra Ashraf Logo"
    className="h-12 w-12 object-contain"
  />
  <span className="text-lg font-bold tracking-wider text-white">
    ZAHRA <span className="text-violet-400">ASHRAF</span>
  </span>
</a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-violet-500 px-5 py-2 text-sm transition hover:bg-violet-600 md:flex"
        >
          Hire Me <ArrowUpRight size={16} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="text-white md:hidden"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-5 border-t border-white/10 bg-[#0b0916] px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
