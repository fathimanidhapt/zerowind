import { motion } from "framer-motion";

export default function Top() {
  return (
    <section className="relative w-full px-4 md:px-8 pt-28 pb-2">
      {/* SVG Morphology Filters for perfect overlap-free text outlines */}
      <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="outline-filter-yellow-mobile" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology in="SourceAlpha" result="dilated" operator="dilate" radius="0.5" />
            <feFlood flood-color="#e2de00" result="color" />
            <feComposite in="color" in2="dilated" operator="in" result="coloredOutline" />
            <feComposite in="coloredOutline" in2="SourceAlpha" operator="out" />
          </filter>
          <filter id="outline-filter-yellow-desktop" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology in="SourceAlpha" result="dilated" operator="dilate" radius="0.8" />
            <feFlood flood-color="#e2de00" result="color" />
            <feComposite in="color" in2="dilated" operator="in" result="coloredOutline" />
            <feComposite in="coloredOutline" in2="SourceAlpha" operator="out" />
          </filter>
        </defs>
      </svg>

      <div className="relative w-full h-[55vh] md:h-[70vh] min-h-[420px] md:min-h-[550px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 border border-white/5">
        {/* Background Video of Yellow Jacket */}
        <video
          src="/video/2428938f-9a312bd6.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
        />

        {/* Text Overlays - Outline Fonts */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between py-16 md:py-24">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24 flex flex-col justify-between h-full uppercase text-[14vw] md:text-[11vw] lg:text-[9vw] leading-[0.95] font-normal font-display">

            {/* BETTER - Aligned left */}
            <div className="text-left w-full transform origin-left scale-x-[1.25] tracking-tight">
              <span className="text-brand font-outline-2">BETTER</span>
            </div>

            {/* IN - Aligned right */}
            <div className="text-right w-full transform origin-right scale-x-[1.25] tracking-tight pr-4 md:pr-8">
              <span className="text-brand font-outline-2">IN</span>
            </div>

            {/* MOTION - Aligned right */}
            <div className="text-right w-full transform origin-right scale-x-[1.25] tracking-tight pr-4 md:pr-8">
              <span className="text-brand font-outline-2">MOTION</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
