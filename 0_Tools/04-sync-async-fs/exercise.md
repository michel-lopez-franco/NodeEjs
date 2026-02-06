# Ejercicio: leer config de forma asincrona

Objetivo:
Leer un archivo JSON con `fs.readFile` y convertirlo a objeto.

Instrucciones:
1. En `starter.js`, usa `fs.readFile` para leer `config.json`.
2. Si hay error, usa el objeto por defecto `{ env: "prod", port: 8080 }`.
3. Imprime el objeto final con `console.log`.

Ejecutar:
- `node 04-sync-async-fs/starter.js`
