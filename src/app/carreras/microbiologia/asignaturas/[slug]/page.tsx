'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiBook, FiClock, FiDownload, FiHash, FiLayers, FiList, FiUsers } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Tipo de datos para los detalles de una asignatura
interface Asignatura {
  slug: string;
  nombre: string;
  codigo: string;
  horas: number;
  horasTeoricas?: number;
  horasPracticas?: number;
  semestre: number;
  año: number;
  evaluacion?: string;
  descripcion: string;
  objetivos: string[];
  contenidos: {
    titulo: string;
    items: string[];
  }[];
  metodologia: string[];
  evaluacionDetalle: {
    tipo: string;
    porcentaje?: number;
    descripcion?: string;
  }[];
  bibliografia: {
    tipo: string;
    referencias: string[];
  }[];
  prerrequisitos?: string[];
  profesores: {
    nombre: string;
    email?: string;
  }[];
}

// Función para obtener los datos de una asignatura por su slug
const getAsignaturaBySlug = (slug: string): Asignatura | null => {
  const asignatura = asignaturasData.find(a => a.slug === slug);
  return asignatura || null;
};

export default function AsignaturaPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState('contenido');
  const asignatura = getAsignaturaBySlug(params.slug);

  if (!asignatura) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className={`${cormorant.className} text-3xl font-bold text-gray-900 mb-4`}>
            En proceso de implementación
          </h1>
          <Link
            href="/carreras/microbiologia/malla-curricular"
            className="inline-flex items-center text-primary-600 hover:text-primary-800"
          >
            <FiArrowLeft className="mr-2" />
            Volver a la Malla Curricular
          </Link>
        </div>
      </div>
    );
  }

  const TabButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-primary-100 text-primary-800 font-semibold'
          : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <Icon className="mr-2" />
      <span className={cormorant.className}>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navegación */}
        <div className="mb-6">
          <Link 
            href="/carreras/microbiologia/malla-curricular" 
            className={`${cormorant.className} inline-flex items-center text-primary-600 hover:text-primary-800`}
          >
            <FiArrowLeft className="mr-2" />
            Volver a la Malla Curricular
          </Link>
        </div>
        
        {/* Encabezado */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-3/4 lg:pr-8">
              <h1 className={`${cormorant.className} text-3xl font-bold text-gray-900 mb-2`}>
                {asignatura.nombre}
              </h1>
              <p className={`${cormorant.className} text-xl text-gray-600 mb-6`}>
                {asignatura.descripcion}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FiHash className="text-primary-600 mr-2" />
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Código</p>
                  </div>
                  <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>{asignatura.codigo}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FiClock className="text-primary-600 mr-2" />
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Horas</p>
                  </div>
                  <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>{asignatura.horas} h</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FiLayers className="text-primary-600 mr-2" />
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Semestre</p>
                  </div>
                  <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>{asignatura.semestre}° ({asignatura.año}° año)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FiBook className="text-primary-600 mr-2" />
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Evaluación</p>
                  </div>
                  <p className={`${cormorant.className} text-lg font-medium text-gray-900`}>
                    {asignatura.evaluacion === 'EF' ? 'Examen Final' : 'Evaluación Continua'}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 mt-6 lg:mt-0">
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className={`${cormorant.className} text-lg font-semibold text-primary-800 mb-3`}>
                  Descargar recursos
                </h3>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center text-primary-700 hover:text-primary-800"
                  >
                    <FiDownload className="mr-2" />
                    <span className={cormorant.className}>Programa de la asignatura</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center text-primary-700 hover:text-primary-800"
                  >
                    <FiDownload className="mr-2" />
                    <span className={cormorant.className}>Guía de prácticas</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs navigation */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="flex overflow-x-auto p-2 border-b border-gray-200">
            <TabButton id="contenido" label="Contenido" icon={FiBook} />
            <TabButton id="evaluacion" label="Evaluación" icon={FiList} />
            <TabButton id="profesores" label="Profesores" icon={FiUsers} />
          </div>
          
          {/* Tab content */}
          <div className="p-6">
            {activeTab === 'contenido' && (
              <div className="animate-fade-in space-y-8">
                <div>
                  <h3 className={`${cormorant.className} text-xl font-semibold mb-3 text-primary-800`}>
                    Objetivos
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      {asignatura.objetivos.map((objetivo, index) => (
                        <li key={index}>• {objetivo}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className={`${cormorant.className} text-xl font-semibold mb-3 text-primary-800`}>
                    Contenidos
                  </h3>
                  <div className="space-y-4">
                    {asignatura.contenidos.map((contenido, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                          {contenido.titulo}
                        </h4>
                        <ul className={`${cormorant.className} space-y-1 text-gray-700`}>
                          {contenido.items.map((item, itemIndex) => (
                            <li key={itemIndex}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={`${cormorant.className} text-xl font-semibold mb-3 text-primary-800`}>
                    Metodología
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                      {asignatura.metodologia.map((metodo, index) => (
                        <li key={index}>• {metodo}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className={`${cormorant.className} text-xl font-semibold mb-3 text-primary-800`}>
                    Bibliografía
                  </h3>
                  <div className="space-y-4">
                    {asignatura.bibliografia.map((biblio, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                          {biblio.tipo}
                        </h4>
                        <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                          {biblio.referencias.map((ref, refIndex) => (
                            <li key={refIndex}>• {ref}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className={`${cormorant.className} text-xl font-semibold mb-3 text-primary-800`}>
                    Requisitos de aprobación
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-gray-700`}>
                      Para aprobar la asignatura, el estudiante debe obtener una calificación final igual o 
                      superior a 3.0 (en escala de 1.0 a 5.0) y una asistencia mínima del 80% a las 
                      actividades académicas.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'evaluacion' && (
              <div className="animate-fade-in">
                <h3 className={`${cormorant.className} text-xl font-semibold mb-4 text-primary-800`}>
                  Sistema de Evaluación
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className={`${cormorant.className} text-gray-700 mb-4`}>
                    La evaluación de esta asignatura se realiza mediante diferentes actividades 
                    que permiten valorar el progreso del estudiante y su dominio de los contenidos.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className={`${cormorant.className} text-left py-2 px-4 font-semibold text-gray-900`}>Tipo de Evaluación</th>
                          <th className={`${cormorant.className} text-center py-2 px-4 font-semibold text-gray-900`}>Porcentaje</th>
                          <th className={`${cormorant.className} text-left py-2 px-4 font-semibold text-gray-900`}>Descripción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {asignatura.evaluacionDetalle.map((evalItem, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>{evalItem.tipo}</td>
                            <td className={`${cormorant.className} py-3 px-4 text-center text-gray-800`}>
                              {evalItem.porcentaje ? `${evalItem.porcentaje}%` : '-'}
                            </td>
                            <td className={`${cormorant.className} py-3 px-4 text-gray-800`}>{evalItem.descripcion || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profesores' && (
              <div className="animate-fade-in">
                <h3 className={`${cormorant.className} text-xl font-semibold mb-4 text-primary-800`}>
                  Equipo Docente
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {asignatura.profesores.map((profesor, index) => (
                    <div key={index} className="bg-gray-50 p-5 rounded-lg">
                      <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-1`}>
                        {profesor.nombre}
                      </h4>
                      {profesor.email && (
                        <p className={`${cormorant.className} text-primary-600`}>
                          {profesor.email}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Datos de ejemplo para asignaturas
const asignaturasData: Asignatura[] = [
  {
    slug: "hongos",
    nombre: "Hongos (Fungi)",
    codigo: "HF101",
    horas: 64,
    horasTeoricas: 32,
    horasPracticas: 32,
    semestre: 1,
    año: 1,
    evaluacion: "EF",
    descripcion: "Estudio de los organismos heterótrofos con características tubulares que conforman el reino Fungi. Se analizan sus características morfológicas, fisiológicas, ecológicas y taxonómicas, así como su importancia en los ecosistemas y sus aplicaciones en diversos campos.",
    objetivos: [
      "Comprender la diversidad y características fundamentales de los hongos.",
      "Identificar los principales grupos taxonómicos de hongos: Pseudohongos, Hongos Basales, Ascomycota y Basidiomycota.",
      "Analizar las asociaciones fúngicas y su importancia ecológica.",
      "Desarrollar habilidades prácticas para el aislamiento, cultivo e identificación de hongos.",
      "Conocer las aplicaciones de los hongos en la industria, medicina y biotecnología."
    ],
    contenidos: [
      {
        titulo: "Introducción al estudio de los hongos",
        items: [
          "Características generales y diversidad de los hongos",
          "Importancia ecológica y económica",
          "Historia de la micología"
        ]
      },
      {
        titulo: "Pseudohongos",
        items: [
          "Características y clasificación",
          "Oomycetes y otros grupos relacionados",
          "Importancia fitopatológica"
        ]
      },
      {
        titulo: "Hongos Basales",
        items: [
          "Chytridiomycota y Zygomycota",
          "Características morfológicas y reproductivas",
          "Ciclos de vida y hábitats"
        ]
      },
      {
        titulo: "Ascomycota",
        items: [
          "Características generales y diversidad",
          "Ciclos reproductivos",
          "Importancia ecológica y económica",
          "Levaduras y hongos filamentosos"
        ]
      },
      {
        titulo: "Basidiomycota",
        items: [
          "Características generales y diversidad",
          "Hongos formadores de setas",
          "Ciclos reproductivos",
          "Hongos comestibles y tóxicos"
        ]
      },
      {
        titulo: "Asociaciones fúngicas",
        items: [
          "Micorrizas y su importancia en ecosistemas",
          "Líquenes: estructura, diversidad y ecología",
          "Hongos endófitos y su relación con plantas"
        ]
      },
      {
        titulo: "Aplicaciones de los hongos",
        items: [
          "Producción de antibióticos (penicilina)",
          "Fermentación y producción de alimentos",
          "Hongos comestibles y su cultivo",
          "Biorremedación y aplicaciones ambientales"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con presentaciones visuales y material didáctico",
      "Prácticas de laboratorio para observación, aislamiento y cultivo de hongos",
      "Salidas de campo para recolección e identificación de hongos en su hábitat natural",
      "Seminarios y discusiones grupales sobre temas específicos",
      "Elaboración de colecciones de referencia"
    ],
    evaluacionDetalle: [
      {
        tipo: "Pruebas parciales",
        porcentaje: 30,
        descripcion: "Evaluaciones teóricas sobre los contenidos del curso"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 25,
        descripcion: "Informes de las actividades prácticas realizadas"
      },
      {
        tipo: "Trabajo de investigación",
        porcentaje: 20,
        descripcion: "Proyecto sobre un grupo específico de hongos o una aplicación"
      },
      {
        tipo: "Examen final",
        porcentaje: 25,
        descripcion: "Evaluación teórico-práctica de todos los contenidos"
      }
    ],
    bibliografia: [
      {
        tipo: "Básica",
        referencias: [
          "Rojas, G. (2018). Manual de Micología Básica. Editorial Universitaria.",
          "Maldonado, S. (2019). Hongos: Diversidad y Aplicaciones. Editorial Científica.",
          "Papendoring, M. (2017). Introducción a la Micología. Prensa Académica."
        ]
      },
      {
        tipo: "Complementaria",
        referencias: [
          "Cepero de García, G. (2020). Micología Médica. Editorial Médica.",
          "Webster, J. & Weber, R. (2016). Introduction to Fungi. Cambridge University Press.",
          "Kendrick, B. (2017). The Fifth Kingdom: An Introduction to Mycology. Focus Publishing."
        ]
      }
    ],
    profesores: [
      {
        nombre: "Dra. Nairelí González",
        email: "naireli.gonzalez@universidad.edu"
      },
      {
        nombre: "Dr. David Guedán",
        email: "david.guedan@universidad.edu"
      },
      {
        nombre: "Dr. Diego Martínez",
        email: "diego.martinez@universidad.edu"
      }
    ]
  },
  {
    slug: "introduccion-microbiologia",
    nombre: "Introducción a la Microbiología",
    codigo: "IM101",
    horas: 38,
    horasTeoricas: 24,
    horasPracticas: 14,
    semestre: 1,
    año: 1,
    evaluacion: "EF",
    descripcion: "Asignatura introductoria que proporciona los fundamentos básicos de la microbiología, incluyendo la estructura, función y diversidad de los microorganismos.",
    objetivos: [
      "Comprender los conceptos básicos de la microbiología y su importancia en diferentes campos.",
      "Conocer la estructura y función de los diferentes tipos de microorganismos.",
      "Entender los métodos básicos de estudio y cultivo de microorganismos.",
      "Reconocer la importancia de los microorganismos en los ecosistemas y en la salud."
    ],
    contenidos: [
      {
        titulo: "Introducción a la Microbiología",
        items: [
          "Historia y desarrollo de la microbiología",
          "Áreas de estudio y aplicaciones",
          "Impacto de los microorganismos en la sociedad"
        ]
      },
      {
        titulo: "Diversidad Microbiana",
        items: [
          "Clasificación de los microorganismos",
          "Bacterias, arqueas y eucariotas microbianos",
          "Métodos de identificación y clasificación"
        ]
      },
      {
        titulo: "Estructura y Función Celular",
        items: [
          "Morfología y estructura de células procariotas",
          "Diferencias entre procariotas y eucariotas",
          "Estructuras especializadas y su función"
        ]
      },
      {
        titulo: "Crecimiento y Control Microbiano",
        items: [
          "Factores que afectan el crecimiento microbiano",
          "Métodos de cultivo y aislamiento",
          "Control físico y químico de microorganismos"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con presentaciones audiovisuales",
      "Prácticas de laboratorio para observación y cultivo de microorganismos",
      "Discusiones grupales sobre temas relevantes",
      "Elaboración de informes de prácticas"
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes parciales",
        porcentaje: 30,
        descripcion: "Dos exámenes parciales teóricos"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 30,
        descripcion: "Evaluación continua de las actividades prácticas"
      },
      {
        tipo: "Trabajos y seminarios",
        porcentaje: 15,
        descripcion: "Presentación de temas específicos"
      },
      {
        tipo: "Examen final",
        porcentaje: 25,
        descripcion: "Evaluación global de los contenidos"
      }
    ],
    bibliografia: [
      {
        tipo: "Básica",
        referencias: [
          "Madigan, M.T., Martinko, J.M., Bender, K.S., Buckley, D.H., & Stahl, D.A. (2015). Brock Biology of Microorganisms (14th ed.). Pearson.",
          "Tortora, G.J., Funke, B.R., & Case, C.L. (2016). Microbiology: An Introduction (12th ed.). Pearson.",
          "Willey, J.M., Sherwood, L.M., & Woolverton, C.J. (2017). Prescott's Microbiology (10th ed.). McGraw-Hill."
        ]
      },
      {
        tipo: "Complementaria",
        referencias: [
          "Black, J.G. (2015). Microbiology: Principles and Explorations (9th ed.). Wiley.",
          "Bauman, R. (2014). Microbiology with Diseases by Taxonomy (4th ed.). Pearson.",
          "Artículos científicos actualizados proporcionados durante el curso."
        ]
      }
    ],
    profesores: [
      {
        nombre: "Dra. María Rodríguez",
        email: "maria.rodriguez@universidad.edu"
      },
      {
        nombre: "Dr. Carlos Jiménez",
        email: "carlos.jimenez@universidad.edu"
      },
      {
        nombre: "MSc. Laura Martínez",
        email: "laura.martinez@universidad.edu"
      }
    ]
  }
];
