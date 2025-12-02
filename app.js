const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

app.get("/estado", (req, res) => {
  res.send({
    servicio: "Proyecto-backend",
    version: "1.11.2",
    entorno: "production",
    estado: "Servicio funcionando correctamente",
    fecha: new Date(),
    hora: Date.now(),
  });
});

app.post("/datos", (req, res) => {
});

app.put("/datos/:id", (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
