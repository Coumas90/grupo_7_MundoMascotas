const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    userlogin: (req, res)=> {
        let userlogin={
            client_email: req.body.client_email,
            password: req.body.password
        }
        res.redirect("/");
    },
    register: (req, res)=> {res.render('user/register')},
    createregister: (req,res)=>{
        let usuario={
            client_email: req.body.client_email,
            cliet_name: req.body.client_name,
            client_surname: req.body.client_surname,
            client_dni: req.body,client_dni,
            client_telephone: req.body.client_telephone,
            password: req.body.password
        }
        res.redirect("/");
    },
    olvido: (req, res)=> {res.render('user/restablecer');
    },
    restablecer: (req,res)=>{
        let nuevousuario={
            client_email: req.body.client_email,
            password: req.body.password
        }
        res.redirect("/login");
},
};

module.exports = controladorLogin;