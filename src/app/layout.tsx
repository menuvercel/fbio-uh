'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import { Inter, Poppins } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import TopBanner from '@/components/TopBanner';
import SearchModal from '@/components/SearchModal';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Prevenir el scroll cuando el sidebar está abierto
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Función para cerrar el sidebar al tocar fuera
  const handleMainContentClick = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`bg-gray-50 ${isLoaded ? 'animate-fade-in' : 'opacity-0'} overflow-x-hidden`}>
        <Sidebar 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSearch={() => setIsSearchOpen(true)}
        />
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
        <div 
          className={`relative min-h-screen flex flex-col transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-[300px]' : 'translate-x-0'
          }`}
          onClick={handleMainContentClick}
        >
          <TopBanner 
            onMenuClick={() => setIsSidebarOpen(true)}
            onSearchClick={() => setIsSearchOpen(true)}
          />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
