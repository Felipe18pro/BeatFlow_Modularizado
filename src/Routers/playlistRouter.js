const express = require("express");
const router = express.Router()
const playlistControler = require('../Controllers/playlistControlers')

router.post("/", playlistControler.criarPlaylists)

router.get("/", playlistControler.listarPlaylist)

router.put("/:id", playlistControler.atualizarPlaylist)

router.delete("/:id", playlistControler.deletarPlaylist)

module.exports = router