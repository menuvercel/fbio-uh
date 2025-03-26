'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiBookOpen, FiUsers, FiBook, FiFileText, FiClock, FiLayers, FiInfo } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';
import MallaCurricular from '@/components/MallaCurricular';
import { mallaMicrobiologia } from '@/data/mallasMicrobiologia';
import { AnioData, SemestreData, Asignatura } from '@/data/mallasMicrobiologia';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Función para transformar la estructura de datos de mallaMicrobiologia a AnioData[]
const transformarMallaCurricular = () => {
  const anios: AnioData[] = [];
  
  mallaMicrobiologia.forEach(anio => {
    anio.semestres.forEach(semestre => {
      const asignaturasTransformadas: Asignatura[] = semestre.asignaturas.map(asig => ({
        slug: asig.slug,
        nombre: asig.nombre,
        codigo: asig.codigo,
        horas: asig.horas,
        evaluacion: asig.evaluacion,
        descripcion: asig.descripcion, // Add the missing property
        semestre: semestre.numero,
        año: anio.numero,
        tipo: asig.tipo || 'especialidad'
      }));

      const semestreTransformado: SemestreData = {
        numero: semestre.numero,
        año: anio.numero,
        asignaturas: asignaturasTransformadas
      };

      const anioExistente = anios.find(a => a.numero === anio.numero);
      if (anioExistente) {
        anioExistente.semestres.push(semestreTransformado);
      } else {
        anios.push({
          numero: anio.numero,
          semestres: [semestreTransformado]
        });
      }
    });
  });

  return anios;
};

