const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "config.json");
const defaultConfig = { env: "prod", port: 8080 };

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
