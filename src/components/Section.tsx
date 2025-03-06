'use client';

import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface SectionProps {
  children: ReactNode;
  title: string;
  icon?: IconType;
  description?: string;
  className?: string;
}

export default function Section({
  children,
  title,
  icon: Icon,
  description,
  className = ''
}: SectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="mb-8">
        <div className="flex items-center justify-center sm:justify-start mb-4">
          {Icon && (
            <div className="relative">
              <div className="absolute -inset-3 bg-primary-100 rounded-full blur-sm opacity-75" />
              <Icon className="relative w-8 h-8 text-primary-600" />
            </div>
          )}
          <h2 className={`text-2xl md:text-3xl font-display font-bold text-gray-900 ${Icon ? 'ml-6' : ''}`}>
            {title}
          </h2>
        </div>
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
            {description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
} 