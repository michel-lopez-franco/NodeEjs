/*
Ejemplo CLI basico con process.argv.
Objetivo: leer argumentos, mostrar un saludo y una ruta de ejemplo.
Prueba:
- node 02-node-cli/example.js Ana
Salida:
- Hola, Ana
- CWD y ruta unida con path.join
*/
const path = require("node:path");

const args = process.argv.slice(2);
const nombre = args[0] || "mundo";

console.log(`Hola, ${nombre}`);
console.log("CWD:", process.cwd());
console.log("Ruta ejemplo:", path.join(process.cwd(), "data", "archivo.txt"));
