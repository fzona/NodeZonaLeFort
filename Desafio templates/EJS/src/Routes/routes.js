const express = require("express");
const { Router } = express;
const router = Router();
const Actions = require("../Controller/controller");

// devuelve todos los prods - GET
router.get("/", (req, res) => {
    res.render("lista", { datos: Actions.getAll() });
});

// devuelve un prod x id - GET
router.get("/:id", (req, res) => {
    const {id} = req.params;
    res.send(Actions.getOne(id));
});

// agrega nuevo prod - POST
router.post("/", (req, res, ) => {
    Actions.add(req.body)
    res.redirect("/productos");
});

// modifica prod x id - PUT
router.put("/:id", (req, res) => {
    const {id} = req.params
    const body = req.body
    res.send(Actions.update(id, body));
});

// borrar prod x id - DELETE
router.delete("/:id", (req, res) => {
    res.send(Actions.delete(req.params.id));
})

module.exports = router;