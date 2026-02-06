# Solucion: modulo de formato

CommonJS:

```js
function toUpper(text) {
  return text.toUpperCase();
}

function prefix(text, pre) {
  return `${pre}${text}`;
}

module.exports = { toUpper, prefix };
```

ES Modules:

```js
export function toUpper(text) {
  return text.toUpperCase();
}

export function prefix(text, pre) {
  return `${pre}${text}`;
}
```

Ver archivos:
- `03-modulos/commonjs/formatter.js`
- `03-modulos/esm/formatter.mjs`
