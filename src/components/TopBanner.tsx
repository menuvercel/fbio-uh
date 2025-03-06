'use client';

import { FiMenu, FiSearch } from 'react-icons/fi';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface TopBannerProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function TopBanner({ onMenuClick, onSearchClick }: TopBannerProps) {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-[100] shadow-md">
      <div className="flex items-center justify-between px-6 h-20">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Menú"
        >
          <FiMenu className="w-6 h-6 text-primary-600" />
        </button>

        <h1 className={`${playfair.className} text-2xl md:text-3xl font-bold text-primary-950 uppercase tracking-wider`}>
          Facultad de Biología
        </h1>

        <button
          onClick={onSearchClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Buscar"
        >
          <FiSearch className="w-6 h-6 text-primary-600" />
        </button>
      </div>
    </header>
  );
} 