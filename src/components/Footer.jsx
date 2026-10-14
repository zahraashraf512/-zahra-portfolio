
import { Code2, Mail, ArrowUp, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-violet-500/20 bg-[#080611]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-10 md:pt-20">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 md:gap-16 lg:grid-cols-3">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block">
              <span className="text-3xl font-black tracking-tight text-white md:text-4xl">
                ZAHRA
                <span className="text-violet-400"> ASHRAF</span>
                <span className="text-violet-400">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-lg text-base leading-8 text-gray-400 md:text-lg">
              Frontend Developer crafting modern, responsive and
              user-friendly web experiences with React.js.
            </p>

            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-300 transition duration-300 hover:border-violet-400 hover:bg-violet-500/20"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-violet-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500 opacity-60 transition group-hover:opacity-100" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Large Decorative Text */}
        <div className="overflow-hidden py-10 md:py-14">
          <p className="select-none whitespace-nowrap text-center text-[13vw] font-black leading-none tracking-tighter text-white/[0.035]">
            KEEP BUILDING
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-7 md:flex-row">

          <p className="text-center text-sm text-gray-500">
            © {year} Zahra Ashraf. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/zahra512"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <Code2 size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/zahra-ashraf-759ba4420/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
            >
              in
            </a>

            <a
              href="mailto:muhammadashrafasharaf943@gmail.com"
              aria-label="Email"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <Mail size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-violet-500 text-white transition hover:bg-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