export default function MicrobiologiaPage() {
  const [activeTab, setActiveTab] = useState('info');
  const mallaTransformada = transformarMallaCurricular();

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

  const asignaturas = mallaMicrobiologia.flatMap(anio => 
    anio.semestres.flatMap(semestre => semestre.asignaturas)
  );

  const totalHoras = asignaturas.reduce((sum, asignatura) => sum + asignatura.horas, 0);
  const totalAsignaturas = asignaturas.length;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero section */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8">
              <h1 className={`${cormorant.className} text-4xl font-bold text-gray-900 mb-4`}>
                Licenciatura en Microbiología y Virología
              </h1>
              <p className={`${cormorant.className} text-xl text-gray-600 mb-6`}>
                Formamos profesionales especializados en el estudio de microorganismos y virus, su impacto en la salud, el medio ambiente y sus aplicaciones biotecnológicas.
              </p>
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center">
                  <FiClock className="text-primary-600 mr-2" />
                  <div>
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Duración</p>
                    <p className={`${cormorant.className} font-medium text-gray-900`}>4 años</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiLayers className="text-primary-600 mr-2" />
                  <div>
                    <p className={`${cormorant.className} text-sm text-gray-500`}>Modalidad</p>
                    <p className={`${cormorant.className} font-medium text-gray-900`}>Presencial</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                {/* Eliminando el enlace a la malla curricular completa */}
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/3">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="/micro.jpg"
                  alt="Estudiantes de Microbiología en laboratorio"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs - Mejorando visualización móvil */}
        <div className="flex flex-wrap overflow-x-auto mb-8 gap-2 pb-2">
          <TabButton id="info" label="Información" icon={FiBookOpen} />
          <TabButton id="malla" label="Malla" icon={FiBook} />
          <TabButton id="perfil" label="Perfiles" icon={FiFileText} />
          <TabButton id="profesores" label="Profesores" icon={FiUsers} />
          <TabButton id="recursos" label="Recursos" icon={FiBookOpen} />
        </div>
        
        {/* Tab content */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          {activeTab === 'info' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                ¿Qué estudia esta profesión?
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-4`}>
                El objeto fundamental del trabajo del Licenciado en Microbiología y Virología son los microorganismos y virus y su interacción con el ambiente.
              </p>
              <p className={`${cormorant.className} text-gray-700 mb-4`}>
                La carrera de Microbiología y Virología forma profesionales capaces de estudiar, identificar y trabajar con microorganismos y virus en diversos contextos, desde la investigación básica hasta aplicaciones industriales, médicas y ambientales.
              </p>
              <p className={`${cormorant.className} text-gray-700 mb-4`}>
                Los estudiantes adquieren conocimientos sólidos en biología molecular, genética, inmunología, bioquímica y otras disciplinas relacionadas, que les permiten comprender los procesos biológicos a nivel celular y molecular.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Objetivos de la carrera
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• Formar profesionales con sólidos conocimientos en microbiología y virología.</li>
                    <li>• Desarrollar habilidades para el trabajo en laboratorio y la investigación científica.</li>
                    <li>• Capacitar en el uso de técnicas modernas para el estudio de microorganismos y virus.</li>
                    <li>• Fomentar la aplicación de conocimientos en diversos sectores productivos y de servicios.</li>
                    <li>• Promover una conciencia ética y responsable en el manejo de agentes microbianos.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Competencias desarrolladas
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• Identificación y caracterización de microorganismos y virus.</li>
                    <li>• Manejo de técnicas de cultivo, aislamiento y purificación.</li>
                    <li>• Análisis genético y molecular de agentes microbianos.</li>
                    <li>• Desarrollo de procesos biotecnológicos.</li>
                    <li>• Diagnóstico microbiológico en salud humana, animal y vegetal.</li>
                    <li>• Evaluación del impacto ambiental de microorganismos.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
            
          {activeTab === 'perfil' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Perfil del Profesional
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-4`}>
                El Licenciado en Microbiología y Virología es un profesional con formación científica sólida, capacitado para:
              </p>
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <ul className={`${cormorant.className} space-y-3 text-gray-700`}>
                  <li>• Realizar aislamiento, purificación, cuantificación y caracterización de microorganismos y virus, con el uso de técnicas básicas y de avanzada y cumplimentando las normas de bioseguridad y control nacional.</li>
                  <li>• Determinar la estructura y composición de especies de las comunidades microbianas, así como evaluar los factores ecológicos que gobiernan el equilibrio dinámico de los ecosistemas.</li>
                  <li>• Diagnosticar a nivel de laboratorio enfermedades infecciosas, microbianas y virales, a partir de muestras humanas, animales y vegetales.</li>
                  <li>• Evaluar la actividad de agentes antimicrobianos y antivirales, mediante técnicas de cultivo celular, de Microbiología, Virología, Inmunología, Biología molecular y otras relacionadas.</li>
                  <li>• Obtener productos de microorganismos y virus seleccionados por su interés industrial, biomédico y agrícola, aplicando métodos apropiados de la Microbiología, Virología, Genética, Ecología, Bioquímica, Inmunología, Ingeniería genética, Ingeniería bioquímica y otros.</li>
                </ul>
              </div>
              <p className={`${cormorant.className} text-gray-700 mb-4`}>
                Además, el profesional está capacitado para:
              </p>
              <div className="bg-gray-50 p-5 rounded-lg">
                <ul className={`${cormorant.className} space-y-3 text-gray-700`}>
                  <li>• Desarrollar metodologías y normas para la conservación y protección del medio ambiente y de bienes culturales, a través del conocimiento de la biología de los microorganismos y virus, de las condiciones ambientales existentes y del control de las infecciones en el hombre, animales, plantas.</li>
                  <li>• Aplicar la genética de microorganismos y virus a la obtención de variantes útiles mediante el empleo de técnicas clásicas y del ADN recombinante entre otras, así como el establecimiento y desarrollo de programas de mejoramiento genético con fines definidos.</li>
                  <li>• Desarrollar investigaciones fundamentales o aplicadas, teóricas o experimentales en el campo de la Microbiología y la Virología con una conciencia económica de ahorro y racionalidad que responda a los intereses de nuestra sociedad.</li>
                  <li>• Realizar procesamiento de resultados, búsqueda y generación de información, así como la elaboración de informes científicos empleando la herramienta y la metodología de la bioinformática, la estadística y la consulta de bibliografía especializada, tanto en español como en inglés, con independencia y creatividad.</li>
                  <li>• Comunicar con dedicación y responsabilidad, contenidos relacionados con la profesión ante la comunidad científica, tribunales o auditorio no especializado, empleando recursos didácticos básicos y las tecnologías de la informática y las comunicaciones.</li>
                </ul>
              </div>
            </div>
          )}
            
          {activeTab === 'campos' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                ¿Dónde puede trabajar el profesional que ejerce esta profesión?
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-6`}>
                Los graduados en Microbiología y Virología tienen un amplio campo laboral en diversos sectores:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Centros de investigación y servicios
                  </h3>
                  <p className={`${cormorant.className} text-gray-700`}>
                    Centros de investigaciones, producciones y servicios en las esferas de salud pública, agricultura, las industrias biofarmacéutica y biotecnológica, azucarera, pesquera, textil, minera, energética, electrónica, química, turística, cosmética, alimentaria y otras.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Docencia e investigación
                  </h3>
                  <p className={`${cormorant.className} text-gray-700`}>
                    Centros docentes de la Educación Superior, institutos de investigación, laboratorios de diagnóstico microbiológico, empresas biotecnológicas y centros de control de calidad.
                  </p>
                </div>
              </div>
              
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                ¿En qué campos se especializa el profesional que ejerce esta profesión?
              </h2>
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <ul className={`${cormorant.className} space-y-3 text-gray-700`}>
                  <li>• Caracterización de la diversidad microbiana.</li>
                  <li>• Los virus y su interacción a nivel celular y de hospedero.</li>
                  <li>• Interacciones microbianas y virales en el ambiente.</li>
                  <li>• Aplicaciones de los microorganismos y virus.</li>
                </ul>
              </div>
              
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                ¿Qué funciones desempeña el profesional que ejerce esta profesión?
              </h2>
              <div className="bg-gray-50 p-5 rounded-lg">
                <ul className={`${cormorant.className} space-y-3 text-gray-700`}>
                  <li>• Realizar aislamiento, purificación, cuantificación y caracterización de microorganismos y virus, con el uso de técnicas básicas y de avanzada y cumplimentando las normas de bioseguridad y control nacional.</li>
                  <li>• Determinar la estructura y composición de especies de las comunidades microbianas, así como evaluar los factores ecológicos que gobiernan el equilibrio dinámico de los ecosistemas.</li>
                  <li>• Diagnosticar a nivel de laboratorio enfermedades infecciosas, microbianas y virales, a partir de muestras humanas, animales y vegetales.</li>
                  <li>• Evaluar la actividad de agentes antimicrobianos y antivirales, mediante técnicas de cultivo celular, de Microbiología, Virología, Inmunología, Biología molecular y otras relacionadas.</li>
                  <li>• Obtener productos de microorganismos y virus seleccionados por su interés industrial, biomédico y agrícola, aplicando métodos apropiados de la Microbiología, Virología, Genética, Ecología, Bioquímica, Inmunología, Ingeniería genética, Ingeniería bioquímica y otros.</li>
                </ul>
              </div>
            </div>
          )}
            
          {activeTab === 'plan' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Plan de Estudios - Microbiología y Virología
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-6`}>
                El plan de estudios de la Licenciatura en Microbiología y Virología está diseñado para proporcionar una formación integral en el estudio de los microorganismos y virus, con un enfoque tanto teórico como práctico.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                  Características del Plan de Estudios
                </h3>
                <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                  <li>• <strong>Plan:</strong> E-2021</li>
                  <li>• <strong>Duración:</strong> 4 años (8 semestres)</li>
                  <li>• <strong>Total de horas:</strong> Aproximadamente 3,600 horas</li>
                  <li>• <strong>Prácticas:</strong> Incluye prácticas de laboratorio, métodos experimentales y trabajo de diploma</li>
                  <li>• <strong>Asignaturas optativas y electivas:</strong> El plan incluye asignaturas optativas y electivas que permiten al estudiante orientar su formación según sus intereses</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                  Estructura por Años
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                      Primer Año
                    </h4>
                    <p className={`${cormorant.className} text-gray-700 mb-2`}>
                      Enfocado en ciencias básicas y fundamentos de microbiología y virología:
                    </p>
                    <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                      <li>• Cálculo Diferencial e Integral</li>
                      <li>• Química General y Orgánica</li>
                      <li>• Introducción a la Microbiología y Virología</li>
                      <li>• Física (Mecánica y Electromagnetismo)</li>
                      <li>• Métodos Básicos en Microbiología y Virología</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                      Segundo Año
                    </h4>
                    <p className={`${cormorant.className} text-gray-700 mb-2`}>
                      Profundiza en química, física y biología celular:
                    </p>
                    <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                      <li>• Química Física y Analítica</li>
                      <li>• Óptica y Física Moderna</li>
                      <li>• Biología Celular</li>
                      <li>• Biomoléculas</li>
                      <li>• Metabolismo</li>
                      <li>• Fisiología de Procariontes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                    Tercer Año
                  </h4>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    Especialización en microbiología, virología y genética:
                  </p>
                  <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                    <li>• Fisiología Animal y Vegetal</li>
                    <li>• Micología</li>
                    <li>• Genética Molecular</li>
                    <li>• Inmunología</li>
                    <li>• Bioestadística</li>
                    <li>• Ecología Microbiana</li>
                    <li>• Virología Básica</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                    Cuarto Año
                  </h4>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    Aplicaciones y especialización avanzada:
                  </p>
                  <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                    <li>• Fitopatología</li>
                    <li>• Microbiología Clínica e Industrial</li>
                    <li>• Virología Vegetal y Clínica</li>
                    <li>• Genética de Microorganismos</li>
                    <li>• Trabajo de Diploma (investigación final)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/carreras/microbiologia/malla-curricular" 
                  className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <span className={`${cormorant.className} font-medium`}>Ver malla curricular completa</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          )}
            
          {activeTab === 'malla' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Malla Curricular - Microbiología y Virología
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-6`}>
                La malla curricular de la Licenciatura en Microbiología y Virología está organizada en 8 semestres, con un total de aproximadamente 3,600 horas de formación.
              </p>
              
              <div className="mb-8">
                <MallaCurricular planEstudio={mallaTransformada} carrera="microbiologia" />
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                  Características de la Malla Curricular
                </h3>
                <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                  <li>• <strong>Asignaturas básicas:</strong> Proporcionan los fundamentos científicos necesarios para la comprensión de los fenómenos biológicos.</li>
                  <li>• <strong>Asignaturas específicas:</strong> Centradas en el estudio de los microorganismos y virus desde diferentes perspectivas.</li>
                  <li>• <strong>Prácticas de laboratorio:</strong> Componente esencial para el desarrollo de habilidades técnicas y experimentales.</li>
                  <li>• <strong>Trabajo de diploma:</strong> Investigación final que permite al estudiante aplicar los conocimientos adquiridos.</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/carreras/microbiologia/malla-curricular" 
                  className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <span className={`${cormorant.className} font-medium`}>Ver malla curricular detallada</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          )}
          
          {activeTab === 'profesores' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Claustro de Profesores
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-6`}>
                La Licenciatura en Microbiología y Virología cuenta con un claustro de profesores altamente calificados, con amplia experiencia en investigación y docencia en las diferentes áreas de la microbiología y virología.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Departamento de Microbiología y Virología
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• <strong>Dra. María Elena García</strong> - Jefa de Departamento, especialista en Virología Molecular</li>
                    <li>• <strong>Dr. Carlos Rodríguez</strong> - Profesor Titular, especialista en Microbiología Ambiental</li>
                    <li>• <strong>Dra. Laura Fernández</strong> - Profesora Auxiliar, especialista en Bacteriología</li>
                    <li>• <strong>Dr. Javier Martínez</strong> - Profesor Titular, especialista en Virología Clínica</li>
                    <li>• <strong>Dra. Ana Luisa Pérez</strong> - Profesora Auxiliar, especialista en Micología</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Departamento de Biología Molecular
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• <strong>Dr. Roberto Sánchez</strong> - Profesor Titular, especialista en Genética Microbiana</li>
                    <li>• <strong>Dra. Carla Hernández</strong> - Profesora Auxiliar, especialista en Biología Molecular de Virus</li>
                    <li>• <strong>Dr. Miguel Ángel Torres</strong> - Profesor Titular, especialista en Biotecnología Microbiana</li>
                    <li>• <strong>Dra. Nairelí González</strong> - Profesora Asistente, especialista en Micología</li>
                    <li>• <strong>Dr. David Guedán</strong> - Profesor Asistente, especialista en Hongos Basidiomicetos</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Departamento de Bioquímica
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• <strong>Dra. Isabel Ramírez</strong> - Profesora Titular, especialista en Bioquímica Microbiana</li>
                    <li>• <strong>Dr. Fernando López</strong> - Profesor Auxiliar, especialista en Metabolismo Microbiano</li>
                    <li>• <strong>Dra. Patricia González</strong> - Profesora Titular, especialista en Enzimología</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Profesores Colaboradores
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• <strong>Dr. Diego Martínez</strong> - Instituto de Medicina Tropical, especialista en Micología Clínica</li>
                    <li>• <strong>Dra. Susana Maldonado</strong> - Centro de Ingeniería Genética y Biotecnología, especialista en Virología Vegetal</li>
                    <li>• <strong>Dr. Alejandro Durán</strong> - Instituto de Ecología, especialista en Ecología Microbiana</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'recursos' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Recursos para Estudiantes
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-6`}>
                La Facultad de Biología pone a disposición de los estudiantes de Microbiología y Virología diversos recursos para apoyar su formación académica y profesional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Laboratorios
                  </h3>
                  <p className={`${cormorant.className} text-gray-700 mb-3`}>
                    La Facultad cuenta con laboratorios especializados equipados con tecnología moderna para el estudio de microorganismos y virus:
                  </p>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• Laboratorio de Microbiología General</li>
                    <li>• Laboratorio de Virología</li>
                    <li>• Laboratorio de Biología Molecular</li>
                    <li>• Laboratorio de Micología</li>
                    <li>• Laboratorio de Cultivo Celular</li>
                    <li>• Laboratorio de Bioinformática</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Biblioteca y Recursos Digitales
                  </h3>
                  <p className={`${cormorant.className} text-gray-700 mb-3`}>
                    Acceso a una amplia colección de recursos bibliográficos y digitales:
                  </p>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• Biblioteca especializada en Ciencias Biológicas</li>
                    <li>• Acceso a bases de datos científicas (PubMed, ScienceDirect, Scopus)</li>
                    <li>• Colección de revistas especializadas en Microbiología y Virología</li>
                    <li>• Repositorio institucional con tesis y trabajos de investigación</li>
                    <li>• Plataforma virtual de aprendizaje</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Grupos Científicos Estudiantiles
                  </h3>
                  <p className={`${cormorant.className} text-gray-700 mb-3`}>
                    Los estudiantes pueden participar en diversos grupos científicos:
                  </p>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• Grupo de Investigación en Microbiología Ambiental</li>
                    <li>• Grupo de Estudio de Virus Emergentes</li>
                    <li>• Círculo de Micología y Hongos Medicinales</li>
                    <li>• Grupo de Biotecnología Microbiana</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                    Bibliografía Recomendada
                  </h3>
                  <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                    <li>• Madigan, M.T., Martinko, J.M., Bender, K.S., Buckley, D.H., & Stahl, D.A. (2015). Brock Biology of Microorganisms (14th ed.). Pearson.</li>
                    <li>• Flint, S.J., Racaniello, V.R., Rall, G.F., & Skalka, A.M. (2015). Principles of Virology (4th ed.). ASM Press.</li>
                    <li>• Rojas, G., & Maldonado, S. (2018). Manual de Micología Básica. Editorial Universitaria.</li>
                    <li>• Papendoring, M., & Cepero de García, G. (2019). Hongos: Diversidad y Aplicaciones. Editorial Científica.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'plan' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Plan de Estudios - Microbiología y Virología
              </h2>
              <p className={`${cormorant.className} text-gray-700 mb-6`}>
                El plan de estudios de la Licenciatura en Microbiología y Virología está diseñado para proporcionar una formación integral en el estudio de los microorganismos y virus, con un enfoque tanto teórico como práctico.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                  Características del Plan de Estudios
                </h3>
                <ul className={`${cormorant.className} space-y-2 text-gray-700`}>
                  <li>• <strong>Plan:</strong> E-2021</li>
                  <li>• <strong>Duración:</strong> 4 años (8 semestres)</li>
                  <li>• <strong>Total de horas:</strong> Aproximadamente 3,600 horas</li>
                  <li>• <strong>Prácticas:</strong> Incluye prácticas de laboratorio, métodos experimentales y trabajo de diploma</li>
                  <li>• <strong>Asignaturas optativas y electivas:</strong> El plan incluye asignaturas optativas y electivas que permiten al estudiante orientar su formación según sus intereses</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className={`${cormorant.className} text-xl font-semibold text-primary-800 mb-3`}>
                  Estructura por Años
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                      Primer Año
                    </h4>
                    <p className={`${cormorant.className} text-gray-700 mb-2`}>
                      Enfocado en ciencias básicas y fundamentos de microbiología y virología:
                    </p>
                    <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                      <li>• Cálculo Diferencial e Integral</li>
                      <li>• Química General y Orgánica</li>
                      <li>• Introducción a la Microbiología y Virología</li>
                      <li>• Física (Mecánica y Electromagnetismo)</li>
                      <li>• Métodos Básicos en Microbiología y Virología</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                      Segundo Año
                    </h4>
                    <p className={`${cormorant.className} text-gray-700 mb-2`}>
                      Profundiza en química, física y biología celular:
                    </p>
                    <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                      <li>• Química Física y Analítica</li>
                      <li>• Óptica y Física Moderna</li>
                      <li>• Biología Celular</li>
                      <li>• Biomoléculas</li>
                      <li>• Metabolismo</li>
                      <li>• Fisiología de Procariontes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                    Tercer Año
                  </h4>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    Especialización en microbiología, virología y genética:
                  </p>
                  <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                    <li>• Fisiología Animal y Vegetal</li>
                    <li>• Micología</li>
                    <li>• Genética Molecular</li>
                    <li>• Inmunología</li>
                    <li>• Bioestadística</li>
                    <li>• Ecología Microbiana</li>
                    <li>• Virología Básica</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className={`${cormorant.className} text-lg font-medium text-gray-900 mb-2`}>
                    Cuarto Año
                  </h4>
                  <p className={`${cormorant.className} text-gray-700 mb-2`}>
                    Aplicaciones y especialización avanzada:
                  </p>
                  <ul className={`${cormorant.className} text-gray-700 space-y-1`}>
                    <li>• Fitopatología</li>
                    <li>• Microbiología Clínica e Industrial</li>
                    <li>• Virología Vegetal y Clínica</li>
                    <li>• Genética de Microorganismos</li>
                    <li>• Trabajo de Diploma (investigación final)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/carreras/microbiologia/malla-curricular" 
                  className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <span className={`${cormorant.className} font-medium`}>Ver malla curricular completa</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          )}
            
          {activeTab === 'plan' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Información del plan de estudios
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Total de horas: {totalHoras} horas</p>
                    <p className="text-gray-600">Duración: 8 semestres (4 años)</p>
                    <p className="text-gray-600">Número de asignaturas: {totalAsignaturas}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Última actualización: 2021</p>
                    <p className="text-gray-600">Créditos requeridos: 120 créditos</p>
                  </div>
                </div>
              </div>
            </div>
          )}
            
          {activeTab === 'plan' && (
            <div className="animate-fade-in">
              <h2 className={`${cormorant.className} text-2xl font-bold text-gray-900 mb-4`}>
                Requisitos de graduación
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <ul className="list-disc list-inside space-y-2">
                  <li>Realizar el Trabajo de Diploma (TD101)</li>
                  <li>Obtener un mínimo de 120 créditos</li>
                  <li>Completar todas las asignaturas básicas</li>
                  <li>Completar todas las asignaturas de especialidad</li>
                  <li>Completar al menos 3 asignaturas electivas</li>
                  <li>Completar al menos 3 asignaturas optativas</li>
                  <li>Mantener un promedio mínimo de 4.0</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
