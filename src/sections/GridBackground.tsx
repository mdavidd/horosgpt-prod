"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const GridBackground = () => {
  const sectionRef = useRef(null);

  // Mouse movement for subtle background animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const backgroundX = useTransform(mouseX, [0, 1000], [-10, 10]);
  const backgroundY = useTransform(mouseY, [0, 1000], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} className="relative h-full w-full overflow-hidden">
      {/* Stars background with subtle movement */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${starsBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 1,
          backgroundPositionX: backgroundX,
          backgroundPositionY: backgroundY,
        }}
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Smaller and dimmer grid lines background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gridLines.src})`,
          backgroundSize: "15px 15px", // Very small grid lines
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.05, // Dim the grid lines
          zIndex: 2,
          transform: `translate(${backgroundX}px, ${backgroundY}px)`,
        }}
      />

      {/* Darker radial background overlay for soft lighting effect */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_center_center,rgb(74,32,138,.6)_15%,rgb(14,0,36,.9)_78%,transparent)] z-3"></div>
    </section>
  );
};
