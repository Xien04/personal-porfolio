export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg py-8">
      <div className="mx-auto max-w-5xl px-6 text-center font-mono text-xs text-slate-500">
        <p>Designed & built by Brenson · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
