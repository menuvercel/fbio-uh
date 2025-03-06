import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FiCalendar, FiMapPin, FiClock, FiUser, FiUsers } from 'react-icons/fi';

// Datos de ejemplo - En producción esto vendría de una API
const eventosData = {
  1: {
    id: 1,
    titulo: 'Conferencia Internacional de Biología 2024',
    fecha: '2024-04-15',
    horaInicio: '09:00',
    horaFin: '18:00',
    lugar: 'Aula Magna, Universidad de La Habana',
    tipo: 'Conferencia',
    imagen: '/conferencia.jpg',
    descripcion: `
      La Facultad de Biología de la Universidad de La Habana tiene el placer de invitarles 
      a la Conferencia Internacional de Biología 2024, un evento que reunirá a destacados 
      investigadores y profesionales del campo de la biología molecular y la biotecnología.

      Durante el evento, se presentarán los últimos avances en:
      - Biología molecular y celular
      - Biotecnología
      - Genómica y proteómica
      - Bioinformática
      - Microbiología y virología

      La conferencia contará con sesiones plenarias, presentaciones orales, sesiones de pósters 
      y mesas redondas donde los participantes podrán compartir sus investigaciones y establecer 
      colaboraciones internacionales.
    `,
    organizador: 'Dr. María González',
    participantes: '200 personas',
    programa: [
      {
        hora: '09:00 - 09:30',
        actividad: 'Registro de participantes'
      },
      {
        hora: '09:30 - 10:30',
        actividad: 'Conferencia inaugural: "Avances en Biología Molecular"'
      },
      {
        hora: '10:30 - 11:00',
        actividad: 'Pausa café'
      },
      {
        hora: '11:00 - 13:00',
        actividad: 'Sesiones paralelas de presentaciones orales'
      },
      {
        hora: '13:00 - 14:30',
        actividad: 'Almuerzo'
      },
      {
        hora: '14:30 - 16:30',
        actividad: 'Sesión de pósters'
      },
      {
        hora: '16:30 - 17:30',
        actividad: 'Mesa redonda: "Futuro de la investigación biológica"'
      },
      {
        hora: '17:30 - 18:00',
        actividad: 'Clausura del evento'
      }
    ],
    ponentes: [
      {
        nombre: 'Dr. Juan Pérez',
        institucion: 'Universidad de Barcelona',
        tema: 'Nuevas técnicas en biología molecular'
      },
      {
        nombre: 'Dra. Ana Smith',
        institucion: 'Harvard University',
        tema: 'Avances en biotecnología'
      },
      {
        nombre: 'Dr. Carlos Rodríguez',
        institucion: 'Universidad de La Habana',
        tema: 'Biodiversidad cubana'
      }
    ]
  }
};

export default function EventoPage({ params }: { params: { id: string } }) {
  const evento = eventosData[parseInt(params.id) as keyof typeof eventosData];

  if (!evento) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4">
        {/* Cabecera */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-[400px]">
            <Image
              src={evento.imagen}
              alt={evento.titulo}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {evento.tipo}
              </span>
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">{evento.titulo}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiCalendar className="w-5 h-5" />
                  <span>{new Date(evento.fecha).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiClock className="w-5 h-5" />
                  <span>{evento.horaInicio} - {evento.horaFin}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMapPin className="w-5 h-5" />
                  <span>{evento.lugar}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiUsers className="w-5 h-5" />
                  <span>{evento.participantes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Descripción del Evento</h2>
          <div className="prose max-w-none">
            {evento.descripcion.split('\n\n').map((parrafo, index) => (
              <p key={index} className="mb-4 text-gray-600">
                {parrafo}
              </p>
            ))}
          </div>
        </div>

        {/* Programa */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Programa</h2>
          <div className="space-y-4">
            {evento.programa.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-32 flex-shrink-0 text-gray-600 font-medium">
                  {item.hora}
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800">{item.actividad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ponentes */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Ponentes Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evento.ponentes.map((ponente, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FiUser className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">{ponente.nombre}</h3>
                </div>
                <p className="text-gray-600 mb-2">{ponente.institucion}</p>
                <p className="text-gray-700">Tema: {ponente.tema}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
} 