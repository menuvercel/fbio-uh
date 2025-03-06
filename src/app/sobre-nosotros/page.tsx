import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const SobreNosotrosPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/facultad.jpg"
            alt="Facultad de Biología"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Facultad de Biología
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Formando profesionales e investigadores en ciencias biológicas desde 1962
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Historia y Misión */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                La Facultad de Biología de la Universidad de La Habana ha sido un pilar fundamental 
                en la formación de científicos y profesionales en el campo de las ciencias biológicas 
                en Cuba desde su fundación en 1962.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de más de 60 años, nuestra facultad ha contribuido significativamente 
                al desarrollo científico del país, formando generaciones de biólogos, bioquímicos 
                y microbiólogos que han impactado positivamente en diversos sectores.
              </p>
              <p className="text-gray-600">
                Hoy en día, continuamos nuestro compromiso con la excelencia académica y la 
                investigación científica, adaptándonos a los nuevos retos y tecnologías del siglo XXI.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-gray-600 mb-4">
                Formar profesionales altamente calificados en las ciencias biológicas, capaces de 
                contribuir al desarrollo científico, tecnológico y social de Cuba y el mundo.
              </p>
              <p className="text-gray-600 mb-4">
                Desarrollar investigaciones científicas de alto impacto que contribuyan al 
                conocimiento de la biodiversidad, la conservación del medio ambiente y la 
                solución de problemas biomédicos y biotecnológicos.
              </p>
              <p className="text-gray-600">
                Promover la colaboración internacional y el intercambio académico para 
                enriquecer la formación de nuestros estudiantes y el desarrollo de la 
                investigación científica.
              </p>
            </div>
          </div>
        </section>

        {/* Instalaciones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Instalaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/laboratorio.jpg"
                  alt="Laboratorios"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Laboratorios Modernos</h3>
                <p className="text-gray-600">
                  Equipados con tecnología de última generación para investigación y docencia.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/biblioteca.jpg"
                  alt="Biblioteca"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Biblioteca Especializada</h3>
                <p className="text-gray-600">
                  Amplia colección de recursos bibliográficos y acceso a bases de datos científicas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/aulas.jpg"
                  alt="Aulas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Aulas y Auditorios</h3>
                <p className="text-gray-600">
                  Espacios modernos y confortables para el aprendizaje y eventos académicos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Información de Contacto */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Información de Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <FiMapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Dirección</h3>
                <p className="text-gray-600">Calle 25 entre J e I, Vedado, La Habana, Cuba</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiPhone className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-600">+53 7832-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiMail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@fbio.uh.cu</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiClock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Horario</h3>
                <p className="text-gray-600">Lunes a Viernes<br />8:00 AM - 4:30 PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreNosotrosPage; 