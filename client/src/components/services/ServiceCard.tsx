import { useState } from "react";
import { Link } from "react-router-dom";
import { Service } from "../../types/service";

interface ServiceCardProps {
  service: Service;
  isFullWidth?: boolean;
}

export default function ServiceCard({ service, isFullWidth = false }: ServiceCardProps) {
  const [active, setActive] = useState(false);

  const signatureLogoSrc = `/images/${
    service.id === "vapora"
      ? "download (6)"
      : service.id === "fit"
      ? "download (9)"
      : service.id === "motion"
      ? "download (2)"
      : service.id === "power"
      ? "download (3)"
      : "download (5)"
  }.svg`;

  // Map database specifications to the exact custom repository SVG file paths
  const getIconUrl = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("strength") || lower.includes("durability")) {
      return "/images/imgi_17_Risorsa-3.svg";
    }
    if (lower.includes("wind") || lower.includes("storm")) {
      return "/images/imgi_9_Livello-1-4.svg";
    }
    if (lower.includes("breathability") || lower.includes("evacuation")) {
      return "/images/imgi_10_Group3-2_1.svg";
    }
    if (lower.includes("thermoregulation") || lower.includes("microclimate") || lower.includes("warmth")) {
      return "/images/imgi_11_Livello-1-6_1.svg";
    }
    if (lower.includes("waterproof") || lower.includes("rain") || lower.includes("water resistance")) {
      return "/images/imgi_8_icon-334.svg";
    }
    if (lower.includes("fit") || lower.includes("elasticity") || lower.includes("compression") || lower.includes("power return")) {
      return "/images/imgi_14_icon-55.svg";
    }
    if (lower.includes("bulk") || lower.includes("lightness")) {
      return "/images/imgi_16_icon-3.svg";
    }
    if (lower.includes("insulation") || lower.includes("abrasion") || lower.includes("reinforced")) {
      return "/images/imgi_19_icon-456.svg";
    }
    return "/images/imgi_8_icon-334.svg";
  };

  return (
    <Link
      to={`/technology/${service.id}`}
      className={`relative group w-full ${
        isFullWidth ? "h-[360px] md:h-[450px]" : "h-[450px] md:h-[500px]"
      } rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl cursor-pointer block`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Background Image (No opacity reduction, full bright colors) */}
      <img
        src={service.image}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
      />

      {/* Subtle overlay by default, becomes fully clear on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

      {/* Centered Brand Tagline (Default state) */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-6 pointer-events-none transition-all duration-500 ${
          active ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <img
          src={signatureLogoSrc}
          alt={service.name}
          className={`${
            isFullWidth ? "h-16 md:h-20" : "h-14 md:h-18"
          } w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}
        />
      </div>

      {/* Slide-Up Details Overlay (Transparent background) */}
      <div
        className={`absolute inset-0 bg-transparent p-4 md:p-6 flex flex-col justify-center items-center gap-4 md:gap-6 transition-transform duration-500 ease-out z-10 ${
          active ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Center content (Logo & Description) */}
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={signatureLogoSrc}
            alt={service.name}
            className="h-8 md:h-10 w-auto object-contain mb-4 filter brightness-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          />
          <p className="text-white text-xs md:text-sm lg:text-base font-body leading-relaxed max-w-2xl px-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-normal mb-3">
            {service.description}
          </p>
        </div>

        {/* Bottom Specifications (Centered horizontally using flexbox, handles any number of items cleanly) */}
        <div className="w-full">
          <div className="flex flex-row flex-wrap items-start justify-center gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {service.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-1.5 px-1 w-[90px] sm:w-[110px] md:w-[130px] flex-shrink-0"
              >
                <img
                  src={getIconUrl(spec.title)}
                  alt={spec.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
                <span className="text-[8px] md:text-[9px] uppercase font-display font-light tracking-wider text-white mt-1 block leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {spec.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
