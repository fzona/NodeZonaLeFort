import { Router } from "express";
import {getProductsList} from '../controllers/productsList.js';

const productsList = Router();

productsList.get("/", getProductsList);

export default productsList;
