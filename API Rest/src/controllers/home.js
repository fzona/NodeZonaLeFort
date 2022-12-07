import {getUser} from '../services/usuarios.js';
import {getAllProducts} from '../services/productos.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';

const getHome = async (req, res) => {  

  const userInfo = await getUser(req.user._id);
  
  const userData = {
    username : userInfo.username,
    email : userInfo.email,
    telefono : userInfo.telefono,
    direccion : userInfo.direccion,
    edad : userInfo.edad,
    _id : userInfo._id,
    image : userInfo.image
  }  

  sendInfoLog(req);

  res.render("home", { //renderizo la vista home, y le paso el nombre de usuario
    userData   
  });

};

export { getHome };