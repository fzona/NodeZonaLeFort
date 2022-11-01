const express = require("express");
const { Router } = require("express");
const products = Router();

//importo el controller
const Contenedor = require("../controller/products.controller")

products.get("/", (req, res) => {
  Contenedor.getAll() //getAll obtiene todos los productos
  .then((productos) => {      
    console.log(productos);
    res.render('products', {productos}); //renderizo el view products.ejs y le paso los productos como parametro
  })    
});

products.post("/", (req, res) => { 
  const {title, price, thumbnail} = req.body 
  Contenedor.save({title, price, thumbnail})  
  const productos = Contenedor.getAll() 
  res.redirect('/');   
});

module.exports = products;
