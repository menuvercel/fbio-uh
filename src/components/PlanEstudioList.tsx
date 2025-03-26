'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown, FiChevronRight, FiBook, FiClock } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface Asignatura {
  slug: string;
  nombre: string;
  codigo: string;
  creditos: number;
  horasTeoricas: number;
  horasPracticas: number;
  semestre: number;
  año: number;
  tipo?: 'basica' | 'especialidad' | 'electiva';
}

interface SemestreData {
  numero: number;
  asignaturas: Asignatura[];
}

interface AnioData {
  numero: number;
  semestres: SemestreData[];
}

interface PlanEstudioListProps {
  planEstudio: AnioData[];
  carrera: string;
}

export default function PlanEstudioList({ planEstudio, carrera }: PlanEstudioListProps) {
  const [expandedYears, setExpandedYears] = useState<number[]>([]);

  const toggleYear = (yearNumber: number) => {
    if (expandedYears.includes(yearNumber)) {
      setExpandedYears(expandedYears.filter(year => year !== yearNumber));
    } else {
      setExpandedYears([...expandedYears, yearNumber]);
    }
  };

  const isYearExpanded = (yearNumber: number) => {
    return expandedYears.includes(yearNumber);
  };

  const getTipoAsignaturaText = (tipo?: 'basica' | 'especialidad' | 'electiva') => {
    switch (tipo) {
      case 'basica':
        return 'Básica';
      case 'especialidad':
        return 'Especialidad';
      case 'electiva':
        return 'Electiva';
      default:
        return 'Básica';
    }
  };

  const getTipoAsignaturaColor = (tipo?: 'basica' | 'especialidad' | 'electiva') => {
    switch (tipo) {
      case 'basica':
        return 'bg-blue-100 text-blue-800';
      case 'especialidad':
        return 'bg-green-100 text-green-800';
      case 'electiva':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="w-full">
      <div className="pb-4 flex flex-wrap gap-2 mb-6">
        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <span className={cormorant.className}>Asignaturas Básicas</span>
        </div>
        <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span className={cormorant.className}>Asignaturas de Especialidad</span>
        </div>
        <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
          <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
          <span className={cormorant.className}>Asignaturas Electivas</span>
        </div>
      </div>

      <div className="space-y-4">
        {planEstudio.map((anio) => (
          <div key={anio.numero} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleYear(anio.numero)}
              className="w-full flex items-center justify-between bg-gray-50 p-4 hover:bg-gray-100 transition-colors"
            >
              <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900`}>
                {anio.numero}° Año
              </h3>
              {isYearExpanded(anio.numero) ? (
                <FiChevronDown className="text-gray-500" />
              ) : (
                <FiChevronRight className="text-gray-500" />
              )}
            </button>

            {isYearExpanded(anio.numero) && (
              <div className="p-4">
                {anio.semestres.map((semestre) => (
                  <div key={semestre.numero} className="mb-6 last:mb-0">
                    <h4 className={`${cormorant.className} text-lg font-medium text-gray-800 mb-3 border-b pb-2`}>
                      Semestre {semestre.numero}
                    </h4>
                    <div className="space-y-3">
                      {semestre.asignaturas.map((asignatura) => (
                        <Link
                          href={`/carreras/${carrera}/asignaturas/${asignatura.slug}`}
                          key={asignatura.codigo}
                          className="block bg-white p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <div className="flex items-center mb-1">
                                <span className={`text-xs font-medium px-2 py-0.5 rounded ${getTipoAsignaturaColor(asignatura.tipo)}`}>
                                  {getTipoAsignaturaText(asignatura.tipo)}
                                </span>
                              </div>
                              <h5 className={`${cormorant.className} text-lg font-semibold text-gray-900`}>
                                {asignatura.nombre}
                              </h5>
                              <p className={`${cormorant.className} text-sm text-gray-600`}>
                                {asignatura.codigo}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-2 sm:mt-0 text-gray-700">
                              <div className="flex items-center">
                                <FiBook className="mr-1 text-primary-600" />
                                <span className={`${cormorant.className} text-sm`}>{asignatura.creditos} créditos</span>
                              </div>
                              <div className="flex items-center">
                                <FiClock className="mr-1 text-primary-600" />
                                <span className={`${cormorant.className} text-sm`}>{asignatura.horasTeoricas}T - {asignatura.horasPracticas}P</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 