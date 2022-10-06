
const login = require("../utils/login")

class Contenedor {   

  static save(object) {
    return login.save(object);    
  }

} 

module.exports = Contenedor;