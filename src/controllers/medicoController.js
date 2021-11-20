const connection = require('../database/connection');

module.exports = {
    async cadastro(req, res){
        const {codmed, nomemed, genero, telefone, e_mail, codespec} = req.body;

        await connection.query(`
        INSERT INTO medico VALUES ("${codmed}", "${nomemed}", "${genero}", "${telefone}", "${e_mail}", "${codespec}")`);
        return res.json(req.body);
    },

    async list(req, res){
        const {especialidade} = req.body;

        const [medicos] = await connection.query(`
        SELECT nomemed, nomeespec 
        FROM medico, especialidade
        WHERE especialidade.nomeespec = ${especialidade} and medico.codespec = especialidade.codespec
        `);
        return res.json(medicos);
    }

}