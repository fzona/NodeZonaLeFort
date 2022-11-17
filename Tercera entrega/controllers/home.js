import {getUser} from '../services/usuarios.js';
import {getAllProducts} from '../services/productos.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';

const getHome = async (req, res) => {  

  const userData = await getUser(req.user._id); 
  const productos = await getAllProducts();
  const user = userData.username;  //guardo el nombre de usuario en una variable

  sendInfoLog(req);

  res.render("home", { //renderizo la vista home, y le paso el nombre de usuario
    userData,
    user: user,
    productos: productos,
  });

};

export { getHome };