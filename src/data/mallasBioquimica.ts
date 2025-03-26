export interface Asignatura {
  slug: string;
  nombre: string;
  codigo?: string;
  horas: number;
  evaluacion?: string;
  semestre: number;
  año: number;
  tipo?: 'basica' | 'especialidad' | 'electiva' | 'optativa';
}

export interface SemestreData {
  numero: number;
  asignaturas: Asignatura[];
  horasSemana?: number;
  educacionFisica?: Asignatura;
  electiva?: Asignatura;
  practica?: Asignatura;
}

export interface AnioData {
  numero: number;
  semestres: SemestreData[];
}

export const mallaBioquimica: AnioData[] = [
  {
    numero: 1,
    semestres: [
      {
        numero: 1,
        asignaturas: [
          {
            slug: "calculo-diferencial",
            nombre: "Cálculo Diferencial",
            horas: 128,
            evaluacion: "EF",
            semestre: 1,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "quimica-general",
            nombre: "Química General",
            horas: 100,
            evaluacion: "EF",
            semestre: 1,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "historia-cuba",
            nombre: "Historia de Cuba",
            horas: 56,
            semestre: 1,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "filosofia",
            nombre: "Filosofía",
            horas: 48,
            semestre: 1,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "bioquimica-vida",
            nombre: "Bioquímica para la Vida",
            horas: 32,
            semestre: 1,
            año: 1,
            tipo: "especialidad"
          }
        ],
        horasSemana: 22.75,
        educacionFisica: {
          slug: "educacion-fisica-i",
          nombre: "Educación Física I",
          horas: 28,
          semestre: 1,
          año: 1,
          tipo: "basica"
        }
      },
      {
        numero: 2,
        asignaturas: [
          {
            slug: "calculo-integral",
            nombre: "Cálculo Integral y Ecuaciones Diferenciales",
            horas: 128,
            evaluacion: "EF",
            semestre: 2,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "mecanica",
            nombre: "Mecánica",
            horas: 78,
            evaluacion: "EF",
            semestre: 2,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "quimica-organica-i",
            nombre: "Química Orgánica I",
            horas: 52,
            evaluacion: "EF",
            semestre: 2,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "analisis-quimico",
            nombre: "Análisis Químico",
            horas: 56,
            semestre: 2,
            año: 1,
            tipo: "basica"
          },
          {
            slug: "optativa-i",
            nombre: "Optativa I",
            horas: 32,
            semestre: 2,
            año: 1,
            tipo: "optativa"
          }
        ],
        horasSemana: 21.62,
        educacionFisica: {
          slug: "educacion-fisica-ii",
          nombre: "Educación Física II",
          horas: 28,
          semestre: 2,
          año: 1,
          tipo: "basica"
        },
        electiva: {
          slug: "electiva-i",
          nombre: "Electiva I",
          horas: 32,
          semestre: 2,
          año: 1,
          tipo: "electiva"
        },
        practica: {
          slug: "practicas-bbm-i",
          nombre: "Prácticas en Bioquímica y Biología Molecular I",
          horas: 80,
          semestre: 2,
          año: 1,
          tipo: "especialidad"
        }
      }
    ]
  },
  {
    numero: 2,
    semestres: [
      {
        numero: 3,
        asignaturas: [
          {
            slug: "electromagnetismo",
            nombre: "Electromagnetismo",
            horas: 71,
            evaluacion: "EF",
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "quimica-organica-ii",
            nombre: "Química Orgánica II",
            horas: 48,
            evaluacion: "EF",
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "termodinamica",
            nombre: "Termodinámica",
            horas: 60,
            evaluacion: "EF",
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "computacion",
            nombre: "Computación",
            horas: 52,
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "economia-politica",
            nombre: "Economía Política",
            horas: 56,
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "seguridad-defensa-nacional",
            nombre: "Seguridad y Defensa Nacional",
            horas: 68,
            semestre: 3,
            año: 2,
            tipo: "basica"
          }
        ],
        horasSemana: 22.2,
        educacionFisica: {
          slug: "educacion-fisica-iii",
          nombre: "Educación Física III",
          horas: 28,
          semestre: 3,
          año: 2,
          tipo: "basica"
        }
      },
      {
        numero: 4,
        asignaturas: [
          {
            slug: "quimica-fisica",
            nombre: "Química Física",
            horas: 80,
            semestre: 4,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "biomoleculas",
            nombre: "Biomoléculas",
            horas: 90,
            evaluacion: "EF",
            semestre: 4,
            año: 2,
            tipo: "especialidad"
          },
          {
            slug: "biologia-celular",
            nombre: "Biología Celular",
            horas: 52,
            semestre: 4,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "optica-fisica-moderna",
            nombre: "Óptica y Física Moderna",
            horas: 87,
            evaluacion: "EF",
            semestre: 4,
            año: 2,
            tipo: "basica"
          },
          {
            slug: "bioestadistica",
            nombre: "Bioestadística",
            horas: 58,
            semestre: 4,
            año: 2,
            tipo: "especialidad"
          },
          {
            slug: "optativa-ii",
            nombre: "Optativa II",
            horas: 32,
            semestre: 4,
            año: 2,
            tipo: "optativa"
          }
        ],
        horasSemana: 24.9,
        educacionFisica: {
          slug: "educacion-fisica-iv",
          nombre: "Educación Física IV",
          horas: 28,
          semestre: 4,
          año: 2,
          tipo: "basica"
        },
        practica: {
          slug: "practicas-bbm-ii",
          nombre: "Prácticas en Bioquímica y Biología Molecular II",
          horas: 160,
          semestre: 4,
          año: 2,
          tipo: "especialidad"
        }
      }
    ]
  },
  {
    numero: 3,
    semestres: [
      {
        numero: 5,
        asignaturas: [
          {
            slug: "metodos-trabajo-biomoleculas",
            nombre: "Métodos de Trabajo con Biomoléculas",
            horas: 80,
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            slug: "enzimologia",
            nombre: "Enzimología",
            horas: 58,
            evaluacion: "EF",
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            slug: "biofisica",
            nombre: "Biofísica",
            horas: 56,
            evaluacion: "EF",
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            slug: "morfologia-animal",
            nombre: "Morfología Animal",
            horas: 36,
            semestre: 5,
            año: 3,
            tipo: "basica"
          },
          {
            slug: "genetica-molecular",
            nombre: "Genética Molecular",
            horas: 70,
            evaluacion: "EF",
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            slug: "teoria-politica",
            nombre: "Teoría Política",
            horas: 48,
            semestre: 5,
            año: 3,
            tipo: "basica"
          },
          {
            slug: "optativa-iii",
            nombre: "Optativa III",
            horas: 48,
            semestre: 5,
            año: 3,
            tipo: "optativa"
          }
        ],
        horasSemana: 24.8
      },
      {
        numero: 6,
        asignaturas: [
          {
            slug: "metabolismo-carbohidratos-lipidos",
            nombre: "Metabolismo de Carbohidratos y Lípidos",
            horas: 68,
            evaluacion: "EF",
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          },
          {
            slug: "analisis-genetico",
            nombre: "Análisis Genético",
            horas: 78,
            evaluacion: "EF",
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          },
          {
            slug: "fisiologia-animal",
            nombre: "Fisiología Animal",
            horas: 64,
            evaluacion: "EF",
            semestre: 6,
            año: 3,
            tipo: "basica"
          },
          {
            slug: "microbiologia",
            nombre: "Microbiología",
            horas: 32,
            semestre: 6,
            año: 3,
            tipo: "basica"
          },
          {
            slug: "fisiologia-vegetal",
            nombre: "Fisiología Vegetal",
            horas: 80,
            semestre: 6,
            año: 3,
            tipo: "basica"
          },
          {
            slug: "virologia",
            nombre: "Virología",
            horas: 36,
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          },
          {
            slug: "bioinformatica-estructural",
            nombre: "Bioinformática Estructural",
            horas: 48,
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          }
        ],
        horasSemana: 25.4,
        practica: {
          slug: "practicas-bbm-iii",
          nombre: "Prácticas en Bioquímica y Biología Molecular III",
          horas: 160,
          semestre: 6,
          año: 3,
          tipo: "especialidad"
        }
      }
    ]
  },
  {
    numero: 4,
    semestres: [
      {
        numero: 7,
        asignaturas: [
          {
            slug: "biotecnologia",
            nombre: "Biotecnología",
            horas: 80,
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            slug: "metabolismo-compuestos-nitrogenados",
            nombre: "Metabolismo de Compuestos Nitrogenados",
            horas: 40,
            evaluacion: "EF",
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            slug: "inmunologia",
            nombre: "Inmunología",
            horas: 60,
            evaluacion: "EF",
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            slug: "bioquimica-clinica",
            nombre: "Bioquímica Clínica",
            horas: 34,
            evaluacion: "TC",
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            slug: "bioquimica-nutricion",
            nombre: "Bioquímica de la Nutrición",
            horas: 34,
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            slug: "toxicologia",
            nombre: "Toxicología",
            horas: 34,
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            slug: "ects",
            nombre: "Estudios de Ciencia, Tecnología y Sociedad",
            horas: 32,
            semestre: 7,
            año: 4,
            tipo: "basica"
          }
        ],
        horasSemana: 22.6
      },
      {
        numero: 8,
        asignaturas: [
          {
            slug: "optativa-iv",
            nombre: "Optativa IV",
            horas: 48,
            semestre: 8,
            año: 4,
            tipo: "optativa"
          },
          {
            slug: "diploma-bioquimica",
            nombre: "Diploma en Bioquímica y Biología Molecular",
            horas: 640,
            semestre: 8,
            año: 4,
            tipo: "especialidad"
          }
        ]
      }
    ]
  }
];