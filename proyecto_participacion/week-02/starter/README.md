# 🏛️ Proyecto Semanal — Semana 02: Ficha de Datos del Dominio

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Crear una ficha de datos en consola utilizando **variables y tipos de datos en JavaScript**.
El programa muestra información sobre una entidad del dominio **Plataforma de Participación Ciudadana**.

El objetivo es aplicar:

- Variables con `const`
- Tipos de datos (`string`, `number`, `boolean`, `null`)
- Uso de `typeof`
- Conversiones de tipos (`String()`, `Number()`, `Boolean()`)
- Buenas prácticas de nomenclatura

---

## 📋 Dominio Asignado

**Dominio:** Plataforma de Participación Ciudadana

Este dominio representa un sistema digital donde los ciudadanos pueden:

- Publicar propuestas para mejorar su comunidad
- Votar iniciativas ciudadanas
- Participar en procesos democráticos digitales
- Colaborar con autoridades locales

En este proyecto la **entidad principal** es una **propuesta ciudadana**.

---

## 📦 Estructura del Proyecto

```
3-proyecto/
├── README.md
└── starter/
    └── script.js
```

---

## 🧾 Descripción del Script

El archivo `script.js` genera una **ficha informativa en consola** que muestra los datos de una propuesta ciudadana dentro de la plataforma.

La ficha incluye:

- Título de la propuesta
- Número de votos recibidos
- Estado de actividad de la propuesta
- Un valor aún no asignado dentro del sistema
- Verificación de tipos de datos
- Conversión explícita de tipos

---

## 📊 Ejemplo de Salida

```
==============================
FICHA DE DATOS: Participación Ciudadana
==============================

Título de propuesta: Más ciclorutas seguras en la ciudad
Votos recibidos: 12500
Propuesta activa: true

--- Tipos de datos ---
typeof proposalTitle: string
typeof votesCount: number
typeof isProposalActive: boolean

--- Conversiones ---
Votos como texto: 12500
typeof votesAsString: string

--- Valor nulo ---
Revisor asignado: null
¿Es null?: true

==============================
FIN DE FICHA
==============================
```

---

## 🛠️ Tecnologías Utilizadas

- **JavaScript (ES2023)**
- **Node.js**

---

## ▶️ Cómo Ejecutar el Proyecto

1. Abre una terminal en la carpeta del proyecto.

2. Ejecuta el siguiente comando:

```
node starter/script.js
```

3. El programa mostrará la ficha de datos de la propuesta ciudadana en la consola.

---

## ✅ Requisitos Cumplidos

Este proyecto cumple con los requisitos solicitados:

✔ Uso de variables con `const`
✔ Uso de tipos de datos `string`, `number`, `boolean` y `null`
✔ Verificación de tipos con `typeof`
✔ Conversión explícita de tipo con `String()`
✔ Variables en formato `camelCase`
✔ Boolean con prefijo semántico (`isProposalActive`)
✔ Número grande con separador (`12_500`)
✔ Script ejecutable con Node.js
✔ Adaptación coherente al dominio **Plataforma de Participación Ciudadana**

---

## 📝 Criterios de Evaluación

| Criterio                                 | Puntos      |
| ---------------------------------------- | ----------- |
| Script funciona sin errores              | 20 pts      |
| Uso correcto de `const` / `let`          | 20 pts      |
| Tipos de datos correctos y `typeof`      | 20 pts      |
| Al menos una conversión explícita        | 15 pts      |
| Nomenclatura correcta                    | 15 pts      |
| Adaptación coherente al dominio asignado | 10 pts      |
| **Total**                                | **100 pts** |

**Mínimo para aprobar:** 70 puntos.

---

## 👨‍💻 Autor

**Harold Hoyos**

Proyecto desarrollado para el **Bootcamp de JavaScript — Semana 02**.
