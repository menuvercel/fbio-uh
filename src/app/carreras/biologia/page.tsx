'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiBookOpen, FiUsers, FiBook, FiFileText, FiClock, FiLayers, FiInfo } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';
import MallaCurricular from '@/components/MallaCurricular';
import { mallaBiologia } from '@/data/mallasBiologia';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function BiologiaPage() {
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
                Licenciatura en Biología
              </h1>
              <p className={`${cormorant.className} text-xl text-gray-600 mb-6`}>
                Formamos profesionales con sólidos conocimientos en biodiversidad, ecología y conservación de los organismos vivos.
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
                  src="/biologia-campo.jpg"
                  alt="Estudiantes de Biología en trabajo de campo"
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
                Sobre la Carrera de Biología
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
                      Identificar, caracterizar y clasificar la biodiversidad en sus diferentes niveles de organización.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Analizar y evaluar procesos ecológicos y evolutivos en ecosistemas naturales y modificados.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Diseñar e implementar estrategias para la conservación y uso sostenible de la biodiversidad.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Aplicar métodos y técnicas para el estudio de organismos y su relación con el medio ambiente.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                    </div>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Gestionar proyectos de investigación y manejo de recursos naturales.
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
                      Observación y Análisis Crítico
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Capacidad para observar detalladamente fenómenos naturales y analizar críticamente los datos obtenidos en el campo y laboratorio.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Trabajo en Equipos Multidisciplinarios
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Habilidad para colaborar con profesionales de diversas disciplinas en proyectos de investigación y conservación.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Compromiso Ambiental
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Actuación responsable y ética en la investigación científica y en la aplicación de conocimientos biológicos para la conservación.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Adaptabilidad al Trabajo de Campo
                    </h4>
                    <p className={`${cormorant.className} text-gray-700`}>
                      Capacidad para adaptarse a diferentes condiciones ambientales durante el trabajo de campo y recolección de datos.
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
                    Plan de estudios de la Licenciatura en Biología
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
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>3,400</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Duración</p>
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>4 años (8 semestres)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Número de Asignaturas</p>
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>38 asignaturas</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Última Actualización</p>
                    <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>2022</p>
                  </div>
                </div>
              </div>
              
              <MallaCurricular planEstudio={mallaBiologia} carrera="biologia" />
              
              {/* Requisitos de Graduación */}
              <div className="mt-8 bg-gray-50 p-5 rounded-lg">
                <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-4`}>
                  Requisitos de Graduación
                </h3>
                <ol className={`${cormorant.className} space-y-3 list-decimal pl-5 text-gray-700`}>
                  <li>Aprobar la totalidad de las asignaturas del plan de estudios.</li>
                  <li>Realizar y aprobar las prácticas de campo (I y II) y la práctica profesional.</li>
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
                Perfiles de Egreso
              </h2>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Perfil Profesional
                </h3>
                <p className={`${cormorant.className} text-gray-700 mb-4`}>
                  El Licenciado en Biología es un profesional con sólida formación científica, capacitado para estudiar, comprender y explicar los fenómenos biológicos a diferentes niveles de organización, desde moléculas hasta ecosistemas. Posee conocimientos teóricos y prácticos sobre la biodiversidad, su origen, evolución y conservación, así como sobre los procesos ecológicos que determinan el funcionamiento de los ecosistemas.
                </p>
                <p className={`${cormorant.className} text-gray-700`}>
                  Está preparado para aplicar métodos y técnicas de investigación científica en el campo de la biología, contribuyendo a la generación de conocimientos y a la solución de problemas relacionados con la conservación y uso sostenible de los recursos naturales.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Campos de Acción
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-3`}>
                      Investigación Científica
                    </h4>
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      <li>• Centros de investigación y universidades</li>
                      <li>• Laboratorios de biología molecular y celular</li>
                      <li>• Proyectos de investigación en biodiversidad</li>
                      <li>• Estudios ecológicos y evolutivos</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-3`}>
                      Gestión Ambiental
                    </h4>
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      <li>• Áreas protegidas y parques nacionales</li>
                      <li>• Evaluación de impacto ambiental</li>
                      <li>• Restauración ecológica</li>
                      <li>• Monitoreo de biodiversidad</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-3`}>
                      Sector Público
                    </h4>
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      <li>• Ministerios y agencias de medio ambiente</li>
                      <li>• Institutos de investigación gubernamentales</li>
                      <li>• Programas de conservación de especies</li>
                      <li>• Desarrollo de políticas ambientales</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-3`}>
                      Sector Privado
                    </h4>
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      <li>• Consultorías ambientales</li>
                      <li>• Biotecnología</li>
                      <li>• Ecoturismo</li>
                      <li>• Acuicultura y manejo de recursos naturales</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Continuidad Académica
                </h3>
                <p className={`${cormorant.className} text-gray-700 mb-4`}>
                  El Licenciado en Biología puede continuar su formación académica a través de:
                </p>
                <ul className={`${cormorant.className} space-y-3 text-gray-700`}>
                  <li className="flex items-start">
                    <FiArrowRight className="text-primary-600 mr-2 mt-1" />
                    <span>Maestrías en Ciencias Biológicas, Ecología, Conservación, Biodiversidad o áreas afines.</span>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-primary-600 mr-2 mt-1" />
                    <span>Doctorados en Ciencias Biológicas o especialidades relacionadas.</span>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-primary-600 mr-2 mt-1" />
                    <span>Especializaciones en áreas como Biología Molecular, Genética, Ecología, Zoología, Botánica, entre otras.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'profesores' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-6`}>
                Profesores de la Carrera
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src="/images/profesores/profesor-biologia-1.jpg"
                          alt="Dr. Carlos Rodríguez"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-1`}>
                        Dr. Alejandro Barro
                      </h3>
                      <p className={`${cormorant.className} text-primary-600 mb-2`}>
                        Decano
                      </p>
                      <p className={`${cormorant.className} text-sm text-gray-600 mb-3`}>
                        Especialista en Zoología de Invertebrados
                      </p>
                      <div className="flex items-center">
                        <FiFileText className="text-gray-400 mr-1" />
                        <a href="mailto:carlos.rodriguez@fbio.uh.cu" className={`${cormorant.className} text-sm text-gray-600 hover:text-primary-600`}>
                          abarro@fbio.uh.cu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src="/images/profesores/profesor-biologia-2.jpg"
                          alt="Dra. Ana Martínez"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-1`}>
                        Dra. Ana Martínez
                      </h3>
                      <p className={`${cormorant.className} text-primary-600 mb-2`}>
                        Profesora Titular
                      </p>
                      <p className={`${cormorant.className} text-sm text-gray-600 mb-3`}>
                        Especialista en Zoología y Biodiversidad
                      </p>
                      <div className="flex items-center">
                        <FiFileText className="text-gray-400 mr-1" />
                        <a href="mailto:ana.martinez@fbio.uh.cu" className={`${cormorant.className} text-sm text-gray-600 hover:text-primary-600`}>
                          ana.martinez@fbio.uh.cu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src="/images/profesores/profesor-biologia-3.jpg"
                          alt="Dr. Miguel Fernández"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-1`}>
                        Dr. Miguel Fernández
                      </h3>
                      <p className={`${cormorant.className} text-primary-600 mb-2`}>
                        Profesor Titular
                      </p>
                      <p className={`${cormorant.className} text-sm text-gray-600 mb-3`}>
                        Especialista en Botánica y Fisiología Vegetal
                      </p>
                      <div className="flex items-center">
                        <FiFileText className="text-gray-400 mr-1" />
                        <a href="mailto:miguel.fernandez@fbio.uh.cu" className={`${cormorant.className} text-sm text-gray-600 hover:text-primary-600`}>
                          miguel.fernandez@fbio.uh.cu
                        </a>
                      </div>
                    </div>
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
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Instalaciones
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-3`}>
                      Laboratorios
                    </h4>
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      <li>• Laboratorio de Biología Molecular</li>
                      <li>• Laboratorio de Microbiología</li>
                      <li>• Laboratorio de Zoología</li>
                      <li>• Laboratorio de Botánica</li>
                      <li>• Laboratorio de Ecología</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-3`}>
                      Colecciones Biológicas
                    </h4>
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      <li>• Herbario Nacional</li>
                      <li>• Colección Entomológica</li>
                      <li>• Colección de Vertebrados</li>
                      <li>• Banco de Germoplasma</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Recursos Digitales
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Bases de Datos Científicas
                    </h4>
                    <p className={`${cormorant.className} text-sm text-gray-700`}>
                      Acceso a bases de datos como JSTOR, ScienceDirect, Scopus y Web of Science.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Biblioteca Digital
                    </h4>
                    <p className={`${cormorant.className} text-sm text-gray-700`}>
                      Colección de libros, revistas y artículos científicos en formato digital.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className={`${cormorant.className} font-semibold text-gray-900 mb-2`}>
                      Software Especializado
                    </h4>
                    <p className={`${cormorant.className} text-sm text-gray-700`}>
                      Programas para análisis de datos biológicos, modelación ecológica y sistemas de información geográfica.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-4`}>
                  Prácticas y Trabajo de Campo
                </h3>
                <p className={`${cormorant.className} text-gray-700 mb-4`}>
                  La carrera de Biología incluye prácticas de campo obligatorias que permiten a los estudiantes aplicar sus conocimientos en entornos naturales. Estas prácticas se realizan en diferentes ecosistemas del país, como bosques, humedales, áreas costeras y montañas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/biologia-practica-1.jpg"
                      alt="Estudiantes en práctica de campo"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/biologia-practica-2.jpg"
                      alt="Trabajo de campo en ecosistemas naturales"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
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
