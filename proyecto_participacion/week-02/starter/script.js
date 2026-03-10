// ==============================================
// PLATAFORMA DE PARTICIPACIÓN CIUDADANA
// PROYECTO SEMANA 2 - VARIABLES Y TIPOS DE DATOS
// ==============================================

// ----------------------------------------------
// SECCIÓN 1: VARIABLES DE LA PROPUESTA CIUDADANA
// ----------------------------------------------

// Información básica de la propuesta
let nombrePropuesta = "Más ciclorutas seguras en la ciudad";
let codigoPropuesta = "PROP-002";
let categoria = "Movilidad urbana sostenible";

// Datos numéricos
let votosActuales = 420;
let metaVotos = 600;
let comentariosCiudadanos = 58;

// Estados de la propuesta
let propuestaActiva = true;
let aprobadaPorGobierno = false;

// ----------------------------------------------
// SECCIÓN 2: CÁLCULOS DEL SISTEMA
// ----------------------------------------------

// votos faltantes para llegar a la meta
let votosRestantes = metaVotos - votosActuales;

// porcentaje de avance aproximado
let porcentajeAvance = (votosActuales * 100) / metaVotos;

// ----------------------------------------------
// SECCIÓN 3: MOSTRAR INFORMACIÓN EN CONSOLA
// ----------------------------------------------

console.log("==========================================");
console.log("  PLATAFORMA DE PARTICIPACIÓN CIUDADANA");
console.log("        FICHA DE PROPUESTA");
console.log("==========================================");

console.log("");
console.log("INFORMACIÓN GENERAL");
console.log("------------------------------------------");

console.log("Nombre de la propuesta:", nombrePropuesta);
console.log("Código:", codigoPropuesta);
console.log("Categoría:", categoria);

console.log("");
console.log("DETALLES DE PARTICIPACIÓN");
console.log("------------------------------------------");

console.log("Votos actuales:", votosActuales);
console.log("Meta de votos:", metaVotos);
console.log("Comentarios ciudadanos:", comentariosCiudadanos);

console.log("Votos restantes para la meta:", votosRestantes);
console.log("Porcentaje de apoyo:", porcentajeAvance + "%");

console.log("");
console.log("ESTADO DE LA PROPUESTA");
console.log("------------------------------------------");

console.log("Propuesta activa:", propuestaActiva);
console.log("Aprobada por gobierno:", aprobadaPorGobierno);

console.log("");
console.log("RESUMEN DEL DOMINIO");
console.log("------------------------------------------");

let dominio = "Plataforma de Participación Ciudadana";
let entidad = "Propuesta ciudadana";
let totalPropuestas = 35;

console.log("Dominio:", dominio);
console.log("Entidad principal:", entidad);
console.log("Total propuestas registradas:", totalPropuestas);

console.log("");
console.log("==========================================");
console.log("  Sistema de participación ciudadana");
console.log("  JavaScript Bootcamp - Week 02");
console.log("==========================================");
