import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const active = products[activeIndex];

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % products.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );

  return (
    <section
      onMouseMove={(e)=>{
        const x=(e.clientX/window.innerWidth-.5)*40;
        const y=(e.clientY/window.innerHeight-.5)*40;
        setMouse({x,y});
      }}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-[#161616] via-[#222222] to-[#101010] text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8ff00]/10 blur-[180px]" />
      </div>

      {/* Vertical Label */}
      <div
        className="
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          -rotate-90
          origin-left
          uppercase
          tracking-[0.45em]
          text-xs
          text-white/30
          z-30
          pointer-events-none
          select-none
        "
      >
        ZEROWIND COLLECTION
      </div>

      {/* Decorative Numbers */}
      <div className="absolute right-16 top-28 text-right z-30 pointer-events-none select-none">
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          Collection
        </p>
        <p className="mt-2 text-2xl font-bold">
          2026
        </p>
      </div>

      {/* Product Counter */}
      <div className="absolute right-16 top-1/2 z-30 -translate-y-1/2 text-right">
        <p className="text-7xl font-black">
          {String(activeIndex + 1).padStart(2, "0")}
        </p>
        <p className="text-white/40">
          / {String(products.length).padStart(2, "0")}
        </p>
      </div>

      {/* Huge Outline Text */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={active.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 0.08, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            pointer-events-none
            whitespace-nowrap
            font-black
            uppercase
            tracking-[-0.08em]
            text-[18vw]
            text-transparent
            z-0
          "
          style={{
            WebkitTextStroke: "2px rgba(216,255,0,.45)",
          }}
        >
          {active.name}
        </motion.h1>
      </AnimatePresence>

      {/* Main Product */}
      <Link
        to={`/product/${active.id}`}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.image}
            alt={active.name}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mouse.x,
              y: mouse.y
            }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
            w-[900px]
            2xl:w-[980px]
            object-contain
            drop-shadow-[0_80px_120px_rgba(0,0,0,.85)]
            "
          />
        </AnimatePresence>
      </Link>
      {/* Left Content */}
      <div className="absolute left-16 top-1/2 z-30 w-[380px] -translate-y-1/2">

        <motion.div
          key={active.id}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d8ff00]">
            Performance Outerwear
          </p>

          <h2 className="mb-6 text-5xl font-black uppercase leading-none">
            {active.name}
          </h2>

          <p className="mb-8 text-base leading-8 text-white/70">
            {active.description}
          </p>

          <div className="space-y-5">

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
                Temperature
              </p>

              <p className="font-semibold text-xl">
                {active.tempRange}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
                Highlights
              </p>

              <ul className="space-y-2 text-white/80">
                {active.highlights?.map((item, index) => (
                  <li key={index}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
      {/* Navigation */}
      {/* Bottom Product Strip */}
      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-5">

        <button
          onClick={prev}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 hover:border-[#d8ff00]"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

          {products.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`group transition-all duration-300 ${activeIndex === index ? "scale-110" : "opacity-50 hover:opacity-100"
                }`}
            >
              <div
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${activeIndex === index
                    ? "border-[#d8ff00]"
                    : "border-white/10"
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-contain bg-[#2b2b2b] p-2"
                />
              </div>

              <p
                className={`mt-2 text-center text-[11px] uppercase tracking-[0.25em] ${activeIndex === index
                    ? "text-[#d8ff00]"
                    : "text-white/50"
                  }`}
              >
                {item.name}
              </p>
            </button>
          ))}

        </div>

        <button
          onClick={next}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 hover:border-[#d8ff00]"
        >
          <ChevronRight size={20} />
        </button>

      </div>
      {/* Bottom Fade */}
      <div className="
        absolute
        bottom-0
        left-0
        w-full
        h-40
        bg-gradient-to-t
        from-black
        to-transparent
        pointer-events-none
        z-30
      "/>
    </section>
  );
}