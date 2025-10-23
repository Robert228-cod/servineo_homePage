export type Service = {
  name: string;
  icon: string;
  description: string;
  demand: number;
  slug: string;
  image?: string;
};

export const services: Service[] = [
  { name: 'Plomería', icon: '🔧', description: 'Instalaciones, reparaciones y mantenimiento', demand: 95, slug: 'plomeria', image: '/Plomeria.webp' },
  { name: 'Electricidad', icon: '⚡', description: 'Instalaciones eléctricas y reparaciones', demand: 90, slug: 'electricidad', image: '/Electricistas.webp' },
  { name: 'Carpintería', icon: '🔨', description: 'Muebles, puertas y trabajos en madera', demand: 85, slug: 'carpinteria', image: '/Carpinteria.webp' },
  { name: 'Pintura', icon: '🎨', description: 'Pintura interior y exterior', demand: 80, slug: 'pintura', image: '/Pintura.webp' },
  { name: 'Limpieza', icon: '🧽', description: 'Limpieza residencial y comercial', demand: 88, slug: 'limpieza', image: '/Limpieza.webp' },
  { name: 'Jardinería', icon: '🌱', description: 'Mantenimiento y diseño de jardines', demand: 75, slug: 'jardineria', image: '/Jardineria.png' },
  { name: 'Albañilería', icon: '🧱', description: 'Construcción y reparaciones de albañilería', demand: 82, slug: 'albanileria', image: '/Albañileria.png' },
  { name: 'Cerrajería', icon: '🔑', description: 'Apertura de puertas y cambio de cerraduras', demand: 78, slug: 'cerrajeria', image: '/Cerrajeria.png' },
  { name: 'Gasfitería', icon: '💧', description: 'Instalación y reparación de tuberías de gas', demand: 70, slug: 'gasfiteria', image: '/Gasfiteria.png' },
  { name: 'Vidriería', icon: '🪟', description: 'Instalación y reparación de vidrios', demand: 72, slug: 'vidrieria', image: '/Vidrieria.png' },
  { name: 'Soldadura', icon: '🛠️', description: 'Trabajos de soldadura y metal', demand: 76, slug: 'soldadura', image: '/Soldadura.png' },
  { name: 'Mecánica', icon: '🚗', description: 'Mecánica ligera y mantenimiento', demand: 76, slug: 'mecanica', image: '/Mecanica.png' },
  { name: 'Refrigeración', icon: '❄️', description: 'Instalación y reparación de aire acondicionado', demand: 74, slug: 'refrigeracion', image: '/Refrigeracion.png' },
  { name: 'Techos y Cubiertas', icon: '🏠', description: 'Instalación y mantenimiento de techos', demand: 68, slug: 'techos', image: '/Techos y Cubiertas.png' },
  { name: 'Tapicería', icon: '🪑', description: 'Tapizado y restauración de muebles', demand: 66, slug: 'tapiceria', image: '/Tapiceria.png' },
  { name: 'Instalación CCTV', icon: '📷', description: 'Instalación y configuración de cámaras de seguridad', demand: 73, slug: 'cctv', image: '/Instalacion CCTV.png' },
  { name: 'Piscinas', icon: '🏊', description: 'Mantenimiento y limpieza de piscinas', demand: 65, slug: 'piscinas', image: '/Picsina.png' },
  { name: 'Mudanzas', icon: '🚚', description: 'Transporte y mudanza de bienes', demand: 77, slug: 'mudanzas', image: '/Mudanzas.png' },
  { name: 'Fumigación', icon: '🦟', description: 'Control de plagas y fumigación', demand: 69, slug: 'fumigacion', image: '/Fumigacion.png' },
  { name: 'Calefacción', icon: '🔥', description: 'Instalación y reparación de calefacción', demand: 71, slug: 'calefaccion', image: '/Calefaccion.png' },
  { name: 'Paneles Solares', icon: '☀️', description: 'Instalación de sistemas solares', demand: 67, slug: 'paneles-solares', image: '/Paneles Solares.png' },
  { name: 'Impermeabilización', icon: '💦', description: 'Sellado y protección contra humedad', demand: 64, slug: 'impermeabilizacion', image: '/Impermeablilizacion.png' },
  { name: 'Domótica', icon: '🏡', description: 'Automatización del hogar y smart devices', demand: 62, slug: 'domotica', image: '/Domotica.png' },
  { name: 'Lavado de alfombras', icon: '🧼', description: 'Lavado profundo y desinfección de alfombras', demand: 60, slug: 'lavado-alfombras', image: '/Lavado de alfombras.png' },
];