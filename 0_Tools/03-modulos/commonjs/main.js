/*
Ejemplo CommonJS.
Objetivo: importar funciones con require y usarlas.
Ejecuta: node 03-modulos/commonjs/main.js
*/

const { suma, promedio } = require("./math");

const nums = [10, 20, 30];

console.log("Suma:", suma(2, 3));
console.log("Promedio:", promedio(nums));
