import { Footer } from '@/sections/Footer';
import { GridBackground } from '@/sections/GridBackground';
import { Header } from '@/sections/Header';
import PlanetsAndSigns from '@/sections/PlanetsAndSignsSectionNatal';
import ZodiacOverview from '@/sections/ZodiacOverview';
import React from 'react';

const ZodiacSigns = () => {
  return (
    <div className="relative">
      {/* Background Section */}
      <div className="absolute inset-0 -z-20">
        <GridBackground />
      </div>

      {/* Content Sections */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* Content of learnAstrology */}
      <div className="relative z-10">
        <ZodiacOverview/>
      </div>
      

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default ZodiacSigns;