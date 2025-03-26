'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiBookOpen, FiUsers, FiBook, FiFileText, FiClock, FiLayers, FiInfo } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';
import MallaCurricular from '@/components/MallaCurricular';
import { mallaBioquimica } from '@/data/mallasBioquimica';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function BioquimicaPage() {
  const [activeTab, setActiveTab] = useState('info');

  const TabButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
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
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero section */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8">
              <h1 className={`${cormorant.className} text-4xl font-bold text-gray-900 mb-4`}>
                Licenciatura en Bioquímica y Biología Molecular
              </h1>
              <p className={`${cormorant.className} text-xl text-gray-600 mb-6`}>
                Formamos profesionales con sólidos conocimientos en biomoléculas y sus interacciones en los organismos vivos.
              </p>
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center">
                  <FiClock className="text-primary-600 mr-2" />
                  <div>
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Duración</p>
                    <p className={`${cormorant.className} font-medium text-gray-900`}>4 años</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiLayers className="text-primary-600 mr-2" />
                  <div>
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Modalidad</p>
                    <p className={`${cormorant.className} font-medium text-gray-900`}>Presencial</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                {/* Eliminando el enlace a la malla curricular completa */}
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/3">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="/bioquimica-lab.jpg"
                  alt="Estudiantes de Bioquímica en laboratorio"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs - Mejorando visualización móvil */}
        <div className="flex flex-wrap overflow-x-auto mb-8 gap-2 pb-2">
          <TabButton id="info" label="Información" icon={FiBookOpen} />
          <TabButton id="malla" label="Malla" icon={FiBook} />
          <TabButton id="perfil" label="Perfiles" icon={FiFileText} />
          <TabButton id="profesores" label="Profesores" icon={FiUsers} />
          <TabButton id="recursos" label="Recursos" icon={FiBookOpen} />
        </div>
        
        {/* Tab content */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          {activeTab === 'info' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-6`}>
                Sobre la Carrera de Bioquímica y Biología Molecular
              </h2>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Competencias Profesionales
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Analizar e interpretar procesos bioquímicos a nivel celular y molecular en organismos vivos.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Diseñar, ejecutar y evaluar procedimientos experimentales para el estudio de biomoléculas.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Aplicar metodologías analíticas en el diagnóstico clínico y la investigación biomédica.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Desarrollar productos y procesos biotecnológicos con aplicación en diversas áreas.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Gestionar y asegurar la calidad en laboratorios de análisis e investigación.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Habilidades y Actitudes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Pensamiento Crítico y Analítico
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Capacidad para analizar problemas complejos, evaluar evidencias y proponer soluciones basadas en la investigación científica.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Trabajo en Equipo Multidisciplinario
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Habilidad para colaborar con profesionales de diversas disciplinas en proyectos científicos y aplicados.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Compromiso Ético
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Actuación responsable y ética en la investigación científica y en la aplicación de conocimientos bioquímicos.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Aprendizaje Continuo
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Disposición para actualizarse constantemente en un campo científico en constante evolución.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'malla' && (
            <div className="animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-2`}>
                    Malla Curricular
                  </h2>
                  <p className={`${cormorant.className} text-gray-600`}>
                    Plan de estudios de la Licenciatura en Bioquímica y Biología Molecular
                  </p>
                </div>
                {/* Eliminando el enlace a la malla completa */}
              </div>
              
              {/* Panel de información del plan de estudios - Movido antes de la malla curricular */}
              <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <FiInfo className="text-primary-600 mr-2" />
                  <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900`}>
                    Información del Plan de Estudios
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Total de Horas</p>
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>3,600</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Duración</p>
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>4 años (8 semestres)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Número de Asignaturas</p>
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>42 asignaturas</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Última Actualización</p>
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>2025</p>
                  </div>
                </div>
              </div>
              
              <MallaCurricular planEstudio={mallaBioquimica} carrera="bioquimica" />
              
              {/* Requisitos de Graduación */}
              <div className="mt-8 bg-gray-50 p-5 rounded-lg">
                <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-4`}>
                  Requisitos de Graduación
                </h3>
                <ol className={`${cormorant.className} space-y-3 list-decimal pl-5 text-gray-700`}>
                  <li>Aprobar la totalidad de las asignaturas del plan de estudios.</li>
                  <li>Realizar y aprobar las prácticas en Bioquímica y Biología Molecular (I, II, III y IV).</li>
                  <li>Desarrollar, presentar y defender exitosamente el trabajo de diploma.</li>
                  <li>Acreditar nivel de inglés según los requisitos establecidos.</li>
                  <li>No tener deudas ni situaciones pendientes con la universidad.</li>
                </ol>
              </div>
            </div>
          )}
          
          {activeTab === 'perfil' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-6`}>
                Perfil del Egresado
              </h2>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Competencias Profesionales
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Analizar e interpretar procesos bioquímicos a nivel celular y molecular en organismos vivos.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Diseñar, ejecutar y evaluar procedimientos experimentales para el estudio de biomoléculas.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Aplicar metodologías analíticas en el diagnóstico clínico y la investigación biomédica.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Desarrollar productos y procesos biotecnológicos con aplicación en diversas áreas.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Gestionar y asegurar la calidad en laboratorios de análisis e investigación.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Habilidades y Actitudes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Pensamiento Crítico y Analítico
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Capacidad para analizar problemas complejos, evaluar evidencias y proponer soluciones basadas en la investigación científica.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Trabajo en Equipo Multidisciplinario
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Habilidad para colaborar con profesionales de diversas disciplinas en proyectos científicos y aplicados.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Compromiso Ético
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Actuación responsable y ética en la investigación científica y en la aplicación de conocimientos bioquímicos.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Aprendizaje Continuo
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Disposición para actualizarse constantemente en un campo científico en constante evolución.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'profesores' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-6`}>
                Profesores de Bioquímica y Biología Molecular
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/profesor1.jpg"
                      alt="Dra. María del Carmen Luzardo"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`${cormorant.className} text-lg font-semibold text-gray-900 mb-1`}>
                      Dra. María del Carmen Luzardo
                    </h3>
                    <p className={`${cormorant.className} text-primary-700 mb-2`}>
                      Coordinadora Académica
                    </p>
                    <p className={`${cormorant.className} text-sm text-gray-600 mb-3`}>
                      Doctora en Ciencias Biológicas. Especialista en Biofísica de Membranas y Bioquímica Estructural.
                    </p>
                    <a href="mailto:maria.luzardo@uh.cu" className={`${cormorant.className} text-sm text-primary-600 hover:underline`}>
                      maria.luzardo@uh.cu
                    </a>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/profesor2.jpg"
                      alt="Dra. Georgina Espinosa"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`${cormorant.className} text-lg font-semibold text-gray-900 mb-1`}>
                      Dra. Georgina Espinosa
                    </h3>
                    <p className={`${cormorant.className} text-primary-700 mb-2`}>
                      Profesora Titular
                    </p>
                    <p className={`${cormorant.className} text-sm text-gray-600 mb-3`}>
                      Doctora en Ciencias Biológicas. Especialista en Biología Molecular y Genética.
                    </p>
                    <a href="mailto:georgina.espinosa@uh.cu" className={`${cormorant.className} text-sm text-primary-600 hover:underline`}>
                      georgina.espinosa@uh.cu
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/profesor3.jpg"
                      alt="Dra. Isel Pascual"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`${cormorant.className} text-lg font-semibold text-gray-900 mb-1`}>
                      Dra. Isel Pascual
                    </h3>
                    <p className={`${cormorant.className} text-primary-700 mb-2`}>
                      Profesora Titular
                    </p>
                    <p className={`${cormorant.className} text-sm text-gray-600 mb-3`}>
                      Doctora en Ciencias Biológicas. Especialista en Enzimología y Bioquímica de Proteínas.
                    </p>
                    <a href="mailto:isel.pascual@uh.cu" className={`${cormorant.className} text-sm text-primary-600 hover:underline`}>
                      isel.pascual@uh.cu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'recursos' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-6`}>
                Recursos Educativos
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                    Laboratorios Especializados
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Laboratorio de Bioquímica Estructural y Enzimología
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Laboratorio de Biología Molecular y Genómica
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Laboratorio de Bioquímica Clínica
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Laboratorio de Biotecnología y Bioprocesos
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                    Biblioteca y Recursos Digitales
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Acceso a revistas científicas especializadas
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Bases de datos de estructuras moleculares y genómicas
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Software especializado para modelado molecular y análisis de datos
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>
                        Colección de libros de texto y referencias bibliográficas especializadas
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Convenios y Colaboraciones
                </h3>
                <p className={`${cormorant.className} text-gray-700 mb-4`}>
                  Nuestra facultad mantiene convenios con instituciones nacionales e internacionales que permiten a los estudiantes realizar pasantías, prácticas profesionales e intercambios académicos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className={`${cormorant.className} font-medium text-gray-900`}>
                      Hospitales y Centros Clínicos
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className={`${cormorant.className} font-medium text-gray-900`}>
                      Industria Farmacéutica y Biotecnológica
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className={`${cormorant.className} font-medium text-gray-900`}>
                      Centros de Investigación Avanzada
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className={`${cormorant.className} font-medium text-gray-900`}>
                      Universidades Extranjeras
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'info' && (
            <div className="animate-fade-in">
              <div className="mt-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-4`}>
                  Disciplinas Principales
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Matemática Superior y Computación
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Imprescindible para comprender la Química-Física, la Física, para aprender a modelar fenómenos biológicos, desarrollar la capacidad de abstracción y aprender Bioinformática.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Física
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Estudia las interacciones entre los componentes del Universo y enseña a medir diferentes parámetros. Da las bases para comprender muchos métodos de estudio empleados en Bioquímica y Biología Molecular.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Química
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Estudia las transformaciones entre las sustancias, su estructura, las reacciones químicas y los métodos para determinar la concentración de las moléculas. La Química Orgánica es la base para comprender la estructura y propiedades de las biomoléculas.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Biología
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Fundamental para conocer a los seres vivos, su morfología y funcionamiento (de animales y plantas).
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Bioquímica
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Disciplina integradora de la carrera. Estudia la estructura de las biomoléculas, sus transformaciones metabólicas, las enzimas y los métodos de trabajo actuales con las biomoléculas. Además, da elementos de Bioestadística y enseña a trabajar en el laboratorio.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Biología Molecular y Celular
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Estudia la célula (bacterias, levaduras, hongos, célula animal y vegetal), la genética, la inmunología, los virus y las funciones de las biomoléculas dentro de la célula.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Bioquímica Aplicada
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Incluye Bioquímica Clínica (diferentes enfermedades de base molecular), Bioquímica de la Nutrición (las bases moleculares de una alimentación sana) y Toxicología (diferentes moléculas con efectos tóxicos en el organismo).
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Biotecnología
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Enseña cómo modificar las proteínas para mejorar su uso industrial, mantener células en cultivo fuera del organismo para producir moléculas de interés, y modificar genéticamente organismos para producir proteínas de interés.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Bioinformática
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Enseña a utilizar la computación para manejar grandes volúmenes de información relacionados con las biomoléculas, y modelar la estructura de las biomoléculas y sus interacciones.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-4`}>
                  Aspectos Destacados
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Prácticas Laborales
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Todos los años se realizan prácticas laborales donde los estudiantes se insertan en laboratorios de investigación, producción o servicios para aplicar lo aprendido en el aula.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-primary-800 mb-2`}>
                      Idioma Inglés
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      El dominio del idioma Inglés es fundamental para la carrera. La mayoría de la bibliografía está en este idioma, el cual es utilizado en el mundo entero para garantizar la comunicación entre los científicos. Es requisito aprobarlo para poder graduarse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}