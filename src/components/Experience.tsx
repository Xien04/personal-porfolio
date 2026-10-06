import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/experience";
import TechBadge from "./TechBadge";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-surface py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 font-mono text-sm text-accent">Experience</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Where I've worked
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400 sm:text-right">
            Building business systems, leading development teams, and turning
            operational challenges into dependable software.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, i) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 30, x: i % 2 === 0 ? -18 : 18 }
              }
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg/70 shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-colors duration-500 hover:border-accent/30"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-accent to-accent2 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transform-none" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent2/0 blur-3xl transition-colors duration-500 group-hover:bg-accent2/10" />

              <div className="grid lg:grid-cols-[18rem_minmax(0,1fr)]">
                <div className="relative flex min-h-48 items-center justify-center overflow-hidden border-b border-black/10 bg-white p-10 lg:min-h-full lg:border-b-0 lg:border-r">
                  <span className="absolute left-5 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Company
                  </span>
                  <span className="absolute bottom-1 right-4 font-mono text-6xl font-black tracking-tighter text-slate-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <motion.img
                    src={item.logo}
                    alt={item.logoAlt}
                    loading="lazy"
                    className="relative z-10 max-h-28 w-full max-w-[13rem] object-contain drop-shadow-sm"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 1.06, rotate: i % 2 === 0 ? -1 : 1 }
                    }
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  />
                </div>

                <div className="relative p-7 sm:p-9 lg:p-10">
                  <div className="mb-7 flex flex-col gap-4 border-b border-white/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-2 text-sm font-medium text-accent">
                        {item.company}
                      </p>
                      <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {item.role}
                      </h3>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                        Tenure
                      </span>
                      <p className="mt-1 font-mono text-xs text-slate-400">
                        {item.period}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm leading-6 text-slate-400">
                    {item.description.map((line, idx) => (
                      <li key={idx} className="relative pl-5">
                        <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-accent/70 shadow-[0_0_10px_rgba(34,211,238,0.45)]" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <TechBadge
                        key={tag}
                        name={tag}
                        delay={i * 0.08 + j * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
