//importo minimis 
import minimist from 'minimist';

let usersDao;
let productsDao;
let messagesDao;

let data = minimist(["-p",process.argv.slice(2)])
const PERS = data.p[0];

import dotenv from 'dotenv';
dotenv.config()

//const PERS = process.env.PERS || "json";

/* class DaosFactory {
  async create(pers) {
    switch (pers) {
      case "mongodb":    
        const ProductContainer = await (async () => {let {ProductContainer} = await import('./mongoDaos/productosDaos.js'); return ProductContainer})();     
        const MessageContainer = await (async () => {let {MessageContainer} = await import('./mongoDaos/messageDaos.js'); return MessageContainer})();
        const UserContainer = await (async () => {let {UserContainer} = await import('./mongoDaos/usuariosDaos.js'); return UserContainer})();
    
        
        productsDao = new ProductContainer();
        messagesDao = new MessageContainer();
        usersDao = new UserContainer();    
        break;
    
      case "memoria":
        const ProductosDaoMemoria = await (async () => {let {ProductContainer} = await import('./memoriaDaos/productosDaos.js'); return ProductContainer})();
        const MensajesDaoMemoria = await (async () => {let {MessageContainer} = await import('./memoriaDaos/messageDaos.js'); return MessageContainer})();
        const UsuariosDaoMemoria = await (async () => {let {UserContainer} = await import('./memoriaDaos/usuariosDaos.js'); return UserContainer})();
    
        productsDao = new ProductosDaoMemoria();
        messagesDao = new MensajesDaoMemoria();
        usersDao = new UsuariosDaoMemoria();    
        break;
    
      case 'json':
        const ProductosDaoJson = await (async () => {let {ProductContainer} = await import('./archivoDaos/productosDaos.js'); return ProductContainer})();
        const MensajesDaoJson = await (async () => {let {MessageContainer} = await import('./archivoDaos/messageDaos.js'); return MessageContainer})();
        const UsuariosDaoJson = await (async () => {let {UserContainer} = await import('./archivoDaos/usuariosDaos.js'); return UserContainer})();
    
        productsDao = new ProductosDaoJson();
        messagesDao = new MensajesDaoJson();
        usersDao = new UsuariosDaoJson();
        break;
      
    }

  }
}

const daosFactory = new DaosFactory();
daosFactory.create(PERS); */


switch (PERS) {
  case "mongodb":    
    const ProductContainer = await (async () => {let {ProductContainer} = await import('./mongoDaos/productosDaos.js'); return ProductContainer})();     
    const MessageContainer = await (async () => {let {MessageContainer} = await import('./mongoDaos/messageDaos.js'); return MessageContainer})();
    const UserContainer = await (async () => {let {UserContainer} = await import('./mongoDaos/usuariosDaos.js'); return UserContainer})();

    
    productsDao = new ProductContainer();
    messagesDao = new MessageContainer();
    usersDao = new UserContainer();    
    break;

  case "memoria":
    const ProductosDaoMemoria = await (async () => {let {ProductContainer} = await import('./memoriaDaos/productosDaos.js'); return ProductContainer})();
    const MensajesDaoMemoria = await (async () => {let {MessageContainer} = await import('./memoriaDaos/messageDaos.js'); return MessageContainer})();
    const UsuariosDaoMemoria = await (async () => {let {UserContainer} = await import('./memoriaDaos/usuariosDaos.js'); return UserContainer})();

    productsDao = new ProductosDaoMemoria();
    messagesDao = new MensajesDaoMemoria();
    usersDao = new UsuariosDaoMemoria();    
    break;

  case 'json':
    const ProductosDaoJson = await (async () => {let {ProductContainer} = await import('./archivoDaos/productosDaos.js'); return ProductContainer})();
    const MensajesDaoJson = await (async () => {let {MessageContainer} = await import('./archivoDaos/messageDaos.js'); return MessageContainer})();
    const UsuariosDaoJson = await (async () => {let {UserContainer} = await import('./archivoDaos/usuariosDaos.js'); return UserContainer})();

    productsDao = new ProductosDaoJson();
    messagesDao = new MensajesDaoJson();
    usersDao = new UsuariosDaoJson();
    break;
  
}


export { usersDao, productsDao, messagesDao };