const items = [
  { nombre: "Cafe", precio: 60 },
  { nombre: "Pan", precio: 25 },
  { nombre: "Leche", precio: 32 },
];

const subtotal = items.reduce((acc, item) => acc + item.precio, 0);
const descuento = subtotal >= 100 ? subtotal * 0.1 : 0;
const total = subtotal - descuento;
const nombres = items.map((item) => item.nombre.toUpperCase());

const resumen = { subtotal, descuento, total, nombres };

console.log(resumen);
