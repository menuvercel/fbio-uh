'use client';

import { FiCalendar, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';

const eventos = [
  {
    id: 1,
    titulo: 'Conferencia Internacional de Biología 2024',
    fecha: '2024-04-15',
    hora: '09:00 - 18:00',
    lugar: 'Aula Magna, Universidad de La Habana',
    imagen: '/conferencia.jpg',
    descripcion: 'Conferencia internacional que reúne a destacados investigadores en el campo de la biología molecular y biotecnología.'
  },
  {
    id: 2,
    titulo: 'Taller de Técnicas Moleculares',
    fecha: '2024-04-20',
    hora: '14:00 - 17:00',
    lugar: 'Laboratorio Central, Facultad de Biología',
    imagen: '/taller.jpg',
    descripcion: 'Taller práctico sobre técnicas moleculares modernas para estudiantes avanzados e investigadores.'
  },
  {
    id: 3,
    titulo: 'Simposio de Biodiversidad Marina',
    fecha: '2024-05-10',
    hora: '10:00 - 16:00',
    lugar: 'Centro de Investigaciones Marinas',
    imagen: '/simposio.jpg',
    descripcion: 'Simposio dedicado a la presentación de investigaciones sobre biodiversidad marina en Cuba.'
  }
];

export default function EventosPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Eventos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre los próximos eventos académicos y científicos de nuestra facultad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento) => (
              <Link key={evento.id} href={`/eventos/${evento.id}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={evento.imagen}
                      alt={evento.titulo}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{evento.titulo}</h2>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <FiCalendar className="w-5 h-5 mr-2" />
                        <span>{evento.fecha}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-5 h-5 mr-2" />
                        <span>{evento.lugar}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{evento.descripcion}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 