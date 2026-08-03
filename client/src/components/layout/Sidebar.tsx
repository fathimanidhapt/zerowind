import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services, features } from "../../data/services";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-y-0 right-0 w-full md:w-[480px] z-30 bg-neutral-950 border-l border-white/5 p-8 pt-24 overflow-y-auto flex flex-col justify-between shadow-2xl"
        >
          <div className="space-y-12">
            <div>
              <span className="text-white/30 font-display text-xs tracking-widest uppercase block mb-4">
                Navigation
              </span>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={onClose}
                  className="font-display text-3xl font-bold text-white hover:text-brand transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/news"
                  onClick={onClose}
                  className="font-display text-3xl font-bold text-white hover:text-brand transition-colors"
                >
                  News & Editorial
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="font-display text-3xl font-bold text-white hover:text-brand transition-colors"
                >
                  Contacts
                </Link>
              </nav>
            </div>

            <div>
              <span className="text-white/30 font-display text-xs tracking-widest uppercase block mb-4">
                Our Fabrics
              </span>
              <div className="grid grid-cols-2 gap-3">
                {services.map((tech) => (
                  <Link
                    key={tech.id}
                    to={`/technology/${tech.id}`}
                    onClick={(e) => {
                      onClose();
                      if (tech.id === "fit") {
                        e.preventDefault();
                        window.dispatchEvent(
                          new CustomEvent("tech-transition", {
                            detail: { to: `/technology/${tech.id}`, color: "#dfff00" }
                          })
                        );
                      }
                    }}
                    className="p-3 bg-neutral-900 border border-white/5 rounded-md hover:border-brand/40 transition-smooth block"
                  >
                    <span className="font-display font-bold text-white block text-sm group-hover:text-brand">
                      {tech.name}
                    </span>
                    <span className="text-white/40 text-[10px] uppercase font-display block mt-0.5">
                      Technology
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-white/30 font-display text-xs tracking-widest uppercase block mb-4">
                Features
              </span>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feat) => (
                  <Link
                    key={feat.id}
                    to={`/features#${feat.id}`}
                    onClick={onClose}
                    className="p-3 bg-neutral-900 border border-white/5 rounded-md hover:border-brand/40 transition-smooth block"
                  >
                    <span className="font-display font-bold text-white block text-sm">
                      {feat.name}
                    </span>
                    <span className="text-white/40 text-[10px] uppercase font-display block mt-0.5">
                      Performance
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 mt-12 flex justify-between items-center text-xs text-white/40">
            <p>© 2026 ZEROWIND®. All rights reserved.</p>
            <div className="flex space-x-3 uppercase font-display">
              <span className="text-brand">EN</span>
              <span className="hover:text-white transition-colors cursor-pointer">IT</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
