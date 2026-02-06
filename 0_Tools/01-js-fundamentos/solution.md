# Solucion: resumen de compra

Idea clave:
- `reduce` para sumar precios.
- Condicional para descuento.
- `map` para transformar nombres.

Codigo (ver tambien `solution.js`):

```js
const subtotal = items.reduce((acc, item) => acc + item.precio, 0);
const descuento = subtotal >= 100 ? subtotal * 0.1 : 0;
const total = subtotal - descuento;
const nombres = items.map((item) => item.nombre.toUpperCase());
```

Resultado esperado:
- `subtotal` suma de precios.
- `descuento` 10% si el subtotal es >= 100.
- `total` subtotal menos descuento.
- `nombres` en mayusculas.
