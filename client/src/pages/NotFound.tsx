import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex items-center justify-center font-body px-6 select-none relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8ff00]/5 blur-[160px] pointer-events-none" />
      </div>

      <div className="text-center relative z-10 max-w-md">
        {/* Outline 404 Watermark */}
        <h1 
          className="text-[12rem] font-display font-black leading-none text-transparent tracking-tighter"
          style={{
            WebkitTextStroke: "2px #d8ff00",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        <h2 className="text-2xl font-display font-extrabold uppercase tracking-wider mt-4">
          PAGE NOT FOUND
        </h2>

        <p className="text-neutral-400 text-sm mt-4 leading-relaxed font-body">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-[#d8ff00] hover:text-[#d8ff00] text-sm font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 active:scale-95"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
