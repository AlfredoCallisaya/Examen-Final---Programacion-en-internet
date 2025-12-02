const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fecha = new Date();

dia = ("día:", fecha.getDay());
mes = ("mes:", fecha.getMonth());
año = ("año:", fecha.getFullYear());
hora = ("hora:", fecha.getHours());
minutos = ("hora:", fecha.getMinutes());
segundos = ("hora:", fecha.getSeconds());
mSegundos = ("hora:", fecha.getMilliseconds());
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
  const datos = req.body;

  res.json({
    mensaje: "Datos recibidos exitosamente",
    datosRecibidos: {
      nombre: datos.nombre,
      correo: datos.correo,
      edad: datos.edad,
    },
    

    fechaRegistro: dia,
    horaRegistro: Date.now(),
  });
});

app.put("/datos/:id", (req, res) => {
  const id = req.params.id;
  const datos = req.body;
  res.json({
    mensaje: `Datos actualizados exitosamente`,
    idUsuario: id,
    datosActualizados: datos,
    fechaActualizacion: `${año}-${mes}-${dia} ${hora}:${minutos}:${segundos}.${mSegundos}`,
    horaActualizacion: Date.now(),
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
