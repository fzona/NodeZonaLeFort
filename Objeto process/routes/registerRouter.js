const { Router } = require("express");
const register = Router();

const Contenedor = require("../controller/register.controller")

register.get("/", (req, res) => {  
  res.render('register'); 
});

register.post("/", (req, res) => {
  const {username, password, email} = req.body 
  Contenedor.save({username, password, email}) 
  //Contenedor.save devuelve un objeto user en caso de éxito. Si no, devuelve un error
  .then (user => {
    if (user) {      
      return res.render('succes')      
    } else {
      res.render('error', {error: 'Usuario ya registrado', url: 'register' }) 
    }      
  })
});


module.exports = register;