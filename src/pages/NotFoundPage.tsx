import { motion } from "framer-motion";
import { ArrowLeft, Home, Link2Off } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const credentialNames: Record<string, string> = {
  "lean-six-sigma": "Lean Six Sigma Yellow Belt Certification",
  "microsoft-azure": "Microsoft Azure Fundamentals",
  "introduction-to-ransomware": "Introduction to Ransomware Threats Certification",
};

export default function NotFoundPage() {
  const [searchParams] = useSearchParams();
  const credentialKey = searchParams.get("credential");
  const credentialName = credentialKey
    ? credentialNames[credentialKey]
    : undefined;

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-bg px-6 pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto w-full max-w-3xl"
      >
        <div className="mb-8 flex items-center gap-3 font-mono text-sm text-slate-500">
          <span className="h-px w-10 bg-accent" />
          route_status / 404
        </div>

        <div className="relative mb-8 inline-flex items-center">
          <span className="select-none text-[8rem] font-black leading-none tracking-[-0.1em] text-white/5 sm:text-[12rem]">
            404
          </span>
          <motion.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.5 }}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-accent/30 bg-bg/90 text-accent shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            <Link2Off size={30} />
          </motion.span>
        </div>

        <p className="mb-3 font-mono text-sm text-accent">
          {credentialName ? "credential_link.unavailable" : "page.not_found"}
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {credentialName ? "This credential is not online yet." : "This route leads nowhere."}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          {credentialName
            ? `The verification link for ${credentialName} is not currently available. The certification remains listed in Brenson’s portfolio.`
            : "The page may have moved, or the address may be incomplete. Let’s get you back to a working route."}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to={credentialName ? "/#certifications" : "/"}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
          >
            <ArrowLeft size={17} />
            {credentialName ? "Back to certifications" : "Back to home"}
          </Link>
          {credentialName && (
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              <Home size={17} />
              Go home
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
