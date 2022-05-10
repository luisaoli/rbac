const controle = require('../controleDeAcesso');

module.exports = (entidade, acao) => (req, res, next) => {
    const permissoesDoCargo = controle.can(req.user.cargo);
    const permissao = permissoesDoCargo[acao](entidade)

    if (permissao.granted === false) {
        res.status(403).end();
        return;
    }

    requisicao.acesso = {
        atributos: permissao.attributes
    }

    next();
}