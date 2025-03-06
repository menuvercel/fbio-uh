'use client';

import { FiUsers, FiGitBranch, FiActivity, FiZap } from 'react-icons/fi';
import Card from '@/components/Card';
import PageTransition from '@/components/PageTransition';

const departamentos = [
  {
    nombre: "Dpto. Biología Animal y Humana",
    icon: FiUsers,
    descripcion: "Dedicado a la investigación zoológica y ecológica animal",
    grupos: [
      {
        nombre: "Grupo Biología de artrópodos terrestres",
        descripcion: "Investigación en taxonomía y ecología de artrópodos terrestres"
      },
      {
        nombre: "Grupo Biología de Vertebrados",
        descripcion: "Estudio de la biología y conservación de vertebrados"
      },
      {
        nombre: "Grupo de Ecología de Aves",
        descripcion: "Investigación en ornitología y conservación de aves"
      }
    ]
  },
  {
    nombre: "Dpto. Biología Vegetal",
    icon: FiGitBranch,
    descripcion: "Enfocado en la investigación botánica y genética vegetal",
    grupos: [
      {
        nombre: "Grupo de Fisiología Vegetal",
        descripcion: "Estudio de procesos fisiológicos en plantas"
      },
      {
        nombre: "Grupo de Genética Aplicada",
        descripcion: "Investigación en genética vegetal y sus aplicaciones"
      },
      {
        nombre: "Grupo de Genética Toxicológica",
        descripcion: "Estudio de efectos toxicológicos a nivel genético"
      }
    ]
  },
  {
    nombre: "Dpto. Microbiología",
    icon: FiActivity,
    descripcion: "Investigación en microorganismos y sus aplicaciones",
    grupos: []
  },
  {
    nombre: "Dpto. Bioquímica",
    icon: FiZap,
    descripcion: "Estudio de procesos químicos en sistemas biológicos",
    grupos: [
      {
        nombre: "Grupo de Genética Aplicada",
        descripcion: "Investigación en genética molecular y sus aplicaciones"
      },
      {
        nombre: "Grupo de Farmacología y Toxicología",
        descripcion: "Estudio de fármacos y sus efectos toxicológicos"
      }
    ]
  }
];

export default function InvestigacionPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 font-playfair mb-4">
              Investigación
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros departamentos realizan investigación de alto nivel en diversas áreas de las ciencias biológicas
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {departamentos.map((depto, index) => {
              const IconComponent = depto.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-soft-xl overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-primary-50 rounded-xl">
                        <IconComponent className="w-8 h-8 text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{depto.nombre}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-8">{depto.descripcion}</p>

                    {depto.grupos.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {depto.grupos.map((grupo, grupoIndex) => (
                          <Card key={grupoIndex} className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {grupo.nombre}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {grupo.descripcion}
                            </p>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-soft-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Centro de Estudio de las Proteínas (CEP)
                </h2>
                <p className="text-gray-600 mb-8">
                  Dedicado a la caracterización estructural y funcional de proteasas, inhibidores de proteasas y citolisinas, 
                  provenientes en su mayoría de invertebrados marinos y microorganismos, así como al empleo de liposomas como adyuvantes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Toxinas Formadoras de Poro
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Investigación en toxinas con potenciales aplicaciones en la Biomedicina y la Nanotecnología.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Proteasas e Inhibidores
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Estudio de proteasas e inhibidores con potenciales aplicaciones Biotecnológicas y Biomédicas.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 