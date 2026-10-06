import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { education, athletics, type FoundationItem } from "../data/foundation";

function Timeline({ items }: { items: FoundationItem[] }) {
  const hasLogos = items.some((item) => item.logo);

  return (
    <div
      className={`relative border-l border-white/10 pl-8 ${
        hasLogos ? "md:pl-36" : ""
      }`}
    >
      {items.map((item, i) => (
        <motion.div
          key={`${item.place}-${item.title}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative mb-12 last:mb-0"
        >
          <span
            className={`absolute top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(34,211,238,0.15)] ${
              hasLogos
                ? "-left-[calc(2rem+5px)] md:-left-[calc(9rem+5px)]"
                : "-left-[calc(2rem+5px)]"
            }`}
          />

          {item.logo && (
            <figure className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-lg shadow-black/20 md:absolute md:-left-28 md:top-0 md:mb-0 md:h-24 md:w-24 md:p-2.5">
              <img
                src={item.logo.src}
                alt={item.logo.alt}
                title={`${item.logo.alt} — ${item.logo.sourceLabel}`}
                className="h-full w-full object-contain"
              />
              <figcaption className="sr-only">{item.logo.sourceLabel}</figcaption>
            </figure>
          )}

          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-accent">{item.place}</p>
            </div>
            <span className="font-mono text-xs text-slate-500">
              {item.period}
            </span>
          </div>

          {item.facts && (
            <dl className="mt-4 flex flex-wrap gap-6">
              {item.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {item.description.length > 0 && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
              {item.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Foundation() {
  return (
    <section className="relative bg-surface py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-2 font-mono text-sm text-accent">Foundation</p>
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            What shaped who I am
          </h2>
          <p className="max-w-2xl text-slate-400">
            Long before I wrote my first line of code, I was learning
            discipline, teamwork, and how to perform under pressure on the
            mat. Cheerleading and my education are the foundation everything
            else in my career is built on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2"
        >
          <GraduationCap size={20} className="text-accent" />
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-white">
            Education
          </h3>
        </motion.div>
        <Timeline items={education} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-6 mt-16 flex items-center gap-2"
        >
          <Trophy size={20} className="text-accent" />
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-white">
            Cheerleading
          </h3>
        </motion.div>
        <Timeline items={athletics} />
      </div>
    </section>
  );
}
