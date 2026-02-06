/*
Ejemplo: arrays, objetos y funciones.
Objetivo: calcular totales y transformar datos con reduce/map/filter.
Salida esperada:
- Total
- Total con IVA
- Lista de productos con precio > 50
Ejecuta: node 01-js-fundamentos/example.js
*/

const productos = [
  { nombre: "Cuaderno", precio: 45 },
  { nombre: "Pluma", precio: 15 },
  { nombre: "Mochila", precio: 320 },
  { nombre: "Regla", precio: 25 },
];

const total = productos.reduce((acc, p) => acc + p.precio, 0);
const conIva = total * 1.16;
const caros = productos.filter((p) => p.precio > 50).map((p) => p.nombre);

console.log("Total:", total);
console.log("Total con IVA:", conIva.toFixed(2));
console.log("Productos caros:", caros.join(", "));
