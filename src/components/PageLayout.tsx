'use client';

import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  showPattern?: boolean;
}

export default function PageLayout({
  children,
  title,
  description,
  showPattern = true
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Patrón de fondo decorativo */}
      {showPattern && (
        <div className="absolute inset-0 z-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-hero-pattern bg-repeat" />
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Encabezado de página con efecto de desvanecimiento */}
        <div className="relative py-16 md:py-24 overflow-hidden">
          {/* Círculos decorativos */}
          <div className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-primary-100 opacity-20 blur-3xl" />
          <div className="hidden lg:block absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-secondary-100 opacity-20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 animate-slide-down">
                {title}
              </h1>
              {description && (
                <p className="max-w-2xl mx-auto text-xl text-gray-600 animate-slide-up">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contenido de la página */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="animate-fade-in">{children}</div>
        </div>
      </div>
    </div>
  );
} 