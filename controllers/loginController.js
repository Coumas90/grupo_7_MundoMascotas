const controladorLogin = {
    login: (req, res)=> {res.render('login')},
    registrate: (req, res)=> {res.render('register')},
    olvido: (req, res)=> {res.render('restablecer');},
};


module.exports = controladorLogin;