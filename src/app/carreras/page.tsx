import Image from 'next/image';
import Link from 'next/link';

const CarrerasPage = () => {
  const carreras = [
    {
      id: 'bioquimica',
      titulo: 'Bioquímica y Biología Molecular',
      descripcion: 'Esta carrera te prepara para comprender los procesos químicos que ocurren en los organismos vivos a nivel molecular. Aprenderás sobre enzimología, metabolismo, biología molecular y biotecnología.',
      duracion: '4 años',
      imagen: '/bioquimica.jpg',
      salidas: [
        'Investigación biomédica',
        'Industria biotecnológica',
        'Laboratorios clínicos',
        'Centros de investigación'
      ]
    },
    {
      id: 'microbiologia',
      titulo: 'Microbiología y Virología',
      descripcion: 'Especialízate en el estudio de microorganismos y virus. Esta carrera te preparará para trabajar en microbiología médica, industrial y ambiental, así como en virología.',
      duracion: '4 años',
      imagen: '/microbiologia.jpg',
      salidas: [
        'Laboratorios de diagnóstico',
        'Industria farmacéutica',
        'Control de calidad',
        'Investigación en salud pública'
      ]
    },
    {
      id: 'biologia',
      titulo: 'Biología',
      descripcion: 'Estudia la vida en todas sus formas, desde el nivel molecular hasta el ecosistémico. Esta carrera ofrece una formación integral en biología con énfasis en la biodiversidad cubana.',
      duracion: '4 años',
      imagen: '/biologia.jpg',
      salidas: [
        'Conservación de la naturaleza',
        'Gestión ambiental',
        'Investigación científica',
        'Docencia universitaria'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestras Carreras</h1>
        
        <div className="space-y-12">
          {carreras.map((carrera) => (
            <div key={carrera.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={carrera.imagen}
                    alt={carrera.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{carrera.titulo}</h2>
                  <p className="text-gray-600 mb-6">{carrera.descripcion}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Duración</h3>
                      <p className="text-gray-600">{carrera.duracion}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Salidas Profesionales</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {carrera.salidas.map((salida, index) => (
                        <li key={index}>{salida}</li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/carreras/${carrera.id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Más información
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrerasPage; 