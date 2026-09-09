import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { useTypewriter } from "../hooks/useTypewriter";

const ROLES = [
  "Software Developer",
  "Frontend Engineer",
  "React Developer",
  "Problem Solver",
];

export default function Hero() {
  const role = useTypewriter({ words: ROLES });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />

      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 animate-blob rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 animate-blob rounded-full bg-accent2/20 blur-3xl [animation-delay:4s]" />

      <ParticleBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          {"// Hello, world. I'm"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Brenson
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 flex h-10 items-center justify-center font-mono text-lg text-slate-300 sm:text-2xl"
        >
          <span className="text-gradient font-semibold">{role}</span>
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent sm:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-balance text-base text-slate-400 sm:text-lg"
        >
          I build fast, accessible, and thoughtfully designed web
          applications — from pixel-perfect interfaces to the systems that
          power them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="w-full rounded-lg bg-gradient-to-r from-accent to-accent2 px-8 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-transform hover:scale-105 sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full rounded-lg border border-slate-700 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:gobrenson28@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-slate-400 transition-colors hover:text-accent"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 transition-colors hover:text-accent"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </a>
    </section>
  );
}
