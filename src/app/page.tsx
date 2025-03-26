'use client';

import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card';
import { useEffect, useState, useRef } from 'react';
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
    enlace: '/carreras/biologia'
  },
  {
    titulo: 'Licenciatura en Microbiología',
    descripcion: 'Especialización en el estudio de microorganismos, su impacto en la salud, el medio ambiente y la biotecnología.',
    imagen: '/carreras/microbiologia.jpg',
    enlace: '/carreras/microbiologia'
  },
  {
    titulo: 'Licenciatura en Bioquímica',
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
  const carrerasContainerRef = useRef<HTMLDivElement>(null);
  const noticiasContainerRef = useRef<HTMLDivElement>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Función para pausar la animación cuando el usuario hace scroll
    const handleScroll = (event: WheelEvent | TouchEvent) => {
      const target = event.currentTarget as HTMLElement;
      
      // Añadir clase para pausar
      target.classList.add('paused');
      
      // Limpiar timeout anterior si existe
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
      
      // Establecer nuevo timeout
      pauseTimerRef.current = setTimeout(() => {
        target.classList.remove('paused');
      }, 3000);
    };
    
    // Añadir event listeners para el scroll
    const carrerasContainer = carrerasContainerRef.current;
    const noticiasContainer = noticiasContainerRef.current;
    
    if (carrerasContainer) {
      carrerasContainer.addEventListener('wheel', handleScroll);
      carrerasContainer.addEventListener('touchmove', handleScroll);
    }
    
    if (noticiasContainer) {
      noticiasContainer.addEventListener('wheel', handleScroll);
      noticiasContainer.addEventListener('touchmove', handleScroll);
    }
    
    // Cleanup
    return () => {
      if (carrerasContainer) {
        carrerasContainer.removeEventListener('wheel', handleScroll);
        carrerasContainer.removeEventListener('touchmove', handleScroll);
      }
      
      if (noticiasContainer) {
        noticiasContainer.removeEventListener('wheel', handleScroll);
        noticiasContainer.removeEventListener('touchmove', handleScroll);
      }
      
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
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
            onClick={(e) => {
              e.preventDefault();
              const link = e.currentTarget;
              link.style.opacity = '0';
              link.style.transition = 'opacity 0.5s ease-out';
              
              setTimeout(() => {
                window.location.href = '/sobre-nosotros';
              }, 500);
            }}
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

          <div 
            ref={carrerasContainerRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-3 md:gap-8 cards-container"
          >
            {carreras.map((carrera, index) => (
              <Link 
                key={index} 
                href={carrera.enlace}
                className="snap-start shrink-0 w-[85%] pr-4 md:pr-0 md:w-full card-slide"
              >
                <Card 
                  hover 
                  gradient 
                  className="h-full group transform hover:scale-105 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.35)] flex flex-col"
                >
                  <div className="relative h-60 rounded-t-2xl overflow-hidden">
                    <Image
                      src={carrera.imagen}
                      alt={carrera.titulo}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
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

          <div 
            ref={noticiasContainerRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-3 md:gap-8 cards-container"
          >
            {noticias.map((noticia, index) => (
              <div 
                key={index} 
                className="snap-start shrink-0 w-[85%] pr-4 md:pr-0 md:w-full card-slide"
              >
                <Card hover className="group h-full flex flex-col shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.35)]">
                  <div className="relative h-60 rounded-t-2xl overflow-hidden">
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
                  <div className="p-6 flex flex-col flex-grow">
                    <div className={`${cormorant.className} text-sm text-gray-500 mb-2 font-medium`}>{noticia.fecha}</div>
                    <h3 className={`${cormorant.className} text-2xl font-semibold text-gray-900 mb-2`}>
                      {noticia.titulo}
                    </h3>
                    <p className={`${cormorant.className} text-base text-gray-600 mb-4 flex-grow font-medium line-clamp-3`}>
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
        
        @keyframes autoScrollForward {
          0%, 5% {
            transform: translateX(0);
          }
          42% {
            transform: translateX(-95%);
          }
          50% {
            transform: translateX(-100%);
          }
          55% {
            transform: translateX(-100%);
          }
          95% {
            transform: translateX(-5%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @media (max-width: 768px) {
          .cards-container {
            position: relative;
            animation: none;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            overflow-x: scroll !important;
            -webkit-overflow-scrolling: touch !important;
          }
          
          .cards-container:not(:hover):not(:active):not(.paused) .card-slide {
            animation: autoScrollForward 60s linear infinite;
            animation-play-state: running;
            pointer-events: auto;
          }
          
          .cards-container:hover .card-slide,
          .cards-container:active .card-slide,
          .cards-container.paused .card-slide {
            animation-play-state: paused !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
