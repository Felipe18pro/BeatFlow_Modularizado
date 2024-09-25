const mongoose = require('mongoose')

const esquemaMusica = new mongoose.Schema({//Prateleira
    nome: { 
        type: String, 
        required: true 
    },
    ano: { 
        type: Number, 
        required: true 
    },
    artista: { 
        type: String, 
        required: true 
    },
    genero: { 
        type: String, 
        required: true 
    },
    album: { 
        type: String, 
        required: true
     },
    duracao: {
        type: Number, 
        required: true
     },
    idPlaylist: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Playlist",
        required: true 
    },
});

const Musica = mongoose.model("Musica", esquemaMusica);

module.exports = Musica