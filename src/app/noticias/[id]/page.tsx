import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Datos de ejemplo - En producción esto vendría de una API o CMS
const noticiasData = {
  1: {
    titulo: 'Nuevo Laboratorio de Investigación Molecular',
    fecha: '2024-03-01',
    autor: 'Dr. Carlos Rodríguez',
    imagen: '/lab-molecular.jpg',
    categoria: 'Infraestructura',
    contenido: `
      La Facultad de Biología de la Universidad de La Habana inaugura un nuevo laboratorio 
      equipado con tecnología de última generación para investigación molecular y biotecnología. 
      Esta nueva instalación permitirá a nuestros investigadores y estudiantes realizar 
      investigaciones avanzadas en el campo de la biología molecular.

      El laboratorio cuenta con equipos modernos como secuenciadores de ADN, PCR en tiempo real, 
      microscopios de fluorescencia y otros instrumentos especializados que permitirán realizar 
      investigaciones de primer nivel.

      Este proyecto representa una inversión significativa en la infraestructura de investigación 
      de nuestra facultad y demuestra nuestro compromiso continuo con la excelencia académica 
      y científica.

      El laboratorio estará disponible para:
      - Investigaciones doctorales y de maestría
      - Proyectos de investigación de pregrado
      - Colaboraciones internacionales
      - Servicios especializados para la industria biotecnológica

      La inauguración contó con la presencia de autoridades universitarias, investigadores 
      y representantes del sector biotecnológico del país.
    `,
    imagenes: [
      {
        url: '/lab-molecular-1.jpg',
        descripcion: 'Vista general del nuevo laboratorio'
      },
      {
        url: '/lab-molecular-2.jpg',
        descripcion: 'Área de secuenciación genética'
      },
      {
        url: '/lab-molecular-3.jpg',
        descripcion: 'Ceremonia de inauguración'
      }
    ],
    noticiasRelacionadas: [
      {
        id: 2,
        titulo: 'Conferencia Internacional de Biología 2024'
      },
      {
        id: 3,
        titulo: 'Estudiantes Ganan Premio Nacional de Investigación'
      }
    ]
  }
};

export default function NoticiaPage({ params }: { params: { id: string } }) {
  const noticia = noticiasData[parseInt(params.id) as keyof typeof noticiasData];

  if (!noticia) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4">
        {/* Cabecera */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-[400px]">
            <Image
              src={noticia.imagen}
              alt={noticia.titulo}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {noticia.categoria}
              </span>
              <time className="text-gray-500">
                {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
            <p className="text-gray-600">Por {noticia.autor}</p>
          </div>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose max-w-none">
            {noticia.contenido.split('\n\n').map((parrafo, index) => (
              <p key={index} className="mb-4 text-gray-600">
                {parrafo}
              </p>
            ))}
          </div>
        </div>

        {/* Galería de Imágenes */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Galería de Imágenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticia.imagenes.map((imagen, index) => (
              <div key={index} className="relative">
                <div className="relative h-48">
                  <Image
                    src={imagen.url}
                    alt={imagen.descripcion}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">{imagen.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Noticias Relacionadas */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Noticias Relacionadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noticia.noticiasRelacionadas.map((relacionada) => (
              <Link
                key={relacionada.id}
                href={`/noticias/${relacionada.id}`}
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {relacionada.titulo}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
} 