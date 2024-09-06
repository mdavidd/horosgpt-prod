import Logo from '@/assets/logo.svg'
import Link from 'next/link';
import InstaSocial from '@/assets/social-instagram.svg'

export const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15'>
      <div className='container mx-auto'>
        {/* Flexbox parent with responsive design */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-0'>

          {/* Left - Logo and HorosGPT */}
          <div className='flex items-center gap-2'>
            <Logo className="h-6 w-6" />
            <div className='font-medium'>HorosGPT</div>
          </div>

          {/* Center - Navigation (stacked for mobile) */}
          <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7'>
            <Link href="/learn-astrology" className="text-white/70 hover:text-white text-xs md:text-sm transition whitespace-nowrap">O Horoskopu</Link>
            <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition whitespace-nowrap">Politika Privatnosti</Link>
            <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition whitespace-nowrap">Uvjeti Korištenja</Link>
            <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition whitespace-nowrap">Kontakt</Link>
          </nav>

          {/* Right - Instagram Icon (stacked for mobile) */}
          <div className='flex lg:justify-end'>
            <InstaSocial className="text-white/40 hover:text-white" />
          </div>

        </div>
      </div>
    </footer>
  );
};
