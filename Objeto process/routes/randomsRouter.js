const express = require("express");
const { Router } = require("express");
const randoms = Router();
//importo fork
const { fork } = require("child_process");


randoms.get("/", function (req, res) {
  const child = fork("./controller/random.controller.js");
  //obtengo cant de url
  const cant = req.query.cant;
  //verifico que sea un numero
  if (isNaN(cant)) {
    let x = 100000000 
    //le paso x al child
    child.send(['start', x]);  
    child.on("message", (numerosRandom) => {
      res.send(numerosRandom);
    });
  } else {
    //le paso cant al child
    child.send(['start', cant]);  
    child.on("message", (numerosRandom) => {
      res.send(numerosRandom);
    });
  }
});



module.exports = randoms;