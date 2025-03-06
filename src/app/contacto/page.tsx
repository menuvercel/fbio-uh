'use client';

import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiUser, FiMessageSquare } from 'react-icons/fi';

const contactInfo = {
  direccion: {
    calle: 'Calle 25 entre J e I, Vedado',
    ciudad: 'La Habana',
    pais: 'Cuba',
    codigoPostal: '10400'
  },
  telefonos: [
    {
      departamento: 'Secretaría',
      numero: '+53 7 832-1321'
    },
    {
      departamento: 'Decanato',
      numero: '+53 7 832-1322'
    },
    {
      departamento: 'Vicedecano Docente',
      numero: '+53 7 832-1323'
    }
  ],
  emails: [
    {
      departamento: 'Información General',
      email: 'info@fbio.uh.cu'
    },
    {
      departamento: 'Secretaría Docente',
      email: 'secretaria@fbio.uh.cu'
    },
    {
      departamento: 'Relaciones Internacionales',
      email: 'internacional@fbio.uh.cu'
    }
  ],
  horario: {
    semana: 'Lunes a Viernes: 8:00 AM - 4:30 PM',
    sabado: 'Sábado: 8:00 AM - 12:00 PM',
    domingo: 'Domingo: Cerrado'
  }
};

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales
            o utiliza el formulario de contacto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Dirección */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FiMapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold ml-2">Dirección</h2>
              </div>
              <address className="text-gray-600 not-italic">
                {contactInfo.direccion.calle}<br />
                {contactInfo.direccion.ciudad}, {contactInfo.direccion.pais}<br />
                CP: {contactInfo.direccion.codigoPostal}
              </address>
            </div>

            {/* Teléfonos */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FiPhone className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold ml-2">Teléfonos</h2>
              </div>
              <div className="space-y-2">
                {contactInfo.telefonos.map((tel, index) => (
                  <div key={index} className="text-gray-600">
                    <strong>{tel.departamento}:</strong> {tel.numero}
                  </div>
                ))}
              </div>
            </div>

            {/* Correos Electrónicos */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FiMail className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold ml-2">Correos Electrónicos</h2>
              </div>
              <div className="space-y-2">
                {contactInfo.emails.map((email, index) => (
                  <div key={index} className="text-gray-600">
                    <strong>{email.departamento}:</strong>{' '}
                    <a href={`mailto:${email.email}`} className="text-blue-600 hover:underline">
                      {email.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FiClock className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold ml-2">Horario de Atención</h2>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>{contactInfo.horario.semana}</p>
                <p>{contactInfo.horario.sabado}</p>
                <p>{contactInfo.horario.domingo}</p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="asunto"
                    id="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 