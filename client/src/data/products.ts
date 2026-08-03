import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "arsenal",
    name: "Arsenal",
    tagline: "Custom High-Performance Shield",
    description: "Light shield fabric for mid-season. Very breathable and with absolute wind protection. Resistant to abrasion. Extremely stretchy, perfect for making slim fit aerodynamic garments.",
    image: "/images/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp",
    technologyId: "fit",
    featureId: "zwr",
    tempRange: "9° to 16°C",
    highlights: ["Ultra-stretchy fit", "Windproof laminated front panel", "High abrasion resistance", "Custom professional team choice"]
  },
  {
    id: "bergamo",
    name: "Bergamo",
    tagline: "Mid-Season Training Shell",
    description: "Fabric developed specifically for high-intensity training in mid-season weather. Windproof, highly breathable, water-resistant, and featuring an elastic profile that behaves like a second skin.",
    image: "/images/imgi_21_untitled-758%40900xauto_r.png.webp",
    technologyId: "fit",
    featureId: "zwr",
    tempRange: "9° to 15°C",
    highlights: ["PFAS-free water repellent outer coating", "Laser-cut ventilation ready", "Lightweight packable shell", "Four-way mechanical stretch"]
  },
  {
    id: "brad-softshell",
    name: "Brad Softshell",
    tagline: "Heavy Winter Protection",
    description: "Winter softshell with an integrated Vapora membrane for class-leading sweat evacuation and absolute wind protection. Features a warm inner thermal fleece layer.",
    image: "/images/imgi_22_ppellejkthy-23-aranci-web%40900xauto_r.png.webp",
    technologyId: "motion",
    featureId: "zwr",
    tempRange: "2° to 10°C",
    highlights: ["Insulated thermal fleece interior", "Highly breathable Vapora membrane", "Robust wind defense", "Reflective safety panel layout compatibility"]
  },
  {
    id: "grand-prix",
    name: "Grand Prix",
    tagline: "Classic Race Fit",
    description: "Light shield fabric tailored for road racing. Absolute wind resistance, high moisture transfer rating, and a friction-reducing outer face fabric optimized for high speeds.",
    image: "/images/imgi_23_cortavientos-pro-team-tibet%40900xauto_r.png.webp",
    technologyId: "fit",
    featureId: "zwr",
    tempRange: "10° to 18°C",
    highlights: ["Superlight 2-Layer weave", "Aerodynamic race testing", "Repels light drizzle", "Abrasion-resistant shoulder panels"]
  },
  {
    id: "tempest",
    name: "Tempest",
    tagline: "Compression & Weather Barrier",
    description: "Double-sided technical fabric designed for cold racing conditions. Incorporates muscle-supporting compression layouts with ZeroWind windproofing panels.",
    image: "/images/imgi_24_untitled-761%40900xauto_r.png.webp",
    technologyId: "power",
    featureId: "zwr",
    tempRange: "8° to 15°C",
    highlights: ["Double-sided structural knit", "High compression ratio", "Thermal regulation active mapping", "Resistant to winter road salt and mud"]
  },
  {
    id: "elaprint",
    name: "Elaprint",
    tagline: "Sub-Zero Thermal Shell",
    description: "Winter will no longer stand in the way of your outings. Elaprint features windproof protection, deep heat retention insulation, and high elasticity for zero bulk.",
    image: "/images/imgi_25_untitled-759%40900xauto_r.png.webp",
    technologyId: "motion",
    featureId: "zwr",
    tempRange: "-1° to 8°C",
    highlights: ["Sub-zero thermal mapping", "Eco-friendly zero-fluorine repellency", "Maximum mobility stretch", "Windproof softshell construct"]
  },
  {
    id: "skin",
    name: "Skin",
    tagline: "Ultralight Wind Vest Shell",
    description: "Versatility between mid and warm seasons. Extremely lightweight, packable, protects against cool descents, wind chill, and unexpected mountain rain.",
    image: "/images/imgi_26_untitled-760%40900xauto_r.png.webp",
    technologyId: "brave",
    featureId: "zwr",
    tempRange: "15° to 23°C",
    highlights: ["Featherweight packability (fits in jersey pocket)", "Ultra-tough windbreaker layer", "Breathable mesh back panel ready", "Emergency storm protection"]
  }
];
