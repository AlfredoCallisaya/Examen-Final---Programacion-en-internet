const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
let fecha = new Date();

dia = ("día:", fecha.getDay());
mes = ("mes:", fecha.getMonth()) + 1;
año = ("año:", fecha.getFullYear());
hora = ("hora:", fecha.getHours() - 4);
minutos = ("minutos:", fecha.getMinutes());
segundos = ("segundos:", fecha.getSeconds());
mSegundos = ("mSegundos:", fecha.getMilliseconds());

// Middleware para parsear JSON
app.use(express.json());

app.get("/estado", (req, res) => {
  res.send({
    servicio: "Proyecto-backend",
    version: "1.11.2",
    entorno: "production",
    estado: "Servicio funcionando correctamente",
    fecha: `${año}-${mes}-${dia} ${hora}:${minutos}:${segundos}.${mSegundos}`,
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
    fechaRegistro: `${año}-${mes}-${dia} ${hora}:${minutos}:${segundos}.${mSegundos}`,
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
