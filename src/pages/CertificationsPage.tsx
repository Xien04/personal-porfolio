import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Certifications from "../components/Certifications";

export default function CertificationsPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
      <Certifications />
    </div>
  );
}
