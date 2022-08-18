const express = require("express");
const { Router } = express;
const router = Router();
const Actions = require("../Controller/controller");


router.get("/", (req, res) => {
    res.render("lista", { datos: Actions.getAll() });
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
    res.send(Actions.getOne(id));
});

router.post("/", (req, res, ) => {
    Actions.add(req.body)
    res.redirect("/productos");
});

router.put("/:id", (req, res) => {
    const {id} = req.params
    const body = req.body
    res.send(Actions.update(id, body));
});

router.delete("/:id", (req, res) => {
    res.send(Actions.delete(req.params.id));
})


module.exports = router;