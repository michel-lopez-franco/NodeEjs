# Solucion: consumir API con fetch

Idea clave:
- `fetch` devuelve una promesa.
- `res.json()` tambien es promesa.

Codigo (ver tambien `solution.js`):

```js
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
const names = data.map((u) => u.name);
```
