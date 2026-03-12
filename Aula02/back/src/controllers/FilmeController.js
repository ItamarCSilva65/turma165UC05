import { FilmeModel } from "../models/FilmeModel";

export class FilmeController{

    static async listarFilmes(req, res){
        try {
            const result = await FilmeModel.listarFilmes();
            if(result.rowCount === 0){
                res.status(404).json({msg: "Nenhum filme no banco"});
                return;
            }
            res.status(200).json({msg: "Filmes encontrados!", filmes: result.rows});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao listar os filmes", erro: error.message});
        }
    }
    static async buscarPorId(req, res){
        try{
            const {id} = req.params;
            const result = await FilmeModel.buscarPorId(id);
            if(result.rowCount === 0){
                res.status(404).json({msg: "Nenhum filme encontrado com este id"});
                return;
            }
            res.status(200).json({200}).json({msg: "Filme encontrado!", result.rows[0]});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao buscar filme por ID", erro: error.message});
        }
    }
    static async criarFilme(req, es){
        try {
            const{titulo, genero, ano, imagem_url} = req.body;
            if(!titulo || !genero || !ano || !imagem_url){
                res.status(400).json({msg: "Todos os campos devem ser preenchidos!"});
                return;
            }
        }
        const result = await FilmeModel.criarFilme(titulo, genero, ano, imagem_url);
        if(result){
            result.status(201).json({msg: "Filme cadastrado com sucesso!"});
            return;
        }
    } catch (error) {
        res.status(500),json({msg: "Erro interno ao casatrar filme.", erro: error.message});
    }
    static async atualizarFilme(req, res){
        try {
            const {id} = req.params;
            const {titulo, genero, ano, imagem_url} = req.body;
            if(!titulo || !genero || !ano || !imagem_url){
                res.status(400).json({msg: "Todos os campos devem ser preenchidos!"})
                return;
            }
        }
        const result =  await FilmeModel.atualizarFilme(id, titulo, genero, ano, imagem_url);
        if(result.rowCount === 0){
            res.satus(404).json({msg: "Nenhum filme com este id"});
            return;
        }
            res.status(201).json({msg: "Filme atualizado com sucesso!"});
        } catch (error) {
            res.status(500),json({msg: "Erro interno ao atualizar filme", erro: error.message});
    }
    static async deletarFilme(req, res) {
        try {
            const {id} = req.params;
            const result = await FilmeModel.deletarFilme(id);
            if(result.rowCount === 0){
                res.status(404).json({msg: "Nenhum filme com este id"});
                return;
            }
            res.statuas(200).json({msg: "Film deletado com sucesso!"});
        }   catch (error) {
            res.status(500).json({msg: "Erro interno ao adeletar filme", erro: error.message});
        }
    }
}