const express = require("express");
const router = express.Router();

const products = require("./productRouter");
const productsList = require("./productListRouter");
const home = require("./homeRouter");
const homeFaker = require("./homeFakerRouter");
const productosFaker = require("./productosFakerRouter");
const login = require("./loginRouter");
const loginError = require("./loginErrorRouter");
const register = require("./registerRouter");;
const logout = require("./logoutRouter");
const info = require("./infoRouter");
const randoms = require("./randomsRouter");

//middlewares
router.use("/productos", products);
router.use("/lista-productos", productsList);
router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginError);
router.use("/register", register);
router.use("/logout", logout);
router.use("/api/productos-test", homeFaker);
router.use("/api/faker-list", productosFaker);
router.use("/info", info);
router.use("/api/randoms", randoms);


module.exports = router;