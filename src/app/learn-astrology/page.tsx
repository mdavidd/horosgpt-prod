import { Footer } from '@/sections/Footer';
import { GridBackground } from '@/sections/GridBackground';
import { Header } from '@/sections/Header';
import LearnAstroMenuContent from '@/sections/LearnAstroMenuContent'; // Correct import for the menu content
import React from 'react';

const LearnAstroPage = () => {
  return (
    <div className="relative">
      {/* Background Section */}
      <div className="absolute inset-0 -z-20"> {/* Ensuring background stays behind all elements */}
        <GridBackground />
      </div>

      {/* Header should always stay on top */}
      <div className="relative z-30"> {/* Higher z-index to keep header on top */}
        <Header />
      </div>

      {/* Main content for learnAstrology */}
      <div className="relative z-10">
        <LearnAstroMenuContent /> {/* Main content */}
      </div>

      {/* Footer should follow the main content */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default LearnAstroPage;
