/*
Ejemplo: lectura sincrona vs asincrona con fs.
Objetivo: observar el orden de ejecucion y el bloqueo del hilo.
Nota: el console.log del final aparece antes del callback async.
Ejecuta: node 04-sync-async-fs/example.js
*/

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "data.txt");

console.time("sync");
const syncData = fs.readFileSync(filePath, "utf8");
console.timeEnd("sync");

console.time("async");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.timeEnd("async");
  console.log("Async length:", data.length);
});

console.log("Esto se imprime antes del callback async");
