# Solucion: sumar numeros desde la terminal

Idea clave:
- `process.argv.slice(2)` para leer argumentos.
- `Number()` para convertir.
- Filtrar `NaN`.

Codigo (ver tambien `solution.js`):

```js
const suma = args
  .map((v) => Number(v))
  .filter((n) => !Number.isNaN(n))
  .reduce((acc, n) => acc + n, 0);
```
