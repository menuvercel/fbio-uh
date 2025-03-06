'use client';

import { FiBook, FiClock, FiMapPin, FiUsers, FiMonitor, FiFileText, FiHelpCircle } from 'react-icons/fi';
import PageTransition from '@/components/PageTransition';

const servicios = {
  biblioteca: {
    horario: 'Lunes a Viernes: 8:00 AM - 8:00 PM',
    ubicacion: 'Edificio Principal, 2do Piso',
    servicios: [
      'Préstamo de libros y revistas científicas',
      'Acceso a bases de datos académicas',
      'Sala de lectura y estudio',
      'Computadoras con acceso a internet',
      'Servicio de fotocopias e impresión'
    ],
    recursos: [
      'Más de 20,000 volúmenes especializados',
      'Suscripción a revistas científicas internacionales',
      'Acceso a bases de datos como ScienceDirect y JSTOR',
      'Colección histórica de tesis y publicaciones'
    ]
  },
  tutorias: [
    {
      area: 'Biología Molecular',
      horarios: 'Martes y Jueves: 2:00 PM - 4:00 PM',
      tutor: 'Dr. Juan Pérez',
      ubicacion: 'Laboratorio de Biología Molecular'
    },
    {
      area: 'Botánica',
      horarios: 'Lunes y Miércoles: 3:00 PM - 5:00 PM',
      tutor: 'Dra. Ana Martínez',
      ubicacion: 'Herbario'
    },
    {
      area: 'Zoología',
      horarios: 'Miércoles y Viernes: 1:00 PM - 3:00 PM',
      tutor: 'Dr. Carlos Rodríguez',
      ubicacion: 'Laboratorio de Zoología'
    }
  ],
  recursosEstudio: [
    {
      nombre: 'Aula Virtual',
      descripcion: 'Plataforma en línea con materiales de estudio, tareas y evaluaciones.',
      acceso: 'Disponible 24/7',
      requisitos: 'Cuenta institucional activa'
    },
    {
      nombre: 'Laboratorios de Práctica',
      descripcion: 'Espacios equipados para prácticas individuales y grupales.',
      acceso: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
      requisitos: 'Reserva previa'
    },
    {
      nombre: 'Centro de Cómputo',
      descripcion: 'Computadoras con software especializado para análisis biológico.',
      acceso: 'Lunes a Viernes: 8:00 AM - 8:00 PM',
      requisitos: 'Carné estudiantil'
    }
  ],
  asesoria: {
    tipos: [
      {
        nombre: 'Asesoría Académica',
        descripcion: 'Orientación sobre programas de estudio y desarrollo académico.',
        contacto: 'asesoria.academica@fbio.uh.cu'
      },
      {
        nombre: 'Orientación Profesional',
        descripcion: 'Guía sobre oportunidades laborales y desarrollo profesional.',
        contacto: 'orientacion.profesional@fbio.uh.cu'
      },
      {
        nombre: 'Apoyo Estudiantil',
        descripcion: 'Soporte para estudiantes con dificultades académicas.',
        contacto: 'apoyo.estudiantil@fbio.uh.cu'
      }
    ]
  }
};

export default function ServiciosAcademicosPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Servicios Académicos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre todos los servicios y recursos disponibles para apoyar tu desarrollo académico
              en la Facultad de Biología
            </p>
          </div>

          {/* Biblioteca */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FiBook className="w-6 h-6 mr-2 text-blue-600" />
              Biblioteca
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <FiClock className="w-5 h-5 mr-2" />
                      <span>Horario: {servicios.biblioteca.horario}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="w-5 h-5 mr-2" />
                      <span>Ubicación: {servicios.biblioteca.ubicacion}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Servicios Disponibles</h3>
                    <ul className="space-y-2">
                      {servicios.biblioteca.servicios.map((servicio, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="mr-2">•</span>
                          {servicio}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Recursos</h3>
                  <ul className="space-y-2">
                    {servicios.biblioteca.recursos.map((recurso, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="mr-2">•</span>
                        {recurso}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tutorías */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FiUsers className="w-6 h-6 mr-2 text-blue-600" />
              Tutorías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.tutorias.map((tutoria, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">{tutoria.area}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <FiClock className="w-5 h-5 mr-2" />
                      <span>{tutoria.horarios}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiUsers className="w-5 h-5 mr-2" />
                      <span>{tutoria.tutor}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="w-5 h-5 mr-2" />
                      <span>{tutoria.ubicacion}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recursos de Estudio */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FiMonitor className="w-6 h-6 mr-2 text-blue-600" />
              Recursos de Estudio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicios.recursosEstudio.map((recurso, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">{recurso.nombre}</h3>
                  <p className="text-gray-600 mb-4">{recurso.descripcion}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <FiClock className="w-5 h-5 mr-2" />
                      <span>{recurso.acceso}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiFileText className="w-5 h-5 mr-2" />
                      <span>{recurso.requisitos}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Asesoría */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FiHelpCircle className="w-6 h-6 mr-2 text-blue-600" />
              Asesoría Estudiantil
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicios.asesoria.tipos.map((tipo, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">{tipo.nombre}</h3>
                  <p className="text-gray-600 mb-4">{tipo.descripcion}</p>
                  <div className="flex items-center text-gray-600">
                    <FiFileText className="w-5 h-5 mr-2" />
                    <span>{tipo.contacto}</span>
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