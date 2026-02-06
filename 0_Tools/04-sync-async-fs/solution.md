# Solucion: leer config de forma asincrona

Idea clave:
- `fs.readFile` no bloquea el hilo.
- Si hay error o JSON invalido, usa un valor por defecto.

Codigo (ver tambien `solution.js`):

```js
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(defaultConfig);
    return;
  }

  try {
    const config = JSON.parse(data);
    console.log(config);
  } catch (_err) {
    console.log(defaultConfig);
  }
});
```
