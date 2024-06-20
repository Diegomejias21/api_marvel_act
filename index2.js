const express = require("express");
const app = express();
const puerto = 2007;

const cors = require("cors");



const {getpersonajesDC, getpersonajesDCById} = require("./controllers/personajesDC.controllers")

app.use(cors());

app.get("/", getpersonajesDC )

app.get("/:id", getpersonajesDCById)


app.listen( puerto , ()=> {
    console.log(`hola, el servidor de personajesDC está bien`);
    console.log(`Servidor arriba ok, en el puerto de los personajes ${puerto}`);
});
