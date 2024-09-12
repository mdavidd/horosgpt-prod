import React from 'react';
import Link from 'next/link';

const LearnAstroMenuContent = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-100">Kako radi astrologija?</h1>
        <p className="text-gray-300 uppercase tracking-widest mb-16">
          Astronomija Astrologije: Naučite sve od Vaših prijatelja sa HorosGPT-a
        </p>

        {/* Grid for the Cards */}
        <div className="grid gap-10 lg:gap-20 grid-cols-1 lg:grid-cols-2">
          {/* Card 1 */}
          <Link href="/learn-astrology/what-is-astrology" className="block group">
            <div className="border border-gray-400 rounded-lg p-8 transition-all group-hover:bg-white/15 backdrop-blur-sm/10 shadow-lg bg-white/10">
              <h2 className="text-2xl font-semibold mb-2 text-white">1. što je astrologija?</h2>
              <p className="text-gray-300">
                Sve u Sunčevom sistemu neprestano se kreće. Astrologija opisuje naše životno iskustvo u kontekstu ovog kretanja.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/learn-astrology/what-is-natal-chart" className="block group">
            <div className="border border-gray-400 rounded-lg p-8 transition-all group-hover:bg-white/15 backdrop-blur-sm/10 shadow-lg bg-white/10">
              <h2 className="text-2xl font-semibold mb-2 text-white">2. Natalne Karte</h2>
              <p className="text-gray-300">
                Natalna karta je karta svemira na točnoj lokaciji i u trenutku kada je netko rođen.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/zodiac-signs" className="block group">
            <div className="border border-gray-400 rounded-lg p-8 transition-all group-hover:bg-white/15 backdrop-blur-sm/10 shadow-lg bg-white/10">
              <h2 className="text-2xl font-semibold mb-2 text-white">3. Horoskopski znakovi</h2>
              <p className="text-gray-300">
                Dio astrologije s kojim ste vjerojatno najviše upoznati je Sunčev znak.
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/" className="block group">
            <div className="border border-gray-400 rounded-lg p-8 transition-all group-hover:bg-white/15 backdrop-blur-sm/10 shadow-lg bg-white/10">
              <h2 className="text-2xl font-semibold mb-2 text-white">4. Astrološke kuće</h2>
              <p className="text-gray-300">
                Najvažnija od svih kuća je prva kuća, poznata kao Ascendent ili podznak, što označava uzlazni znak.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearnAstroMenuContent;
