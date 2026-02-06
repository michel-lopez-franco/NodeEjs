# Fetch en Node

Desde Node 18, `fetch` es global.
- `fetch(url)` devuelve un `Response`.
- `res.json()` convierte el body a objeto.
- Verifica `res.ok` si necesitas validar status.
