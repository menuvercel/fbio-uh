'use client';

import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const carreras = [
  {
    titulo: 'Licenciatura en Biología',
    descripcion: 'Forma profesionales con una sólida base en ciencias biológicas, capaces de investigar y comprender los sistemas vivos en todos sus niveles de organización.',
    imagen: '/carreras/biologia.jpg',
    enlace: '/programas/biologia'
  },
  {
    titulo: 'Licenciatura en Microbiología',
    descripcion: 'Especialización en el estudio de microorganismos, su impacto en la salud, el medio ambiente y la biotecnología.',
    imagen: '/carreras/microbiologia.jpg',
    enlace: '/programas/microbiologia'
  },
  {
    titulo: 'Licenciatura en Bioquímica',
    descripcion: 'Enfoque en el estudio de los procesos químicos en los sistemas biológicos y sus aplicaciones en la investigación biomédica.',
    imagen: '/carreras/bioquimica.jpg',
    enlace: '/programas/bioquimica'
  }
];

const noticias = [
  {
    titulo: 'Descubrimiento de Nueva Especie Endémica',
    fecha: '15 Mar 2024',
    imagen: '/noticias/descubrimiento.jpg',
    categoria: 'Investigación'
  },
  {
    titulo: 'Apertura de Nuevo Laboratorio de Biotecnología',
    fecha: '10 Mar 2024',
    imagen: '/noticias/laboratorio.jpg',
    categoria: 'Infraestructura'
  },
  {
    titulo: 'Premio Internacional a Investigación sobre Corales',
    fecha: '5 Mar 2024',
    imagen: '/noticias/premio.jpg',
    categoria: 'Reconocimientos'
  }
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Facultad de Biología"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/60 to-primary-900/10" />
        </div>
        
        {/* Contenido del Hero */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className={`${cormorant.className} text-7xl md:text-9xl font-bold mb-8 tracking-tight leading-tight`}>
            Excelencia en Ciencias de la Vida
          </h1>
          <p className={`${cormorant.className} text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium`}>
            Formando los científicos del mañana a través de la excelencia académica e investigación innovadora
          </p>
          <Link
            href="/sobre-nosotros"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600/90 rounded-xl hover:bg-primary-700 transition-all shadow-soft-xl hover:shadow-soft-2xl transform hover:-translate-y-1 border-2 border-white/20 hover:border-white/40"
          >
            Sobre Nosotros
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Nuestras Carreras */}
      <section className="bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className={`${cormorant.className} text-4xl md:text-5xl font-bold text-gray-900 mb-6`}>
              Nuestras Carreras
            </h2>
            <p className={`${cormorant.className} text-xl text-gray-600 max-w-3xl mx-auto font-medium`}>
              Forma parte de nuestra comunidad académica y prepárate para ser un profesional de excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {carreras.map((carrera, index) => (
              <Link key={index} href={carrera.enlace}>
                <Card 
                  hover 
                  gradient 
                  className="h-full group transform hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.2)] flex flex-col"
                >
                  <div className="relative h-80 rounded-t-2xl overflow-hidden">
                    <Image
                      src={carrera.imagen}
                      alt={carrera.titulo}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className={`${cormorant.className} text-3xl font-semibold text-gray-900 mb-4`}>
                      {carrera.titulo}
                    </h3>
                    <p className={`${cormorant.className} text-lg text-gray-600 mb-8 flex-grow font-medium`}>
                      {carrera.descripcion}
                    </p>
                    <div className={`${cormorant.className} flex items-center text-primary-600 font-medium text-lg mt-auto`}>
                      Conocer más
                      <FiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Últimas Noticias */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${cormorant.className} text-4xl md:text-5xl font-bold text-gray-900 mb-6`}>
              Últimas Noticias
            </h2>
            <p className={`${cormorant.className} text-xl text-gray-600 max-w-3xl mx-auto font-medium`}>
              Mantente al día con los últimos acontecimientos de nuestra facultad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {noticias.map((noticia, index) => (
              <Card key={index} hover className="group h-full flex flex-col">
                <div className="relative h-80 rounded-t-2xl overflow-hidden">
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`${cormorant.className} absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900`}>
                    {noticia.categoria}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className={`${cormorant.className} text-sm text-gray-500 mb-2 font-medium`}>{noticia.fecha}</div>
                  <h3 className={`${cormorant.className} text-3xl font-semibold text-gray-900 mb-4`}>
                    {noticia.titulo}
                  </h3>
                  <p className={`${cormorant.className} text-lg text-gray-600 mb-8 flex-grow font-medium`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link
                    href={`/noticias/${noticia.titulo.toLowerCase().replace(/ /g, '-')}`}
                    className={`${cormorant.className} inline-flex items-center text-primary-600 font-medium mt-auto`}
                  >
                    Leer más
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
        <div className="absolute inset-0">
          <Image
            src="/cta-bg.jpg"
            alt="Background"
            fill
            className="object-cover mix-blend-multiply opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${cormorant.className} text-4xl md:text-5xl font-bold text-primary-900 mb-8`}>
              ¿Listo para ser parte de nuestra comunidad?
            </h2>
            <p className={`${cormorant.className} text-xl text-primary-800 mb-12 font-medium`}>
              Únete a una institución líder en investigación y educación en ciencias biológicas
            </p>
            <div className="flex justify-center">
              <Link
                href="/contacto"
                className={`${cormorant.className} inline-flex items-center px-8 py-4 text-lg font-medium text-primary-700 bg-white hover:bg-gray-50 rounded-xl transition-colors shadow-soft-xl hover:shadow-soft-2xl transform hover:-translate-y-1 border border-primary-200`}
              >
                Contáctanos
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
