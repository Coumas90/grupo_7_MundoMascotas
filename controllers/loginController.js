const fs = require('fs');
const path = require('path');

// Aca llamamos a las validaciones para poder enviarlas a la vista
const {validationResult} = require('express-validator');

const usersFilePath = path.join(__dirname, '../database/users.json');
//leemos el archivo de usuarios
let archivoUsuarios = fs.readFileSync(usersFilePath, {encoding:"utf-8"} );

const User = require ('../models/User');

const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    userLogin: (req,res)=> {
        //guardamos los errores en la variable error
        let errors = validationResult(req);
        if(errors.isEmpty()){
            res.redirect('/')
        }else{
            res.render('user/login', {errors:errors.mapped(), old:req.body})
        }
        //     let users []
        //     if (archivoUsuarios == ""){
        //         users;
        //     }else{
        //         users = JSON.parse(archivoUsuarios);  
        //     }
        //     for (let i=0; i<users.length; i++){
        //         if(users[i].email == req.body.email){
        //             if(bcrypt.compareSync(req.body.password,users[i].password))
        //             let usuarioALoguearse = users[i];
        //             break;
        //         }
        //     }
        //     if (usuarioALoguearse == undefined){
        //         return res.render ('/login', {errors:errors.errors});
        //     }
        //     req.session.usuarioLogueado = usuarioALoguearse;

        // }else{
        //     return res.render ('/login', {errors: errors.errors});
        // }
        // let userlogin={
        //     client_email: req.body.client_email,
        //     password: req.body.password
        // }
        // res.redirect("/");
    },
    register: (req, res)=> {res.render('user/register')},
    createuser: (req,res)=>{
        let errorsregister = validationResult(req);
        if(errorsregister.isEmpty()){
            res.redirect('/')
        }else{
            res.render('user/register', {errorsregister:errorsregister.mapped(), old:req.body})
        }
        let newuser={
            email: req.body.email,
            cliet_name: req.body.client_name,
            client_surname: req.body.client_surname,
            client_dni: req.body.client_dni,
            client_telephone: req.body.client_telephone,
            password: req.body.password,
            client_picture: req.file.filename,
            idUser : Date.now()
        };
        // traemos los usuarios ya existentes
        let users;
        if (archivoUsuarios == ""){
            users = [];
        }else{
            users = JSON.parse(archivoUsuarios);          
        }
        users.push(newuser);

        // Pasamos los datos a un string para que este en formato JSON
        let newUserJSON = JSON.stringify(newuser);
        fs.appendFileSync(usersFilePath,newUserJSON);
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