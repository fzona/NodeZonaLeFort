const express = require("express");
const { Router } = require("express");
const productsList = Router();

//importo el controller
const Contenedor = require("../controller/products.controller") 

productsList.get("/", (req, res) => { 

  Contenedor.getAll() //getAll obtiene todos los productos
  .then((data) => {  
    res.status(200).send(data);  
  })

});

module.exports = productsList;
