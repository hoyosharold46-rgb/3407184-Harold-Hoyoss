// ============================================
// Plataforma de Participación Ciudadana
// Semana 1 - Introducción a JavaScript
// ============================================

// Información básica de la plataforma
console.log("Plataforma de Participación Ciudadana");

// Datos del sistema
console.log("Ciudad:", "Bogotá");
console.log("Usuarios registrados:", 1250);
console.log("Propuestas activas:", 32);

// Mensaje de bienvenida
console.log(
  "Bienvenido a la plataforma donde los ciudadanos pueden proponer ideas para mejorar su ciudad",
);

// Simulación de propuestas ciudadanas
console.table([
  {
    id: 1,
    titulo: "Más ciclorutas en la ciudad",
    votos: 340,
    estado: "En revisión",
  },
  {
    id: 2,
    titulo: "Parques más seguros",
    votos: 500,
    estado: "Aprobada",
  },
  {
    id: 3,
    titulo: "Mejorar transporte público",
    votos: 620,
    estado: "En debate",
  },
]);

// Advertencia del sistema
console.warn("Algunas propuestas aún están en proceso de verificación");

// Error de ejemplo
console.error("Error al cargar comentarios de ciudadanos");

// Mensaje final
console.log("Gracias por participar en la construcción de tu ciudad");
