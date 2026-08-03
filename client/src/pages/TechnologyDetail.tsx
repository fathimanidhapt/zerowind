import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Droplets,
  Wind,
  Cpu,
  Thermometer,
  Shield,
  Activity,
  Zap,
  Sun,
  Flame,
  ShieldAlert,
  Layers,
  ArrowRight,
  TrendingUp,
  Smile,
} from "lucide-react";
import { services } from "../data/services";
import { products } from "../data/products";

// Dynamic Icon Mapper (duplicated for ease of import/scope inside page)
const IconMapper = ({ name, className = "w-6 h-6 text-brand" }: { name: string; className?: string }) => {
  switch (name) {
    case "Droplets":
      return <Droplets className={className} />;
    case "Wind":
      return <Wind className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Thermometer":
      return <Thermometer className={className} />;
    case "Shield":
      return <Shield className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Smile":
      return <Smile className={className} />;
    default:
      return <Shield className={className} />;
  }
};

export default function TechnologyDetail() {
  const { id } = useParams<{ id: string }>();
  const tech = services.find((t) => t.id === id);

  if (!tech) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-display text-4xl font-extrabold text-brand mb-4">Technology Not Found</h2>
        <p className="text-white/60 mb-8 max-w-sm font-body">
          The requested lamination technology does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-brand text-black font-display font-bold uppercase rounded-lg hover:bg-brand-dark transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  // Find related products
  const relatedProducts = products.filter((p) => p.technologyId === tech.id);

  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-24 pb-20">
      {/* Page transition overlay */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-brand z-[9999] pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-sm text-white/50 hover:text-brand transition-colors uppercase tracking-widest font-display mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Technologies
        </Link>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-brand uppercase tracking-widest font-display text-sm font-semibold block mb-3">
                Active Membrane
              </span>
              {/* Technology Signature SVG Logo */}
              <div className="h-16 mb-4 flex items-center">
                <img
                  src={`/images/${
                    tech.id === "vapora"
                      ? "download (6)"
                      : tech.id === "fit"
                      ? "download (9)"
                      : tech.id === "motion"
                      ? "download (2)"
                      : tech.id === "power"
                      ? "download (3)"
                      : "download (5)"
                  }.svg`}
                  alt={tech.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-black">{tech.title}</h1>
              <p className="text-white/40 font-display text-lg tracking-wide mt-2">{tech.tagline}</p>
            </div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed font-body">
              {tech.description}
            </p>

            {/* Specifications Cards Grid */}
            <div className="space-y-4">
              <h3 className="font-display text-sm tracking-widest uppercase text-white/40">
                Key Technical Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tech.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-neutral-900 border border-white/5 rounded-xl flex items-center space-x-4"
                  >
                    <div className="p-3 bg-brand/10 border border-brand/20 rounded-lg">
                      <IconMapper name={spec.iconName} className="w-6 h-6 text-brand" />
                    </div>
                    <span className="font-display font-semibold text-white tracking-wide text-sm">
                      {spec.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Media/Image Side */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative aspect-video lg:aspect-square rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Sub-spec list */}
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-2xl space-y-4">
              <h3 className="font-display text-sm tracking-widest uppercase text-white/40">
                Fabric composition & construct
              </h3>
              <ul className="space-y-3">
                {tech.techDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                    <span className="font-body">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-white/5 pt-20">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <span className="text-brand uppercase tracking-widest font-display text-sm font-semibold">
                  Applied range
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-2">
                  Products Using {tech.name}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-brand/20 transition-smooth flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden bg-neutral-950">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-brand text-black font-display font-extrabold uppercase px-2.5 py-0.5 rounded text-[10px] tracking-widest shadow-md">
                      {prod.tempRange}
                    </span>
                  </div>

                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-1">{prod.name}</h3>
                      <p className="text-white/60 text-xs md:text-sm font-body leading-relaxed line-clamp-3">
                        {prod.description}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                      <div className="flex justify-between items-center text-xs text-white/40 mb-4 font-body">
                        <span>Temperature: {prod.tempRange}</span>
                        <span className="text-brand">Active Control</span>
                      </div>
                      <span className="inline-flex items-center text-xs font-display font-semibold tracking-widest uppercase text-white/50">
                        ZeroWind® Certified Product
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
