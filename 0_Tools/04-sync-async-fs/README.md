# Sincrono vs asincrono en Node

Sincrono:
- Bloquea el hilo principal hasta terminar.
- Facil de leer, pero malo para servidores.

Asincrono:
- No bloquea el hilo.
- Usa callbacks, promesas o async/await.

Ejemplo:
- `example.js` muestra `readFileSync` vs `readFile`.
