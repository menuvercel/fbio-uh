// Definición de tipos para la malla curricular
export interface Asignatura {
  nombre: string;
  slug: string;
  codigo?: string;
  horas: number;
  horasSemanales?: number;
  horasTeoricas?: number;
  horasPracticas?: number;
  evaluacion?: string;
  semestre: number;
  año: number;
  tipo?: 'basica' | 'especialidad' | 'electiva' | 'optativa';
  creditos?: number;
}

export interface SemestreData {
  numero: number;
  asignaturas: Asignatura[];
  educacionFisica?: Asignatura;
  electiva?: Asignatura;
  practica?: Asignatura;
}

export interface AnioData {
  numero: number;
  semestres: SemestreData[];
}

// Datos de la malla curricular de Biología - Plan E 2022
export const mallaBiologia: AnioData[] = [
  {
    numero: 1,
    semestres: [
      {
        numero: 1,
        asignaturas: [
          {
            nombre: "Cálculo Diferencial",
            slug: "calculo-diferencial",
            codigo: "CD101",
            horas: 112,
            horasSemanales: 7,
            evaluacion: "EF",
            semestre: 1,
            año: 1,
            tipo: "basica"
          },
          {
            nombre: "Química General",
            slug: "quimica-general",
            codigo: "QG101",
            horas: 96,
            horasSemanales: 6,
            evaluacion: "EF",
            semestre: 1,
            año: 1,
            tipo: "basica"
          },
          {
            nombre: "Zoología de Invertebrados",
            slug: "zoologia-invertebrados",
            codigo: "ZI101",
            horas: 96,
            horasSemanales: 6,
            evaluacion: "EF",
            semestre: 1,
            año: 1,
            tipo: "especialidad"
          },
          {
            nombre: "Filosofía",
            slug: "filosofia",
            codigo: "FIL101",
            horas: 48,
            horasSemanales: 3,
            semestre: 1,
            año: 1,
            tipo: "basica"
          },
          {
            nombre: "Algas/Hongos",
            slug: "algas-hongos",
            codigo: "AH101",
            horas: 64, 
            horasSemanales: 4, 
            semestre: 1,
            año: 1,
            tipo: "especialidad"
          }
        ]
      },
      {
        numero: 2,
        asignaturas: [
          {
            nombre: "Cálculo Integral y Ecuaciones Diferenciales",
            slug: "calculo-integral-ecuaciones-diferenciales",
            codigo: "CIED102",
            horas: 112,
            horasSemanales: 7,
            evaluacion: "EF",
            semestre: 2,
            año: 1,
            tipo: "basica"
          },
          {
            nombre: "Química Orgánica",
            slug: "quimica-organica",
            codigo: "QO102",
            horas: 84,
            horasSemanales: 5,
            evaluacion: "EF",
            semestre: 2,
            año: 1,
            tipo: "basica"
          },
          {
            nombre: "Zoología de Cordados",
            slug: "zoologia-cordados",
            codigo: "ZC102",
            horas: 80,
            horasSemanales: 5,
            evaluacion: "EF",
            semestre: 2,
            año: 1,
            tipo: "especialidad"
          },
          {
            nombre: "Botánica General",
            slug: "botanica-general",
            codigo: "BG102",
            horas: 64,
            horasSemanales: 4,
            semestre: 2,
            año: 1,
            tipo: "especialidad"
          },
          {
            nombre: "Historia de Cuba",
            slug: "historia-cuba",
            codigo: "HC102",
            horas: 56,
            horasSemanales: 3.5,
            semestre: 2,
            año: 1,
            tipo: "basica"
          }
        ],
        electiva: {
          nombre: "Electiva I",
          slug: "electiva-i",
          codigo: "EL102",
          horas: 32,
          horasSemanales: 2,
          semestre: 2,
          año: 1,
          tipo: "electiva"
        },
        practica: {
          nombre: "Trabajo Biológico de Campo",
          slug: "trabajo-biologico-campo",
          codigo: "TBC102",
          horas: 120,
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
            nombre: "Análisis Químico",
            slug: "analisis-quimico",
            codigo: "AQ201",
            horas: 56,
            horasSemanales: 3.5,
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Mecánica y Electromagnetismo",
            slug: "mecanica-electromagnetismo",
            codigo: "ME201",
            horas: 101,
            horasSemanales: 6,
            evaluacion: "EF",
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Computación",
            slug: "computacion",
            codigo: "COM201",
            horas: 52,
            horasSemanales: 3.2,
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Ecología",
            slug: "ecologia",
            codigo: "ECO201",
            horas: 64,
            horasSemanales: 4,
            semestre: 3,
            año: 2,
            tipo: "especialidad"
          },
          {
            nombre: "Bioestadística",
            slug: "bioestadistica",
            codigo: "BE201",
            horas: 64,
            horasSemanales: 4,
            semestre: 3,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Sistemática de Plantas",
            slug: "sistematica-plantas",
            codigo: "SP201",
            horas: 80,
            horasSemanales: 5,
            evaluacion: "EF",
            semestre: 3,
            año: 2,
            tipo: "especialidad"
          }
        ],
        electiva: {
          nombre: "Electiva II",
          slug: "electiva-ii",
          codigo: "EL201",
          horas: 32,
          horasSemanales: 2,
          semestre: 3,
          año: 2,
          tipo: "electiva"
        }
      },
      {
        numero: 4,
        asignaturas: [
          {
            nombre: "Química Física",
            slug: "quimica-fisica",
            codigo: "QF202",
            horas: 80,
            horasSemanales: 5,
            evaluacion: "EF",
            semestre: 4,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Óptica y Física Moderna",
            slug: "optica-fisica-moderna",
            codigo: "OFM202",
            horas: 82,
            horasSemanales: 5.1,
            evaluacion: "EF",
            semestre: 4,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Economía Política",
            slug: "economia-politica",
            codigo: "EP202",
            horas: 56,
            horasSemanales: 3.5,
            semestre: 4,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Seguridad y Defensa Nacional",
            slug: "seguridad-defensa-nacional",
            codigo: "SDN202",
            horas: 68,
            horasSemanales: 4.2,
            semestre: 4,
            año: 2,
            tipo: "basica"
          },
          {
            nombre: "Biología Celular",
            slug: "biologia-celular",
            codigo: "BC202",
            horas: 52,
            horasSemanales: 3.2,
            evaluacion: "EF",
            semestre: 4,
            año: 2,
            tipo: "especialidad"
          },
          {
            nombre: "Biomoléculas",
            slug: "biomoleculas",
            codigo: "BM202",
            horas: 64,
            horasSemanales: 4,
            semestre: 4,
            año: 2,
            tipo: "especialidad"
          }
        ],
        practica: {
          nombre: "Prácticas Investigativas de Ecología",
          slug: "practicas-investigativas-ecologia",
          codigo: "PIE202",
          horas: 120,
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
            nombre: "Procariontes/Virología",
            slug: "procariontes-virologia",
            codigo: "PV301",
            horas: 58, 
            horasSemanales: 3.5,
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Biofísica",
            slug: "biofisica",
            codigo: "BF301",
            horas: 56,
            horasSemanales: 3.5,
            evaluacion: "EF",
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Morfología Animal",
            slug: "morfologia-animal",
            codigo: "MA301",
            horas: 48,
            horasSemanales: 3,
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Metabolismo",
            slug: "metabolismo",
            codigo: "MET301",
            horas: 80, 
            horasSemanales: 5,
            evaluacion: "EF",
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Genética Molecular",
            slug: "genetica-molecular",
            codigo: "GM301",
            horas: 56,
            horasSemanales: 3.5,
            evaluacion: "EF",
            semestre: 5,
            año: 3,
            tipo: "especialidad"
          }
        ],
        electiva: {
          nombre: "Optativa I/Optativa II",
          slug: "optativa-i-ii",
          codigo: "OPT301",
          horas: 80, 
          horasSemanales: 5, 
          semestre: 5,
          año: 3,
          tipo: "optativa"
        }
      },
      {
        numero: 6,
        asignaturas: [
          {
            nombre: "Biología de la Conservación",
            slug: "biologia-conservacion",
            codigo: "BC302",
            horas: 48,
            horasSemanales: 3,
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Fisiología Vegetal",
            slug: "fisiologia-vegetal",
            codigo: "FV302",
            horas: 56,
            horasSemanales: 3.5,
            evaluacion: "TC", 
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Fisiología de los Sistemas de Control",
            slug: "fisiologia-sistemas-control",
            codigo: "FSC302",
            horas: 80,
            horasSemanales: 5,
            evaluacion: "EF",
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Metodología de la Investigación",
            slug: "metodologia-investigacion",
            codigo: "MI302",
            horas: 24,
            horasSemanales: 1.5,
            semestre: 6,
            año: 3,
            tipo: "basica"
          },
          {
            nombre: "Inmunología",
            slug: "inmunologia",
            codigo: "INM302",
            horas: 56,
            horasSemanales: 3.5,
            evaluacion: "EF",
            semestre: 6,
            año: 3,
            tipo: "especialidad"
          },
          {
            nombre: "Teoría Política",
            slug: "teoria-politica",
            codigo: "TP302",
            horas: 48,
            horasSemanales: 3,
            semestre: 6,
            año: 3,
            tipo: "basica"
          }
        ],
        practica: {
          nombre: "Práctica Laboral",
          slug: "practica-laboral",
          codigo: "PL302",
          horas: 300,
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
            nombre: "Genética/Biología Evolutiva",
            slug: "genetica-biologia-evolutiva",
            codigo: "GBE401",
            horas: 114, 
            horasSemanales: 7.2, 
            evaluacion: "EF",
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            nombre: "Estudios de Ciencia, Tecnología y Sociedad",
            slug: "estudios-ciencia-tecnologia-sociedad",
            codigo: "ECTS401",
            horas: 32,
            horasSemanales: 2,
            semestre: 7,
            año: 4,
            tipo: "basica"
          },
          {
            nombre: "Antropología Biológica",
            slug: "antropologia-biologica",
            codigo: "AB401",
            horas: 48,
            horasSemanales: 3,
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            nombre: "Biología del Desarrollo",
            slug: "biologia-desarrollo",
            codigo: "BD401",
            horas: 48,
            horasSemanales: 3,
            evaluacion: "EF",
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          },
          {
            nombre: "Fisiología de los Sistemas Vegetativos",
            slug: "fisiologia-sistemas-vegetativos",
            codigo: "FSV401",
            horas: 64,
            horasSemanales: 4,
            evaluacion: "EF",
            semestre: 7,
            año: 4,
            tipo: "especialidad"
          }
        ],
        electiva: {
          nombre: "Optativa III",
          slug: "optativa-iii",
          codigo: "OPT401",
          horas: 32,
          horasSemanales: 2,
          semestre: 7,
          año: 4,
          tipo: "optativa"
        }
      },
      {
        numero: 8,
        asignaturas: [],
        practica: {
          nombre: "Trabajo de Diploma",
          slug: "trabajo-diploma",
          codigo: "TD402",
          horas: 450,
          semestre: 8,
          año: 4,
          tipo: "especialidad"
        }
      }
    ]
  }
];
