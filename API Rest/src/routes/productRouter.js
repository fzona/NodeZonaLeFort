import { Router } from "express";
import { getProducts, postProduct } from "../controllers/products.js";

const products = Router();


products.get("/", getProducts);

products.post("/", postProduct);

export default products;


