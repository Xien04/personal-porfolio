import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import TechBadge from "./TechBadge";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-surface py-28">
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 animate-blob rounded-full bg-accent2/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/5 h-80 w-80 animate-blob rounded-full bg-accent/20 blur-3xl [animation-delay:4s]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm text-accent">03. Skills</p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tools &{" "}
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
              technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-xl border border-white/5 bg-bg/60 p-6 shadow-lg shadow-black/20 transition-colors hover:border-accent/40 hover:shadow-accent/10"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <li key={item}>
                    <TechBadge name={item} delay={i * 0.08 + j * 0.06} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
