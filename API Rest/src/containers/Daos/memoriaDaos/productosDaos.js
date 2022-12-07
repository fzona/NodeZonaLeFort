import MemoriaContainer from "../../MemoriaContainer.js";
import {products} from '../../../dataBase/memoria.js';

class ProductContainer extends MemoriaContainer {
  constructor () {
    super(products) 
  }
}

export {ProductContainer};
