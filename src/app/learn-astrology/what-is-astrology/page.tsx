import { Footer } from '@/sections/Footer';
import { GridBackground } from '@/sections/GridBackground';
import { Header } from '@/sections/Header';
import WhatIsAstrology from '@/sections/WhatIsAstrology';
import React from 'react';

const WhatIsAstroPage = () => {
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

      {/* Content of learnAstrology */}
      <div className="relative z-10">
        <WhatIsAstrology/>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default WhatIsAstroPage;