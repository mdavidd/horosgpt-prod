"use client"; // Ensure the file is client-side

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import starsBg from '@/assets/stars.png';
import gridLines from '@/assets/grid-lines.png';

export const GridBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track if we are on the client-side
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Initialize the useTransform hooks unconditionally
  const backgroundX = useTransform(mouseX, [0, 1000], [-10, 10]); // Using default values
  const backgroundY = useTransform(mouseY, [0, 1000], [-10, 10]); // Using default values

  useEffect(() => {
    setIsClient(true); // Indicate that we're on the client side

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Stars background animation (continuous movement) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${starsBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
        animate={{
          x: ['0%', '10%', '0%'], // Subtle movement horizontally
          y: ['0%', '10%', '0%'], // Subtle movement vertically
        }}
        transition={{
          duration: 30, // Slow movement
          repeat: Infinity, // Infinite loop
          ease: 'linear', // Smooth continuous animation
        }}
      ></motion.div>

      {/* Grid lines animation (responds to scroll and mouse movement) */}
      <motion.div
        className='absolute inset-0 bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] bg-blend-overlay'
        style={{
          backgroundImage: `url(${gridLines.src})`,
          opacity: 0.5,
          backgroundSize: '60px 60px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          zIndex: 2,
          transform: `translate(${backgroundX}px, ${backgroundY}px)`, // Apply the transform here
        }}
      ></motion.div>
    </section>
  );
};
