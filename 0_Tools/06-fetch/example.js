/*
Ejemplo fetch basico.
Objetivo: hacer una peticion HTTP y leer JSON.
Requisito: Node 18+ (fetch global).
Ejecuta: node 06-fetch/example.js
*/

async function main() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

main().catch((err) => console.error(err));
