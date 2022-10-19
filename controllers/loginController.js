const controladorLogin = {
    login: (req, res)=> {res.render('user/login');},
    registrate: (req, res)=> {res.render('user/register');},
    olvido: (req, res)=> {res.sendFile('Olvidaste tu contraseña');},
};

module.exports = controladorLogin;