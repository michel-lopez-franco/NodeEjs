Opciones rápidas para ejecutar JS/Node

## Ejecutar archivo: abre example.js y en terminal:

```sh
node 01-js-fundamentos/example.js
```

## REPL interactivo: escribe node en terminal para entrar al REPL y probar líneas sueltas.

- Ejecutar y quedarte en REPL:

```sh
node -i 01-js-fundamentos/example.js
```

```sh
node
# luego en el REPL
.load example.js
```

## Auto-reload al guardar (iterar rápido):

```sh
npx nodemon 01-js-fundamentos/example.js
```

## Ejecución desde VS Code (sin escribir node siempre)

Botón Run / Play: abre el archivo y pulsa el icono de "Run" arriba a la derecha o usa el panel Run and Debug (Ctrl/Cmd+Shift+D). Para personalizar, añade launch.json:

```sh
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}"
    }
  ]
}
```

Luego F5 o el botón verde ejecuta el archivo con depuración.

## Extensiones útiles en VS Code

- Code Runner: botón "Run Code" (atajo por defecto: Alt+Cmd+N en macOS). Ejecuta el archivo actual sin configurar launch.json.
- Quokka.js: ejecución instantánea y resultados inline — ideal para aprender y experimentar.
- Debugger for Node (built-in): permite puntos de ruptura, step-over, inspección de variables.

## Cuadernos / Notebooks para JS

IJavascript (Jupyter kernel para Node):
Selecciona el kernel "JavaScript (Node.js)" para usar notebooks como en Python.

Observable / RunKit / REPLs online: notebooks interactivos en web, buen complemento sin instalar nada.
