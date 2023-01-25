const db = require("../database/models")

const controladorPerfil = {
    perfil: (req, res) => {res.render('user/perfil')},
    logOut: (req,res) => {
        req.session.destroy();
        return res.redirect ('/');
    }
};

module.exports = controladorPerfil;

