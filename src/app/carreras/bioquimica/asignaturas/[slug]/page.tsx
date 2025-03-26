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
            href="/carreras/bioquimica/malla-curricular"
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
            href="/carreras/bioquimica/malla-curricular" 
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
    slug: "analisis-quimico",
    nombre: "Análisis Químico",
    codigo: "AQ102",
    horas: 56,
    horasTeoricas: 28,
    horasPracticas: 28,
    semestre: 2,
    año: 1,
    evaluacion: "EF",
    descripcion: "Asignatura perteneciente al departamento de Química Física de la Facultad de Química, se imparte en el primer año de la carrera de Bioquímica y en el segundo año de las carreras de Biología y Microbiología. La asignatura brinda las bases tanto teóricas como experimentales de los principales métodos utilizados en la química analítica para la cuantificación y separación de compuestos en una muestra problema. Engloba los conocimientos de asignaturas precedentes como Química general y Química Orgánica así como brinda las bases para asignaturas como Química Física y técnicas avanzadas en Biomoléculas.",
    objetivos: [
      "Utilizar la química analítica para el cálculo de concentraciones en sistemas homogéneos mediante métodos volumétricos, colorimétricos, potenciométricos y técnicas de espectroscopía básica así como el estudio de técnicas de separación de moléculas mediante cromatografía."
    ],
    contenidos: [
      {
        titulo: "Ley fundamental de la volumetría",
        items: [
          "Principios y aplicaciones de la volumetría",
          "Cálculos y preparación de soluciones"
        ]
      },
      {
        titulo: "Volumetría ácido-base",
        items: [
          "Fundamentos teóricos",
          "Aplicaciones prácticas",
          "Determinación de pH y punto de equivalencia"
        ]
      },
      {
        titulo: "Potenciometría",
        items: [
          "Principios de medición potenciométrica",
          "Electrodos y equipos",
          "Aplicaciones en análisis químico"
        ]
      },
      {
        titulo: "Espectroscopía de absorción UV-vis",
        items: [
          "Fundamentos de la absorción molecular",
          "Instrumentación y técnicas",
          "Aplicaciones en análisis cuantitativo"
        ]
      },
      {
        titulo: "Espectroscopía de fluorescencia molecular",
        items: [
          "Principios de fluorescencia",
          "Instrumentación",
          "Aplicaciones en bioquímica"
        ]
      },
      {
        titulo: "Espectroscopía de emisión y absorción atómica contra la llama",
        items: [
          "Fundamentos teóricos",
          "Equipos y técnicas",
          "Aplicaciones analíticas"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con presentación de conceptos fundamentales.",
      "Sesiones prácticas de laboratorio para aplicar los conocimientos teóricos.",
      "Resolución de problemas analíticos en grupos pequeños.",
      "Uso de instrumentación analítica para análisis cuantitativo."
    ],
    evaluacionDetalle: [
      { 
        tipo: "Evaluaciones parciales", 
        porcentaje: 30, 
        descripcion: "Pruebas escritas sobre los contenidos teóricos." 
      },
      { 
        tipo: "Prácticas de laboratorio", 
        porcentaje: 40, 
        descripcion: "Evaluación del trabajo en laboratorio e informes de prácticas." 
      },
      { 
        tipo: "Examen final", 
        porcentaje: 30, 
        descripcion: "Evaluación integradora de todos los contenidos del curso." 
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "MT, Castro, I. Carrillo, M. Granda, V. Enamorado y AI. Pérez, L. Maqueira (2012). 'Química Analítica Básica. Equilibrio Homogéneo'. Ed. Félix Varela. Universidad de la Habana.",
          "D. Skoog, J. Crouch (2008). 'Principios del Análisis Instrumental' Sexta Edición en español. Mc Graw Hill Interamericana de España, S.A.U."
        ]
      }
    ],
    prerrequisitos: ["Química General"],
    profesores: [
      {
        nombre: "Carlos Fabian Castillo Llanes",
        email: "c.castillo@uh.cu"
      },
      {
        nombre: "Sharinna de la Caridad Fernández Ruiz",
        email: "s.fernandez@uh.cu"
      },
      {
        nombre: "Leandro Rafael Rodríguez Reyes",
        email: "l.rodriguez@uh.cu"
      }
    ]
  },
  {
    slug: "metabolismo",
    nombre: "Metabolismo",
    codigo: "BQ304",
    horas: 64,
    horasTeoricas: 32,
    horasPracticas: 32,
    semestre: 5,
    año: 3,
    evaluacion: "EF",
    descripcion: "Pertenece al Departamento de Bioquímica. Biología lo recibe en 3er año, Microbiología en 2do y Bioquímica recibe carbohidratos y lípidos en 3ero y nitrógeno en 4to año. Aborda temas como la absorción de nutrientes para producir energía y almacenarla. Degradación y síntesis de ácidos grasos, formación de cuerpos cetónicos y producción de energía a partir de grasas. Importancia de lípidos en la estructura y señalización. Aborda el catabolismo y anabolismo de aminoácidos, la síntesis de nucleótidos y la eliminación de compuestos nitrogenados tóxicos. Comprender rutas metabólicas es crucial para entender enfermedades, entender influencia de alimentos en metabolismo y salud, diseñar dietas, producción de suplementos y fármacos, el metabolismo de microorganismos puede ayudar en la biorremediación.",
    objetivos: [
      "Fundamentar las transformaciones metabólicas de los carbohidratos, lípidos, proteínas y ácidos nucleicos mediante el dominio, descripción y análisis de las rutas metabólicas y de los sistemas enzimáticos que participan en estos procesos.",
      "Argumentar sobre la regulación y la integración que se presentan en el metabolismo mediante las características de las diferentes vías metabólicas que ocurren en una célula o en un organismo."
    ],
    contenidos: [
      {
        titulo: "Anabolismo y catabolismo de carbohidratos y lípidos",
        items: [
          "Rutas metabólicas principales",
          "Regulación enzimática",
          "Integración metabólica"
        ]
      },
      {
        titulo: "El catabolismo de proteínas, ácidos grasos y carbohidratos en los tres estados de la respiración celular",
        items: [
          "Glucólisis",
          "Ciclo de Krebs",
          "Cadena respiratoria",
          "Fosforilación oxidativa"
        ]
      },
      {
        titulo: "Biosíntesis de aminoácidos",
        items: [
          "Rutas de síntesis",
          "Regulación",
          "Importancia metabólica"
        ]
      },
      {
        titulo: "Catabolismo de aminoácidos en mamíferos",
        items: [
          "Degradación de aminoácidos",
          "Ciclo de la urea",
          "Desaminación y transaminación"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con enfoque en la comprensión de mecanismos bioquímicos.",
      "Sesiones prácticas de laboratorio para el estudio experimental del metabolismo.",
      "Seminarios de discusión de artículos científicos actuales sobre metabolismo.",
      "Resolución de problemas metabólicos y casos clínicos."
    ],
    evaluacionDetalle: [
      { 
        tipo: "Evaluaciones parciales", 
        porcentaje: 30, 
        descripcion: "Pruebas escritas sobre los diferentes módulos del curso." 
      },
      { 
        tipo: "Prácticas de laboratorio", 
        porcentaje: 25, 
        descripcion: "Evaluación del desempeño en laboratorio e informes." 
      },
      { 
        tipo: "Seminarios y trabajos", 
        porcentaje: 15, 
        descripcion: "Presentaciones y discusiones de temas específicos." 
      },
      { 
        tipo: "Examen final", 
        porcentaje: 30, 
        descripcion: "Evaluación integradora de todos los contenidos." 
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Lehninger Principles of Biochemistry. Nelson, D.L. and Cox, M. M. 7th Ed. (2017).",
          "Bioquímica. Voet, D. y Voet, J. C. Ed John Wiley. (2000)."
        ]
      }
    ],
    prerrequisitos: ["Bioquímica General", "Química Orgánica"],
    profesores: [
      {
        nombre: "Melissa Vigoa Castellanos",
        email: "m.vigoa@uh.cu"
      },
      {
        nombre: "Departamento de Bioquímica, Centro de Estudio de Proteínas",
        email: "dep.bioquimica@uh.cu"
      }
    ]
  },
  {
    slug: "bioquimica-i",
    nombre: "Bioquímica I",
    codigo: "BQ201",
    horas: 5,
    horasTeoricas: 3,
    horasPracticas: 4,
    semestre: 3,
    año: 2,
    evaluacion: "EF",
    descripcion: "Asignatura teórico-práctica que introduce al estudiante en el estudio de las biomoléculas, su estructura, propiedades fisicoquímicas y función biológica. Se estudian en profundidad los aminoácidos, proteínas, carbohidratos, lípidos y ácidos nucleicos, enfatizando la relación entre estructura y función.",
    objetivos: [
      "Comprender la estructura y función de las principales biomoléculas que constituyen los seres vivos.",
      "Relacionar las propiedades fisicoquímicas de las biomoléculas con su función biológica.",
      "Aplicar técnicas básicas de laboratorio para el aislamiento, purificación y caracterización de biomoléculas.",
      "Analizar la importancia de las interacciones moleculares en los procesos biológicos."
    ],
    contenidos: [
      {
        titulo: "Introducción a la Bioquímica",
        items: [
          "Fundamentos de la Bioquímica",
          "Agua y su importancia en los sistemas biológicos",
          "pH y sistemas amortiguadores biológicos",
          "Técnicas básicas en Bioquímica"
        ]
      },
      {
        titulo: "Aminoácidos y Proteínas",
        items: [
          "Estructura y propiedades de los aminoácidos",
          "Enlace peptídico y estructura primaria de proteínas",
          "Estructuras secundaria, terciaria y cuaternaria",
          "Relación estructura-función en proteínas",
          "Métodos de estudio de proteínas"
        ]
      },
      {
        titulo: "Enzimas",
        items: [
          "Naturaleza y clasificación de las enzimas",
          "Cinética enzimática",
          "Mecanismos de catálisis",
          "Regulación de la actividad enzimática",
          "Aplicaciones biotecnológicas de las enzimas"
        ]
      },
      {
        titulo: "Carbohidratos",
        items: [
          "Estructura y propiedades de monosacáridos",
          "Disacáridos y polisacáridos",
          "Glucoproteínas y glucolípidos",
          "Técnicas de análisis de carbohidratos"
        ]
      },
      {
        titulo: "Lípidos y Membranas Biológicas",
        items: [
          "Clasificación y propiedades de lípidos",
          "Estructura y función de membranas biológicas",
          "Transporte a través de membranas",
          "Señalización celular mediada por lípidos"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con apoyo de material audiovisual y discusión de casos de estudio.",
      "Sesiones prácticas de laboratorio donde se aplican técnicas para el estudio de biomoléculas.",
      "Seminarios de discusión de artículos científicos relacionados con los temas tratados.",
      "Actividades de trabajo colaborativo para la resolución de problemas y análisis de datos experimentales."
    ],
    evaluacionDetalle: [
      { tipo: "Evaluaciones teóricas (3)", porcentaje: 45, descripcion: "Evaluaciones escritas que cubren los temas tratados en clase." },
      { tipo: "Informes de laboratorio", porcentaje: 30, descripcion: "Informes detallados de las actividades prácticas realizadas en laboratorio." },
      { tipo: "Seminarios y exposiciones", porcentaje: 15, descripcion: "Participación activa en seminarios y exposiciones de artículos científicos." },
      { tipo: "Evaluación final integradora", porcentaje: 10, descripcion: "Evaluación final que integra todos los temas tratados en el curso." }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Lehninger, A.L., Nelson, D.L. & Cox, M.M. (2017). Principios de Bioquímica. 7ª Ed. Ediciones Omega.",
          "Voet, D. & Voet, J.G. (2018). Bioquímica. 4ª Ed. Editorial Médica Panamericana.",
          "Stryer, L., Berg, J.M. & Tymoczko, J.L. (2019). Bioquímica con aplicaciones clínicas. 8ª Ed. Editorial Reverté."
        ]
      },
      {
        tipo: "Bibliografía Complementaria",
        referencias: [
          "McKee, T. & McKee, J.R. (2014). Bioquímica: Las bases moleculares de la vida. 5ª Ed. McGraw-Hill.",
          "Mathews, C.K., Van Holde, K.E. & Ahern, K.G. (2013). Bioquímica. 4ª Ed. Pearson Education.",
          "Artículos científicos actualizados proporcionados durante el curso."
        ]
      }
    ],
    prerrequisitos: ["BQ101", "QM102"],
    profesores: [
      {
        nombre: "Dra. María Rodríguez",
        email: "maria.rodriguez@univ.edu"
      },
      {
        nombre: "Dr. Juan Pérez",
        email: "juan.perez@univ.edu"
      }
    ]
  },
  {
    slug: "quimica-general",
    nombre: "Química General",
    codigo: "QM101",
    horas: 5,
    horasTeoricas: 3,
    horasPracticas: 4,
    semestre: 1,
    año: 1,
    evaluacion: "TC",
    descripcion: "Curso fundamental que introduce los conceptos básicos de la química, incluyendo estructura atómica, enlace químico, estados de la materia, soluciones, termoquímica, cinética y equilibrio químico. Proporciona las bases teóricas y experimentales necesarias para comprender los procesos químicos relevantes en bioquímica.",
    objetivos: [
      "Comprender los principios fundamentales de la química y su relación con los sistemas biológicos.",
      "Aplicar las leyes y principios químicos en la resolución de problemas.",
      "Desarrollar habilidades experimentales básicas en el laboratorio químico.",
      "Relacionar los conceptos químicos con fenómenos biológicos y aplicaciones prácticas."
    ],
    contenidos: [
      {
        titulo: "Estructura Atómica y Tabla Periódica",
        items: [
          "Teoría atómica y partículas subatómicas",
          "Configuración electrónica y propiedades periódicas",
          "Clasificación periódica de los elementos",
          "Propiedades periódicas y su relación con la reactividad química"
        ]
      },
      {
        titulo: "Enlace Químico",
        items: [
          "Enlace iónico y compuestos iónicos",
          "Enlace covalente y moléculas",
          "Geometría molecular y teoría RPECV",
          "Polaridad y fuerzas intermoleculares"
        ]
      },
      {
        titulo: "Estados de la Materia",
        items: [
          "Propiedades de gases, líquidos y sólidos",
          "Leyes de los gases ideales",
          "Fuerzas intermoleculares y propiedades físicas",
          "Cambios de estado y diagramas de fase"
        ]
      },
      {
        titulo: "Soluciones y Propiedades Coligativas",
        items: [
          "Tipos de soluciones y solubilidad",
          "Concentración y preparación de soluciones",
          "Propiedades coligativas",
          "Soluciones electrolíticas y no electrolíticas"
        ]
      },
      {
        titulo: "Equilibrio Químico",
        items: [
          "Concepto de equilibrio y constante de equilibrio",
          "Factores que afectan el equilibrio",
          "Equilibrios ácido-base",
          "Soluciones amortiguadoras"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con demostración de ejemplos y resolución de problemas.",
      "Prácticas de laboratorio para aplicar los conceptos teóricos.",
      "Trabajo en grupos para la resolución de problemas complejos.",
      "Uso de simulaciones computacionales para visualizar conceptos abstractos."
    ],
    evaluacionDetalle: [
      { tipo: "Exámenes parciales (3)", porcentaje: 45, descripcion: "Evaluaciones escritas que cubren los temas tratados en clase." },
      { tipo: "Informes de laboratorio", porcentaje: 30, descripcion: "Informes detallados de las actividades prácticas realizadas en laboratorio." },
      { tipo: "Tareas y actividades", porcentaje: 15, descripcion: "Tareas y actividades que evalúan la comprensión de los conceptos químicos." },
      { tipo: "Examen final", porcentaje: 10, descripcion: "Evaluación final que integra todos los temas tratados en el curso." }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Chang, R. & Goldsby, K.A. (2017). Química. 12ª Ed. McGraw-Hill.",
          "Petrucci, R.H., Herring, F.G., Madura, J.D. & Bissonnette, C. (2017). Química General. 11ª Ed. Pearson.",
          "Brown, T.L., LeMay, H.E., Bursten, B.E., Murphy, C.J. & Woodward, P.M. (2014). Química: La Ciencia Central. 12ª Ed. Pearson."
        ]
      },
      {
        tipo: "Bibliografía Complementaria",
        referencias: [
          "Whitten, K.W., Davis, R.E., Peck, M.L. & Stanley, G.G. (2014). Química. 10ª Ed. Cengage Learning.",
          "Atkins, P. & Jones, L. (2012). Principios de Química. 5ª Ed. Editorial Médica Panamericana.",
          "Silberberg, M.S. (2018). Química General. 7ª Ed. McGraw-Hill."
        ]
      }
    ],
    profesores: [
      {
        nombre: "Dr. Carlos Martínez",
        email: "carlos.martinez@univ.edu"
      },
      {
        nombre: "Dra. Ana González",
        email: "ana.gonzalez@univ.edu"
      }
    ]
  },
  {
    slug: "metabolismo-carbohidratos-lipidos",
    nombre: "Metabolismo de Carbohidratos y Lípidos",
    codigo: "BQ306",
    horas: 68,
    horasTeoricas: 34,
    horasPracticas: 34,
    semestre: 6,
    año: 3,
    evaluacion: "EF",
    descripcion: "Esta asignatura pertenece al Departamento de Bioquímica y se imparte en el tercer año de la carrera de Bioquímica. Aborda el estudio de las transformaciones metabólicas de carbohidratos y lípidos, incluyendo la absorción de nutrientes para producir energía y almacenarla. Se estudia la degradación y síntesis de ácidos grasos, formación de cuerpos cetónicos y producción de energía a partir de grasas, así como la importancia de lípidos en la estructura y señalización celular. Comprender estas rutas metabólicas es crucial para entender enfermedades, la influencia de alimentos en el metabolismo y salud, y el diseño de dietas y suplementos.",
    objetivos: [
      "Fundamentar las transformaciones metabólicas de los carbohidratos y lípidos mediante el dominio, descripción y análisis de las rutas metabólicas y de los sistemas enzimáticos que participan en estos procesos.",
      "Argumentar sobre la regulación y la integración que se presentan en el metabolismo de carbohidratos y lípidos mediante las características de las diferentes vías metabólicas que ocurren en una célula o en un organismo."
    ],
    contenidos: [
      {
        titulo: "Anabolismo y catabolismo de carbohidratos",
        items: [
          "Glucólisis y gluconeogénesis",
          "Ciclo de Krebs",
          "Ruta de las pentosas fosfato",
          "Metabolismo del glucógeno",
          "Regulación del metabolismo de carbohidratos"
        ]
      },
      {
        titulo: "Anabolismo y catabolismo de lípidos",
        items: [
          "β-oxidación de ácidos grasos",
          "Biosíntesis de ácidos grasos",
          "Metabolismo de triacilgliceroles y fosfolípidos",
          "Metabolismo del colesterol y derivados",
          "Cuerpos cetónicos"
        ]
      },
      {
        titulo: "Integración del metabolismo energético",
        items: [
          "Interrelaciones entre el metabolismo de carbohidratos y lípidos",
          "Regulación hormonal del metabolismo energético",
          "Adaptaciones metabólicas en diferentes estados fisiológicos",
          "Alteraciones metabólicas en enfermedades"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con enfoque en la comprensión de mecanismos bioquímicos.",
      "Sesiones prácticas de laboratorio para el estudio experimental del metabolismo.",
      "Seminarios de discusión de artículos científicos actuales sobre metabolismo.",
      "Resolución de problemas metabólicos y casos clínicos."
    ],
    evaluacionDetalle: [
      { 
        tipo: "Evaluaciones parciales", 
        porcentaje: 30, 
        descripcion: "Pruebas escritas sobre los diferentes módulos del curso." 
      },
      { 
        tipo: "Prácticas de laboratorio", 
        porcentaje: 25, 
        descripcion: "Evaluación del desempeño en laboratorio e informes." 
      },
      { 
        tipo: "Seminarios y trabajos", 
        porcentaje: 15, 
        descripcion: "Presentaciones y discusiones de temas específicos." 
      },
      { 
        tipo: "Examen final", 
        porcentaje: 30, 
        descripcion: "Evaluación integradora de todos los contenidos." 
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Lehninger Principles of Biochemistry. Nelson, D.L. and Cox, M. M. 7th Ed. (2017).",
          "Bioquímica. Voet, D. y Voet, J. C. Ed John Wiley. (2000)."
        ]
      }
    ],
    prerrequisitos: ["Bioquímica General", "Química Orgánica"],
    profesores: [
      {
        nombre: "Melissa Vigoa Castellanos",
        email: "m.vigoa@uh.cu"
      },
      {
        nombre: "Departamento de Bioquímica, Centro de Estudio de Proteínas",
        email: "dep.bioquimica@uh.cu"
      }
    ]
  },
  {
    slug: "metabolismo-compuestos-nitrogenados",
    nombre: "Metabolismo de Compuestos Nitrogenados",
    codigo: "BQ407",
    horas: 40,
    horasTeoricas: 20,
    horasPracticas: 20,
    semestre: 7,
    año: 4,
    evaluacion: "EF",
    descripcion: "Esta asignatura pertenece al Departamento de Bioquímica y se imparte en el cuarto año de la carrera de Bioquímica. Aborda el catabolismo y anabolismo de aminoácidos, la síntesis de nucleótidos y la eliminación de compuestos nitrogenados tóxicos. Se estudian las rutas metabólicas relacionadas con proteínas y ácidos nucleicos, así como los mecanismos de regulación e integración de estas vías. Comprender estas rutas es fundamental para entender enfermedades metabólicas, diseñar terapias y comprender procesos biológicos fundamentales.",
    objetivos: [
      "Fundamentar las transformaciones metabólicas de las proteínas y ácidos nucleicos mediante el dominio, descripción y análisis de las rutas metabólicas y de los sistemas enzimáticos que participan en estos procesos.",
      "Argumentar sobre la regulación y la integración del metabolismo nitrogenado mediante las características de las diferentes vías metabólicas que ocurren en una célula o en un organismo."
    ],
    contenidos: [
      {
        titulo: "Metabolismo de proteínas y aminoácidos",
        items: [
          "Degradación de aminoácidos y ciclo de la urea",
          "Biosíntesis de aminoácidos",
          "Derivados de aminoácidos: neurotransmisores, hormonas",
          "Recambio proteico"
        ]
      },
      {
        titulo: "Metabolismo de ácidos nucleicos",
        items: [
          "Biosíntesis de nucleótidos de purina y pirimidina",
          "Degradación de nucleótidos",
          "Recuperación de bases nitrogenadas",
          "Alteraciones del metabolismo de nucleótidos"
        ]
      },
      {
        titulo: "Integración del metabolismo nitrogenado",
        items: [
          "Interrelaciones entre el metabolismo de aminoácidos y nucleótidos",
          "Regulación del metabolismo nitrogenado",
          "Adaptaciones metabólicas en diferentes estados fisiológicos",
          "Alteraciones metabólicas en enfermedades"
        ]
      }
    ],
    metodologia: [
      "Clases teóricas con enfoque en la comprensión de mecanismos bioquímicos.",
      "Sesiones prácticas de laboratorio para el estudio experimental del metabolismo.",
      "Seminarios de discusión de artículos científicos actuales sobre metabolismo.",
      "Resolución de problemas metabólicos y casos clínicos."
    ],
    evaluacionDetalle: [
      { 
        tipo: "Evaluaciones parciales", 
        porcentaje: 30, 
        descripcion: "Pruebas escritas sobre los diferentes módulos del curso." 
      },
      { 
        tipo: "Prácticas de laboratorio", 
        porcentaje: 25, 
        descripcion: "Evaluación del desempeño en laboratorio e informes." 
      },
      { 
        tipo: "Seminarios y trabajos", 
        porcentaje: 15, 
        descripcion: "Presentaciones y discusiones de temas específicos." 
      },
      { 
        tipo: "Examen final", 
        porcentaje: 30, 
        descripcion: "Evaluación integradora de todos los contenidos." 
      }
    ],
    bibliografia: [
      {
        tipo: "Bibliografía Básica",
        referencias: [
          "Lehninger Principles of Biochemistry. Nelson, D.L. and Cox, M. M. 7th Ed. (2017).",
          "Bioquímica. Voet, D. y Voet, J. C. Ed John Wiley. (2000)."
        ]
      }
    ],
    prerrequisitos: ["Bioquímica General", "Metabolismo de Carbohidratos y Lípidos"],
    profesores: [
      {
        nombre: "Melissa Vigoa Castellanos",
        email: "m.vigoa@uh.cu"
      },
      {
        nombre: "Departamento de Bioquímica, Centro de Estudio de Proteínas",
        email: "dep.bioquimica@uh.cu"
      }
    ]
  },
];