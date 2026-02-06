/*
Ejemplo ES Modules.
Objetivo: importar funciones con import/export.
Ejecuta: node 03-modulos/esm/main.mjs
*/

import promedio, { suma } from "./math.mjs";

const nums = [5, 15, 25];

console.log("Suma:", suma(4, 7));
console.log("Promedio:", promedio(nums));
