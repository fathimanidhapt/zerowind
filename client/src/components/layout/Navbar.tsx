import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [showFullName, setShowFullName] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const featTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTechMouseEnter = () => {
    if (techTimeoutRef.current) clearTimeout(techTimeoutRef.current);
    setShowTechnologies(true);
    setShowFeatures(false);
  };

  const handleTechMouseLeave = () => {
    techTimeoutRef.current = setTimeout(() => {
      setShowTechnologies(false);
    }, 150);
  };

  const handleFeatMouseEnter = () => {
    if (featTimeoutRef.current) clearTimeout(featTimeoutRef.current);
    setShowFeatures(true);
    setShowTechnologies(false);
  };

  const handleFeatMouseLeave = () => {
    featTimeoutRef.current = setTimeout(() => {
      setShowFeatures(false);
    }, 150);
  };

  const techCards = [
    { title: 'FIT', icon: '/images/download (9).svg', image: '/images/imgi_7_shutterstock-1022568799%401320x1020_r.jpeg.webp', colSpan: 1 },
    { title: 'MOTION', icon: '/images/download (2).svg', image: '/images/imgi_12_shutterstock-560580814%401320x1020_r.jpeg.webp', colSpan: 1 },
    { title: 'POWER', icon: '/images/download (3).svg', image: '/images/imgi_13_istock-155467403%401320x1020_r.jpeg.webp', colSpan: 1 },
    { title: 'BRAVE', icon: '/images/download (5).svg', image: '/images/imgi_15_shutterstock-2411698327%401320x1020_r.jpeg.webp', colSpan: 1 },
    { title: 'VAPORA', icon: '/images/download (6).svg', image: '/images/imgi_18_vaporapreview%401320x1020_r.jpeg.webp', colSpan: 2 },
  ];

  const featureCards = [
    { title: 'ZWR', icon: '/images/download (4).svg', image: '/images/download (1).svg' },
    { title: 'RELIFE', icon: '/images/download (10).svg', image: '/images/download.svg' },
  ];

  const anyDropdownOpen = showTechnologies || showFeatures || showMenu;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-start transition-all duration-500 ${
      anyDropdownOpen ? 'bg-[#222222] h-[110px] pointer-events-auto shadow-lg' : 'bg-transparent pointer-events-none'
    }`}>
      
      <div className={`h-[110px] flex items-center pl-6 md:pl-12 pr-12 md:pr-16 transition-all duration-500 pointer-events-auto relative z-20 ${
        !anyDropdownOpen ? 'bg-[#222222] rounded-br-[40px] shadow-lg' : 'bg-transparent'
      }`}>
        <button
          onMouseEnter={() => setShowFullName(true)}
          onMouseLeave={() => setShowFullName(false)}
          onClick={() => setShowFullName(!showFullName)}
          className="flex items-center cursor-pointer border-none bg-transparent p-0 relative z-20"
        >
          <img
            src={showFullName ? "/images/download (7).svg" : "/images/download (8).svg"}
            alt="ZeroWind Logo"
            className="h-8 md:h-10 transition-all duration-300"
          />
        </button>
      </div>

      
      <div className="relative pointer-events-auto flex flex-col items-end z-20">
        
        <div className={`h-[110px] flex items-center pl-12 md:pl-16 pr-6 md:pr-12 gap-8 md:gap-12 transition-all duration-500 ${
          !anyDropdownOpen ? 'bg-[#222222] rounded-bl-[40px] shadow-lg' : 'bg-transparent'
        }`}>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => {
                setShowTechnologies(!showTechnologies);
                setShowFeatures(false);
              }}
              onMouseEnter={handleTechMouseEnter}
              onMouseLeave={handleTechMouseLeave}
              className={`flex items-center gap-1.5 font-bold text-[13px] tracking-widest transition-colors uppercase border-none bg-transparent p-0 cursor-pointer ${showTechnologies ? 'text-white' : 'text-[#dfff00] hover:text-white'}`}
            >
              Technologies <span className="text-lg leading-none font-medium mt-[-2px]">+</span>
            </button>
            <Link
              to="/features"
              onMouseEnter={handleFeatMouseEnter}
              onMouseLeave={handleFeatMouseLeave}
              className={`flex items-center gap-1.5 font-bold text-[13px] tracking-widest transition-colors uppercase ${showFeatures ? 'text-white' : 'text-[#dfff00] hover:text-white'}`}
            >
              Features <span className="text-lg leading-none font-medium mt-[-2px]">+</span>
            </Link>
          </div>

          
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex justify-center items-center w-8 h-8 group cursor-pointer border-none bg-transparent ml-2 md:ml-6"
          >
            {showMenu ? (
              <div className="flex flex-row gap-[6px]">
                <span className="w-[1.5px] h-[22px] bg-white group-hover:bg-[#dfff00] transition-colors"></span>
                <span className="w-[1.5px] h-[22px] bg-white group-hover:bg-[#dfff00] transition-colors"></span>
                <span className="w-[1.5px] h-[22px] bg-white group-hover:bg-[#dfff00] transition-colors"></span>
              </div>
            ) : (
              <div className="flex flex-col gap-[6px] w-full items-center">
                <span className="w-8 h-[1.5px] bg-[#dfff00] group-hover:bg-white transition-colors"></span>
                <span className="w-8 h-[1.5px] bg-[#dfff00] group-hover:bg-white transition-colors"></span>
                <span className="w-8 h-[1.5px] bg-[#dfff00] group-hover:bg-white transition-colors"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {showTechnologies && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={handleTechMouseEnter}
            onMouseLeave={handleTechMouseLeave}
            className="absolute top-[110px] right-0 w-full md:w-[36%] md:min-w-[480px] bg-[#222222] shadow-2xl z-40 overflow-hidden rounded-bl-3xl pointer-events-auto"
          >
            <div className="w-full pt-6 pb-6 px-6 flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                {techCards.map((card, idx) => {
                  const path = `/technology/${card.title.toLowerCase()}`;
                  return (
                    <Link
                      to={path}
                      key={idx}
                      onClick={(e) => {
                        setShowTechnologies(false);
                        if (card.title === 'FIT') {
                          e.preventDefault();
                          window.dispatchEvent(
                            new CustomEvent("tech-transition", {
                              detail: { to: path, color: "#dfff00" }
                            })
                          );
                        }
                      }}
                      className={`relative rounded-xl overflow-hidden cursor-pointer group block bg-black ${card.colSpan === 2 ? 'col-span-2 aspect-[24/8]' : 'col-span-1 aspect-[16/9]'}`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/45 group-hover:bg-[#dfff00]/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <img
                          src={card.icon}
                          alt={`${card.title} Logo`}
                          className={`w-auto object-contain filter brightness-200 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] ${
                            card.title === 'FIT' || card.title === 'VAPORA'
                              ? "h-6 md:h-8"
                              : "h-10 md:h-12"
                          }`}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
              <p className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-center max-w-sm px-2">
                Select one of our outdoor fabrics and discover its technical characteristics.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {showFeatures && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={handleFeatMouseEnter}
            onMouseLeave={handleFeatMouseLeave}
            className="absolute top-[110px] right-0 w-full md:w-[36%] md:min-w-[480px] bg-[#222222] shadow-2xl z-40 overflow-hidden rounded-bl-3xl pointer-events-auto"
          >
            <div className="w-full pt-8 pb-8 px-8 flex flex-col items-center">
              <div className="flex flex-col gap-6 w-full mb-8">
                {featureCards.map((card, idx) => (
                  <Link
                    to={`/features#${card.title.toLowerCase()}`}
                    key={idx}
                    onClick={() => {
                      setShowFeatures(false);
                      if (window.location.pathname === '/features') {
                        const el = document.getElementById(card.title.toLowerCase());
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="relative w-full rounded-3xl border border-white/20 p-8 flex flex-row items-center gap-8 cursor-pointer group bg-[#222222] hover:bg-[#1a1a1a] hover:border-white/40 transition-all duration-300"
                  >
                    <img
                      src={card.icon}
                      alt={`${card.title} icon`}
                      className={`w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-500 group-hover:scale-110 shrink-0 ${
                        card.title === 'RELIFE' ? 'animate-spin' : ''
                      }`}
                      style={
                        card.title === 'RELIFE'
                          ? { animationDuration: '12s' }
                          : { filter: 'invert(1) brightness(2)' }
                      }
                    />
                    <div className="flex flex-col items-start gap-2 text-left">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full max-w-[160px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <p className="text-white/80 font-display font-semibold text-xs tracking-wider uppercase">
                        {card.title === 'ZWR' ? 'WATER REPELLENT TREATMENT' : 'ECO-FRIENDLY SOLUTIONS'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-center max-w-sm px-2 leading-relaxed">
                SELECT ONE OF OUR FEATURES AND DISCOVER ITS TECHNICAL CHARACTERISTICS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-[110px] right-0 w-full sm:w-[480px] md:w-[24%] md:min-w-[320px] bg-[#222222] shadow-2xl z-40 overflow-y-auto max-h-[calc(100vh-110px)] rounded-bl-3xl pointer-events-auto"
          >
            <div className="w-full pt-10 pb-12 px-10 flex flex-col items-start">
              <div className="flex flex-col items-start gap-10 w-full mb-12">
                
                {/* 1. TECHNOLOGY SECTION (Mobile only) */}
                <div className="w-full border-b border-white/5 pb-8 md:hidden">
                  <h3 className="text-white text-left text-xs font-bold tracking-[0.3em] uppercase mb-6 font-display">
                    Technology
                  </h3>
                  <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
                    {techCards.map((card, idx) => {
                      const path = `/technology/${card.title.toLowerCase()}`;
                      return (
                        <Link
                          to={path}
                          key={idx}
                          onClick={() => setShowMenu(false)}
                          className={`relative rounded-xl overflow-hidden cursor-pointer group block bg-black ${card.colSpan === 2 ? 'col-span-2 aspect-[24/8]' : 'col-span-1 aspect-[16/10]'}`}
                        >
                          <img
                            src={card.image}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-black/45 group-hover:bg-[#dfff00]/20 transition-colors duration-300"></div>
                          
                          {/* Brand styled title overlay */}
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <span className="text-white font-display font-black uppercase text-xl md:text-2xl tracking-[0.1em] italic select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                              {card.title}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* 2. FEATURES SECTION (Mobile only) */}
                <div className="w-full border-b border-white/5 pb-8 md:hidden">
                  <h3 className="text-white text-left text-xs font-bold tracking-[0.3em] uppercase mb-6 font-display">
                    Features
                  </h3>
                  <div className="flex flex-col gap-4 w-full max-w-xl">
                    {featureCards.map((card, idx) => (
                      <Link
                        to={`/features#${card.title.toLowerCase()}`}
                        key={idx}
                        onClick={() => {
                          setShowMenu(false);
                          if (window.location.pathname === '/features') {
                            const el = document.getElementById(card.title.toLowerCase());
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        className="relative w-full rounded-2xl border border-white/10 p-5 flex flex-row items-center gap-6 cursor-pointer group bg-[#1e1e1e] hover:bg-[#151515] hover:border-white/30 transition-all duration-300"
                      >
                        <img
                          src={card.icon}
                          alt={`${card.title} icon`}
                          className={`w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110 shrink-0 ${
                            card.title === 'RELIFE' ? 'animate-spin' : ''
                          }`}
                          style={
                            card.title === 'RELIFE'
                              ? { animationDuration: '12s' }
                              : { filter: 'invert(1) brightness(2)' }
                          }
                        />
                        <div className="flex flex-col items-start gap-1 text-left">
                          <span className="text-white font-display font-extrabold uppercase text-sm tracking-wider">
                            {card.title}
                          </span>
                          <p className="text-white/60 font-body text-[10px] tracking-wider uppercase">
                            {card.title === 'ZWR' ? 'WATER REPELLENT TREATMENT' : 'ECO-FRIENDLY SOLUTIONS'}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 3. LINKS SECTION */}
                <div className="flex flex-col items-start gap-6 w-full pt-4">
                  <Link to="/" onClick={() => setShowMenu(false)} className="text-white text-4xl md:text-5xl font-black uppercase tracking-wider hover:text-[#dfff00] transition-colors" style={{ fontFamily: '"Arial Black", "Impact", sans-serif', lineHeight: '1' }}>
                    HOME
                  </Link>
                  <Link to="/news" onClick={() => setShowMenu(false)} className="text-white text-4xl md:text-5xl font-black uppercase tracking-wider hover:text-[#dfff00] transition-colors" style={{ fontFamily: '"Arial Black", "Impact", sans-serif', lineHeight: '1' }}>
                    NEWS
                  </Link>
                  <Link to="/contacts" onClick={() => setShowMenu(false)} className="text-white text-4xl md:text-5xl font-black uppercase tracking-wider hover:text-[#dfff00] transition-colors" style={{ fontFamily: '"Arial Black", "Impact", sans-serif', lineHeight: '1' }}>
                    CONTACTS
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[14px] font-bold tracking-widest uppercase w-full justify-start mt-2">
                <button className="text-gray-400 hover:text-white transition-colors">IT</button>
                <span className="text-gray-500 mb-1">.</span>
                <button className="text-[#dfff00] transition-colors">EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;