'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  FiHome, 
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiCalendar,
  FiMail,
  FiFileText,
  FiSettings
} from 'react-icons/fi';

const menuItems = [
  { name: 'Inicio', href: '/', icon: FiHome },
  { name: 'Noticias', href: '/noticias', icon: FiFileText },
  { name: 'Eventos', href: '/eventos', icon: FiCalendar },
  { name: 'Servicios Académicos', href: '/servicios-academicos', icon: FiSettings },
  { name: 'Investigación', href: '/investigacion', icon: FiAward },
  { name: 'Posgrados', href: '/posgrados', icon: FiBookOpen },
  { name: 'Vida Estudiantil', href: '/vida-estudiantil', icon: FiGlobe },
  { name: 'Contacto', href: '/contacto', icon: FiMail },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleNavigation = (href: string) => {
    setClickedItem(href);
    setTimeout(() => {
      router.push(href);
      onClose();
      setClickedItem(null);
    }, 300); // Espera 300ms antes de navegar
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-soft-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-8 border-b">
            <button 
              onClick={() => handleNavigation('/')} 
              className={`flex items-center space-x-3 transition-all duration-300 transform hover:translate-x-1 ${
                clickedItem === '/' ? 'scale-105' : ''
              }`}
            >
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="font-display font-bold text-xl text-gray-900">Facultad de Biología</span>
            </button>
          </div>

          {/* Navegación */}
          <nav className="flex-1 px-4 py-8 overflow-y-auto">
            <ul className="space-y-4">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                const isClicked = clickedItem === item.href;
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-primary-50 text-primary-600 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:shadow-md hover:translate-x-1'
                      } ${isClicked ? 'scale-105 bg-primary-100' : ''}`}
                    >
                      <IconComponent className={`w-6 h-6 transition-transform duration-300 ${isActive || isClicked ? 'scale-110' : ''}`} />
                      <span className="text-lg">{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Universidad de La Habana
            </p>
          </div>
        </div>
      </aside>
    </>
  );
} 