import { motion } from "framer-motion";

interface SectionTitleProps {
  tagline: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  tagline,
  title,
  className = "",
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={`space-y-2 ${align === "center" ? "text-center mx-auto" : ""} ${className}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-brand uppercase tracking-widest font-display text-xs md:text-sm font-semibold block"
      >
        {tagline}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display text-3xl md:text-5xl font-extrabold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
