import Image from 'next/image';
import { notFound } from 'next/navigation';

// Datos de ejemplo - En producción esto vendría de una API o CMS
const carrerasData = {
  bioquimica: {
    titulo: 'Bioquímica y Biología Molecular',
    descripcion: 'Esta carrera te prepara para comprender los procesos químicos que ocurren en los organismos vivos a nivel molecular.',
    imagen: '/bioquimica.jpg',
    duracion: '5 años',
    creditos: 300,
    planEstudio: [
      {
        año: 'Primer Año',
        asignaturas: [
          'Química General',
          'Biología Celular',
          'Matemática I y II',
          'Física General',
          'Laboratorio de Química'
        ]
      },
      {
        año: 'Segundo Año',
        asignaturas: [
          'Química Orgánica',
          'Bioquímica I',
          'Genética Molecular',
          'Métodos Matemáticos',
          'Laboratorio de Bioquímica'
        ]
      },
      {
        año: 'Tercer Año',
        asignaturas: [
          'Bioquímica II',
          'Biología Molecular',
          'Enzimología',
          'Inmunología',
          'Bioinformática'
        ]
      },
      {
        año: 'Cuarto Año',
        asignaturas: [
          'Biotecnología',
          'Proteómica',
          'Metabolismo',
          'Regulación Metabólica',
          'Proyecto de Investigación I'
        ]
      },
      {
        año: 'Quinto Año',
        asignaturas: [
          'Ingeniería Genética',
          'Bioquímica Clínica',
          'Proyecto de Investigación II',
          'Tesis de Grado'
        ]
      }
    ],
    campoLaboral: [
      {
        area: 'Investigación Biomédica',
        descripcion: 'Desarrollo de investigaciones en laboratorios y centros de investigación.'
      },
      {
        area: 'Industria Biotecnológica',
        descripcion: 'Desarrollo de productos y procesos biotecnológicos.'
      },
      {
        area: 'Laboratorios Clínicos',
        descripcion: 'Análisis bioquímicos y diagnóstico molecular.'
      },
      {
        area: 'Docencia Universitaria',
        descripcion: 'Formación de nuevos profesionales en el área.'
      }
    ]
  },
  microbiologia: {
    titulo: 'Microbiología y Virología',
    descripcion: 'Especialización en el estudio de microorganismos y virus, con enfoque en microbiología médica, industrial y ambiental.',
    imagen: '/microbiologia.jpg',
    duracion: '5 años',
    creditos: 300,
    planEstudio: [
      {
        año: 'Primer Año',
        asignaturas: [
          'Biología General',
          'Química General',
          'Matemática',
          'Física',
          'Introducción a la Microbiología'
        ]
      },
      {
        año: 'Segundo Año',
        asignaturas: [
          'Bacteriología',
          'Virología General',
          'Bioquímica',
          'Genética Microbiana',
          'Técnicas Microbiológicas'
        ]
      },
      {
        año: 'Tercer Año',
        asignaturas: [
          'Inmunología',
          'Micología',
          'Parasitología',
          'Microbiología Ambiental',
          'Biotecnología Microbiana'
        ]
      },
      {
        año: 'Cuarto Año',
        asignaturas: [
          'Microbiología Médica',
          'Virología Molecular',
          'Epidemiología',
          'Control Microbiológico',
          'Proyecto de Investigación I'
        ]
      },
      {
        año: 'Quinto Año',
        asignaturas: [
          'Microbiología Industrial',
          'Diagnóstico Virológico',
          'Proyecto de Investigación II',
          'Tesis de Grado'
        ]
      }
    ],
    campoLaboral: [
      {
        area: 'Laboratorios de Diagnóstico',
        descripcion: 'Análisis microbiológicos y diagnóstico viral.'
      },
      {
        area: 'Industria Farmacéutica',
        descripcion: 'Desarrollo de vacunas y antimicrobianos.'
      },
      {
        area: 'Control de Calidad',
        descripcion: 'Supervisión microbiológica en industrias.'
      },
      {
        area: 'Investigación en Salud Pública',
        descripcion: 'Estudio de enfermedades infecciosas y epidemiología.'
      }
    ]
  },
  biologia: {
    titulo: 'Biología',
    descripcion: 'Estudio integral de la vida, desde moléculas hasta ecosistemas, con énfasis en la biodiversidad cubana.',
    imagen: '/biologia.jpg',
    duracion: '5 años',
    creditos: 300,
    planEstudio: [
      {
        año: 'Primer Año',
        asignaturas: [
          'Biología General',
          'Química General',
          'Matemática',
          'Física',
          'Botánica General'
        ]
      },
      {
        año: 'Segundo Año',
        asignaturas: [
          'Zoología',
          'Ecología',
          'Bioquímica',
          'Genética',
          'Bioestadística'
        ]
      },
      {
        año: 'Tercer Año',
        asignaturas: [
          'Fisiología Animal',
          'Fisiología Vegetal',
          'Evolución',
          'Biodiversidad',
          'Biología Marina'
        ]
      },
      {
        año: 'Cuarto Año',
        asignaturas: [
          'Conservación',
          'Biotecnología',
          'Biogeografía',
          'Biología del Desarrollo',
          'Proyecto de Investigación I'
        ]
      },
      {
        año: 'Quinto Año',
        asignaturas: [
          'Gestión Ambiental',
          'Biodiversidad Cubana',
          'Proyecto de Investigación II',
          'Tesis de Grado'
        ]
      }
    ],
    campoLaboral: [
      {
        area: 'Conservación de la Naturaleza',
        descripcion: 'Gestión y protección de ecosistemas.'
      },
      {
        area: 'Gestión Ambiental',
        descripcion: 'Evaluación y manejo de impacto ambiental.'
      },
      {
        area: 'Investigación Científica',
        descripcion: 'Estudio de la biodiversidad y ecosistemas.'
      },
      {
        area: 'Docencia',
        descripcion: 'Formación académica en ciencias biológicas.'
      }
    ]
  }
};

export default function CarreraPage({ params }: { params: { id: string } }) {
  const carrera = carrerasData[params.id as keyof typeof carrerasData];

  if (!carrera) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={carrera.imagen}
            alt={carrera.titulo}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {carrera.titulo}
            </h1>
            <p className="text-xl max-w-2xl">
              {carrera.descripcion}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Información General */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Información General</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Duración</h3>
              <p className="text-gray-600">{carrera.duracion}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Créditos Académicos</h3>
              <p className="text-gray-600">{carrera.creditos}</p>
            </div>
          </div>
        </section>

        {/* Plan de Estudios */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Plan de Estudios</h2>
          <div className="space-y-8">
            {carrera.planEstudio.map((año) => (
              <div key={año.año}>
                <h3 className="text-xl font-semibold mb-4">{año.año}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {año.asignaturas.map((asignatura) => (
                    <li key={asignatura}>{asignatura}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Campo Laboral */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Campo Laboral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {carrera.campoLaboral.map((campo) => (
              <div key={campo.area} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{campo.area}</h3>
                <p className="text-gray-600">{campo.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 