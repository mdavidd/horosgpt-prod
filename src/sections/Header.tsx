"use client"; // Ensures this is a client-side component

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Using usePathname instead of useRouter
import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Heroicons v2
import { Button } from '@/components/Button';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Detecting path changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]); // Close the menu when navigating

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-30"> {/* Adjusted z-index to 30 */}
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <Link href="/">
                <LogoIcon className="h-8 w-8" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link href="/learn-astrology" className="text-white/70 hover:text-white transition">
                O Horoskopu
              </Link>
              <Link href="/learn-astrology/what-is-natal-chart" className="text-white/70 hover:text-white transition">
                Natalne Karte
              </Link>
              <Link href="/zodiac-signs" className="text-white/70 hover:text-white transition">
                Moj Znak
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/coming-soon">
              <Button>Prijavi se!</Button>
            </Link>
            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
              {isMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-6 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } z-40`} // Increased z-index for the menu
        >
          <button onClick={closeMenu} className="text-white/70 hover:text-white transition mb-8">
            <XMarkIcon className="h-8 w-8" />
          </button>
          <nav className="flex flex-col gap-8">
            <Link href="/learn-astrology" className="text-white/70 hover:text-white transition" onClick={closeMenu}>
              O Horoskopu
            </Link>
            <Link href="/learn-astrology/what-is-natal-chart" className="text-white/70 hover:text-white transition" onClick={closeMenu}>
              Natalne Karte
            </Link>
            <Link href="/zodiac-signs" className="text-white/70 hover:text-white transition" onClick={closeMenu}>
              Moj Znak
            </Link>
          </nav>

          {/* Button at the bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Link href="/coming-soon">
              <Button>Prijavi se!</Button>
            </Link>
          </div>
        </div>

        {/* Overlay for when the menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30" // Ensure overlay is below the menu (z-index 30)
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </header>
  );
};
