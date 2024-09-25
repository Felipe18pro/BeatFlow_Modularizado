const express = require("express");
const router = express.Router()
const musicaControler = require('../Controllers/musicaControler')

router.post("/", musicaControler.criarMusica)

router.get("/", musicaControler.listarMusicas)

router.put("/:id", musicaControler.atualizarMusica)

router.delete("/:id", musicaControler.deletarMusica)


module.exports = router