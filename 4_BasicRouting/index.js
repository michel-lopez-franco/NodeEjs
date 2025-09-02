// Importar Express
const express = require("express");

// Crear una aplicación de Express
const app = express();

// Definir el puerto
const PORT = 3000;

// Middleware para procesar cuerpos de solicitudes en formato JSON
app.use(express.json());

// Crear una ruta para la página principal
app.get("/", (req, res) => {
  res.send("¡Hola, bienvenido a tu servidor Express!");
});

app.post("/", (req, res) => {
  const data = req.body;
  res.send(`Got a POST request with JSON: a=${data.a}, b=${data.b}`);
});

app.put("/user", (req, res) => {
  const data = req.body;
  res.send(`Got a PUT request at /user data=${JSON.stringify(data)}`);
  
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;
  // Aquí podrías eliminar el usuario de una base de datos o arreglo
  res.send(`Usuario con id=${userId} eliminado`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
