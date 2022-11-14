require('../connection/connection'); 
const Message = require('../models/Message');

//funcion para mostrar todos los mensajes
const list = async () => {
  try {
    const mensajes = await Message.find();
    return mensajes;
  } catch (error) {
    console.log(error);
  }
}

//funcion para guardar un mensaje

const save = async (mensaje) => { 

  try {
    const newMensaje = new Message(mensaje); 
    const data = await newMensaje.save();
    //console.log(data);
    return data; 
  } catch (error) {
    console.log(error);
  }

}

module.exports = { list, save };