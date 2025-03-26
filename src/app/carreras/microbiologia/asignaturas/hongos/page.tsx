'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiBook, FiClock, FiDownload, FiHash, FiLayers, FiList, FiUsers } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function HongosPage() {
  const [activeTab, setActiveTab] = useState('contenido');

  const TabButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-primary-100 text-primary-800 font-semibold'
          : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <Icon className="mr-2" />
      <span className={cormorant.className}>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Link 
          href="/carreras/microbiologia/malla-curricular" 
          className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          <span className={cormorant.className}>Volver a la malla curricular</span>
        </Link>
        
        {/* Encabezado de la asignatura */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
          <h1 className={`${cormorant.className} text-3xl font-bold text-gray-900 mb-4`}>
            Hongos (Fungi)
          </h1>
          
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center">
              <FiHash className="text-primary-600 mr-2" />
              <div>
                <p className={`${cormorant.className} text-sm text-gray-500`}>Código</p>
                <p className={`${cormorant.className} font-medium text-gray-900`}>HF101</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiClock className="text-primary-600 mr-2" />
              <div>
                <p className={`${cormorant.className} text-sm text-gray-500`}>Horas</p>
                <p className={`${cormorant.className} font-medium text-gray-900`}>64 (32T/32P)</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiLayers className="text-primary-600 mr-2" />
              <div>
                <p className={`${cormorant.className} text-sm text-gray-500`}>Semestre/Año</p>
                <p className={`${cormorant.className} font-medium text-gray-900`}>1er Semestre / 1er Año</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiBook className="text-primary-600 mr-2" />
              <div>
                <p className={`${cormorant.className} text-sm text-gray-500`}>Departamento</p>
                <p className={`${cormorant.className} font-medium text-gray-900`}>Biología Vegetal</p>
              </div>
            </div>
          </div>
          
          <p className={`${cormorant.className} text-gray-700`}>
            Estudio de los organismos heterótrofos con características tubulares que conforman el reino Fungi. Se analizan sus características morfológicas, fisiológicas, ecológicas y taxonómicas, así como su importancia en los ecosistemas y sus aplicaciones en diversos campos.
          </p>
        </div>
        
        {/* Tabs de navegación */}
        <div className="flex flex-wrap overflow-x-auto mb-6 gap-2 pb-2">
          <TabButton id="contenido" label="Contenido" icon={FiBook} />
          <TabButton id="evaluacion" label="Evaluación" icon={FiList} />
          <TabButton id="profesores" label="Profesores" icon={FiUsers} />
        </div>
        
        {/* Contenido de los tabs */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          {activeTab === 'contenido' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Objetivos
                </h2>
                <ul className={`${cormorant.className} space-y-2 text-gray-700 list-disc pl-5`}>
                  <li>Comprender la diversidad y características fundamentales de los hongos.</li>
                  <li>Identificar los principales grupos taxonómicos de hongos: Pseudohongos, Hongos Basales, Ascomycota y Basidiomycota.</li>
                  <li>Analizar las asociaciones fúngicas y su importancia ecológica.</li>
                  <li>Desarrollar habilidades prácticas para el aislamiento, cultivo e identificación de hongos.</li>
                  <li>Conocer las aplicaciones de los hongos en la industria, medicina y biotecnología.</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Contenidos
                </h2>
                
                <div className="mb-6">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    1. Introducción al estudio de los hongos
                  </h3>
                  <ul className={`${cormorant.className} space-y-1 text-gray-700 list-disc pl-5`}>
                    <li>Características generales y diversidad de los hongos</li>
                    <li>Importancia ecológica y económica</li>
                    <li>Historia de la micología</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    2. Pseudohongos
                  </h3>
                  <ul className={`${cormorant.className} space-y-1 text-gray-700 list-disc pl-5`}>
                    <li>Características y clasificación</li>
                    <li>Oomycetes y otros grupos relacionados</li>
                    <li>Importancia fitopatológica</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    3. Hongos Basales
                  </h3>
                  <ul className={`${cormorant.className} space-y-1 text-gray-700 list-disc pl-5`}>
                    <li>Chytridiomycota y Zygomycota</li>
                    <li>Características morfológicas y reproductivas</li>
                    <li>Ciclos de vida y hábitats</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    4. Ascomycota
                  </h3>
                  <ul className={`${cormorant.className} space-y-1 text-gray-700 list-disc pl-5`}>
                    <li>Características generales y diversidad</li>
                    <li>Ciclos reproductivos</li>
                    <li>Importancia ecológica y económica</li>
                    <li>Levaduras y hongos filamentosos</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    5. Basidiomycota
                  </h3>
                  <ul className={`${cormorant.className} space-y-1 text-gray-700 list-disc pl-5`}>
                    <li>Características generales y diversidad</li>
                    <li>Hongos formadores de setas</li>
                    <li>Ciclos reproductivos</li>
                    <li>Hongos comestibles y tóxicos</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    6. Asociaciones fúngicas
                  </h3>
                  <ul className={`${cormorant.className} space-y-1 text-gray-700 list-disc pl-5`}>
                    <li>Micorrizas y su importancia en ecosistemas</li>
                    <li>Líquenes: estructura, diversidad y ecología</li>
                    <li>Hongos endófitos y su relación con plantas</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    7. Aplicaciones de los hongos
                  </h3>
                  <ul className={`${cormorant.className} space-y-1 text-gray-700 list-disc pl-5`}>
                    <li>Producción de antibióticos (penicilina)</li>
                    <li>Fermentación y producción de alimentos</li>
                    <li>Hongos comestibles y su cultivo</li>
                    <li>Biorremedación y aplicaciones ambientales</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Metodología
                </h2>
                <ul className={`${cormorant.className} space-y-2 text-gray-700 list-disc pl-5`}>
                  <li>Clases teóricas con presentaciones visuales y material didáctico</li>
                  <li>Prácticas de laboratorio para observación, aislamiento y cultivo de hongos</li>
                  <li>Salidas de campo para recolección e identificación de hongos en su hábitat natural</li>
                  <li>Seminarios y discusiones grupales sobre temas específicos</li>
                  <li>Elaboración de colecciones de referencia</li>
                </ul>
              </div>
              
              <div>
                <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Bibliografía
                </h2>
                
                <div className="mb-4">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    Básica
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700 list-disc pl-5`}>
                    <li>Rojas, G. (2018). Manual de Micología Básica. Editorial Universitaria.</li>
                    <li>Maldonado, S. (2019). Hongos: Diversidad y Aplicaciones. Editorial Científica.</li>
                    <li>Papendoring, M. (2017). Introducción a la Micología. Prensa Académica.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-2`}>
                    Complementaria
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700 list-disc pl-5`}>
                    <li>Cepero de García, G. (2020). Micología Médica. Editorial Médica.</li>
                    <li>Webster, J. & Weber, R. (2016). Introduction to Fungi. Cambridge University Press.</li>
                    <li>Kendrick, B. (2017). The Fifth Kingdom: An Introduction to Mycology. Focus Publishing.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'evaluacion' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-6`}>
                Sistema de Evaluación
              </h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className={`${cormorant.className} py-3 px-4 text-left font-semibold text-gray-900`}>Tipo de Evaluación</th>
                      <th className={`${cormorant.className} py-3 px-4 text-left font-semibold text-gray-900`}>Porcentaje</th>
                      <th className={`${cormorant.className} py-3 px-4 text-left font-semibold text-gray-900`}>Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>Pruebas parciales</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>30%</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-700`}>Evaluaciones teóricas sobre los contenidos del curso</td>
                    </tr>
                    <tr>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>Prácticas de laboratorio</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>25%</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-700`}>Informes de las actividades prácticas realizadas</td>
                    </tr>
                    <tr>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>Trabajo de investigación</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>20%</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-700`}>Proyecto sobre un grupo específico de hongos o una aplicación</td>
                    </tr>
                    <tr>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>Examen final</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>25%</td>
                      <td className={`${cormorant.className} py-3 px-4 text-gray-700`}>Evaluación teórico-práctica de todos los contenidos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-3`}>
                  Criterios de evaluación
                </h3>
                <ul className={`${cormorant.className} space-y-2 text-gray-700 list-disc pl-5`}>
                  <li>Comprensión de los conceptos teóricos fundamentales sobre los hongos</li>
                  <li>Capacidad para identificar y clasificar los principales grupos de hongos</li>
                  <li>Habilidad para realizar técnicas básicas de aislamiento y cultivo</li>
                  <li>Calidad de los informes de laboratorio y trabajos de investigación</li>
                  <li>Participación activa en clases y seminarios</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-3`}>
                  Requisitos para aprobar la asignatura
                </h3>
                <ul className={`${cormorant.className} space-y-2 text-gray-700 list-disc pl-5`}>
                  <li>Asistencia mínima del 80% a las clases teóricas y prácticas</li>
                  <li>Obtener una calificación mínima de 60 puntos sobre 100 en la evaluación global</li>
                  <li>Presentar todos los informes de prácticas y el trabajo de investigación</li>
                  <li>Aprobar el examen final con una calificación mínima de 60 puntos sobre 100</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'profesores' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-6`}>
                Profesores
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src="/profesores/placeholder-female.jpg" 
                      alt="Dra. Nairelí González" 
                      fill 
                      style={{objectFit: 'cover'}}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-1`}>
                    Dra. Nairelí González
                  </h3>
                  <p className={`${cormorant.className} text-gray-600 mb-3`}>
                    Profesora Asistente
                  </p>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    <strong>Especialidad:</strong> Micología
                  </p>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    <strong>Email:</strong> naireli.gonzalez@universidad.edu
                  </p>
                  <p className={`${cormorant.className} text-gray-700`}>
                    <strong>Horario de consulta:</strong> Lunes y miércoles de 14:00 a 16:00
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src="/profesores/placeholder-male.jpg" 
                      alt="Dr. David Guedán" 
                      fill 
                      style={{objectFit: 'cover'}}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-1`}>
                    Dr. David Guedán
                  </h3>
                  <p className={`${cormorant.className} text-gray-600 mb-3`}>
                    Profesor Asistente
                  </p>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    <strong>Especialidad:</strong> Hongos Basidiomicetos
                  </p>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    <strong>Email:</strong> david.guedan@universidad.edu
                  </p>
                  <p className={`${cormorant.className} text-gray-700`}>
                    <strong>Horario de consulta:</strong> Martes y jueves de 10:00 a 12:00
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src="/profesores/placeholder-male.jpg" 
                      alt="Dr. Diego Martínez" 
                      fill 
                      style={{objectFit: 'cover'}}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-1`}>
                    Dr. Diego Martínez
                  </h3>
                  <p className={`${cormorant.className} text-gray-600 mb-3`}>
                    Profesor Colaborador
                  </p>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    <strong>Institución:</strong> Instituto de Medicina Tropical
                  </p>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    <strong>Especialidad:</strong> Micología Clínica
                  </p>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    <strong>Email:</strong> diego.martinez@universidad.edu
                  </p>
                  <p className={`${cormorant.className} text-gray-700`}>
                    <strong>Horario de consulta:</strong> Viernes de 14:00 a 17:00
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-3`}>
                  Áreas de especialización
                </h3>
                <ul className={`${cormorant.className} space-y-2 text-gray-700 list-disc pl-5`}>
                  <li><strong>Ecología Fúngica:</strong> Estudio de las interacciones de los hongos con su ambiente y otros organismos.</li>
                  <li><strong>Micología Clínica:</strong> Estudio de los hongos patógenos y su impacto en la salud humana.</li>
                  <li><strong>Micología Sistemática:</strong> Clasificación e identificación de especies fúngicas.</li>
                  <li><strong>Micología Ambiental:</strong> Estudio del papel de los hongos en los ecosistemas y su aplicación en la biorremediación.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
