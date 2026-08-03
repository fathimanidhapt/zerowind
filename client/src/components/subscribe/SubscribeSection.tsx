import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;
    setSubscribed(true);
    setEmail("");
    setPrivacyAccepted(false);
  };

  return (
    <>
      <section className="relative w-full px-4 md:px-8 py-8">
        <div className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[650px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 flex flex-col justify-center px-8 md:px-16">
          {/* Background Video */}
          <video
            src="/video/newsletter-bg.mp4"
            autoPlay
            playsInline
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-2xl space-y-6">
            <span className="text-white/70 tracking-widest font-display text-[10px] md:text-xs font-normal block">
              Subscribe to newsletter
            </span>

            <h2 className="font-display text-white text-2xl md:text-3xl lg:text-[36px] font-bold leading-[1.2] tracking-wider">
              Don't miss our events and the latest news about our products and successes.
            </h2>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/40 border border-[#e2de00]/30 rounded-xl p-6 max-w-md mt-6 backdrop-blur-md"
              >
                <div className="flex items-center space-x-3 text-[#e2de00] mb-2">
                  <div className="p-1.5 bg-[#e2de00]/10 border border-[#e2de00]/20 rounded-full">
                    <Check size={18} />
                  </div>
                  <span className="font-display font-extrabold uppercase text-xs tracking-wider">Subscribed successfully</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed font-body">
                  Thank you for subscribing to our newsletter! You will now receive the latest updates directly in your inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-[600px] pt-2">
                {/* Input Group */}
                <div className="flex flex-row items-stretch w-full">
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-6 py-[22px] bg-transparent border-t border-b border-l border-r border-[#e2de00] rounded-l-xl text-white placeholder-white/40 text-[15px] focus:outline-none focus:ring-0 font-body"
                  />
                  <button
                    type="submit"
                    disabled={!privacyAccepted}
                    className="px-8 md:px-10 py-[22px] bg-[#e2de00] hover:bg-[#c9c600] text-black font-body font-extrabold text-[11px] md:text-sm tracking-wide transition-colors rounded-r-xl flex items-center justify-center shrink-0 border-t border-b border-r border-[#e2de00] disabled:cursor-not-allowed"
                  >
                    Subscribe me
                  </button>
                </div>

                {/* Checkbox */}
                <label className="flex items-start space-x-3 text-[11px] text-white/50 cursor-pointer select-none max-w-lg mt-3">
                  <input
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded-none border border-[#e2de00] text-[#e2de00] bg-transparent focus:ring-0 focus:ring-offset-0 checked:bg-[#e2de00] checked:border-[#e2de00] cursor-pointer"
                  />
                  <span className="leading-relaxed font-body">
                    Dichiaro di aver letto e di accettare il trattamento dei dati personali.
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Expert Advice Call To Action */}
      <section className="relative w-full px-4 md:px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center bg-transparent">
        <h3 className="font-display text-white text-base md:text-lg lg:text-[22px] max-w-2xl font-thin leading-relaxed tracking-wider mb-8">
          Request expert advice on our products and technologies.
        </h3>
        <Link
          to="/contact"
          className="px-8 py-3.5 border border-[#e2de00] text-[#e2de00] rounded-full font-display uppercase text-xs tracking-widest hover:bg-[#e2de00] hover:text-black transition-all duration-300"
        >
          Contact us
        </Link>
      </section>
    </>
  );
}
