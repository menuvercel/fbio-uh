'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'news' | 'program' | 'event';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchableContent = [
  {
    title: 'Licenciatura en Biología',
    description: 'Programa de grado en Ciencias Biológicas',
    url: '/programas/licenciatura',
    type: 'program' as const,
  },
  {
    title: 'Licenciatura en Microbiología',
    description: 'Programa de grado especializado en Microbiología',
    url: '/programas/microbiologia',
    type: 'program' as const,
  },
  {
    title: 'Licenciatura en Bioquímica',
    description: 'Programa de grado en Bioquímica y Biología Molecular',
    url: '/programas/bioquimica',
    type: 'program' as const,
  },
  // Añadir más contenido aquí
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchableContent.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0" onClick={onClose} />

        <div className={`inline-block w-full max-w-3xl my-8 text-left align-middle transition-all transform ${
          isAnimating ? 'animate-fade-in-up' : ''
        }`}>
          {/* Barra de búsqueda */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="¿Qué estás buscando?"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-xl border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                    autoFocus
                  />
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Resultados */}
              <div className="mt-4">
                {searchQuery && (
                  <p className="text-sm text-gray-500 mb-4">
                    {results.length === 0
                      ? 'No se encontraron resultados'
                      : `${results.length} resultado${results.length === 1 ? '' : 's'} encontrado${results.length === 1 ? '' : 's'}`}
                  </p>
                )}

                <div className="space-y-4">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      href={result.url}
                      onClick={onClose}
                      className="block p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {result.title}
                          </h3>
                          <p className="text-gray-600">
                            {result.description}
                          </p>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full">
                          {result.type === 'page' && 'Página'}
                          {result.type === 'news' && 'Noticia'}
                          {result.type === 'program' && 'Programa'}
                          {result.type === 'event' && 'Evento'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 