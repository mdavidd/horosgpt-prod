"use client"; // Ensure the file is client-side

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import starsBg from '@/assets/stars.png';
import gridLines from '@/assets/grid-lines.png';

export const GridBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Adjust the background position based on scroll or mouse position
  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  useEffect(() => {
    // Event listener for scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Event listener for mouse movement
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
          x: backgroundX, // Grid reacts to mouseX position
          y: backgroundY, // Grid reacts to scroll position
        }}
      ></motion.div>

    </section>
  );
};
