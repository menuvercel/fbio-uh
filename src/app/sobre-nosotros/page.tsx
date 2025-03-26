'use client';

import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

const SobreNosotrosPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/facultad.jpg"
            alt="Facultad de Biología"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/60 to-primary-900/10" />
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 animate-fade-in">
          <h1 className={`${cormorant.className} text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight`}>
            Sobre Nosotros
          </h1>
          <p className={`${cormorant.className} text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium`}>
            Formando profesionales e investigadores en ciencias biológicas desde 1962
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Historia y Misión */}
        <section className="mb-16 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className={`${cormorant.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>Nuestra Historia</h2>
              <p className={`${cormorant.className} text-lg text-gray-600 mb-4 font-medium`}>
                La Facultad de Biología de la Universidad de La Habana ha sido un pilar fundamental 
                en la formación de científicos y profesionales en el campo de las ciencias biológicas 
                en Cuba desde su fundación en 1962.
              </p>
              <p className={`${cormorant.className} text-lg text-gray-600 mb-4 font-medium`}>
                A lo largo de más de 60 años, nuestra facultad ha contribuido significativamente 
                al desarrollo científico del país, formando generaciones de biólogos, bioquímicos 
                y microbiólogos que han impactado positivamente en diversos sectores.
              </p>
              <p className={`${cormorant.className} text-lg text-gray-600 font-medium`}>
                Hoy en día, continuamos nuestro compromiso con la excelencia académica y la 
                investigación científica, adaptándonos a los nuevos retos y tecnologías del siglo XXI.
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className={`${cormorant.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>Nuestra Misión</h2>
              <p className={`${cormorant.className} text-lg text-gray-600 mb-4 font-medium`}>
                Formar profesionales altamente calificados en las ciencias biológicas, capaces de 
                contribuir al desarrollo científico, tecnológico y social de Cuba y el mundo.
              </p>
              <p className={`${cormorant.className} text-lg text-gray-600 mb-4 font-medium`}>
                Desarrollar investigaciones científicas de alto impacto que contribuyan al 
                conocimiento de la biodiversidad, la conservación del medio ambiente y la 
                solución de problemas biomédicos y biotecnológicos.
              </p>
              <p className={`${cormorant.className} text-lg text-gray-600 font-medium`}>
                Promover la colaboración internacional y el intercambio académico para 
                enriquecer la formación de nuestros estudiantes y el desarrollo de la 
                investigación científica.
              </p>
            </div>
          </div>
        </section>

        {/* Instalaciones */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className={`${cormorant.className} text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900`}>Nuestras Instalaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-soft-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-xl">
              <div className="relative h-48">
                <Image
                  src="/laboratorio.jpg"
                  alt="Laboratorios"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className={`${cormorant.className} text-xl font-semibold mb-2 text-gray-900`}>Laboratorios Modernos</h3>
                <p className={`${cormorant.className} text-gray-600 font-medium`}>
                  Equipados con tecnología de última generación para investigación y docencia.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-soft-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-xl">
              <div className="relative h-48">
                <Image
                  src="/biblioteca.jpg"
                  alt="Biblioteca"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className={`${cormorant.className} text-xl font-semibold mb-2 text-gray-900`}>Biblioteca Especializada</h3>
                <p className={`${cormorant.className} text-gray-600 font-medium`}>
                  Amplia colección de recursos bibliográficos y acceso a bases de datos científicas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-soft-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-xl">
              <div className="relative h-48">
                <Image
                  src="/aulas.jpg"
                  alt="Aulas"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className={`${cormorant.className} text-xl font-semibold mb-2 text-gray-900`}>Aulas y Auditorios</h3>
                <p className={`${cormorant.className} text-gray-600 font-medium`}>
                  Espacios modernos y confortables para el aprendizaje y eventos académicos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Información de Contacto */}
        <section className="bg-white rounded-lg shadow-soft-lg p-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className={`${cormorant.className} text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900`}>Información de Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 transform transition-all duration-300 hover:-translate-y-1">
              <FiMapPin className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className={`${cormorant.className} font-semibold mb-2 text-gray-900`}>Dirección</h3>
                <p className={`${cormorant.className} text-gray-600 font-medium`}>Calle 25 entre J e I, Vedado, La Habana, Cuba</p>
              </div>
            </div>
            <div className="flex items-start gap-4 transform transition-all duration-300 hover:-translate-y-1">
              <FiPhone className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className={`${cormorant.className} font-semibold mb-2 text-gray-900`}>Teléfono</h3>
                <p className={`${cormorant.className} text-gray-600 font-medium`}>+53 7832-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4 transform transition-all duration-300 hover:-translate-y-1">
              <FiMail className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className={`${cormorant.className} font-semibold mb-2 text-gray-900`}>Email</h3>
                <p className={`${cormorant.className} text-gray-600 font-medium`}>info@fbio.uh.cu</p>
              </div>
            </div>
            <div className="flex items-start gap-4 transform transition-all duration-300 hover:-translate-y-1">
              <FiClock className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className={`${cormorant.className} font-semibold mb-2 text-gray-900`}>Horario</h3>
                <p className={`${cormorant.className} text-gray-600 font-medium`}>Lunes a Viernes<br />8:00 AM - 4:30 PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreNosotrosPage; 