// Tipos para el curriculum de José Antonio Cano

export interface PersonalInfo {
  nombre: string;
  titulo: string;
  foto: {
    src: string;
    alt: string;
  };
  direccion: {
    calle: string;
    ciudad: string;
    movil: string;
    fijo: string;
  };
  contacto: {
    email: string;
    lugarNacimiento: string;
    fechaNacimiento: string;
  };
}

export interface Formacion {
  fecha: string;
  estudios: string;
  institucion: string;
  observaciones: string;
}

export interface ExperienciaItem {
  fecha: string;
  horas?: string;
  cargo: string;
  descripcion: string;
  empresa: string;
  observaciones: string;
  duracion?: string;
}

export interface Experiencia {
  formadorOcupacional: ExperienciaItem[];
  profesorUniversitario: ExperienciaItem[];
  profesorFP: ExperienciaItem[];
  desarrolloWeb: ExperienciaItem[];
  disenoGrafico: ExperienciaItem[];
  audiovisual: ExperienciaItem[];
}

export interface TecnologiasWeb {
  lenguajes: string[];
  frameworks: string[];
  aplicacionesWeb: string[];
  apis: string[];
}

export interface TecnologiasAudiovisual {
  imagenRaster: string[];
  imagenVectorial: string[];
  maquetacion: string[];
  video: string[];
}

export interface Tecnologias {
  desarrolloWeb: TecnologiasWeb;
  expresionAudiovisual: TecnologiasAudiovisual;
}

export interface RedesSociales {
  github: string;
  youtube: string;
  linkedin: string;
  twitter: string;
  wordpress: string;
}

export interface BlogrollItem {
  nombre: string;
  url: string;
}

export interface CurriculumData {
  personal: PersonalInfo;
  formacion: Formacion[];
  experiencia: Experiencia;
  tecnologias: Tecnologias;
  redes: RedesSociales;
  blogroll: BlogrollItem[];
}