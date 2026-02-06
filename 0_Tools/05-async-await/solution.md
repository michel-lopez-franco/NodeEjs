# Solucion: ejecutar tareas en serie y en paralelo

Idea clave:
- Serie: `await` dentro de un loop.
- Paralelo: `Promise.all`.

Codigo (ver tambien `solution.js`):

```js
async function runSerie() {
  for (const ms of tareas) {
    await sleep(ms);
  }
}

async function runParalelo() {
  await Promise.all(tareas.map((ms) => sleep(ms)));
}
```
