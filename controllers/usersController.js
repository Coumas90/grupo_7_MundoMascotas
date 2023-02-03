
const db = require("../database/models")

const controladorUsuarios = {
    index: (req, res) => {res.render('users/administradorusuarios')}
}

module.exports = controladorUsuarios;