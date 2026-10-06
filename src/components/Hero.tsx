import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { useTypewriter } from "../hooks/useTypewriter";

const ROLES = [
  "Software Engineer",
  "Data Engineer",
  "Business Solution Engineer",
  "AI Engineer",
  "Full Stack Developer",
];

export default function Hero() {
  const role = useTypewriter({ words: ROLES });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />

      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 animate-blob rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 animate-blob rounded-full bg-accent2/20 blur-3xl [animation-delay:4s]" />

      <ParticleBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-28 text-center lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:text-left">
        <div>
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
            className="mt-5 flex h-10 items-center justify-center font-mono text-lg text-slate-300 sm:text-2xl lg:justify-start"
          >
            <span className="text-gradient font-semibold">{role}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent sm:h-7" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-balance text-base text-slate-400 sm:text-lg lg:mx-0"
          >
            I build fast, accessible, and thoughtfully designed web
            applications — from pixel-perfect interfaces to the systems that
            power them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="w-full rounded-lg bg-gradient-to-r from-accent to-accent2 px-8 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-transform hover:scale-105 sm:w-auto"
            >
              Explore my Work
            </a>
            <a
              href="#contact"
              className="w-full rounded-lg border border-slate-700 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              Start a conversation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6 lg:justify-start"
          >
            {[
              { icon: Github, href: "https://github.com/Xien04", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/brenson-go-b6934a161",
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

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 48, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[21rem] sm:max-w-sm"
        >
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-accent/20 bg-gradient-to-br from-accent/10 to-accent2/10" />
          <motion.figure
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, -0.6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.025, rotate: 0.5 }}
            className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
          >
            <img
              src="/images/profile/brenson-go.jpg"
              alt="Portrait of Brenson Go"
              className="aspect-[4/5] h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/25 via-transparent to-accent/5" />
          </motion.figure>
          <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
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
