'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiGrid, FiDownload, FiInfo } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';
import MallaCurricular from '@/components/MallaCurricular';
import { mallaBiologia, AnioData } from '@/data/mallasBiologia';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function MallaCurricularFullPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navegación */}
        <div className="mb-6">
          <Link 
            href="/carreras/biologia" 
            className={`${cormorant.className} inline-flex items-center text-primary-600 hover:text-primary-800`}
          >
            <FiArrowLeft className="mr-2" />
            Volver a Biología
          </Link>
        </div>
        
        {/* Encabezado */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className={`${cormorant.className} text-3xl font-bold text-gray-900 mb-2`}>
                Malla Curricular Biología
              </h1>
              <p className={`${cormorant.className} text-gray-600`}>
                Plan de estudios vigente para la Licenciatura en Biología
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button
                className={`inline-flex items-center px-4 py-2 rounded-lg bg-primary-100 text-primary-700 border border-primary-200`}
              >
                <FiGrid className="mr-2" />
                <span className={cormorant.className}>Cuadrícula</span>
              </button>
              <a
                href="/docs/malla-biologia.pdf"
                download
                className="bg-white text-primary-700 hover:bg-primary-50 border border-primary-200 rounded-lg px-4 py-2 flex items-center"
              >
                <FiDownload className="mr-2" />
                <span className={cormorant.className}>Descargar PDF</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Información general */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex items-center mb-4">
            <FiInfo className="text-primary-600 mr-2" />
            <h2 className={`${cormorant.className} text-xl font-semibold text-gray-900`}>
              Información del Plan de Estudios
            </h2>
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
              <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>38 asignaturas</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className={`${cormorant.className} text-sm text-gray-500 mb-1`}>Última Actualización</p>
              <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>2022</p>
            </div>
          </div>
        </div>
        
        {/* Malla Curricular */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <MallaCurricular planEstudio={mallaBiologia} carrera="biologia" />
        </div>
        
        {/* Requisitos de graduación */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
            Requisitos de Graduación
          </h2>
          <div className="space-y-4">
            <p className={`${cormorant.className} text-gray-700`}>
              Para obtener el grado de Licenciado(a) en Biología, 
              los estudiantes deben cumplir con los siguientes requisitos:
            </p>
            <div className="bg-gray-50 p-5 rounded-lg">
              <ol className={`${cormorant.className} space-y-3 list-decimal pl-5 text-gray-700`}>
                <li>Aprobar la totalidad de las asignaturas del plan de estudios (Plan E 2022).</li>
                <li>Completar satisfactoriamente el Trabajo Biológico de Campo (1er año).</li>
                <li>Realizar y aprobar las Prácticas Investigativas de Ecología (2do año).</li>
                <li>Completar la Práctica Laboral (3er año).</li>
                <li>Desarrollar, presentar y defender exitosamente el Trabajo de Diploma (4to año).</li>
                <li>Acreditar nivel básico de inglés según los requisitos establecidos.</li>
                <li>No tener deudas ni situaciones pendientes con la universidad.</li>
              </ol>
            </div>
            <p className={`${cormorant.className} text-gray-700`}>
              El programa incluye asignaturas optativas y electivas que permiten a los estudiantes 
              orientar su formación según sus intereses profesionales en áreas como ecología, 
              conservación, zoología, botánica o biología molecular. Las asignaturas optativas disponibles 
              se ofertan semestralmente y abarcan diferentes áreas de especialización en biología.
            </p>
            <p className={`${cormorant.className} text-gray-700 mt-4`}>
              El plan de estudios está diseñado para formar profesionales con una sólida base científica 
              y habilidades prácticas en el campo de la biología, con énfasis en la conservación de la biodiversidad 
              y el manejo sostenible de los recursos naturales.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
