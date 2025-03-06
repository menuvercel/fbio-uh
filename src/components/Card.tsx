'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
  gradient = false
}: CardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl bg-white
        ${hover ? 'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-xl' : 'shadow-soft-md'}
        ${gradient ? 'bg-gradient-to-br from-white to-gray-50' : ''}
        ${className}
      `}
    >
      {/* Efecto de borde con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 via-secondary-200/20 to-accent-200/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 