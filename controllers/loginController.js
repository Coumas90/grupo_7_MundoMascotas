const fs = require('fs');
const path = require('path');

// Aca llamamos a las validaciones para poder enviarlas a la vista
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs'); 

const usersFilePath = path.join(__dirname, '../database/users.json');
//leemos el archivo de usuarios
let archivoUsuarios = fs.readFileSync(usersFilePath, {encoding:"utf-8"} );

const User = require ('../models/User');



const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    userLogin: (req,res)=> {
        let errors = validationResult(req);
        if(errors.errors.length>0){
            return('user/login', {errors:errors.mapped(), old:req.body});
        }
        let userToLogin = User.findByEmail(req.body.email);

        // Si el que intenta ingresar esta en nuestra base de datos
        if(userToLogin){
            // Comparamos la contraseña que ingreso en el formulario de Log In y el guardado en nuestra BD
            let isOKPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOKPassword){
                req.session.userLogged = userToLogin;
                return res.redirect('/');
            }
            //Si la contraseña no coincide
            return res.render('user/login',{
                errors:{
                    email:{
                        msg: 'Las credenciales son invalidas'
                    }
                }
            });
        }
        // Si el email no esta en nuestra BD
        return res.render('user/login',{
            errors:{
                email:{
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });
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
        if(errorsregister.errors.length>0){
            return('user/register', {errorsregister:errorsregister.mapped(), old:req.body});
        }

        let userInDb = User.findByEmail(req.body.email);
        if(userInDb) {
            return res.render('user/register', {errorsregister:{
                email: {msg: 'Este email ya esta registrado'}
            }, old:req.body});
        }

        // let userToCreate={
        //     email: req.body.email,
        //     cliet_name: req.body.client_name,
        //     client_surname: req.body.client_surname,
        //     client_dni: req.body.client_dni,
        //     client_telephone: req.body.client_telephone,
        //     password: bcryptjs.hashSync(req.body.password,10),
        //     client_picture: req.file.filename,
        //     idUser : Date.now()
        // };

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password,10),
            client_picture: req.file.filename,
        }

        let userCreated = User.create(userToCreate);
        return res.redirect('user/login');
        // traemos los usuarios ya existentes
        // let users;
        // if (archivoUsuarios == ""){
        //     users = [];
        // }else{
        //     users = JSON.parse(archivoUsuarios);          
        // }
        // users.push(newuser);

        // // Pasamos los datos a un string para que este en formato JSON
        // let newUserJSON = JSON.stringify(newuser);
        // fs.appendFileSync(usersFilePath,newUserJSON);
        // res.redirect("/");
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
    profile: (req,res) =>{
        return res.render ('../views/user/perfil',{
            user: req.session.userLogged
        });
    }
};

module.exports = controladorLogin;