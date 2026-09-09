import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { education, athletics, type FoundationItem } from "../data/foundation";

function Timeline({ items }: { items: FoundationItem[] }) {
  return (
    <div className="relative border-l border-white/10 pl-8">
      {items.map((item, i) => (
        <motion.div
          key={`${item.place}-${item.title}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative mb-12 last:mb-0"
        >
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />

          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-white">
              {item.title} <span className="text-accent">@ {item.place}</span>
            </h3>
            <span className="font-mono text-xs text-slate-500">
              {item.period}
            </span>
          </div>

          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
            {item.description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
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
