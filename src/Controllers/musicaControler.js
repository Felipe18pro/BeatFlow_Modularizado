const Musica = require("../Models/Musica");

async function criarMusica(req, res) {
    const {nome, ano, artista, genero, album, duracao, idPlaylist} = req.body
    try {
        const novaMusica = new Musica({ 
            nome, 
            ano, 
            artista, 
            genero, 
            album, 
            duracao, 
            idPlaylist
        });
        musicaSalva = await novaMusica.save();
        res.status(201).json({
            mensagem: "Musica adicionado com sucesso",
            musica: musicaSalva
        })
    } catch (erro) {
        res.status(501).json({mensagem: "Erro ao Adicionar", erro: erro.message})
        throw erro;
    }
}

async function atualizarMusica(req, res) {
    const { id } = req.params;
    const {  nome, 
            ano, 
            artista, 
            genero, 
            album, 
            duracao, 
            idPlaylist} = req.body;
    try {
      const musicaAtualizado = await Musica.findByIdAndUpdate(
        id,
        {  nome, 
            ano, 
            artista, 
            genero, 
            album, 
            duracao, 
            idPlaylist},
        { new: true, runValidators: true }
      );
      if (musicaAtualizado) {
        res.status(200).json({
          mensagem: "musica atualizado com sucesso",
          musica: musicaAtualizado,
        });
      } else {
        res.status(404).json({ mensagem: "musica não encontrado" });
      }
    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao atualizar musica",
        erro: erro.message,
      });
    }
}

async function listarMusicas(req, res) {
    try {
        const musicas = await Musica.find();
        res.status(201).json({mensagem:'Musicas encontradas', Musicas: musicas})
    } catch (erro) {
        res.status(500).json({mensagem:"Erro ao listar musicas:", erro: erro.message})
        throw erro;
    }
}

async function deletarMusica(req, res) {
  const { id } = req.params;
    try {
        const musicaDeletada = await Musica.findByIdAndDelete(id);
        if(musicaDeletada) {
        res.status(201).json({mensagem:'Musica deletada com sucesso', 
        musicadeletada: musicaDeletada})
        }else {
          res.status(404).json({mensagem:"Musica não encontrada"})
        }
    } catch (erro) {
        res.status(500).json({mensagem:'Erro ao deletar musica', erro: erro.message})
    }
}

module.exports = {
    criarMusica,
    atualizarMusica,
    listarMusicas,
    deletarMusica

}