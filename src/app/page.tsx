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
    titulo: 'Biología',
    descripcion: 'Forma profesionales con una sólida base en ciencias biológicas, capaces de investigar y comprender los sistemas vivos en todos sus niveles de organización.',
    imagen: '/carreras/biologia.jpg',
    enlace: '/carreras/biologia'
  },
  {
    titulo: 'Microbiología y Virología',
    descripcion: 'Especialización en el estudio de microorganismos, su impacto en la salud, el medio ambiente y la biotecnología.',
    imagen: '/carreras/microbiologia.jpg',
    enlace: '/carreras/microbiologia'
  },
  {
    titulo: 'Bioquímica y Biología Molecular',
    descripcion: 'Enfoque en el estudio de los procesos químicos en los sistemas biológicos y sus aplicaciones en la investigación biomédica.',
    imagen: '/carreras/bioquimica.jpg',
    enlace: '/carreras/bioquimica'
  }
];

const noticias = [
  {
    titulo: 'Descubrimiento de Nueva Especie Endémica',
    fecha: '15 Mar 2024',
    imagen: '/noticias/descubrimiento.jpg',
    categoria: 'Investigación',
    descripcion: 'Investigadores de nuestra facultad han descubierto una nueva especie de hongo endémico con potenciales aplicaciones en la industria farmacéutica.'
  },
  {
    titulo: 'Apertura de Nuevo Laboratorio de Biotecnología',
    fecha: '10 Mar 2024',
    imagen: '/noticias/laboratorio.jpg',
    categoria: 'Infraestructura',
    descripcion: 'La facultad inaugura un moderno laboratorio equipado con tecnología de última generación para investigaciones en biotecnología y microbiología.'
  },
  {
    titulo: 'Premio Internacional a Investigación sobre Corales',
    fecha: '5 Mar 2024',
    imagen: '/noticias/premio.jpg',
    categoria: 'Reconocimientos',
    descripcion: 'Nuestro equipo de investigación marina recibe reconocimiento internacional por su trabajo sobre la conservación de ecosistemas coralinos.'
  }
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const [navigateTo, setNavigateTo] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    
    // Si estamos navegando, redirigir después de la animación
    if (navigating && navigateTo) {
      const timer = setTimeout(() => {
        // Añadir parámetro para indicar que debe hacer fade al entrar
        const url = new URL(navigateTo, window.location.origin);
        url.searchParams.set('fade', 'true');
        window.location.href = url.toString();
      }, 400); // Reducido a 400ms para que sea más rápido
      
      return () => clearTimeout(timer);
    }
  }, [navigating, navigateTo]);

  // Función para manejar la navegación con animación
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setNavigateTo(url);
    setNavigating(true);
  };

  // Efecto para aplicar fade-in cuando la página carga
  useEffect(() => {
    // Verificar si venimos de otra página con parámetro fade
    const urlParams = new URLSearchParams(window.location.search);
    const shouldFade = urlParams.get('fade') === 'true';
    
    if (shouldFade) {
      // Limpiar el parámetro de la URL sin recargar la página
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Aplicar fade-in
      document.body.classList.add('page-enter');
      setTimeout(() => {
        document.body.classList.remove('page-enter');
      }, 500);
    }
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${navigating ? 'page-exit' : ''}`}>
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
        <div className="relative z-10 text-center text-white w-full max-w-5xl mx-auto px-4">
          <h1 className={`${cormorant.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight`}>
            <span className="block whitespace-nowrap">Excelencia en</span>
            <span className="block whitespace-nowrap">Ciencias de la Vida</span>
          </h1>
          <p className={`${cormorant.className} text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium`}>
            Formando los científicos del mañana a través de la excelencia académica e investigación innovadora
          </p>
          <Link
            href="/sobre-nosotros"
            className="sobre-nosotros-link inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600/90 rounded-xl hover:bg-primary-700 transition-all shadow-soft-xl hover:shadow-soft-2xl transform hover:-translate-y-1 border-2 border-white/20 hover:border-white/40 animate-fade-in"
            onClick={(e) => handleNavigation(e, '/sobre-nosotros')}
          >
            Sobre Nosotros
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Nuestras Carreras */}
      <section className="bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="text-center mb-8">
            <h2 className={`${cormorant.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
              Nuestras Carreras
            </h2>
            <p className={`${cormorant.className} text-xl text-gray-600 max-w-3xl mx-auto font-medium`}>
              Forma parte de nuestra comunidad académica y prepárate para ser un profesional de excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {carreras.map((carrera, index) => (
              <Link 
                key={index} 
                href={carrera.enlace}
                className={`block w-full transition-all duration-300 hover:scale-[1.02] card-animate ${navigating ? 'card-exit' : ''}`}
                onClick={(e) => handleNavigation(e, carrera.enlace)}
              >
                <Card 
                  hover 
                  gradient 
                  className="h-[400px] flex flex-col shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.35)]"
                >
                  <div className="relative h-60 rounded-t-2xl overflow-hidden">
                    <Image
                      src={carrera.imagen}
                      alt={carrera.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`${cormorant.className} text-2xl font-semibold text-gray-900 mb-2`}>
                      {carrera.titulo}
                    </h3>
                    <p className={`${cormorant.className} text-base text-gray-600 mb-4 flex-grow font-medium line-clamp-3`}>
                      {carrera.descripcion}
                    </p>
                    <div className={`${cormorant.className} flex items-center text-primary-600 font-medium text-lg mt-auto`}>
                      Conocer más
                      <FiArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Últimas Noticias */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={`${cormorant.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
              Últimas Noticias
            </h2>
            <p className={`${cormorant.className} text-xl text-gray-600 max-w-3xl mx-auto font-medium`}>
              Mantente al día con los últimos acontecimientos de nuestra facultad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {noticias.map((noticia, index) => (
              <div 
                key={index} 
                className="w-full"
              >
                <Card hover className="h-[450px] flex flex-col shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.35)]">
                  <div className="relative h-60 rounded-t-2xl overflow-hidden">
                    <Image
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className={`${cormorant.className} absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900`}>
                      {noticia.categoria}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className={`${cormorant.className} text-sm text-gray-500 mb-2 font-medium`}>{noticia.fecha}</div>
                    <h3 className={`${cormorant.className} text-2xl font-semibold text-gray-900 mb-2`}>
                      {noticia.titulo}
                    </h3>
                    <p className={`${cormorant.className} text-base text-gray-600 mb-4 flex-grow font-medium`}>
                      {noticia.descripcion}
                    </p>
                    <Link
                      href={`/noticias/${noticia.titulo.toLowerCase().replace(/ /g, '-')}`}
                      className={`${cormorant.className} inline-flex items-center text-primary-600 font-medium mt-auto`}
                      onClick={(e) => handleNavigation(e, `/noticias/${noticia.titulo.toLowerCase().replace(/ /g, '-')}`)}
                    >
                      Leer más
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </Card>
              </div>
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
                onClick={(e) => handleNavigation(e, '/contacto')}
              >
                Contáctanos
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .page-exit {
          animation: fadeOut 0.4s ease-in-out forwards;
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        .page-enter {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .card-animate {
          opacity: 1;
          transition: opacity 0.4s ease-in-out, transform 0.3s ease-in-out;
        }
        
        .card-exit {
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
