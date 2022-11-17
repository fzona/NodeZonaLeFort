import UserContainer from "./usuariosDaos.js";
import ProductContainer from "./productosDaos.js";
import MessageContainer from "./messageDaos.js";

let usersDao = new UserContainer();
let productsDao = new ProductContainer();
let messagesDao = new MessageContainer();


export { usersDao, productsDao, messagesDao };