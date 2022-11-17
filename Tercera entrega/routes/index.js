import { Router } from "express";
const router = Router();

import products from "./productRouter.js";
import productsList from "./productListRouter.js";
import home from "./homeRouter.js";
import auth from "./authRouter.js";
import user from "./userRouter.js";
import info from "./infoRouter.js";
import error from "./errorRouter.js";

//middlewares
router.use("/productos", products);
router.use("/lista-productos", productsList);
router.use("/", home);
router.use("/auth", auth);
router.use("/user", user);


/* desafio 14 */
router.use("/info", info);

router.use("*", error);

export {router};
