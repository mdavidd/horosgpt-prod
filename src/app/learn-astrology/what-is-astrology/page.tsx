import WhatIsAstrology from '@/sections/WhatIsAstrology';
import { Footer } from '@/sections/Footer';
import { GridBackground } from '@/sections/GridBackground';
import { Header } from '@/sections/Header';
import React from 'react';

const WhatIsAstroPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Section */}
      <div className="absolute inset-0 -z-10">
        <GridBackground />
      </div>

      {/* Content Sections */}
      <Header /> {/* Ensure this stays at the top */}

      {/* Content of learnAstrology */}
      <div className="relative z-10">
        <WhatIsAstrology/>
      </div>

      <Footer /> {/* Footer */}
    </div>
  );
}

export default WhatIsAstroPage;
