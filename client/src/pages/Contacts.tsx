import { useState } from "react";
import { Check, Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#262626] text-white min-h-screen pt-36 pb-20 relative overflow-hidden select-none">
      {/* Page transition overlay */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-brand z-[9999] pointer-events-none"
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Contact Form Header Section */}
        <div className="mb-14 max-w-[420px] sm:max-w-[520px] md:max-w-[620px]">
          <h1 className="font-outfit font-light text-xl sm:text-2xl md:text-[27px] text-[#e2de00] leading-tight tracking-wide">
            Have a question?<br />
            Do you want to talk to us?
          </h1>
        </div>

        {submitted ? (
          <div className="max-w-2xl bg-neutral-900 border border-white/5 p-8 rounded-3xl mb-24 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand shrink-0">
              <Check size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white">Message sent!</h3>
              <p className="text-white/50 text-xs sm:text-sm mt-1">
                Thank you for contacting ZeroWind. We will get back to you shortly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl mb-24 select-text">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full name *"
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#e2de00] pb-3 text-white placeholder-white/35 focus:outline-none transition-colors text-sm sm:text-base font-light"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#e2de00] pb-3 text-white placeholder-white/35 focus:outline-none transition-colors text-sm sm:text-base font-light"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#e2de00] pb-3 text-white placeholder-white/35 focus:outline-none transition-colors text-sm sm:text-base font-light"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#e2de00] pb-3 text-white placeholder-white/35 focus:outline-none transition-colors text-sm sm:text-base font-light"
                />
              </div>
            </div>

            {/* Textarea */}
            <div className="relative pt-4">
              <textarea
                placeholder="Message *"
                required
                rows={3}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#e2de00] pb-3 text-white placeholder-white/35 focus:outline-none transition-colors text-sm sm:text-base font-light resize-none"
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start space-x-3 pt-4 select-none">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1 accent-[#e2de00] border-white/20 bg-transparent rounded cursor-pointer"
              />
              <label htmlFor="privacy" className="text-xs text-white/40 font-light leading-normal cursor-pointer hover:text-white/60 transition-colors">
                Dichiaro di aver letto ed accettato il{" "}
                <a href="#privacy" className="underline hover:text-[#e2de00] transition-colors">
                  trattamento dei miei dati personali
                </a>.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 select-none">
              <button
                type="submit"
                className="border border-[#e2de00] text-[#e2de00] hover:bg-[#e2de00] hover:text-black font-body font-normal tracking-wide px-10 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm uppercase cursor-pointer"
              >
                Send
              </button>
            </div>
          </form>
        )}

        {/* Footer Contact Info (Matches Screenshot 2) */}
        <div className="border-t border-white/10 pt-16 mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Where we are */}
          <div>
            <h4 className="font-outfit font-semibold text-[#e2de00] text-xs uppercase tracking-[0.15em] mb-4">
              Where we are
            </h4>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Pidigi S.p.a. Via della Meccanica, 29<br />
              37139 Verona (Italy).
            </p>
          </div>

          {/* Column 2: Contacts */}
          <div>
            <h4 className="font-outfit font-semibold text-[#e2de00] text-xs uppercase tracking-[0.15em] mb-4">
              Contacts
            </h4>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed space-y-1">
              <a href="mailto:info@zerowind.it" className="block hover:text-[#e2de00] transition-colors">
                info@zerowind.it
              </a>
              <a href="tel:+390459216888" className="block hover:text-[#e2de00] transition-colors">
                +39 045 92 16 888
              </a>
            </p>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="flex space-x-6 md:justify-end items-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
            >
              <img
                src="/images/download (12).svg"
                alt="Instagram"
                className="social-icon w-5 h-5 object-contain"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
            >
              <img
                src="/images/download (13).svg"
                alt="Facebook"
                className="social-icon w-5 h-5 object-contain"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
            >
              <img
                src="/images/download (11).svg"
                alt="YouTube"
                className="social-icon w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
