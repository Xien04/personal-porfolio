import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/foundation";

export default function EducationPreview() {
  const featuredEducation = education[0];

  if (!featuredEducation) return null;

  return (
    <section id="education" className="relative overflow-hidden bg-bg py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <div>
            <p className="mb-2 font-mono text-sm text-accent">Education</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The foundation behind my work
            </h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-slate-600 sm:block">
            Academic record / 01
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/20 lg:grid-cols-[1.15fr_0.85fr]">
            {featuredEducation.image && (
              <figure className="relative min-h-80 overflow-hidden lg:min-h-[28rem]">
                <img
                  src={featuredEducation.image.src}
                  alt={featuredEducation.image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface" />
                <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-bg/70 px-3 py-1 font-mono text-[10px] text-slate-300 backdrop-blur-md">
                  {featuredEducation.image.sourceLabel}
                </figcaption>
              </figure>
            )}

            <div className="relative p-8 sm:p-10 lg:p-12">
              <div>
                <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={25} />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {featuredEducation.period}
                </p>
                <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {featuredEducation.title}
                </h3>
                <p className="mt-4 max-w-md leading-7 text-slate-400">
                  {featuredEducation.place}
                </p>

                {featuredEducation.facts && (
                  <dl className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-6">
                    {featuredEducation.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-2xl font-bold text-white">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
