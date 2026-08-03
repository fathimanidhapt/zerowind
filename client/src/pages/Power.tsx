import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";
import { products } from "../data/products";

export default function Power() {
  const tech = services.find((t) => t.id === "power") || services[2];
  const relatedProducts = products.filter((p) => p.technologyId === "power");
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [showSideWatermark, setShowSideWatermark] = useState(false);

  const getIconUrl = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("wind") || lower.includes("storm")) {
      return "/images/imgi_9_Livello-1-4.svg";
    }
    if (lower.includes("breathability") || lower.includes("evacuation")) {
      return "/images/imgi_10_Group3-2_1.svg";
    }
    if (lower.includes("thermoregulation") || lower.includes("microclimate") || lower.includes("warmth")) {
      return "/images/imgi_11_Livello-1-6_1.svg";
    }
    if (lower.includes("fit") || lower.includes("excellent")) {
      return "/images/imgi_14_icon-55.svg";
    }
    return "/images/imgi_8_icon-334.svg";
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById("power-details");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }

      const scrollPos = window.scrollY;
      const heroHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Show after scrolling past 40% of hero, hide when approaching bottom sections
      const showThreshold = heroHeight * 0.4;
      const hideThreshold = docHeight - viewportHeight - 850;

      if (scrollPos > showThreshold && scrollPos < hideThreshold) {
        setShowSideWatermark(true);
      } else {
        setShowSideWatermark(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen relative overflow-hidden select-none">
      
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-brand z-[9999] pointer-events-none"
      />

      
      <AnimatePresence>
        {showSideWatermark && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed left-[-170px] sm:left-[-150px] md:left-[-125px] top-[50vh] z-0 select-none pointer-events-none transform origin-center -rotate-90"
          >
            <img
              src="/images/download (3).svg"
              alt="POWER Watermark"
              className="h-10 sm:h-13 md:h-17 w-auto object-contain brightness-[0.5] opacity-15"
            />
          </motion.div>
        )}
      </AnimatePresence>

      
      <div className="relative w-full h-screen flex flex-col justify-between items-center text-center p-6 bg-black overflow-hidden">
        
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/1009789176/rendition/1080p/file.mp4?loc=external&signature=3bac940fa50c5c610928197c3bbc3bae2612918994bd93b949a537591c2ab240"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        
        <div className="absolute inset-0 bg-black/15 z-0" />

        
        <div className="h-24 w-full" />

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 4.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center space-y-2 w-full max-w-xl px-6"
        >
          <span className="text-[11px] tracking-[0.45em] text-neutral-400 font-display font-semibold uppercase">
            TECHNOLOGY
          </span>
          <img
            src="/images/download (3).svg"
            alt="POWER Logo"
            className="w-[200px] sm:w-[280px] md:w-[380px] h-auto object-contain brightness-200 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 1 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showScrollIndicator ? "auto" : "none" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer bg-transparent border-none p-0 flex flex-col items-center justify-center"
        >
          <span className="font-display font-semibold text-[10px] tracking-[0.3em] text-white/60 uppercase hover:text-brand transition-colors">
            Scroll
          </span>
        </motion.button>
      </div>

      
      <div id="power-details" className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">

        
        <div className="relative pl-0 md:pl-48 mb-20 w-full">
          
          <h3 className="font-display font-black text-2xl md:text-4xl md:leading-[1.3] text-white tracking-normal max-w-3xl">
            {tech.description}
          </h3>
        </div>

        
        <div className="pl-0 md:pl-48 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28 max-w-4xl">
            {tech.specifications.map((spec, idx) => {
              const specLabels: Record<string, string> = {
                "Waterproofness": "Waterproofness",
                "Total Wind Protection": "Total wind protection",
                "High Breathability": "High breathability",
                "Thermoregulation": "Thermoregulation",
              };
              const displayLabel = specLabels[spec.title] || spec.title;

              return (
                <div
                  key={idx}
                  className="border border-[#dfff00]/25 rounded-xl bg-neutral-900/10 p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-[#dfff00]/50 hover:bg-neutral-900/30 transition-all duration-300 min-h-[170px]"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img
                      src={getIconUrl(spec.title)}
                      alt={spec.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="font-display font-medium text-xs md:text-sm text-neutral-200 tracking-wider">
                    {displayLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        
        <div className="pl-0 md:pl-48 mb-28 w-full">
          <div className="max-w-4xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-body font-light"
            >
              3-layer fabrics with performances guaranteed by a proven, totally PFAS-free windproof treatment enclosed between two fabrics to create reliable, high-performance garments in a wide range of weights.
            </motion.p>
          </div>
        </div>

        
        <div className="mb-28 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 w-full">
            
            <div className="w-full md:w-[65%] md:max-w-[650px] relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl shrink-0">
              <video
                src="https://player.vimeo.com/progressive_redirect/playback/1015612271/rendition/1080p/file.mp4?loc=external&signature=df66b2fc738e91b98ea2bd4af58a18575914c6a789b4472ef9870e04a7679fae"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-6 sm:top-8 left-0 right-0 z-10 text-center px-4">
              </div>
            </div>

            
            <div className="flex flex-col items-center justify-center text-center space-y-3.5 p-6 shrink-0 md:pr-4">
              <span className="text-[#dfff00] font-display font-medium text-[9px] sm:text-[10px] tracking-[0.25em] uppercase">
                GRAMS
              </span>
              <h2 className="text-[#dfff00] font-display font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-wide leading-none select-none">
                100 a 300
              </h2>
              <span className="text-[#dfff00] font-display font-normal text-[9px] sm:text-[10px] tracking-widest">
                gr/m2
              </span>
            </div>
          </div>
        </div>

        
        {relatedProducts.length > 0 && (
          <div className="flex flex-col items-center justify-center w-full mt-24">
            
            <div className="w-full flex justify-center mb-16 select-none bg-transparent">
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

            
            <div className="flex flex-col items-center justify-center gap-12 md:gap-16 w-full">
              {relatedProducts.map((prod) => {
                const isActive = activeProductId === prod.id;

                return (
                  <div
                    key={prod.id}
                    onMouseEnter={() => setActiveProductId(prod.id)}
                    onMouseLeave={() => setActiveProductId(null)}
                    onClick={() => setActiveProductId(isActive ? null : prod.id)}
                    className="w-full flex justify-center cursor-pointer select-none"
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl w-full ${isActive ? "bg-neutral-900/10 p-8 rounded-3xl" : "py-4"
                        }`}
                    >
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, x: -80, y: -80 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, x: -80, y: -80 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="w-full md:w-[400px] bg-black rounded-2xl p-8 flex flex-col justify-between text-left h-auto md:h-[400px] shadow-2xl shrink-0"
                          >
                            <div className="space-y-6 flex-grow flex flex-col justify-between">
                              <div className="space-y-6">
                                <h3 className="font-display font-bold text-2xl text-white leading-tight">
                                  {prod.name}
                                </h3>

                                
                                <div className="flex items-center gap-8">
                                  <div className="space-y-1.5">
                                    <span className="text-[9px] tracking-wider text-neutral-500 font-display font-semibold uppercase">
                                      TECHNOLOGY
                                    </span>
                                    <img
                                      src="/images/download (3).svg"
                                      alt="POWER"
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
                                  Custom product exclusively for customer. {prod.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      
                      <motion.div
                        layout
                        className={`relative w-full max-w-[220px] md:max-w-[300px] flex-shrink-0 group transition-all duration-500 flex items-center justify-center ${isActive ? "md:max-w-[360px]" : ""
                          }`}
                      >
                        <motion.img
                          src={prod.image}
                          alt={prod.name}
                          animate={{ scale: isActive ? 1.15 : 1, x: isActive ? -40 : 0 }}
                          transition={{ type: "spring", stiffness: 150, damping: 20 }}
                          className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      
      <section className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center text-center bg-transparent">
        <h3 className="font-body text-white text-base md:text-lg lg:text-[20px] max-w-xl font-light leading-relaxed tracking-wider mb-8">
          Request expert advice on our products and technologies.
        </h3>
        <Link
          to="/contact"
          className="px-8 py-3.5 border border-[#e2de00] text-[#e2de00] rounded-full font-display uppercase text-xs tracking-widest hover:bg-[#e2de00] hover:text-black transition-all duration-300"
        >
          Contact us
        </Link>
      </section>

      
      <section className="relative w-full px-4 md:px-8 pt-10 md:pt-14 pb-24 flex justify-center bg-transparent">
        <Link
          to="/technology/brave"
          className="relative w-full max-w-[1400px] h-[350px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center group border border-white/5"
        >
          
          <img
            src="/images/imgi_15_shutterstock-2411698327%401320x1020_r.jpeg.webp"
            alt="Discover Brave"
            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-6 select-none">
            <span className="font-body text-white text-[10px] sm:text-xs font-light tracking-[0.4em] uppercase text-white/80">
              DISCOVER THE
            </span>
            <img
              src="/images/download (5).svg"
              alt="BRAVE"
              className="h-10 sm:h-14 md:h-18 w-auto object-contain brightness-200 opacity-100"
            />
            <span className="font-body text-white text-[10px] sm:text-xs font-light tracking-[0.4em] uppercase text-white/80">
              TECHNOLOGY
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
