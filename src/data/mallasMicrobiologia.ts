// Definición de tipos para la malla curricular
export interface Asignatura {
  nombre: string;
  slug: string;
  codigo: string;
  horas: number;
  evaluacion?: string;
  descripcion: string;
  tipo?: 'basica' | 'especialidad' | 'electiva' | 'optativa';
}

export interface SemestreData {
  numero: number;
  año: number;
  asignaturas: Asignatura[];
}

export interface AnioData {
  numero: number;
  semestres: SemestreData[];
}

// Asignaturas de Microbiología y Virología
const asignaturasMicrobiologia: Asignatura[] = [
  // Primer Semestre
  {
    nombre: "Educación Física I",
    slug: "educacion-fisica-i",
    codigo: "EF101",
    horas: 28,
    descripcion: "Actividad física orientada al desarrollo de capacidades físicas y habilidades motoras básicas.",
    tipo: 'basica'
  },
  {
    nombre: "Filosofía",
    slug: "filosofia",
    codigo: "FIL101",
    horas: 48,
    descripcion: "Estudio de los fundamentos filosóficos y su aplicación en la comprensión de la ciencia y la sociedad.",
    tipo: 'basica'
  },
  {
    nombre: "Cálculo Diferencial",
    slug: "calculo-diferencial",
    codigo: "CD101",
    horas: 112,
    evaluacion: "EF",
    descripcion: "Cálculo Diferencial es fundamental para el estudio de la Microbiología.",
    tipo: 'basica'
  },
  {
    nombre: "Química General",
    slug: "quimica-general",
    codigo: "QG101",
    horas: 96,
    evaluacion: "EF",
    descripcion: "Principios fundamentales de la química y su aplicación en sistemas biológicos.",
    tipo: 'basica'
  },
  {
    nombre: "Hongos",
    slug: "hongos",
    codigo: "HF101",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio de los organismos heterótrofos con características tubulares que conforman el reino Fungi. Se analizan sus características morfológicas, fisiológicas, ecológicas y taxonómicas.",
    tipo: 'especialidad'
  },
  {
    nombre: "Introducción a la Microbiología",
    slug: "introduccion-microbiologia",
    codigo: "IM101",
    horas: 38,
    descripcion: "Introducción a los conceptos básicos de la microbiología y su importancia en diferentes campos.",
    tipo: 'especialidad'
  },
  {
    nombre: "Introducción a la Virología",
    slug: "introduccion-virologia",
    codigo: "IV101",
    horas: 24,
    descripcion: "Fundamentos básicos sobre virus, su estructura, clasificación y mecanismos de infección.",
    tipo: 'especialidad'
  },
  
  // Segundo Semestre
  {
    nombre: "Educación Física II",
    slug: "educacion-fisica-ii",
    codigo: "EF102",
    horas: 28,
    descripcion: "Continuación de la actividad física orientada al desarrollo de capacidades físicas y habilidades motoras.",
    tipo: 'basica'
  },
  {
    nombre: "Economía Política",
    slug: "economia-politica",
    codigo: "EP101",
    horas: 56,
    descripcion: "Estudio de los principios económicos y su relación con los sistemas políticos y sociales.",
    tipo: 'basica'
  },
  {
    nombre: "Cálculo Integral y Ecuaciones Diferenciales",
    slug: "calculo-integral",
    codigo: "CI101",
    horas: 112,
    evaluacion: "EF",
    descripcion: "Cálculo Integral y Ecuaciones Diferenciales es fundamental para el análisis cuantitativo en la Microbiología.",
    tipo: 'basica'
  },
  {
    nombre: "Biomoléculas",
    slug: "biomoleculas",
    codigo: "BM101",
    horas: 68,
    evaluacion: "EF",
    descripcion: "Estudio de las moléculas biológicas y su importancia en procesos microbianos.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología General",
    slug: "microbiologia-general",
    codigo: "MG101",
    horas: 80,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos y sus interacciones con el ambiente.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología General",
    slug: "virologia-general",
    codigo: "VG101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus y sus mecanismos de infección.",
    tipo: 'especialidad'
  },
  
  // Tercer Semestre
  {
    nombre: "Educación Física III",
    slug: "educacion-fisica-iii",
    codigo: "EF103",
    horas: 28,
    descripcion: "Continuación de la actividad física orientada al desarrollo de capacidades físicas y habilidades motoras.",
    tipo: 'basica'
  },
  {
    nombre: "Biología General",
    slug: "biologia-general",
    codigo: "BG101",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio de los principios fundamentales de la biología.",
    tipo: 'basica'
  },
  {
    nombre: "Bioquímica",
    slug: "bioquimica",
    codigo: "BQ101",
    horas: 72,
    evaluacion: "EF",
    descripcion: "Estudio de los procesos químicos en los seres vivos.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología de los Alimentos",
    slug: "microbiologia-alimentos",
    codigo: "MA101",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en la industria alimentaria.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología Clínica",
    slug: "virologia-clinica",
    codigo: "VC101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus en el contexto clínico y su diagnóstico.",
    tipo: 'especialidad'
  },
  
  // Cuarto Semestre
  {
    nombre: "Educación Física IV",
    slug: "educacion-fisica-iv",
    codigo: "EF104",
    horas: 28,
    descripcion: "Continuación de la actividad física orientada al desarrollo de capacidades físicas y habilidades motoras.",
    tipo: 'basica'
  },
  {
    nombre: "Genética",
    slug: "genetica",
    codigo: "GE101",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio de la herencia y la variación genética.",
    tipo: 'especialidad'
  },
  {
    nombre: "Inmunología",
    slug: "inmunologia",
    codigo: "IM102",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio del sistema inmunológico y sus respuestas.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología Ambiental",
    slug: "microbiologia-ambiental",
    codigo: "MA102",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en el ambiente y su impacto.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología Molecular",
    slug: "virologia-molecular",
    codigo: "VM101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los procesos moleculares de los virus.",
    tipo: 'especialidad'
  },
  
  // Quinto Semestre
  {
    nombre: "Microbiología Industrial",
    slug: "microbiologia-industrial",
    codigo: "MI101",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en procesos industriales.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología Clínica",
    slug: "microbiologia-clinica",
    codigo: "MC101",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en el contexto clínico y su diagnóstico.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología Experimental",
    slug: "virologia-experimental",
    codigo: "VE101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio experimental de los virus y sus mecanismos.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología Molecular",
    slug: "microbiologia-molecular",
    codigo: "MM101",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio molecular de los microorganismos.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología Ambiental",
    slug: "virologia-ambiental",
    codigo: "VA101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus en el ambiente y su impacto.",
    tipo: 'especialidad'
  },
  
  // Sexto Semestre
  {
    nombre: "Microbiología de los Suelos",
    slug: "microbiologia-suelos",
    codigo: "MS101",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en los suelos y su importancia en la agricultura.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología de la Salud Pública",
    slug: "microbiologia-salud-publica",
    codigo: "MSP101",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en el contexto de la salud pública.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología de los Suelos",
    slug: "virologia-suelos",
    codigo: "VS101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus en los suelos y su impacto en los ecosistemas.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología de la Industria Farmacéutica",
    slug: "microbiologia-industria-farmaceutica",
    codigo: "MIF101",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en la industria farmacéutica.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología de la Industria Farmacéutica",
    slug: "virologia-industria-farmaceutica",
    codigo: "VIF101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus en la industria farmacéutica.",
    tipo: 'especialidad'
  },
  
  // Séptimo Semestre
  {
    nombre: "Microbiología de la Industria Alimentaria",
    slug: "microbiologia-industria-alimentaria",
    codigo: "MIA101",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en la industria alimentaria.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología de la Industria Biotecnológica",
    slug: "microbiologia-industria-biotecnologica",
    codigo: "MIB101",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en la biotecnología.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología de la Industria Alimentaria",
    slug: "virologia-industria-alimentaria",
    codigo: "VIA101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus en la industria alimentaria.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología de la Industria Biotecnológica",
    slug: "virologia-industria-biotecnologica",
    codigo: "VIB101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus en la biotecnología.",
    tipo: 'especialidad'
  },
  {
    nombre: "Optativa I",
    slug: "optativa-i",
    codigo: "OP101",
    horas: 36,
    evaluacion: "EF",
    descripcion: "Asignatura optativa para profundizar en áreas de interés específico.",
    tipo: 'optativa'
  },
  
  // Octavo Semestre
  {
    nombre: "Microbiología de la Industria Ambiental",
    slug: "microbiologia-industria-ambiental",
    codigo: "MIA102",
    horas: 56,
    evaluacion: "EF",
    descripcion: "Estudio de los microorganismos en la industria ambiental.",
    tipo: 'especialidad'
  },
  {
    nombre: "Microbiología de la Industria Farmacéutica Avanzada",
    slug: "microbiologia-industria-farmaceutica-avanzada",
    codigo: "MIFA101",
    horas: 64,
    evaluacion: "EF",
    descripcion: "Estudio avanzado de los microorganismos en la industria farmacéutica.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología de la Industria Ambiental",
    slug: "virologia-industria-ambiental",
    codigo: "VIA102",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio de los virus en la industria ambiental.",
    tipo: 'especialidad'
  },
  {
    nombre: "Virología de la Industria Farmacéutica Avanzada",
    slug: "virologia-industria-farmaceutica-avanzada",
    codigo: "VIFA101",
    horas: 48,
    evaluacion: "EF",
    descripcion: "Estudio avanzado de los virus en la industria farmacéutica.",
    tipo: 'especialidad'
  },
  {
    nombre: "Optativa II",
    slug: "optativa-ii",
    codigo: "OP102",
    horas: 36,
    evaluacion: "EF",
    descripcion: "Segunda asignatura optativa para profundizar en áreas de interés específico.",
    tipo: 'optativa'
  },
  {
    nombre: "Optativa III",
    slug: "optativa-iii",
    codigo: "OP103",
    horas: 36,
    evaluacion: "EF",
    descripcion: "Tercera asignatura optativa para profundizar en áreas de interés específico.",
    tipo: 'optativa'
  },
  {
    nombre: "Trabajo de Diploma",
    slug: "trabajo-diploma",
    codigo: "TD101",
    horas: 520,
    evaluacion: "EF",
    descripcion: "Proyecto de investigación final para obtener el título de Licenciado en Microbiología y Virología.",
    tipo: 'basica'
  }
];

