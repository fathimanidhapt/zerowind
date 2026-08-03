import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionColor, setTransitionColor] = useState("#dfff00");
  const location = useLocation();
  const navigate = useNavigate();

  const isProductsPage = location.pathname === "/products";

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleTransition = (e: Event) => {
      const customEvent = e as CustomEvent<{ to: string; color: string }>;
      const { to, color } = customEvent.detail;
      setTransitionColor(color || "#dfff00");
      setTransitioning(true);

      const navTimer = setTimeout(() => {
        navigate(to);
        window.scrollTo(0, 0);
      }, 3500);

      const clearTimer = setTimeout(() => {
        setTransitioning(false);
      }, 4000);

      return () => {
        clearTimeout(navTimer);
        clearTimeout(clearTimer);
      };
    };

    window.addEventListener("tech-transition", handleTransition);
    return () => window.removeEventListener("tech-transition", handleTransition);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white select-none">
      
      
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: transitionColor }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>

      
      {!isProductsPage && (
        <Navbar />
      )}

      
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      
      <main className="flex-grow">
        {children}
      </main>

      
      {!isProductsPage && <Footer />}
    </div>
  );
}
