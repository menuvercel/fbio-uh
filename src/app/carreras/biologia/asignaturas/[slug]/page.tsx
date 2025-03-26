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
            href="/carreras/biologia/malla-curricular"
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
            href="/carreras/biologia/malla-curricular" 
            className={`${cormorant.className} inline-flex items-center text-primary-600 hover:text-primary-800`}
          >
            <FiArrowLeft className="mr-2" />
            Volver a la Malla Curricular
          </Link>
        </div>

        {/* Encabezado */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className={`${cormorant.className} bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded`}>
                  Año {asignatura.año}, Semestre {asignatura.semestre}
                </span>
              </div>
              <h1 className={`${cormorant.className} text-3xl font-bold text-gray-900 mb-2`}>
                {asignatura.nombre}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-3">
                <div className="flex items-center">
                  <FiHash className="mr-1" />
                  <span className={cormorant.className}>Código: {asignatura.codigo}</span>
                </div>
                <div className="flex items-center">
                  <FiBook className="mr-1" />
                  <span className={cormorant.className}>Horas: {asignatura.horas}</span>
                </div>
                {asignatura.horasTeoricas && (
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span className={cormorant.className}>
                      Horas Teóricas: {asignatura.horasTeoricas}
                    </span>
                  </div>
                )}
                {asignatura.horasPracticas && (
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span className={cormorant.className}>
                      Horas Prácticas: {asignatura.horasPracticas}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href={`/docs/programas/${params.slug}.pdf`}
                download
                className="bg-white text-primary-700 hover:bg-primary-50 border border-primary-200 rounded-lg px-4 py-2 flex items-center shadow-sm"
              >
                <FiDownload className="mr-2" />
                <span className={cormorant.className}>Descargar Programa</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pestañas de navegación */}
        <div className="flex overflow-x-auto mb-8 gap-2 pb-2">
          <TabButton id="contenido" label="Contenido" icon={FiBook} />
          <TabButton id="metodologia" label="Metodología" icon={FiList} />
          <TabButton id="evaluacion" label="Evaluación" icon={FiLayers} />
          <TabButton id="profesores" label="Profesores" icon={FiUsers} />
        </div>

        {/* Contenido de las pestañas */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          {activeTab === 'contenido' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className={`${cormorant.className} text-2xl font-bold mb-4 text-gray-900`}>
                  Descripción de la Asignatura
                </h2>
                <p className={`${cormorant.className} text-gray-700`}>
                  {asignatura.descripcion}
                </p>
              </div>

              <div className="mb-8">
                <h2 className={`${cormorant.className} text-2xl font-bold mb-4 text-gray-900`}>
                  Objetivos
                </h2>
                <ul className="space-y-2">
                  {asignatura.objetivos.map((objetivo, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                      </div>
                      <p className={`${cormorant.className} text-gray-700`}>{objetivo}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className={`${cormorant.className} text-2xl font-bold mb-4 text-gray-900`}>
                  Contenidos
                </h2>
                <div className="space-y-6">
                  {asignatura.contenidos.map((unidad, i) => (
                    <div key={i}>
                      <h3 className={`${cormorant.className} text-xl font-semibold mb-3 text-primary-800`}>
                        Unidad {i + 1}: {unidad.titulo}
                      </h3>
                      <ul className="space-y-2 pl-4">
                        {unidad.items.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <div className="bg-secondary-100 rounded-full p-1 mr-3 mt-1">
                              <div className="bg-secondary-500 rounded-full w-2 h-2"></div>
                            </div>
                            <p className={`${cormorant.className} text-gray-700`}>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {asignatura.prerrequisitos && asignatura.prerrequisitos.length > 0 && (
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className={`${cormorant.className} font-semibold text-lg text-gray-900 mb-2`}>
                    Prerrequisitos
                  </h3>
                  <ul className="space-y-1">
                    {asignatura.prerrequisitos.map((codigo, index) => (
                      <li key={index} className={`${cormorant.className} text-gray-700`}>
                        • {codigo}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'metodologia' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold mb-6 text-gray-900`}>
                Metodología de Enseñanza
              </h2>
              <div className="space-y-4">
                {asignatura.metodologia.map((metodo, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className={`${cormorant.className} text-gray-700`}>{metodo}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h2 className={`${cormorant.className} text-2xl font-bold mb-6 text-gray-900`}>
                  Bibliografía
                </h2>
                {asignatura.bibliografia.map((bibliografia, i) => (
                  <div key={i} className="mb-6">
                    <h3 className={`${cormorant.className} text-xl font-semibold mb-3 text-primary-800`}>
                      {bibliografia.tipo}
                    </h3>
                    <ul className="space-y-2">
                      {bibliografia.referencias.map((referencia, j) => (
                        <li key={j} className="flex items-start">
                          <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                            <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                          </div>
                          <p className={`${cormorant.className} text-gray-700`}>{referencia}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'evaluacion' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold mb-6 text-gray-900`}>
                Sistema de Evaluación
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className={`${cormorant.className} text-left p-3 font-semibold text-gray-900`}>
                          Tipo de Evaluación
                        </th>
                        <th className={`${cormorant.className} text-center p-3 font-semibold text-gray-900`}>
                          Porcentaje
                        </th>
                        <th className={`${cormorant.className} text-center p-3 font-semibold text-gray-900`}>
                          Descripción
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {asignatura.evaluacionDetalle.map((evalItem, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className={`${cormorant.className} p-3 text-gray-700`}>
                            {evalItem.tipo}
                          </td>
                          <td className={`${cormorant.className} p-3 text-center text-gray-700`}>
                            {evalItem.porcentaje}%
                          </td>
                          <td className={`${cormorant.className} p-3 text-center text-gray-700`}>
                            {evalItem.descripcion}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

          {activeTab === 'profesores' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold mb-6 text-gray-900`}>
                Equipo Docente
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {asignatura.profesores.map((profesor, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className={`${cormorant.className} text-lg font-semibold mb-1 text-gray-900`}>
                      {profesor.nombre}
                    </h3>
                    {profesor.email && (
                      <p className={`${cormorant.className} text-gray-700`}>
                        Email: {profesor.email}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <h3 className={`${cormorant.className} text-lg font-semibold mb-2 text-primary-800`}>
                  Horario de Consultas
                </h3>
                <p className={`${cormorant.className} text-gray-700`}>
                  Los profesores atienden consultas previa coordinación vía email. Se recomienda escribir 
                  con al menos 24 horas de anticipación para programar una reunión.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// Datos de ejemplo para las asignaturas
const asignaturasData = [
  {
    slug: "botanica-general",
    nombre: "Botánica General",
    codigo: "BG101",
    horas: 64,
    horasTeoricas: 32,
    horasPracticas: 32,
    semestre: 1,
    año: 1,
    evaluacion: "EF",
    descripcion: "La asignatura de Botánica General proporciona a los estudiantes de Biología los conocimientos fundamentales sobre la estructura, función, diversidad y clasificación de las plantas. Se estudian los principales grupos de plantas, desde algas hasta angiospermas, con énfasis en su morfología, anatomía, ciclos de vida y adaptaciones ecológicas.",
    objetivos: [
      "Comprender la estructura y función de los diferentes órganos y tejidos vegetales.",
      "Identificar los principales grupos taxonómicos de plantas y sus características distintivas.",
      "Desarrollar habilidades prácticas en técnicas de observación, recolección y preservación de especímenes botánicos.",
      "Analizar la diversidad morfológica y adaptativa de las plantas en relación con su hábitat.",
      "Reconocer la importancia ecológica y económica de las plantas en los ecosistemas y para la sociedad humana."
    ],
    contenidos: [
      {
        titulo: "Introducción a la Botánica",
        items: [
          "Historia y desarrollo de la botánica como ciencia",
          "Características generales de las plantas y su posición en los seres vivos",
          "Clasificación general del reino Plantae",
          "Métodos de estudio en botánica"
        ]
      },
      {
        titulo: "Citología y Anatomía Vegetal",
        items: [
          "La célula vegetal: estructura y orgánulos específicos",
          "Pared celular: composición, estructura y funciones",
          "Tejidos vegetales: meristemáticos, fundamentales, conductores y protectores",
          "Organización interna de raíces, tallos y hojas"
        ]
      },
      {
        titulo: "Morfología Vegetal",
        items: [
          "Raíz: tipos, estructura y adaptaciones",
          "Tallo: clasificación, crecimiento y modificaciones",
          "Hoja: estructura, tipos y adaptaciones",
          "Flor: estructura, diversidad y función",
          "Fruto y semilla: desarrollo, tipos y dispersión"
        ]
      },
      {
        titulo: "Diversidad Vegetal",
        items: [
          "Algas: características, clasificación y ciclos de vida",
          "Briófitas: estructura, reproducción y ecología",
          "Pteridófitas: características, diversidad y ciclos de vida",
          "Gimnospermas: características, grupos principales y reproducción",
          "Angiospermas: evolución, diversidad y sistemas de clasificación"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas expositivas con apoyo de material audiovisual y ejemplares de herbario.",
      "Prácticas de laboratorio para la observación y análisis de estructuras vegetales mediante microscopía.",
      "Salidas de campo para reconocimiento de especies y recolección de material vegetal.",
      "Elaboración de un herbario personal con especies representativas de la flora local.",
      "Seminarios de discusión sobre temas específicos de la botánica moderna y sus aplicaciones."
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes teóricos",
        porcentaje: 40,
        descripcion: "Dos pruebas parciales y un examen final"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 30,
        descripcion: "Informes de prácticas y examen práctico"
      },
      {
        tipo: "Herbario",
        porcentaje: 20,
        descripcion: "Colección de 30 especies correctamente identificadas y montadas"
      },
      {
        tipo: "Seminarios",
        porcentaje: 10,
        descripcion: "Presentación oral y participación en discusiones"
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Nabors, M. W. (2016). Introducción a la Botánica. Pearson Educación.",
          "Raven, P. H., Evert, R. F., & Eichhorn, S. E. (2013). Biología de las plantas. Editorial Reverté.",
          "Izco, J. (2004). Botánica. McGraw-Hill Interamericana."
        ]
      },
      {
        tipo: "Bibliografía Complementaria",
        referencias: [
          "Simpson, M. G. (2019). Plant Systematics. Academic Press.",
          "Strasburger, E. (2004). Tratado de Botánica. Omega.",
          "Judd, W. S., Campbell, C. S., Kellogg, E. A., Stevens, P. F., & Donoghue, M. J. (2016). Plant Systematics: A Phylogenetic Approach. Sinauer Associates."
        ]
      }
    ],
    profesores: [
      {
        nombre: "Dr. Carlos Martínez Rodríguez",
        email: "c.martinez@uh.cu"
      },
      {
        nombre: "Dra. María Fernández López",
        email: "m.fernandez@uh.cu"
      }
    ]
  },
  {
    slug: "zoologia-invertebrados",
    nombre: "Zoología de Invertebrados",
    codigo: "ZI102",
    horas: 64,
    horasTeoricas: 32,
    horasPracticas: 32,
    semestre: 2,
    año: 1,
    evaluacion: "EF",
    descripcion: "Esta asignatura aborda el estudio de los animales invertebrados, que constituyen más del 95% de las especies animales conocidas. Se estudia su diversidad, anatomía, fisiología, ciclos de vida, comportamiento y relaciones filogenéticas, con énfasis en la adaptación a diferentes ambientes y su importancia ecológica y económica.",
    objetivos: [
      "Conocer la diversidad de los principales grupos de invertebrados y sus características distintivas.",
      "Comprender los planes corporales, adaptaciones y estrategias de vida de los diferentes filos de invertebrados.",
      "Desarrollar habilidades en técnicas de recolección, preservación y observación de invertebrados.",
      "Analizar las relaciones filogenéticas entre los distintos grupos de invertebrados.",
      "Valorar la importancia ecológica, médica y económica de los invertebrados."
    ],
    contenidos: [
      {
        titulo: "Introducción a los Invertebrados",
        items: [
          "Concepto y características generales de los invertebrados",
          "Historia de la zoología de invertebrados",
          "Clasificación y filogenia de los principales grupos",
          "Métodos de estudio en zoología de invertebrados"
        ]
      },
      {
        titulo: "Protozoos y Poríferos",
        items: [
          "Protozoos: características, clasificación y ciclos de vida",
          "Poríferos: estructura, fisiología y clasificación",
          "Importancia ecológica y médica de protozoos y poríferos",
          "Adaptaciones a diferentes hábitats"
        ]
      },
      {
        titulo: "Cnidarios y Platelmintos",
        items: [
          "Cnidarios: estructura, ciclos de vida y diversidad",
          "Platelmintos: características, clasificación y ciclos parasitarios",
          "Importancia médica y veterinaria de los platelmintos",
          "Adaptaciones al parasitismo"
        ]
      },
      {
        titulo: "Anélidos, Moluscos y Artrópodos",
        items: [
          "Anélidos: estructura, fisiología y clasificación",
          "Moluscos: diversidad, adaptaciones y evolución",
          "Artrópodos: características generales y clasificación",
          "Insectos: diversidad, adaptaciones y comportamiento",
          "Importancia ecológica y económica de estos grupos"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con apoyo de material audiovisual y especímenes conservados.",
      "Prácticas de laboratorio para la observación y disección de ejemplares representativos.",
      "Salidas de campo para la recolección e identificación de invertebrados en su hábitat natural.",
      "Elaboración de una colección entomológica con especies representativas.",
      "Seminarios sobre temas específicos relacionados con la biología de invertebrados."
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes teóricos",
        porcentaje: 40,
        descripcion: "Dos pruebas parciales y un examen final"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 30,
        descripcion: "Informes de prácticas y examen práctico de identificación"
      },
      {
        tipo: "Colección entomológica",
        porcentaje: 20,
        descripcion: "Colección de 20 órdenes de insectos correctamente identificados y montados"
      },
      {
        tipo: "Seminarios",
        porcentaje: 10,
        descripcion: "Presentación oral y participación en discusiones"
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Brusca, R. C., & Brusca, G. J. (2005). Invertebrados. McGraw-Hill Interamericana.",
          "Hickman, C. P., Roberts, L. S., & Larson, A. (2009). Principios integrales de Zoología. McGraw-Hill.",
          "Ruppert, E. E., Fox, R. S., & Barnes, R. D. (2004). Invertebrate Zoology: A Functional Evolutionary Approach. Brooks/Cole."
        ]
      },
      {
        tipo: "Bibliografía Complementaria",
        referencias: [
          "Pechenik, J. A. (2015). Biology of the Invertebrates. McGraw-Hill Education.",
          "Díaz, J. H., & Thiel, M. (2013). Guía de Invertebrados Marinos. Universidad Católica del Norte.",
          "Gullan, P. J., & Cranston, P. S. (2014). The Insects: An Outline of Entomology. Wiley-Blackwell."
        ]
      }
    ],
    prerrequisitos: ["BG101"],
    profesores: [
      {
        nombre: "Dra. Ana García Sánchez",
        email: "a.garcia@uh.cu"
      },
      {
        nombre: "Dr. Roberto Pérez Morales",
        email: "r.perez@uh.cu"
      }
    ]
  },
  {
    slug: "ecologia-general",
    nombre: "Ecología General",
    codigo: "EG201",
    horas: 64,
    horasTeoricas: 32,
    horasPracticas: 32,
    semestre: 1,
    año: 2,
    evaluacion: "EF",
    descripcion: "La asignatura de Ecología General proporciona a los estudiantes los fundamentos teóricos y prácticos para comprender las relaciones entre los organismos y su ambiente. Se estudian los principios ecológicos a nivel de individuo, población, comunidad y ecosistema, así como los ciclos biogeoquímicos, la sucesión ecológica y las adaptaciones de los organismos a diferentes condiciones ambientales.",
    objetivos: [
      "Comprender los conceptos fundamentales de la ecología y su aplicación en el estudio de los sistemas naturales.",
      "Analizar las interacciones entre organismos y su ambiente a diferentes niveles de organización biológica.",
      "Desarrollar habilidades para el diseño y ejecución de estudios ecológicos en campo y laboratorio.",
      "Interpretar datos ecológicos y aplicar modelos matemáticos básicos en ecología.",
      "Valorar la importancia de la ecología en la conservación de la biodiversidad y el manejo de recursos naturales."
    ],
    contenidos: [
      {
        titulo: "Fundamentos de Ecología",
        items: [
          "Historia y desarrollo de la ecología como ciencia",
          "Niveles de organización ecológica",
          "Factores bióticos y abióticos",
          "Concepto de nicho ecológico y hábitat"
        ]
      },
      {
        titulo: "Ecología de Poblaciones",
        items: [
          "Estructura y dinámica poblacional",
          "Crecimiento poblacional y modelos matemáticos",
          "Estrategias de historia de vida",
          "Regulación poblacional y competencia intraespecífica"
        ]
      },
      {
        titulo: "Ecología de Comunidades",
        items: [
          "Estructura y organización de comunidades",
          "Interacciones interespecíficas: competencia, depredación, parasitismo, mutualismo",
          "Biodiversidad: conceptos, medición e importancia",
          "Sucesión ecológica y perturbaciones"
        ]
      },
      {
        titulo: "Ecología de Ecosistemas",
        items: [
          "Flujo de energía en ecosistemas",
          "Ciclos biogeoquímicos",
          "Productividad primaria y secundaria",
          "Principales biomas terrestres y acuáticos",
          "Cambio climático y sus efectos ecológicos"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con apoyo de material audiovisual y estudios de caso.",
      "Prácticas de laboratorio para el análisis de datos ecológicos y simulaciones.",
      "Salidas de campo para el estudio de ecosistemas locales y técnicas de muestreo ecológico.",
      "Desarrollo de un proyecto de investigación ecológica en pequeños grupos.",
      "Seminarios sobre temas actuales en ecología y conservación."
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes teóricos",
        porcentaje: 40,
        descripcion: "Dos pruebas parciales y un examen final"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 20,
        descripcion: "Informes de prácticas y análisis de datos"
      },
      {
        tipo: "Proyecto de investigación",
        porcentaje: 30,
        descripcion: "Diseño, ejecución, análisis y presentación de un estudio ecológico"
      },
      {
        tipo: "Seminarios",
        porcentaje: 10,
        descripcion: "Presentación oral y participación en discusiones"
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Smith, T. M., & Smith, R. L. (2015). Elements of Ecology. Pearson.",
          "Begon, M., Townsend, C. R., & Harper, J. L. (2006). Ecology: From Individuals to Ecosystems. Blackwell Publishing.",
          "Krebs, C. J. (2014). Ecology: The Experimental Analysis of Distribution and Abundance. Pearson."
        ]
      },
      {
        tipo: "Bibliografía Complementaria",
        referencias: [
          "Molles, M. C. (2016). Ecology: Concepts and Applications. McGraw-Hill Education.",
          "Ricklefs, R. E., & Relyea, R. (2018). Ecology: The Economy of Nature. W.H. Freeman.",
          "Odum, E. P., & Barrett, G. W. (2005). Fundamentals of Ecology. Thomson Brooks/Cole."
        ]
      }
    ],
    prerrequisitos: ["BG101", "ZI102"],
    profesores: [
      {
        nombre: "Dr. Javier Rodríguez Torres",
        email: "j.rodriguez@uh.cu"
      },
      {
        nombre: "Dra. Luisa Morales Vega",
        email: "l.morales@uh.cu"
      }
    ]
  },
  {
    slug: "genetica-molecular",
    nombre: "Genética Molecular",
    codigo: "GM302",
    horas: 72,
    horasTeoricas: 40,
    horasPracticas: 32,
    semestre: 2,
    año: 3,
    evaluacion: "EF",
    descripcion: "La asignatura de Genética Molecular aborda el estudio de la estructura, función y regulación de los genes a nivel molecular. Se analizan los mecanismos de replicación, transcripción y traducción del ADN, así como las técnicas de ingeniería genética y sus aplicaciones en la investigación biológica, la biotecnología y la medicina.",
    objetivos: [
      "Comprender los principios fundamentales de la genética molecular y su relación con la herencia.",
      "Analizar los mecanismos moleculares de la expresión génica y su regulación.",
      "Desarrollar habilidades prácticas en técnicas básicas de biología molecular.",
      "Evaluar críticamente las aplicaciones de la genética molecular en biotecnología y biomedicina.",
      "Discutir las implicaciones éticas del uso de técnicas de manipulación genética."
    ],
    contenidos: [
      {
        titulo: "Estructura y Organización del Material Genético",
        items: [
          "Estructura del ADN y ARN",
          "Organización del genoma en procariotas y eucariotas",
          "Cromatina y cromosomas",
          "Replicación del ADN y reparación"
        ]
      },
      {
        titulo: "Expresión Génica",
        items: [
          "Transcripción en procariotas y eucariotas",
          "Procesamiento post-transcripcional del ARN",
          "Código genético y traducción",
          "Modificaciones post-traduccionales de proteínas"
        ]
      },
      {
        titulo: "Regulación de la Expresión Génica",
        items: [
          "Regulación en procariotas: operones",
          "Regulación en eucariotas: factores de transcripción y enhancers",
          "Regulación epigenética",
          "ARN no codificantes y su papel regulador"
        ]
      },
      {
        titulo: "Técnicas de Biología Molecular",
        items: [
          "Extracción y purificación de ácidos nucleicos",
          "PCR y sus variantes",
          "Secuenciación de ADN y análisis genómico",
          "Clonación molecular y vectores",
          "Edición genómica: CRISPR-Cas9 y otras tecnologías"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con apoyo de material audiovisual y modelos moleculares.",
      "Prácticas de laboratorio para el aprendizaje de técnicas básicas de biología molecular.",
      "Análisis de artículos científicos recientes en el campo de la genética molecular.",
      "Resolución de problemas y casos prácticos relacionados con la expresión génica.",
      "Seminarios sobre temas avanzados y aplicaciones de la genética molecular."
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes teóricos",
        porcentaje: 40,
        descripcion: "Dos pruebas parciales y un examen final"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 30,
        descripcion: "Informes de prácticas y examen práctico"
      },
      {
        tipo: "Análisis de artículos",
        porcentaje: 20,
        descripcion: "Presentación y discusión de artículos científicos"
      },
      {
        tipo: "Resolución de problemas",
        porcentaje: 10,
        descripcion: "Entrega de problemas resueltos"
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Watson, J. D., Baker, T. A., Bell, S. P., Gann, A., Levine, M., & Losick, R. (2014). Molecular Biology of the Gene. Pearson.",
          "Alberts, B., Johnson, A., Lewis, J., Morgan, D., Raff, M., Roberts, K., & Walter, P. (2015). Molecular Biology of the Cell. Garland Science.",
          "Krebs, J. E., Goldstein, E. S., & Kilpatrick, S. T. (2018). Lewin's Genes XII. Jones & Bartlett Learning."
        ]
      },
      {
        tipo: "Bibliografía Complementaria",
        referencias: [
          "Brown, T. A. (2016). Gene Cloning and DNA Analysis: An Introduction. Wiley-Blackwell.",
          "Lodish, H., Berk, A., Kaiser, C. A., Krieger, M., Bretscher, A., Ploegh, H., Amon, A., & Martin, K. C. (2016). Molecular Cell Biology. W.H. Freeman.",
          "Primrose, S. B., & Twyman, R. M. (2006). Principles of Gene Manipulation and Genomics. Blackwell Publishing."
        ]
      }
    ],
    prerrequisitos: ["BG101", "BQ201"],
    profesores: [
      {
        nombre: "Dra. Elena Sánchez Moreno",
        email: "e.sanchez@uh.cu"
      },
      {
        nombre: "Dr. Miguel Ángel López Pérez",
        email: "m.lopez@uh.cu"
      }
    ]
  },
  {
    slug: "conservacion-biodiversidad",
    nombre: "Conservación de la Biodiversidad",
    codigo: "CB401",
    horas: 64,
    horasTeoricas: 32,
    horasPracticas: 32,
    semestre: 1,
    año: 4,
    evaluacion: "EF",
    descripcion: "Esta asignatura aborda los principios teóricos y prácticos para la conservación de la diversidad biológica a nivel de genes, especies y ecosistemas. Se estudian las principales amenazas a la biodiversidad, las estrategias de conservación in situ y ex situ, así como los aspectos legales, económicos y sociales relacionados con la conservación biológica en el contexto actual de crisis ambiental global.",
    objetivos: [
      "Comprender los conceptos fundamentales de la biología de la conservación y su enfoque multidisciplinario.",
      "Analizar las causas de pérdida de biodiversidad y sus consecuencias a diferentes escalas.",
      "Evaluar las diferentes estrategias y herramientas para la conservación de especies y ecosistemas.",
      "Desarrollar habilidades para el diseño y evaluación de proyectos de conservación.",
      "Fomentar una actitud crítica y ética hacia los problemas de conservación biológica."
    ],
    contenidos: [
      {
        titulo: "Fundamentos de la Biología de la Conservación",
        items: [
          "Historia y desarrollo de la biología de la conservación",
          "Valores de la biodiversidad: intrínseco, instrumental y económico",
          "Niveles de biodiversidad: genética, específica y ecosistémica",
          "Patrones globales de biodiversidad y endemismo"
        ]
      },
      {
        titulo: "Amenazas a la Biodiversidad",
        items: [
          "Pérdida y fragmentación de hábitats",
          "Sobreexplotación de recursos naturales",
          "Especies invasoras y sus impactos",
          "Contaminación y cambio climático",
          "Enfermedades emergentes en la conservación"
        ]
      },
      {
        titulo: "Estrategias de Conservación",
        items: [
          "Conservación in situ: áreas protegidas y corredores biológicos",
          "Conservación ex situ: zoológicos, jardines botánicos y bancos de germoplasma",
          "Restauración ecológica y reintroducción de especies",
          "Conservación comunitaria y participativa",
          "Aspectos legales y políticos de la conservación"
        ]
      },
      {
        titulo: "Aplicaciones y Casos de Estudio",
        items: [
          "Conservación de especies amenazadas",
          "Gestión de áreas protegidas",
          "Conservación marina y costera",
          "Conservación en ambientes urbanos",
          "Cambio climático y planificación para la conservación"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con apoyo de material audiovisual y estudios de caso.",
      "Prácticas de campo para evaluar problemas de conservación en ecosistemas locales.",
      "Análisis de proyectos de conservación nacionales e internacionales.",
      "Desarrollo de un proyecto grupal de conservación aplicado a un problema real.",
      "Debates sobre temas controversiales en conservación biológica."
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes teóricos",
        porcentaje: 30,
        descripcion: "Una prueba parcial y un examen final"
      },
      {
        tipo: "Prácticas de campo",
        porcentaje: 20,
        descripcion: "Informes de prácticas y diagnóstico de problemas de conservación"
      },
      {
        tipo: "Proyecto de conservación",
        porcentaje: 40,
        descripcion: "Diseño, presentación y defensa de un proyecto de conservación"
      },
      {
        tipo: "Participación en debates",
        porcentaje: 10,
        descripcion: "Calidad de las intervenciones y argumentación"
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Primack, R. B., & Sher, A. A. (2016). Introduction to Conservation Biology. Sinauer Associates.",
          "Groom, M. J., Meffe, G. K., & Carroll, C. R. (2006). Principles of Conservation Biology. Sinauer Associates.",
          "Hunter, M. L., & Gibbs, J. P. (2007). Fundamentals of Conservation Biology. Blackwell Publishing."
        ]
      },
      {
        tipo: "Bibliografía Complementaria",
        referencias: [
          "Sodhi, N. S., & Ehrlich, P. R. (2010). Conservation Biology for All. Oxford University Press.",
          "Lindenmayer, D., & Burgman, M. (2005). Practical Conservation Biology. CSIRO Publishing.",
          "Wilson, E. O. (2002). The Future of Life. Vintage Books.",
          "Sutherland, W. J. (2000). The Conservation Handbook: Research, Management and Policy. Blackwell Science."
        ]
      }
    ],
    prerrequisitos: ["EG201"],
    profesores: [
      {
        nombre: "Dra. Carmen Valdés Ruiz",
        email: "c.valdes@uh.cu"
      },
      {
        nombre: "Dr. Francisco Martínez González",
        email: "f.martinez@uh.cu"
      }
    ]
  },
  {
    slug: "algas-hongos",
    nombre: "Algas/Hongos",
    codigo: "AH101",
    horas: 64,
    horasTeoricas: 32,
    horasPracticas: 32,
    semestre: 1,
    año: 1,
    evaluacion: "EF",
    descripcion: "La asignatura Hongos es una de las materias propias de la carrera Biología, impartiéndose en el primer semestre de primer año. Esta disciplina pertenece al Departamento de Biología Vegetal de la Facultad y sus profesores(as) pertenecen al Jardín Botánico Nacional. La asignatura estudia el interesante mundo del reino Fungi, un reino lleno de organismos fabulosos con características únicas que los distinguen de otros reinos como los animales y las plantas. Desde la ecología, clasificación, morfología hasta las interesantes aplicaciones y usos que se pueden dar a los hongos son tratados en este curso de micología.",
    objetivos: [
      "Identificar los organismos pertenecientes a grupos de hongos en base a caracteres diagnósticos teniendo en cuenta su diversidad morfológica.",
      "Demostrar la importancia biológica y económica de grupos de hongos, así como la necesidad de conservación de su diversidad."
    ],
    contenidos: [
      {
        titulo: "Pseudohongos",
        items: [
          "Características y clasificación de los pseudohongos",
          "Importancia biológica y ecológica",
          "Identificación y morfología"
        ]
      },
      {
        titulo: "Hongos Basales",
        items: [
          "Estructura y características principales",
          "Clasificación y diversidad",
          "Ciclos de vida y reproducción"
        ]
      },
      {
        titulo: "Ascomycota",
        items: [
          "Características morfológicas y reproductivas",
          "Diversidad y clasificación",
          "Importancia ecológica y económica"
        ]
      },
      {
        titulo: "Basidiomycota",
        items: [
          "Estructura y morfología",
          "Ciclos reproductivos",
          "Especies comestibles y tóxicas",
          "Diversidad e identificación"
        ]
      },
      {
        titulo: "Asociaciones Fúngicas",
        items: [
          "Líquenes y micorrizas",
          "Simbiosis fúngicas",
          "Importancia ecológica de las asociaciones"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con apoyo de material audiovisual.",
      "Prácticas de laboratorio para la observación e identificación de hongos.",
      "Salidas de campo para recolección de especímenes.",
      "Estudio de casos sobre aplicaciones de los hongos."
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes teóricos",
        porcentaje: 40,
        descripcion: "Evaluaciones parciales y examen final"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 30,
        descripcion: "Informes y ejercicios prácticos"
      },
      {
        tipo: "Trabajo de investigación",
        porcentaje: 20,
        descripcion: "Sobre un grupo específico de hongos"
      },
      {
        tipo: "Participación",
        porcentaje: 10,
        descripcion: "Actividades en clase y salidas de campo"
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Rojas, G. y Maldonado, S. 'Hongos y Algas'",
          "Papendoring, M. 'Introducción a la micología de los trópicos'",
          "Cepero de García. 'Biología de Hongos'"
        ]
      }
    ],
    profesores: [
      {
        nombre: "Nairelí González",
        email: "n.gonzalez@uh.cu"
      },
      {
        nombre: "David Guedán",
        email: "d.guedan@uh.cu"
      },
      {
        nombre: "Diego Martínez",
        email: "d.martinez@uh.cu"
      }
    ]
  },
  {
    slug: "zoologia-cordados",
    nombre: "Zoología de Cordados",
    codigo: "ZC102",
    horas: 80,
    horasTeoricas: 40,
    horasPracticas: 40,
    semestre: 2,
    año: 1,
    evaluacion: "EF",
    descripcion: "La asignatura Zoología de Cordados se centra en el estudio de los animales pertenecientes al filo Chordata, que incluye tanto a los vertebrados como a los invertebrados cordados. Examina la biología de los cordados desde un enfoque estructural y funcional, analizando las particularidades de los grupos zoológicos como peces, anfibios, reptiles, aves y mamíferos. El estudio proporciona conocimientos sobre evolución, sistemática y conservación biológica de los cordados. La comprensión de este filo es crucial para el manejo y conservación de especies, especialmente en contextos de cambio climático y pérdida de biodiversidad.",
    objetivos: [
      "Identificar los caracteres fundamentales del Phylum Chordata.",
      "Ubicar taxonómicamente el grupo de los cordados (desde nivel de Phylum hasta nivel de clase).",
      "Identificar las características generales de cada grupo zoológico.",
      "Identificar los cordados vivientes y extintos, teniendo en cuenta sus características generales.",
      "Explicar la morfología externa e interna de los grupos de cordados.",
      "Describir adaptaciones al medio en los diferentes grupos.",
      "Analizar evolutivamente los principales cambios orgánicos."
    ],
    contenidos: [
      {
        titulo: "Introducción a los Cordados",
        items: [
          "Características generales del Phylum Chordata",
          "Origen y evolución de los cordados",
          "Clasificación y filogenia"
        ]
      },
      {
        titulo: "Animales Procordados",
        items: [
          "Origen y relaciones con grupos de no cordados",
          "Características y clasificación",
          "Importancia evolutiva"
        ]
      },
      {
        titulo: "Cordados extintos y su evolución",
        items: [
          "Ostracodermos, Placodermos y Acantodios",
          "Registro fósil e importancia evolutiva",
          "Transición a los vertebrados modernos"
        ]
      },
      {
        titulo: "Gnatostomados y origen de las mandíbulas",
        items: [
          "Evolución de las mandíbulas",
          "Importancia adaptativa",
          "Diversificación de los vertebrados con mandíbulas"
        ]
      },
      {
        titulo: "Peces",
        items: [
          "Peces cartilaginosos: características y diversidad",
          "Peces óseos: clasificación y adaptaciones",
          "Importancia ecológica y económica"
        ]
      },
      {
        titulo: "Anfibios",
        items: [
          "Características y adaptaciones",
          "Diversidad y clasificación",
          "Ciclos de vida y reproducción"
        ]
      },
      {
        titulo: "Reptiles",
        items: [
          "Adaptaciones a la vida terrestre",
          "Diversidad y clasificación",
          "Importancia evolutiva y ecológica"
        ]
      },
      {
        titulo: "Aves",
        items: [
          "Adaptaciones al vuelo",
          "Diversidad y clasificación",
          "Comportamiento y migración"
        ]
      },
      {
        titulo: "Mamíferos",
        items: [
          "Características y adaptaciones",
          "Diversidad y clasificación",
          "Evolución y radiación adaptativa"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con material audiovisual y especímenes conservados.",
      "Prácticas de laboratorio para el estudio morfológico y anatómico.",
      "Visitas al Museo de Historia Natural Felipe Poey.",
      "Salidas de campo para observación de fauna local.",
      "Seminarios sobre temas específicos de cordados."
    ],
    evaluacionDetalle: [
      {
        tipo: "Exámenes teóricos",
        porcentaje: 40,
        descripcion: "Evaluaciones parciales y examen final"
      },
      {
        tipo: "Prácticas de laboratorio",
        porcentaje: 30,
        descripcion: "Informes y ejercicios de identificación"
      },
      {
        tipo: "Trabajo de investigación",
        porcentaje: 20,
        descripcion: "Sobre un grupo específico de cordados"
      },
      {
        tipo: "Participación",
        porcentaje: 10,
        descripcion: "Actividades en clase y salidas de campo"
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Kardong, K. (2012): Vertebrates, Comparative Anatomy, Function, Evolution.",
          "Material elaborado para los estudiantes (Combellas, V., Azanza, J., Ibarra, ME. (2012): Zoología de Cordados, Primera parte)",
          "Hickman, C., L. S. Roberts, A. Larson (2006): Integrated Principles of Zoology.",
          "Nelson, J. S. (2006): Fishes of the World.",
          "Pough, F., T. Heiser, W. N. Janis (2012): Vertebrate Life.",
          "Storer, T. y R. Usinger (1983): Zoología General."
        ]
      }
    ],
    profesores: [
      {
        nombre: "Adriana León Ramos",
        email: "a.leon@uh.cu"
      },
      {
        nombre: "Grupo Científico Estudiantil Pangea",
        email: "pangea@estudiantes.uh.cu"
      }
    ]
  },
];
