const controladorLogin = {
    login: (req, res)=> {res.render('login')},
    registrate: (req, res)=> {res.render('register')},
    olvido: (req, res)=> {res.sendFile('Olvidaste tu contraseña');},
};


module.exports = controladorLogin;