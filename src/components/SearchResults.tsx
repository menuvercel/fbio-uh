'use client';

import { FiX } from 'react-icons/fi';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'news' | 'program' | 'event';
}

interface SearchResultsProps {
  results: SearchResult[];
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
}

export default function SearchResults({ results, isOpen, onClose, searchQuery }: SearchResultsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative min-h-screen md:flex md:items-center md:justify-center p-4">
        <div className="relative bg-white rounded-2xl max-w-2xl w-full mx-auto shadow-soft-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Resultados para "{searchQuery}"
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          <div className="p-4">
            {results.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No se encontraron resultados para tu búsqueda.</p>
                <p className="text-sm text-gray-500 mt-2">
                  Intenta con otros términos o navega por nuestro menú principal.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <li key={index}>
                    <Link
                      href={result.url}
                      className="block p-4 rounded-xl hover:bg-gray-50 transition-colors"
                      onClick={onClose}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {result.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {result.description}
                          </p>
                        </div>
                        <span className="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full">
                          {result.type === 'page' && 'Página'}
                          {result.type === 'news' && 'Noticia'}
                          {result.type === 'program' && 'Programa'}
                          {result.type === 'event' && 'Evento'}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 