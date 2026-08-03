import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram } from "lucide-react";
import { services, features } from "../../data/services";
import { CORPORATE_INFO } from "../../utils/constants";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to the ZeroWind newsletter!");
  };

  return (
    <footer className="bg-[#e2de00] text-black pt-16 pb-8 overflow-hidden">
      
      <div className="py-2 mb-36 overflow-hidden select-none bg-transparent">
        <div className="animate-marquee whitespace-nowrap flex space-x-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="font-display font-extrabold text-7xl md:text-[120px] lg:text-[150px] uppercase tracking-wider cursor-default select-none"
              style={{
                WebkitTextStroke: "1px #1a1a1a",
                WebkitTextFillColor: "transparent"
              }}
            >
              {CORPORATE_INFO.tagline}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
        
        <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="font-body text-sm tracking-wide text-black mb-4">
              Technologies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/technology/fit"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(
                      new CustomEvent("tech-transition", {
                        detail: { to: "/technology/fit", color: "#dfff00" }
                      })
                    );
                  }}
                  className="text-black hover:text-black/70 transition-colors font-body"
                >
                  FIT
                </Link>
              </li>
              <li>
                <Link to="/technology/motion" className="text-black hover:text-black/70 transition-colors font-body">
                  Motion
                </Link>
              </li>
              <li>
                <Link to="/technology/power" className="text-black hover:text-black/70 transition-colors font-body">
                  Power
                </Link>
              </li>
              <li>
                <Link to="/technology/brave" className="text-black hover:text-black/70 transition-colors font-body">
                  Brave
                </Link>
              </li>
              <li>
                <Link to="/technology/vapora" className="text-black hover:text-black/70 transition-colors font-body">
                  Vapora
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-body text-sm tracking-wide text-black mb-4">
              Features
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features#zwr" className="text-black hover:text-black/70 transition-colors font-body">
                  ZWR
                </Link>
              </li>
              <li>
                <Link to="/features#relife" className="text-black hover:text-black/70 transition-colors font-body">
                  Relife
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-body text-sm tracking-wide text-black mb-4">
              Zerowind
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-black hover:text-black/70 transition-colors font-body">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-black hover:text-black/70 transition-colors font-body">
                  News
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-body text-sm tracking-wide text-black mb-4">
              Contacts
            </h4>
            <ul className="space-y-2 text-sm text-black font-body">
              <li>
                <a href={`mailto:${CORPORATE_INFO.email}`} className="hover:text-black/70 transition-colors">
                  {CORPORATE_INFO.email}
                </a>
              </li>
              <li className="pt-1">
                <a href={`tel:${CORPORATE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-black/70 transition-colors">
                  {CORPORATE_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="lg:col-span-5 max-w-[440px] lg:max-w-none">
          <div className="relative rounded-[24px] overflow-hidden p-8 bg-black text-white shadow-xl min-h-[250px] flex flex-col justify-center">
            
            <video
              src="/video/884db69f-0e17ed62.mp4"
              autoPlay
              playsInline
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
            />
            <div className="relative z-10 space-y-4">
              <h3 className="font-body text-sm tracking-wide font-medium text-white">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-row items-stretch w-full">
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    className="flex-grow px-4 py-3 bg-transparent border-t border-b border-l border-r border-[#e2de00] rounded-l-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-0 font-body"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#e2de00] hover:bg-[#c9c600] text-black font-body font-bold text-xs tracking-wider uppercase rounded-r-xl flex items-center justify-center shrink-0 border-t border-b border-r border-[#e2de00]"
                  >
                    Subscribe me
                  </button>
                </div>
                <label className="flex items-start space-x-3 text-[10px] text-white/50 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 w-3.5 h-3.5 rounded-none border border-[#e2de00] text-[#e2de00] bg-transparent focus:ring-0 focus:ring-offset-0 checked:bg-[#e2de00] checked:border-[#e2de00] cursor-pointer"
                  />
                  <span className="leading-relaxed font-body">
                    Dichiaro di aver letto e di accettare il trattamento dei{" "}
                    <Link to="/privacy" className="underline hover:text-white transition-colors">
                      dati personali
                    </Link>
                    .
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-6 py-4 lg:py-0">
          <a
            href={CORPORATE_INFO.instagram}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <img src="/images/download (12).svg" alt="Instagram" className="w-[18px] h-[18px] block" />
          </a>
          <a
            href={CORPORATE_INFO.facebook}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <img src="/images/download (13).svg" alt="Facebook" className="w-[18px] h-[18px] block" />
          </a>
          <a
            href={CORPORATE_INFO.youtube}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <img src="/images/download (11).svg" alt="Youtube" className="w-[24px] h-[17px] block" />
          </a>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start text-[11px] text-black space-y-6 md:space-y-0 font-body uppercase tracking-widest mt-40 pb-4">
        
        <div className="flex flex-col space-y-2">
          <div className="flex flex-wrap gap-x-12 gap-y-1">
            <Link to="/privacy" className="hover:text-black/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-black/70 transition-colors">
              Cookie Policy
            </Link>
            <button className="hover:text-black/70 transition-colors underline bg-transparent border-none p-0 text-[11px] uppercase tracking-widest text-left font-body">
              Manage Cookies
            </button>
          </div>
          <div>
            <span className="hover:text-black/70 transition-colors cursor-pointer">
              Credits
            </span>
          </div>
        </div>

        
        <div className="text-left md:text-right max-w-xl leading-relaxed text-black">
          ZEROWIND® REA VR69979 - P.IVA 00215260233 | VIA DELLA MECCANICA 29, 37139 VERONA
        </div>
      </div>
    </footer >
  );
}
