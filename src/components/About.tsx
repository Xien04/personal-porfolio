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
          <p className="mb-2 font-mono text-sm text-accent">01. About</p>
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            A bit about me
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>
              I'm a software developer who enjoys turning ideas into fast,
              reliable, and well-crafted products. I care about clean code,
              thoughtful UX, and the details that make an interface feel
              effortless to use.
            </p>
            <p>
              Outside of writing code, I like exploring new tools, reading up
              on system design, and contributing to side projects that push
              me to learn something new.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
