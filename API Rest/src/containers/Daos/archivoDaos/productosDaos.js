import ArchivoContainer from "../../ArchivoContainer.js";
const url = './src/dataBase/products.json'

class ProductContainer extends ArchivoContainer {
  constructor () {
    super(url) 
  }
}

export {ProductContainer};
