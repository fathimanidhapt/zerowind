import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="bg-[#262626] text-white min-h-screen pt-36 flex flex-col items-center justify-center select-none">
        <h2 className="font-display font-extrabold text-2xl mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="border border-[#e2de00] text-[#e2de00] hover:bg-[#e2de00] hover:text-black font-body font-normal tracking-wide px-8 py-3 rounded-full transition-all duration-300 text-xs uppercase cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("product-contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split description by period to get sentence lines
  const sentences = product.description
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);

  const getPhotoCredit = (productId: string) => {
    if (productId === "arsenal") return "Photo: Selkie jacket by Gobik (gobik.com)";
    if (productId === "bergamo") return "Photo: Bergamo training shell by Gobik (gobik.com)";
    if (productId === "brad-softshell") return "Photo: Brad jacket by Gobik (gobik.com)";
    if (productId === "grand-prix") return "Photo: Tibet pro team windbreaker (gobik.com)";
    if (productId === "tempest") return "Photo: Tempest compression shell (gobik.com)";
    return `Photo: ${productId.charAt(0).toUpperCase() + productId.slice(1)} jacket by Gobik (gobik.com)`;
  };

  // Performance Icons List
  const performanceSpecs = [
    { title: "Waterproofness", label: "Waterproofness", icon: "/images/imgi_8_icon-334.svg" },
    { title: "Total wind protection", label: "Total wind protection", icon: "/images/imgi_9_Livello-1-4.svg" },
    { title: "High breathability", label: "High breathability", icon: "/images/imgi_10_Group3-2_1.svg" },
    { title: "Thermoregulation", label: "Thermoregulation", icon: "/images/imgi_11_Livello-1-6_1.svg" },
  ];

  const getTechIcon = (techId: string) => {
    const id = techId.toLowerCase();
    if (id === "fit") return "/images/download (9).svg";
    if (id === "brave") return "/images/download (5).svg";
    if (id === "power") return "/images/download (3).svg";
    if (id === "motion") return "/images/download (2).svg";
    return "/images/download (9).svg";
  };

  const getFeatureIcon = (featId: string) => {
    if (featId.toLowerCase() === "zwr") return "/images/download (1).svg";
    if (featId.toLowerCase() === "relife") return "/images/download (10).svg";
    return "/images/download (1).svg";
  };

  return (
    <div className="bg-[#262626] text-white min-h-screen select-none relative">
      
      <section className="relative w-full h-[80vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#e2de00]/5 blur-[150px]" />
        </div>

        
        <div className="absolute top-36 left-6 md:left-12 z-20">

        </div>

        
        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none select-none">
          <h2
            className="font-display font-black text-[11vw] uppercase leading-none tracking-[0.05em] text-transparent text-center select-none opacity-100"
            style={{
              WebkitTextStroke: "1.5px #b0ad00",
              WebkitTextFillColor: "transparent",
            } as React.CSSProperties}
          >
            {product.name}
          </h2>
        </div>

        
        <div className="relative z-10 flex items-center justify-center h-[70%] w-full max-w-4xl px-6">
          <motion.img
            src={product.image}
            alt={product.name}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-h-full max-w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] filter brightness-105"
          />
        </div>
      </section>

      <section className="relative z-20 max-w-4xl mx-4 md:mx-auto bg-black text-white rounded-[24px] py-16 px-6 md:px-12 flex flex-col items-center text-center mt-[-8vh] shadow-2xl border border-white/5 mb-16">

        
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[54px] uppercase tracking-wider text-white mb-10">
          {product.name}
        </h2>

        
        <div className="space-y-4 max-w-3xl mb-16 select-text leading-relaxed">
          <p className="text-white/80 text-sm sm:text-base font-light">Custom product exclusively for customer.</p>
          {sentences.map((sentence, idx) => (
            <p key={idx} className="text-white/80 text-sm sm:text-base font-light">
              {sentence}.
            </p>
          ))}
          <p className="text-white/80 text-sm sm:text-base font-light">
            {getPhotoCredit(product.id)}
          </p>
        </div>

        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-4xl w-full mb-20">
          {performanceSpecs.map((spec, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={spec.icon}
                  alt={spec.title}
                  className="w-12 h-12 object-contain"
                  style={{
                    filter: "brightness(0) invert(88%) sepia(43%) saturate(3000%) hue-rotate(16deg) brightness(103%) contrast(105%)",
                  }}
                />
              </div>
              <span className="font-body text-xs sm:text-sm font-light text-white/80 max-w-[150px] leading-relaxed">
                {spec.label}
              </span>
            </div>
          ))}
        </div>

        
        <div className="flex flex-col sm:flex-row gap-6 max-w-2xl w-full justify-center items-center mt-6 select-none">
          
          <Link
            to={`/technology/${product.technologyId}`}
            className="flex-1 w-full max-w-[240px] bg-black border border-white/30 rounded-2xl p-6 hover:border-white/85 transition-colors flex flex-col items-center justify-center text-center select-none"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/40 font-display text-[9px] tracking-[0.2em] uppercase">
                Technology
              </span>
              <img
                src={getTechIcon(product.technologyId)}
                alt={product.technologyId}
                className="h-5 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </Link>

          
          <Link
            to="/features"
            className="flex-1 w-full max-w-[240px] bg-black border border-white/30 rounded-2xl p-6 hover:border-white/85 transition-colors flex flex-col items-center justify-center text-center select-none"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/40 font-display text-[9px] tracking-[0.2em] uppercase">
                Feature
              </span>
              {product.featureId.toLowerCase() === "zwr" ? (
                <img
                  src="/images/download (1).svg"
                  alt="ZWR"
                  className="h-5 object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              ) : (
                <span className="font-display font-black italic text-xl uppercase text-[#e2de00] tracking-widest leading-none">
                  {product.featureId}
                </span>
              )}
            </div>
          </Link>
        </div>
      </section>

      
      <section
        id="product-contact-form"
        className="relative z-30 max-w-4xl mx-auto px-6 md:px-12 pb-28 flex flex-col items-center w-full mt-12"
      >
        <div className="w-full flex flex-col items-start">
          
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-[34px] text-white text-left tracking-normal max-w-2xl mb-14 leading-tight md:-ml-4">
            Contact us for information<br />
            on this product
          </h2>

          {formSubmitted ? (
            <div className="max-w-2xl bg-neutral-900 border border-white/5 p-8 rounded-3xl mb-8 flex items-center space-x-4 w-full">
              <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand shrink-0">
                <CheckCircle size={20} className="text-[#e2de00]" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white">Message sent!</h3>
                <p className="text-white/50 text-xs sm:text-sm mt-1">
                  Thank you for your interest in the {product.name} jacket. We will contact you soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-12 w-full text-left select-text">
              
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

              <div className="relative pt-4">
                <textarea
                  placeholder="Message *"
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#e2de00] pb-3 text-white placeholder-white/35 focus:outline-none transition-colors text-sm sm:text-base font-light resize-none"
                />
              </div>

              
              <div className="flex items-start space-x-3 pt-4 select-none">
                <input
                  type="checkbox"
                  id="product-privacy"
                  required
                  className="mt-1 accent-[#e2de00] border-white/20 bg-transparent rounded cursor-pointer"
                />
                <label htmlFor="product-privacy" className="text-xs text-white/40 font-light leading-normal cursor-pointer hover:text-white/60 transition-colors">
                  Dichiaro di aver letto ed accettato il{" "}
                  <a href="#privacy" className="underline hover:text-[#e2de00] transition-colors">
                    trattamento dei miei dati personali
                  </a>.
                </label>
              </div>

              
              <div className="pt-4 select-none flex justify-start">
                <button
                  type="submit"
                  className="border border-[#e2de00] text-[#e2de00] hover:bg-[#e2de00] hover:text-black font-body font-normal tracking-wide px-10 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm uppercase cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
