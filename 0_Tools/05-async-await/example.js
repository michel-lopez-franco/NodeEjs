/*
Ejemplo: promesas y async/await.
Objetivo: mostrar que await pausa la funcion async sin bloquear el hilo.
Salida esperada: Inicio -> Paso 1 -> Paso 2 -> Fin.
Ejecuta: node 05-async-await/example.js
*/

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Inicio");
  await sleep(500);
  console.log("Paso 1");
  await sleep(500);
  console.log("Paso 2");
  console.log("Fin");
}

demo();
