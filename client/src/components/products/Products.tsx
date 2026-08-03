import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const activeProduct = products[activeIndex];

  // Map technology text badge to exact label uppercase
  const getTechLabel = (techId: string) => {
    if (techId === "fit") return "FIT";
    if (techId === "motion") return "MOTION";
    if (techId === "power") return "POWER";
    if (techId === "brave") return "BRAVE";
    return techId.toUpperCase();
  };

  const getTechIconUrl = (techId: string) => {
    if (techId === "fit") return "/images/download (9).svg";
    if (techId === "motion") return "/images/download (2).svg";
    if (techId === "power") return "/images/download (3).svg";
    if (techId === "brave") return "/images/download (5).svg";
    if (techId === "vapora") return "/images/download (6).svg";
    return "/images/download (9).svg";
  };

  return (
    <section className="relative h-[780px] w-full flex flex-col justify-between overflow-hidden bg-transparent py-20 my-16 md:my-28 font-body">

      
      <div className="w-full flex justify-center mt-2 mb-2 select-none bg-transparent">
        <div className="w-[230px] overflow-hidden relative bg-transparent py-1">
          <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: "8s" }}>
            <span className="font-display font-medium text-xs tracking-[0.3em] text-neutral-500 uppercase flex-shrink-0">
              DISCOVER PRODUCTS.
            </span>
            <span className="font-display font-medium text-xs tracking-[0.3em] text-neutral-500 uppercase flex-shrink-0">
              DISCOVER PRODUCTS.
            </span>
          </div>
        </div>
      </div>

      
      <div
        onMouseEnter={() => setIsDetailsOpen(true)}
        onMouseLeave={() => setIsDetailsOpen(false)}
        className="relative flex-grow flex items-center justify-center w-full px-6 md:px-12 py-4 mt-8"
      >

        
        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none select-none">
          <AnimatePresence>
            <motion.div
              key={`watermark-home-${activeProduct.id}`}
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 150 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute font-display font-black text-[11vw] uppercase leading-none tracking-[0.05em] text-center select-none transition-colors duration-300 ${isDetailsOpen ? "text-[#e2de00]" : "text-transparent"
                }`}
              style={
                isDetailsOpen
                  ? ({ WebkitTextFillColor: "#e2de00" } as React.CSSProperties)
                  : ({
                    WebkitTextStroke: "1.5px #b0ad00",
                    WebkitTextFillColor: "transparent",
                  } as React.CSSProperties)
              }
            >
              {activeProduct.name}
            </motion.div>
          </AnimatePresence>
        </div>

        
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex items-center gap-4 pointer-events-none">
          <AnimatePresence>
            {isDetailsOpen && (
              <motion.div
                initial={{ opacity: 0, x: -80, y: -80 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -80, y: -80 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full md:w-[400px] bg-black rounded-2xl p-8 flex flex-col justify-between text-left h-auto md:h-[400px] shadow-2xl shrink-0 pointer-events-auto"
              >
                <div className="space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="font-display font-bold text-2xl text-white leading-tight">
                      {activeProduct.name}
                    </h3>

                    
                    <div className="flex items-center gap-8">
                      <div className="space-y-1.5">
                        <span className="text-[9px] tracking-wider text-neutral-500 font-display font-semibold uppercase">
                          TECHNOLOGY
                        </span>
                        <img
                          src={getTechIconUrl(activeProduct.technologyId)}
                          alt={getTechLabel(activeProduct.technologyId)}
                          className="h-6 w-auto object-contain brightness-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[9px] tracking-wider text-neutral-500 font-display font-semibold uppercase">
                          FEATURE
                        </span>
                        <img
                          src="/images/download (1).svg"
                          alt="ZWR"
                          className="h-6 w-auto object-contain brightness-200"
                        />
                      </div>
                    </div>

                    
                    <p className="text-neutral-300 text-xs md:text-sm font-body leading-relaxed font-normal">
                      {activeProduct.description}
                    </p>

                    
                    <p className="text-neutral-300 text-xs md:text-sm font-body leading-relaxed font-normal mt-4">
                      For temperatures from {activeProduct.tempRange}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        
        <Link
          to={`/product/${activeProduct.id}`}
          className="relative flex items-center justify-center w-full max-w-xl h-[300px] md:h-[400px] z-10 pointer-events-auto cursor-pointer hover:scale-[1.03] active:scale-95 transition-transform duration-300 select-none"
        >
          <AnimatePresence>
            <motion.img
              key={activeProduct.id}
              src={activeProduct.image}
              alt={activeProduct.name}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-105"
            />
          </AnimatePresence>
        </Link>
      </div>

      
      <div className="w-full bg-transparent py-4 px-6 z-20 flex flex-col items-center shrink-0">
        <div className="flex justify-start md:justify-center items-center w-full gap-8 overflow-x-auto no-scrollbar max-w-5xl">
          {products.map((p, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <div key={p.id} className="relative shrink-0 pt-3">
                <button
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  className={`relative w-20 h-20 md:w-24 md:h-24 p-3 rounded-2xl bg-neutral-900/40 border transition-all duration-300 flex items-center justify-center cursor-pointer ${isSelected
                      ? "border-brand shadow-[0_0_12px_rgba(226,238,0,0.2)] bg-neutral-900/80"
                      : "border-white/5 hover:border-white/20"
                    }`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain filter brightness-105"
                  />
                </button>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
