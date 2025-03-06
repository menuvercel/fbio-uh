'use client';

import { FiFilter, FiDownload, FiExternalLink } from 'react-icons/fi';
import PageTransition from '@/components/PageTransition';

const publicaciones = [
  {
    id: 1,
    titulo: 'Biodiversidad de corales en el Caribe cubano: un estudio comparativo',
    autores: 'González, M., Rodríguez, C., Martínez, A.',
    revista: 'Marine Biology Research',
    año: 2024,
    doi: '10.1234/mbr.2024.001',
    tipo: 'Artículo',
    area: 'Ecología Marina'
  },
  {
    id: 2,
    titulo: 'Nuevas técnicas moleculares para el estudio de microorganismos marinos',
    autores: 'Pérez, J., López, R., García, S.',
    revista: 'Molecular Marine Biology',
    año: 2024,
    doi: '10.1234/mmb.2024.002',
    tipo: 'Revisión',
    area: 'Biología Molecular'
  },
  {
    id: 3,
    titulo: 'Impacto del cambio climático en la biodiversidad cubana',
    autores: 'Martínez, A., González, M.',
    revista: 'Climate Change Biology',
    año: 2023,
    doi: '10.1234/ccb.2023.003',
    tipo: 'Artículo',
    area: 'Cambio Climático'
  }
];

export default function PublicacionesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Publicaciones Científicas</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre las últimas investigaciones y contribuciones científicas de nuestros profesores e investigadores
            </p>
          </div>

          {/* Filtros y Búsqueda */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Buscar por título, autor o palabra clave..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <FiFilter className="w-4 h-4" />
                  Filtrar
                </button>
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="">Todos los años</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          </div>

          {/* Lista de Publicaciones */}
          <div className="space-y-6">
            {publicaciones.map((pub) => (
              <div key={pub.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{pub.titulo}</h2>
                    <p className="text-gray-600 mb-2">{pub.autores}</p>
                    <p className="text-gray-500">
                      {pub.revista} ({pub.año})
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {pub.tipo}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {pub.area}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FiExternalLink className="w-4 h-4 mr-1" />
                    DOI
                  </a>
                  <button className="flex items-center text-blue-600 hover:text-blue-800">
                    <FiDownload className="w-4 h-4 mr-1" />
                    PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 