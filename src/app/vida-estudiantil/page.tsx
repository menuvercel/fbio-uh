'use client';

import { FiUsers, FiCalendar, FiGlobe, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import Card from '@/components/Card';

const gruposCientificos = [
  {
    nombre: 'Karyon',
    descripcion: 'Grupo científico estudiantil dedicado a la investigación en biología molecular y celular.',
    imagen: '/grupos/karyon.jpg',
    enlace: '/grupos-cientificos/karyon'
  },
  {
    nombre: 'Marige',
    descripcion: 'Enfocado en la investigación de biología molecular e inmunología.',
    imagen: '/grupos/marige.jpg',
    enlace: '/grupos-cientificos/marige'
  },
  {
    nombre: 'Nicho',
    descripcion: 'Especializado en ecología y conservación de la biodiversidad.',
    imagen: '/grupos/nicho.jpg',
    enlace: '/grupos-cientificos/nicho'
  },
  {
    nombre: 'Pangea',
    descripcion: 'Dedicado al estudio de la biogeografía y evolución.',
    imagen: '/grupos/pangea.jpg',
    enlace: '/grupos-cientificos/pangea'
  },
  {
    nombre: 'Hibiscus',
    descripcion: 'Centrado en la botánica y la conservación de la flora.',
    imagen: '/grupos/hibiscus.jpg',
    enlace: '/grupos-cientificos/hibiscus'
  }
];

const vidaEstudiantil = {
  actividadesExtracurriculares: [
    {
      tipo: 'Deportivas',
      actividades: [
        'Volleyball',
        'Basketball',
        'Football'
      ],
      horarios: 'Varios horarios disponibles',
      ubicacion: 'Instalaciones deportivas universitarias'
    },
    {
      tipo: 'Culturales',
      actividades: [
        'Rueda de Casino',
        'Grupo de teatro',
        'Talleres de arte'
      ],
      horarios: 'Tardes y fines de semana',
      ubicacion: 'Casa de la Cultura Universitaria'
    },
    {
      tipo: 'Científicas',
      actividades: [
        'Club de debate científico',
        'Feria de ciencias',
        'Concursos de investigación'
      ],
      horarios: 'Según calendario académico',
      ubicacion: 'Facultad de Biología'
    }
  ],
  intercambios: [
    {
      programa: 'Intercambio Internacional',
      destinos: ['España', 'México', 'Brasil'],
      duracion: '1-2 semestres',
      requisitos: [
        'Promedio académico superior a 4.0',
        'Nivel B2 de idioma extranjero',
        'Carta de motivación'
      ]
    },
    {
      programa: 'Prácticas Profesionales',
      empresas: ['Centros de Investigación', 'Laboratorios', 'ONGs Ambientales'],
      duracion: '2-6 meses',
      requisitos: [
        'Tercer año aprobado',
        'Carta de recomendación',
        'CV actualizado'
      ]
    }
  ],
  voluntariado: [
    {
      nombre: 'Programa de Conservación Marina',
      descripcion: 'Participación en proyectos de conservación de ecosistemas marinos.',
      ubicacion: 'Costas de Cuba',
      duracion: 'Fines de semana'
    },
    {
      nombre: 'Educación Ambiental en Escuelas',
      descripcion: 'Programa de concientización ambiental en escuelas locales.',
      ubicacion: 'La Habana',
      duracion: 'Durante el curso escolar'
    },
    {
      nombre: 'Reforestación y Conservación',
      descripcion: 'Proyectos de reforestación y conservación de especies locales.',
      ubicacion: 'Varios sitios en Cuba',
      duracion: 'Proyectos mensuales'
    }
  ]
};

export default function VidaEstudiantilPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Vida Estudiantil</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre todas las actividades y organizaciones que hacen única la experiencia estudiantil en nuestra facultad
            </p>
          </div>

          {/* Grupos Científicos Estudiantiles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <FiUsers className="w-6 h-6 mr-2 text-blue-600" />
              Grupos Científicos Estudiantiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gruposCientificos.map((grupo, index) => (
                <Link key={index} href={grupo.enlace}>
                  <Card hover className="h-full group">
                    <div className="relative h-48">
                      <Image
                        src={grupo.imagen}
                        alt={grupo.nombre}
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                      <h3 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
                        {grupo.nombre}
                      </h3>
                      <p className="text-lg font-lora text-gray-600 mb-8 flex-grow">
                        {grupo.descripcion}
                      </p>
                      <div className="flex items-center text-primary-600 font-medium text-lg mt-auto">
                        Conocer más
                        <FiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Actividades Extracurriculares */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FiCalendar className="w-6 h-6 mr-2 text-blue-600" />
              Actividades Extracurriculares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vidaEstudiantil.actividadesExtracurriculares.map((act, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">{act.tipo}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Actividades:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {act.actividades.map((actividad, i) => (
                          <li key={i}>{actividad}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-gray-600">
                      <p><strong>Horarios:</strong> {act.horarios}</p>
                      <p><strong>Ubicación:</strong> {act.ubicacion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Intercambios y Prácticas */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FiGlobe className="w-6 h-6 mr-2 text-blue-600" />
              Intercambios y Prácticas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vidaEstudiantil.intercambios.map((prog, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">{prog.programa}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">
                        {prog.destinos ? 'Destinos:' : 'Empresas:'}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {(prog.destinos || prog.empresas).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-gray-600">
                      <p><strong>Duración:</strong> {prog.duracion}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Requisitos:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {prog.requisitos.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
} 