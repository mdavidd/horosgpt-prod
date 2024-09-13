import ComingSoonSection from '@/sections/ComingSoonSection';
import { Footer } from '@/sections/Footer';
import { GridBackground } from '@/sections/GridBackground';
import { Header } from '@/sections/Header';
import React from 'react';

const LearnAstroPage = () => {
  return (
    <div className="relative">
      {/* Background Section */}
      <div className="absolute inset-0 -z-20"> {/* Make sure the background stays behind all content */}
        <GridBackground />
      </div>

      {/* Header should always stay on top */}
      <div className="relative z-30"> {/* z-30 to keep header above all content */}
        <Header />
      </div>

      {/* Main content sections */}
      <div className="relative z-10"> {/* Ensure main content stays below the header */}
        <ComingSoonSection />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default LearnAstroPage;
