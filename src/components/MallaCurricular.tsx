'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown, FiChevronRight, FiInfo } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';
import { AnioData } from '@/data/mallasBioquimica';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface MallaCurricularProps {
  planEstudio: AnioData[];
  carrera: string;
}

export default function MallaCurricular({ planEstudio, carrera }: MallaCurricularProps) {
  const [expandedYears, setExpandedYears] = useState<number[]>([1]);

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

  const getTipoAsignaturaClass = (tipo?: 'basica' | 'especialidad' | 'electiva' | 'optativa') => {
    switch (tipo) {
      case 'basica':
        return 'bg-blue-500';
      case 'especialidad':
        return 'bg-green-500';
      case 'electiva':
        return 'bg-purple-500';
      case 'optativa':
        return 'bg-amber-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getTipoAsignaturaTextClass = (tipo?: 'basica' | 'especialidad' | 'electiva' | 'optativa') => {
    switch (tipo) {
      case 'basica':
        return 'text-blue-800 bg-blue-100';
      case 'especialidad':
        return 'text-green-800 bg-green-100';
      case 'electiva':
        return 'text-purple-800 bg-purple-100';
      case 'optativa':
        return 'text-amber-800 bg-amber-100';
      default:
        return 'text-blue-800 bg-blue-100';
    }
  };

  return (
    <div className="w-full">
      <div className="pb-4 flex flex-wrap gap-2 mb-2">
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
        <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
          <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
          <span className={cormorant.className}>Asignaturas Optativas</span>
        </div>
      </div>
      
      {/* Información adicional con ícono de información */}
      <div className="mb-6 flex items-start">
        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2">
          <FiInfo className="text-primary-600 text-xs" />
        </div>
        <p className={`${cormorant.className} text-xs text-gray-600`}>
          Haz clic en el nombre de cada asignatura para ver su descripción detallada.
        </p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {anio.semestres.map((semestre) => (
                    <div key={semestre.numero} className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className={`${cormorant.className} text-lg font-medium text-gray-800 mb-4 border-b pb-2`}>
                        Semestre {semestre.numero}
                      </h4>
                      <div className="space-y-3">
                        {semestre.asignaturas.map((asignatura) => (
                          <Link
                            href={`/carreras/${carrera}/asignaturas/${asignatura.slug}`}
                            key={asignatura.slug}
                            className="flex flex-col sm:flex-row sm:items-center p-3 border border-gray-100 hover:border-primary-200 rounded hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center w-full sm:w-auto">
                              <div className={`w-4 h-4 rounded-full ${getTipoAsignaturaClass(asignatura.tipo)} mr-3 flex-shrink-0`}></div>
                              <div className="flex-grow min-w-0">
                                <h5 className={`${cormorant.className} text-base font-medium text-gray-900 truncate`}>
                                  {asignatura.nombre}
                                </h5>
                              </div>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:ml-auto flex flex-wrap gap-2 text-xs">
                              <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                {asignatura.horas} horas
                              </span>
                              {asignatura.evaluacion && (
                                <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                  {asignatura.evaluacion}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                        
                        {/* Educación Física */}
                        {semestre.educacionFisica && (
                          <div className="mt-4 pt-3 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:items-center p-3 border border-gray-100 rounded bg-gray-50">
                              <div className="flex items-center w-full sm:w-auto">
                                <div className={`w-4 h-4 rounded-full ${getTipoAsignaturaClass(semestre.educacionFisica.tipo)} mr-3 flex-shrink-0`}></div>
                                <div className="flex-grow min-w-0">
                                  <h5 className={`${cormorant.className} text-base font-medium text-gray-900 truncate`}>
                                    {semestre.educacionFisica.nombre}
                                  </h5>
                                </div>
                              </div>
                              <div className="mt-2 sm:mt-0 sm:ml-auto flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                  {semestre.educacionFisica.horas} horas
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Electiva */}
                        {semestre.electiva && (
                          <div className="mt-2">
                            <div className="flex flex-col sm:flex-row sm:items-center p-3 border border-gray-100 rounded bg-gray-50">
                              <div className="flex items-center w-full sm:w-auto">
                                <div className={`w-4 h-4 rounded-full ${getTipoAsignaturaClass(semestre.electiva.tipo)} mr-3 flex-shrink-0`}></div>
                                <div className="flex-grow min-w-0">
                                  <h5 className={`${cormorant.className} text-base font-medium text-gray-900 truncate`}>
                                    {semestre.electiva.nombre}
                                  </h5>
                                </div>
                              </div>
                              <div className="mt-2 sm:mt-0 sm:ml-auto flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                  {semestre.electiva.horas} horas
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Práctica */}
                        {semestre.practica && (
                          <div className="mt-4 pt-3 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:items-center p-3 border border-gray-100 rounded bg-gray-50">
                              <div className="flex items-center w-full sm:w-auto">
                                <div className={`w-4 h-4 rounded-full ${getTipoAsignaturaClass(semestre.practica.tipo)} mr-3 flex-shrink-0`}></div>
                                <div className="flex-grow min-w-0">
                                  <h5 className={`${cormorant.className} text-base font-medium text-gray-900 truncate`}>
                                    {semestre.practica.nombre}
                                  </h5>
                                </div>
                              </div>
                              <div className="mt-2 sm:mt-0 sm:ml-auto flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                  {semestre.practica.horas} horas
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Horas por semana */}
                        {semestre.horasSemana && (
                          <div className="mt-4 pt-2 border-t border-gray-200 text-right">
                            <span className={`${cormorant.className} text-sm text-gray-600`}>
                              Horas por semana: {semestre.horasSemana}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className={`${cormorant.className} text-lg font-semibold text-gray-900 mb-2`}>
          Información Adicional
        </h3>
        <p className={`${cormorant.className} text-sm text-gray-700 mb-2`}>
          <strong>EF:</strong> Evaluación Final
        </p>
        <p className={`${cormorant.className} text-sm text-gray-700 mb-2`}>
          <strong>TC:</strong> Trabajo de Curso
        </p>
        <p className={`${cormorant.className} text-sm text-gray-700`}>
          La Electiva se puede cursar en cualquier año de la carrera.
        </p>
      </div>
    </div>
  );
}