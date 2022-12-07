import MongoContainer from "../../MongoContainer.js";
import { Item } from "./models/Products.js"; 

class ProductContainer extends MongoContainer {
  constructor () {
    super(Item) 
  }
}

export  {ProductContainer};
