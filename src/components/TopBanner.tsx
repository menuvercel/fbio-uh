'use client';

import { FiMenu, FiSearch } from 'react-icons/fi';
import { Playfair } from 'next/font/google';

const playfair = Playfair({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

interface TopBannerProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function TopBanner({ onMenuClick, onSearchClick }: TopBannerProps) {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-[100] shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-2 sm:px-6 h-16 md:h-20">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-20"
          aria-label="Menú"
        >
          <FiMenu className="w-6 h-6 text-primary-600" />
        </button>

        <h1 className={`${playfair.className} text-lg sm:text-3xl md:text-4xl font-bold text-primary-950 uppercase tracking-wider text-center mx-auto absolute left-0 right-0 pointer-events-none flex items-center justify-center h-full`}>
          <span className="opacity-100 transition-opacity duration-300">Facultad de Biología</span>
        </h1>

        <button
          onClick={onSearchClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-20"
          aria-label="Buscar"
        >
          <FiSearch className="w-6 h-6 text-primary-600" />
        </button>
      </div>
    </header>
  );
} 