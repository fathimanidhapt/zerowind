import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer stalker ring
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const stalkerX = useSpring(cursorX, springConfig);
  const stalkerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    // Enable custom cursor styles on html/body
    document.documentElement.classList.add("custom-cursor-enabled");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.hasAttribute("data-trigger-cursor") ||
        target.closest("[data-trigger-cursor]");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#e2de00] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      
      <motion.div
        className="fixed top-0 left-0 border border-[#e2de00] rounded-full pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: stalkerX,
          y: stalkerY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          backgroundColor: isHovered ? "rgba(226, 222, 0, 0.1)" : "rgba(226, 222, 0, 0)",
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {isHovered && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[#e2de00] text-xs font-bold font-display"
          >
            +
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
