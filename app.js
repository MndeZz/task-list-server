const express = require("express");
const app = express();

// Lista de tareas
const tasks = [
  {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
  },
  // Agrega más tareas si es necesario
];

// Ruta para obtener la lista de tareas en formato JSON
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

const port = 8080; // Puerto en el que se ejecutará el servidor

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
