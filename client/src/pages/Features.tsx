import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { features } from "../data/services";

export default function Features() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1).toLowerCase();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-28 pb-20 relative overflow-hidden select-none">
      
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-brand z-[9999] pointer-events-none"
      />

      
      <div className="space-y-16 w-full relative z-10">
        {features.map((feat) => {
          const isZwr = feat.id === "zwr";
          const subtitle = isZwr ? "WATER REPELLENT TREATMENT" : "ECO-FRIENDLY SOLUTIONS";

          return (
            <section
              key={feat.id}
              id={feat.id}
              className="scroll-mt-32 flex flex-col w-full"
            >
              
              <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 md:px-8">
                <div className="relative w-full h-[350px] sm:h-[440px] md:h-[530px] lg:h-[590px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl">
                  
                  <video
                    src={isZwr ? "/video/0a804172.mp4" : "/video/592ec493.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  
                  <div className="absolute inset-0 bg-black/40" />

                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center select-none z-10 gap-6">
                    <div className="w-[120px] overflow-hidden relative bg-transparent py-1 select-none pointer-events-none">
                      <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: "6s" }}>
                        <span className="font-display font-medium text-[10px] tracking-[0.25em] text-neutral-300/80 uppercase flex-shrink-0">
                          . FEATURES&nbsp;
                        </span>
                        <span className="font-display font-medium text-[10px] tracking-[0.25em] text-neutral-300/80 uppercase flex-shrink-0">
                          . FEATURES&nbsp;
                        </span>
                      </div>
                    </div>
                    <img
                      src={isZwr ? "/images/download (1).svg" : "/images/download.svg"}
                      alt={feat.name}
                      className="h-10 sm:h-12 md:h-16 w-auto object-contain brightness-200"
                    />

                    
                    <img
                      src={isZwr ? "/images/download (4).svg" : "/images/download (10).svg"}
                      alt=""
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-contain filter brightness-0 invert opacity-90 ${
                        !isZwr ? "animate-spin" : ""
                      }`}
                      style={!isZwr ? { animationDuration: "12s" } : undefined}
                    />
                  </div>
                </div>
              </div>

              
              <div className="max-w-[1600px] w-full mx-auto px-6 md:px-8 mt-12 mb-28 select-text text-left">
                <div className="max-w-4xl w-full">
                  <span className="text-neutral-400 font-display font-medium text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] uppercase">
                    {subtitle}
                  </span>

                  
                  <h2
                    className="font-outfit font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-relaxed tracking-wide text-white mt-5 select-none"
                    style={{ wordSpacing: '2px' }}
                  >
                    {isZwr ? (
                      <>
                        Our way of proposing Water Repellent treatment, in full compliance with the environment and international regulations. The water repellent component applied to the fabric is totally PFAS-free and ensures the garment's breathability and quick drying.
                      </>
                    ) : (
                      <>
                        We care about performance but also about the well-being of the environment and people, which is why we study increasingly eco-friendly and planet-friendly solutions.ZeroWind fabric lines can be produced with polyester yarns derived from recycled post-consumer materials, and are themselves recyclable at the end of their lives.                      </>
                    )}
                  </h2>

                  
                  <div className="mt-12 select-none">
                    <Link
                      to="/contact"
                      className="inline-block border border-[#e2de00] text-[#e2de00] hover:bg-[#e2de00] hover:text-black font-body font-normal tracking-wide px-8 py-3 rounded-full transition-all duration-300 text-xs sm:text-sm uppercase"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
