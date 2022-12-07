import { getAllProducts, getProduct, saveProduct, deleteProduct, updateProduct } from '../services/productos.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';

const getProducts = async (req, res) => {

  sendInfoLog(req);

  const productos = await getAllProducts();
  res.render('products', {productos});

};

const postProduct = async (req, res) => { 

  const {name, description, code, thumbnail, price, stock} = req.body 
  try {
    saveProduct({name, description, code, thumbnail, price, stock});    
    res.redirect('/');    
  }
  catch (error) {
    console.log(error);
  }  

}

//queda pendiente el update y el delete

export { getProducts, postProduct };


    
 

