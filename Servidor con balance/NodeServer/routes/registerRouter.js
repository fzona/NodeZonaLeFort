const { Router } = require("express");
const register = Router();

//importo el controller
const Contenedor = require("../controller/register.controller")

register.get("/", (req, res) => {  
  res.render('register'); 
});

register.post("/", (req, res) => {
  const {username, password, email} = req.body 
  Contenedor.save({username, password, email}) 
  //Contenedir.save devuelve un objeto user en caso de exito. Si no, devuelve un error
  .then (user => {
    if (user) {  //si devolvio el objeto user se redirige a la ruta /succes    
      return res.render('succes') //si el usuario existe, redirecciono a la ruta /login      
    } else {
      res.render('error', {error: 'Usuario ya registrado', url: 'register' }) 
    }      
  })
});


module.exports = register;