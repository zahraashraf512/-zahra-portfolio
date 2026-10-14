
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

const email = "muhammadashrafasharaf943@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const senderEmail = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Portfolio contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070610] px-5 py-24 text-white md:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Let's Work{" "}
            <span className="text-violet-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Have a project idea or want to connect? Send me a
            message. I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:p-9"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-300">
              <MessageCircle size={26} />
            </div>

            <h3 className="text-2xl font-bold">
              Let's talk!
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              I'm always interested in learning, collaborating,
              and exploring new frontend development opportunities.
            </p>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="group mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-violet-500/50 hover:bg-violet-500/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <Mail size={20} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-gray-500">
                  Email me
                </span>

                <span className="mt-1 block break-all text-sm text-gray-200">
                  {email}
                </span>
              </span>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
              />
            </a>

            {/* Location */}
            <div className="mt-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <MapPin size={20} />
              </span>

              <span>
                <span className="block text-xs text-gray-500">
                  Location
                </span>

                <span className="mt-1 block text-sm text-gray-200">
                  Pakistan · Available Online
                </span>
              </span>
            </div>

            {/* Copy email */}
            <button
              type="button"
              onClick={copyEmail}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-500/30 px-4 py-3 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
            >
              {copied ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}

              {copied ? "Email Copied!" : "Copy Email Address"}
            </button>
          </motion.div>

          {/* Right side: Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:p-9"
          >
            <h3 className="text-2xl font-bold">
              Send a Message
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Fill in the details below to get in touch.
            </p>

            <div className="mt-7 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b0915] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b0915] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your idea..."
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0b0915] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 font-semibold text-white transition hover:bg-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Submitting opens your email app with the message
                prepared. You can review and send it there.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
