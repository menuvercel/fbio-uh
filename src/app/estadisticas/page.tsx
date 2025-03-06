import { FiUsers, FiAward, FiBook, FiTrendingUp } from 'react-icons/fi';

const EstadisticasPage = () => {
  // Estos datos serían reemplazados por datos reales de una API
  const estadisticas = {
    estudiantes: {
      total: 523,
      porCarrera: {
        bioquimica: 175,
        microbiologia: 168,
        biologia: 180
      },
      genero: {
        femenino: 65,
        masculino: 35
      }
    },
    profesores: {
      total: 82,
      nivelAcademico: {
        phd: 49,
        msc: 25,
        lic: 8
      },
      categoriaDocente: {
        titular: 15,
        auxiliar: 25,
        asistente: 30,
        instructor: 12
      }
    },
    investigacion: {
      publicaciones2023: 45,
      proyectosActivos: 12,
      colaboracionesInternacionales: 8
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Estadísticas de la Facultad</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Datos y cifras que reflejan nuestro compromiso con la excelencia académica y la investigación científica
          </p>
        </div>

        {/* Tarjetas de Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <FiUsers className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold">Estudiantes</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{estadisticas.estudiantes.total}</p>
            <p className="text-sm text-gray-600 mt-2">Matriculados actualmente</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <FiAward className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold">Profesores</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{estadisticas.profesores.total}</p>
            <p className="text-sm text-gray-600 mt-2">Personal docente</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <FiBook className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold">Publicaciones</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{estadisticas.investigacion.publicaciones2023}</p>
            <p className="text-sm text-gray-600 mt-2">En el último año</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <FiTrendingUp className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold">Proyectos</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{estadisticas.investigacion.proyectosActivos}</p>
            <p className="text-sm text-gray-600 mt-2">Activos actualmente</p>
          </div>
        </div>

        {/* Sección de Estudiantes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Distribución de Estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Por Carrera</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Bioquímica y Biología Molecular</span>
                    <span>{estadisticas.estudiantes.porCarrera.bioquimica}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Microbiología y Virología</span>
                    <span>{estadisticas.estudiantes.porCarrera.microbiologia}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Biología</span>
                    <span>{estadisticas.estudiantes.porCarrera.biologia}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Por Género</h3>
              <div className="flex items-center justify-center h-48">
                <div className="w-48 h-48 relative rounded-full bg-gray-200">
                  <div 
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    style={{ 
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${estadisticas.estudiantes.genero.femenino}%)`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{estadisticas.estudiantes.genero.femenino}%</div>
                      <div className="text-sm">Femenino</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Profesores */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Nivel Académico del Profesorado</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {estadisticas.profesores.nivelAcademico.phd}
              </div>
              <div className="text-gray-600">Doctores (PhD)</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {estadisticas.profesores.nivelAcademico.msc}
              </div>
              <div className="text-gray-600">Másters (MSc)</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {estadisticas.profesores.nivelAcademico.lic}
              </div>
              <div className="text-gray-600">Licenciados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadisticasPage; 