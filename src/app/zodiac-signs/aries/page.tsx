import { Footer } from '@/sections/Footer';
import { GridBackground } from '@/sections/GridBackground';
import { Header } from '@/sections/Header';
import AriesSection from '@/sections/zodiac-signs-sections/AriesSection';
import React from 'react';

const LearnAstroPage = () => {
  return (
    <div className="relative">
      {/* Background Section */}
      <div className="absolute inset-0 -z-10">
        <GridBackground />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Content of page */}
      <div className="relative z-10">
        <AriesSection/>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default LearnAstroPage;
