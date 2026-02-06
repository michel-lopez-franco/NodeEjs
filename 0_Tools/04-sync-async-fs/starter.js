const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "config.json");
const defaultConfig = { env: "prod", port: 8080 };

// TODO: leer async y mostrar el config

console.log("Listo");
