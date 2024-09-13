import React from 'react';

const ComingSoonSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-center">
        {/* Title */}
        <h1 className="text-6xl font-bold mb-8 tracking-wider">
          HorosGPT Uskoro Dolazi!
        </h1>

        {/* Description */}
        <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Aplikacija koja će Vam omogućiti analizu horoskopa, znakova i astrologije uz snagu umjetne inteligencije.
          Pratite nas za više informacija o službenom lansiranju!
        </p>

        {/* Fancy animated underline showing 80% completion */}
        <div className="relative mt-8 w-full max-w-md mx-auto">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse" style={{ width: '80%' }}></div>
          </div>
          <p className="mt-4 text-gray-400 text-lg">u tijeku...</p>
        </div>

        {/* Countdown placeholder */}
        <div className="mt-12 text-center text-gray-400 text-xl">
          <p>Odbrojavanje do lansiranja počinje uskoro...</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
