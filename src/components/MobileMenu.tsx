'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-blue-600 p-2"
        aria-label="Menú principal"
      >
        {isOpen ? (
          <FiX className="h-6 w-6" />
        ) : (
          <FiMenu className="h-6 w-6" />
        )}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/sobre-nosotros"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/carreras"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Carreras
            </Link>
            <Link
              href="/investigacion"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Investigación
            </Link>
            <Link
              href="/posgrados"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Posgrados
            </Link>
            <Link
              href="/servicios-academicos"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Servicios Académicos
            </Link>
            <Link
              href="/vida-estudiantil"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Vida Estudiantil
            </Link>
            <Link
              href="/noticias"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Noticias
            </Link>
            <Link
              href="/eventos"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Eventos
            </Link>
            <Link
              href="/publicaciones"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Publicaciones
            </Link>
            <Link
              href="/estadisticas"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Estadísticas
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 