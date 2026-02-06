# Modulos en Node.js: CommonJS vs ES Modules

CommonJS (CJS):
- Usa `require()` y `module.exports`.
- Es el formato historico de Node.

ES Modules (ESM):
- Usa `import` y `export`.
- Standard moderno de JavaScript.

Reglas rapidas:
- Si el archivo termina en `.mjs`, es ESM.
- Si termina en `.cjs`, es CommonJS.
- Si termina en `.js`, depende de `"type"` en `package.json`.

Ejecutar:
- `node 03-modulos/commonjs/main.js`
- `node 03-modulos/esm/main.mjs`
