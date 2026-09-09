import { motion } from "framer-motion";
import { getTechIcon } from "../data/techIcons";

interface TechBadgeProps {
  name: string;
  delay?: number;
}

export default function TechBadge({ name, delay = 0 }: TechBadgeProps) {
  const Icon = getTechIcon(name);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay }}
      whileHover={{
        scale: 1.08,
        y: -2,
        backgroundColor: "rgba(34, 211, 238, 0.12)",
        borderColor: "rgba(34, 211, 238, 0.5)",
        color: "#fff",
      }}
      className="flex cursor-default items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300 transition-colors"
    >
      <Icon className="text-accent" size={13} />
      {name}
    </motion.span>
  );
}
