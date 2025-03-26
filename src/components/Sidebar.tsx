'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
        className={`fixed top-0 left-0 h-full w-[300px] max-w-[80vw] bg-white shadow-soft-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Navegación - Sin logo ni encabezado */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                const isClicked = clickedItem === item.href;
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-primary-50 text-primary-600 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:shadow-md hover:translate-x-1'
                      } ${isClicked ? 'scale-105 bg-primary-100' : ''}`}
                    >
                      <IconComponent className={`w-5 h-5 transition-transform duration-300 ${isActive || isClicked ? 'scale-110' : ''}`} />
                      <span className="text-base">{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <p className="text-xs text-gray-500 text-center">
              © 2024 Universidad de La Habana
            </p>
          </div>
        </div>
      </aside>
    </>
  );
} 