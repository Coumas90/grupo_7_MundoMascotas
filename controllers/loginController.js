const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    registrate: (req, res)=> {res.render('user/register')},
    olvido: (req, res)=> {res.render('user/restablecer');},
};

module.exports = controladorLogin;