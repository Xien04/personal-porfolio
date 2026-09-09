import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-surface py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-accent">05. Contact</p>
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Let's work together
          </h2>
          <p className="mb-10 text-slate-400">
            I'm currently open to new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:gobrenson28@gmail.com"
            className="inline-block rounded-lg bg-gradient-to-r from-accent to-accent2 px-8 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-transform hover:scale-105"
          >
            Say Hello
          </a>

          <div className="mt-10 flex items-center justify-center gap-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
