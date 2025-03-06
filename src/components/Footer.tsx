import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p>Calle 25 entre J e I, Vedado</p>
              <p>La Habana, Cuba</p>
              <p>Teléfono: +53 7832-XXXX</p>
              <p>Email: biologia@fbio.uh.cu</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/carreras" className="hover:text-blue-400">
                  Programas Académicos
                </Link>
              </li>
              <li>
                <Link href="/publicaciones" className="hover:text-blue-400">
                  Publicaciones Científicas
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-blue-400">
                  Noticias y Eventos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-400">Facebook</a>
              <a href="#" className="block hover:text-blue-400">Twitter</a>
              <a href="#" className="block hover:text-blue-400">Instagram</a>
              <a href="#" className="block hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Facultad de Biología - Universidad de La Habana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 