// Organización de asignaturas por semestres
export const mallaMicrobiologia: AnioData[] = [
  {
    numero: 1,
    semestres: [
      {
        numero: 1,
        año: 1,
        asignaturas: [
          asignaturasMicrobiologia[0], // Educación Física I
          asignaturasMicrobiologia[1], // Filosofía
          asignaturasMicrobiologia[2], // Cálculo Diferencial
          asignaturasMicrobiologia[3], // Química General
          asignaturasMicrobiologia[4], // Hongos
          asignaturasMicrobiologia[5], // Introducción a la Microbiología
          asignaturasMicrobiologia[6]  // Introducción a la Virología
        ]
      },
      {
        numero: 2,
        año: 1,
        asignaturas: [
          asignaturasMicrobiologia[7],  // Educación Física II
          asignaturasMicrobiologia[8],  // Economía Política
          asignaturasMicrobiologia[9],  // Cálculo Integral y Ecuaciones Diferenciales
          asignaturasMicrobiologia[10], // Biomoléculas
          asignaturasMicrobiologia[11], // Microbiología General
          asignaturasMicrobiologia[12]  // Virología General
        ]
      }
    ]
  },
  {
    numero: 2,
    semestres: [
      {
        numero: 3,
        año: 2,
        asignaturas: [
          asignaturasMicrobiologia[13], // Educación Física III
          asignaturasMicrobiologia[14], // Biología General
          asignaturasMicrobiologia[15], // Bioquímica
          asignaturasMicrobiologia[16], // Microbiología de los Alimentos
          asignaturasMicrobiologia[17]  // Virología Clínica
        ]
      },
      {
        numero: 4,
        año: 2,
        asignaturas: [
          asignaturasMicrobiologia[18], // Educación Física IV
          asignaturasMicrobiologia[19], // Genética
          asignaturasMicrobiologia[20], // Inmunología
          asignaturasMicrobiologia[21], // Microbiología Ambiental
          asignaturasMicrobiologia[22]  // Virología Molecular
        ]
      }
    ]
  },
  {
    numero: 3,
    semestres: [
      {
        numero: 5,
        año: 3,
        asignaturas: [
          asignaturasMicrobiologia[23], // Microbiología Industrial
          asignaturasMicrobiologia[24], // Microbiología Clínica
          asignaturasMicrobiologia[25], // Virología Experimental
          asignaturasMicrobiologia[26], // Microbiología Molecular
          asignaturasMicrobiologia[27]  // Virología Ambiental
        ]
      },
      {
        numero: 6,
        año: 3,
        asignaturas: [
          asignaturasMicrobiologia[28], // Microbiología de los Suelos
          asignaturasMicrobiologia[29], // Microbiología de la Salud Pública
          asignaturasMicrobiologia[30], // Virología de los Suelos
          asignaturasMicrobiologia[31], // Microbiología de la Industria Farmacéutica
          asignaturasMicrobiologia[32]  // Virología de la Industria Farmacéutica
        ]
      }
    ]
  },
  {
    numero: 4,
    semestres: [
      {
        numero: 7,
        año: 4,
        asignaturas: [
          asignaturasMicrobiologia[33], // Microbiología de la Industria Alimentaria
          asignaturasMicrobiologia[34], // Microbiología de la Industria Biotecnológica
          asignaturasMicrobiologia[35], // Virología de la Industria Alimentaria
          asignaturasMicrobiologia[36], // Virología de la Industria Biotecnológica
          asignaturasMicrobiologia[37], // Optativa I
        ]
      },
      {
        numero: 8,
        año: 4,
        asignaturas: [
          asignaturasMicrobiologia[38], // Microbiología de la Industria Ambiental
          asignaturasMicrobiologia[39], // Microbiología de la Industria Farmacéutica Avanzada
          asignaturasMicrobiologia[40], // Virología de la Industria Ambiental
          asignaturasMicrobiologia[41], // Virología de la Industria Farmacéutica Avanzada
          asignaturasMicrobiologia[42], // Optativa II
          asignaturasMicrobiologia[43], // Optativa III
          asignaturasMicrobiologia[44]  // Trabajo de Diploma
        ]
      }
    ]
  }
];
