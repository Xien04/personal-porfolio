import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-accent">About</p>
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            A bit about me
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>
              I'm a Software Engineer and Business Systems Developer
              transitioning into data engineering. I enjoy building reliable
              applications, integrating APIs, automating data workflows, and
              turning complex requirements into practical, well-crafted
              solutions.
            </p>
            <p>
              My experience includes REST APIs, Python, SQL, JSON processing,
              data transformation, workflow automation, error handling, and
              system-to-system synchronization. I'm currently deepening my
              expertise in ETL/ELT pipelines, data modeling, cloud platforms,
              and modern data engineering technologies.
            </p>
            <p>
              Outside of coding, I enjoy exploring new tools, learning about
              system design, and working on side projects that challenge me to
              build something new.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
