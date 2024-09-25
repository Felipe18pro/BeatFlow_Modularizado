const express = require("express");
const app = express()
const musicaRouter = require('./Routers/musicaRouter')
const playlistRouter = require('./Routers/playlistRouter')

app.use(express.json())
app.use('/musicas', musicaRouter)
app.use('/playlists', playlistRouter)

module.exports = app