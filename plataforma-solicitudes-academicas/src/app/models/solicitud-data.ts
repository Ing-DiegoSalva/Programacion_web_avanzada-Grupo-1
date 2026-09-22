import { Solicitud } from './solicitud.model';

export const solicitudes: Solicitud[] = [
  {
    id: 1,
    estudiante: 'Diego Salva',
    tipo: 'Certificado',
    asunto: 'Solicitud de certificado de estudios',
    descripcion: 'Solicito mi certificado de estudios correspondiente al último ciclo.',
    estado: 'Pendiente',
    fecha: '2026-09-22'
  },
  {
    id: 2,
    estudiante: 'Ana Torres',
    tipo: 'Matrícula',
    asunto: 'Consulta sobre matrícula',
    descripcion: 'Solicito información sobre el proceso de matrícula.',
    estado: 'En proceso',
    fecha: '2026-09-21'
  }
];