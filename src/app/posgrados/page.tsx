'use client';

import { FiAward, FiCalendar, FiBookOpen, FiUsers } from 'react-icons/fi';
import PageLayout from '@/components/PageLayout';
import Section from '@/components/Section';
import Card from '@/components/Card';

const programasPosgrado = [
  {
    id: 1,
    titulo: 'Doctorado en Ciencias Biológicas',
    duracion: '4 años',
    modalidad: 'Tiempo completo',
    lineasInvestigacion: [
      'Biología Molecular y Biotecnología',
      'Ecología y Conservación',
      'Biodiversidad y Evolución'
    ],
    requisitos: [
      'Título de Máster en área afín',
      'Experiencia en investigación',
      'Propuesta de investigación',
      'Nivel B2 de inglés'
    ]
  },
  {
    id: 2,
    titulo: 'Maestría en Biología Marina',
    duracion: '2 años',
    modalidad: 'Tiempo completo',
    lineasInvestigacion: [
      'Ecología Marina',
      'Conservación de Ecosistemas Costeros',
      'Acuicultura Sostenible'
    ],
    requisitos: [
      'Licenciatura en Biología o área afín',
      'Promedio mínimo de 8/10',
      'Carta de motivación',
      'Nivel B1 de inglés'
    ]
  },
  {
    id: 3,
    titulo: 'Maestría en Biotecnología',
    duracion: '2 años',
    modalidad: 'Tiempo completo',
    lineasInvestigacion: [
      'Biotecnología Vegetal',
      'Biotecnología Microbiana',
      'Biotecnología Ambiental'
    ],
    requisitos: [
      'Licenciatura en Biología, Bioquímica o área afín',
      'Experiencia en laboratorio',
      'Entrevista técnica',
      'Nivel B1 de inglés'
    ]
  }
];

const cursosEspecializados = [
  {
    titulo: 'Técnicas Avanzadas en Biología Molecular',
    duracion: '120 horas',
    proximaFecha: 'Septiembre 2024',
    profesor: 'Dr. Roberto Sánchez'
  },
  {
    titulo: 'Análisis de Datos Genómicos',
    duracion: '80 horas',
    proximaFecha: 'Octubre 2024',
    profesor: 'Dra. Laura Pérez'
  },
  {
    titulo: 'Conservación de Ecosistemas Tropicales',
    duracion: '100 horas',
    proximaFecha: 'Noviembre 2024',
    profesor: 'Dr. Carlos Martínez'
  }
];

const becas = [
  {
    nombre: 'Beca de Excelencia Académica',
    cobertura: 'Matrícula completa + estipendio mensual',
    requisitos: ['Promedio superior a 9/10', 'Carta de recomendación', 'Proyecto de investigación'],
    plazo: 'Junio 2024'
  },
  {
    nombre: 'Beca de Investigación Internacional',
    cobertura: 'Matrícula parcial + gastos de investigación',
    requisitos: ['Proyecto internacional', 'Dos cartas de recomendación', 'Experiencia previa'],
    plazo: 'Julio 2024'
  },
  {
    nombre: 'Beca de Movilidad',
    cobertura: 'Gastos de viaje + estancia',
    requisitos: ['Carta de aceptación', 'Plan de trabajo', 'Nivel B2 de inglés'],
    plazo: 'Agosto 2024'
  }
];

export default function PosgradosPage() {
  return (
    <PageLayout
      title="Posgrados"
      description="Formación académica de excelencia en ciencias biológicas a nivel de maestría y doctorado"
    >
      {/* Programas de Posgrado */}
      <Section
        title="Programas de Posgrado"
        icon={FiAward}
        description="Nuestros programas de posgrado están diseñados para formar investigadores y profesionales de alto nivel"
      >
        {programasPosgrado.map((programa) => (
          <Card key={programa.id} hover gradient className="group">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary-100 rounded-full blur-sm opacity-75" />
                  <FiAward className="relative w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4">{programa.titulo}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-4">
                    <FiCalendar className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-gray-700">
                      <strong>Duración:</strong> {programa.duracion}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <FiUsers className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-gray-700">
                      <strong>Modalidad:</strong> {programa.modalidad}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Líneas de Investigación:</h4>
                    <ul className="space-y-2">
                      {programa.lineasInvestigacion.map((linea, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 mr-2" />
                          {linea}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Requisitos:</h4>
                  <ul className="space-y-2">
                    {programa.requisitos.map((requisito, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-secondary-400 mr-2" />
                        {requisito}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      {/* Cursos Especializados */}
      <Section
        title="Cursos Especializados"
        icon={FiBookOpen}
        description="Cursos intensivos para la actualización y especialización profesional"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cursosEspecializados.map((curso, index) => (
            <Card key={index} hover className="p-6">
              <h3 className="text-xl font-semibold mb-4">{curso.titulo}</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <FiCalendar className="w-5 h-5 text-secondary-500 mr-2" />
                  <span>{curso.duracion}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiUsers className="w-5 h-5 text-secondary-500 mr-2" />
                  <span>{curso.profesor}</span>
                </div>
                <div className="mt-4 inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                  Próxima fecha: {curso.proximaFecha}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Becas y Financiamiento */}
      <Section
        title="Becas y Financiamiento"
        icon={FiAward}
        description="Oportunidades de financiamiento para apoyar tus estudios de posgrado"
      >
        {becas.map((beca, index) => (
          <Card key={index} hover className="p-6 group">
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary-100 rounded-full blur-sm opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
                <FiAward className="relative w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold ml-3">{beca.nombre}</h3>
            </div>
            <div className="space-y-4">
              <div className="text-gray-600">
                <strong className="text-gray-900">Cobertura:</strong> {beca.cobertura}
              </div>
              <div>
                <strong className="text-gray-900">Requisitos:</strong>
                <ul className="mt-2 space-y-2">
                  {beca.requisitos.map((requisito, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-secondary-400 mr-2" />
                      {requisito}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Plazo: {beca.plazo}
              </div>
            </div>
          </Card>
        ))}
      </Section>
    </PageLayout>
  );
} 