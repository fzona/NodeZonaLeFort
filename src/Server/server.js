const express = require("express");
const router = require("../Routes/routes.js");
const app = express();
const PORT = 8080;

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", router);

const server = app.listen(PORT, () =>
  console.log(`Servidor corriendo en puerto ${PORT}`)
);
server.on("error", (err) => {
  console.log(`El servidor a tenido un error:${error}`);
});
