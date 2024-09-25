const Musica = require('../Models/Musica');
const Playlist = require('../Models/Playlist')

async function criarPlaylists(req, res) {
    const {nome} = req.body
    try {
        const novaPlaylist = new Playlist({ nome });
        const playlistSalva = await novaPlaylist.save();

        res.status(201).json({menssagem:'Playlist criada com sucesso', playlist: playlistSalva})
    } catch (erro) {
        res.status(500).json({menssagem:'Erro ao cria a Playlist', erro: erro.message})
    }
}

async function listarPlaylist(req, res) {
    try {
        const playlists = await Playlist.find()
        res.status(201).json({menssagem:'Playlists', playlist: playlists})
    } catch (erro) {
        res.status(500).json({menssagem:'Erro ao listar a Playlist', erro: erro.message})
    }
}

async function atualizarPlaylist(req, res) {
    const { id } = req.params;
    const { nome } = req.body;
    try {
      const playlistAtualizado = await Playlist.findByIdAndUpdate(
        id,
        {  nome },
        { new: true, runValidators: true }
      );
      if (playlistAtualizado) {
        res.status(200).json({
          mensagem: "playlist atualizado com sucesso",
          playlist: playlistAtualizado,
        });
      } else {
        res.status(404).json({ mensagem: "playlist não encontrado" });
      }
    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao atualizar playlist",
        erro: erro.message,
      });
    }
}

async function deletarPlaylist(req, res) {
  const { id } = req.params;
    try {
        const playlistDeletada = await Playlist.findByIdAndDelete(id);
        if(playlistDeletada) {
        res.status(201).json({mensagem:'playlist deletada com sucesso', 
        playlistdeletada: playlistDeletada})
        }else {
          res.status(404).json({mensagem:"playlist não encontrada"})
        }
    } catch (erro) {
        res.status(500).json({mensagem:'Erro ao deletar playlist', erro: erro.message})
    }
}

module.exports = {
    criarPlaylists,
    listarPlaylist,
    atualizarPlaylist,
    deletarPlaylist
}


