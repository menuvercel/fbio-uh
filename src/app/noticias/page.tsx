'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const NoticiasPage = () => {
  // Esto sería reemplazado por datos reales de una API o CMS
  const noticias = [
    {
      id: 1,
      titulo: 'Nuevo Laboratorio de Investigación Molecular',
      fecha: '2024-03-01',
      resumen: 'La Facultad de Biología inaugura un nuevo laboratorio equipado con tecnología de última generación para investigación molecular y biotecnología.',
      imagen: '/lab-molecular.jpg',
      categoria: 'Infraestructura'
    },
    {
      id: 2,
      titulo: 'Conferencia Internacional de Biología 2024',
      fecha: '2024-02-28',
      resumen: 'Investigadores de todo el mundo se reúnen en nuestra facultad para compartir los últimos avances en investigación biológica.',
      imagen: '/conferencia.jpg',
      categoria: 'Eventos'
    },
    {
      id: 3,
      titulo: 'Estudiantes Ganan Premio Nacional de Investigación',
      fecha: '2024-02-25',
      resumen: 'Un grupo de estudiantes de nuestra facultad ha sido reconocido por su investigación sobre biodiversidad marina en Cuba.',
      imagen: '/premio.jpg',
      categoria: 'Logros'
    },
    {
      id: 4,
      titulo: 'Nueva Colaboración Internacional',
      fecha: '2024-02-20',
      resumen: 'La Facultad firma un importante acuerdo de colaboración con universidades europeas para proyectos de investigación conjunta.',
      imagen: '/colaboracion.jpg',
      categoria: 'Internacional'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Noticias y Eventos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantente informado sobre las últimas novedades, eventos y logros de nuestra facultad
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white">
              Todas
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100">
              Eventos
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100">
              Investigación
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100">
              Logros
            </button>
          </div>

          {/* Grid de Noticias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <article key={noticia.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {noticia.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-semibold mb-3">
                    {noticia.titulo}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {noticia.resumen}
                  </p>
                  <Link
                    href={`/noticias/${noticia.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                Anterior
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                1
              </button>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                3
              </button>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100">
                Siguiente
              </button>
            </nav>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NoticiasPage; 