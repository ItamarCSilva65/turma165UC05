import db from "../config/db.js";

export class UsuarioModel{
    static listarUsuarios(){
        const sql = `Select id, nome, email, role from usuarios order by nome`;
        return db.query(sql);
    }
    static buscarPorEmail(email){
        const sql = 'SELEC * FROM usuarios WHERE email = $1';
        return db.query(sql, [email]);
    }
    static buscarPorId(id){
        const sql = `Select id, nome, role from usuarios whereid = $1`;
        return db.query(sql, [id]);
    }
    static criarUsuario(id, nome, email, senha, role){
        const sql = `
        update usuarios set nome = $1, email = $2, senha = $3, role = $4 wher id = $5)`;

    }
}