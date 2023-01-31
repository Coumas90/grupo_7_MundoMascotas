const fs = require('fs');
const path = require('path');
// Aca llamamos a las validaciones para poder enviarlas a la vista
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs'); 
const usersFilePath = path.join(__dirname, '../database/users.json');
//leemos el archivo de usuarios
let archivoUsuarios = fs.readFileSync(usersFilePath, {encoding:"utf-8"} );
const User = require ('../models/User');
const db = require("../database/models")

const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    userLogin: (req,res)=> {
        let errors = validationResult(req);
        
        if(errors.errors.length>0){
            res.render('user/login', {errors:errors.mapped(), old:req.body});
        }
        let userToLogin = User.findByEmail(req.body.email);
        
        if (req.session === undefined || req.session.userLogged === undefined) {
            req.session = {};
          }
          req.session.userLogged = userToLogin;
        // Si el que intenta ingresar está en nuestra base de datos
        if (userToLogin) {
            // Comparamos la contraseña que ingresó en el formulario de Log In y el guardado en nuestra BD
            let isOKPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
          
            if (isOKPassword) {
              req.session.userLogged = userToLogin;
              res.redirect('/');
            } else {
              // Si la contraseña no coincide
              res.render('user/login', {
                errors: {
                  email: { msg: 'Las credenciales son inválidas' }
                }
              });
            }
          } else {
            // Si el email no está en nuestra BD o si userToLogin es undefined o null
            res.render('user/login', {
              errors: {
                email: { msg: 'No se encuentra este email en nuestra base de datos' }
              }
            });
          }
    },
    
    register: (req, res)=> {
        db.CategoriaUser.findAll()
        .then((categoriaUsers)=>
        {return res.render('user/register',{categoriaUsers:categoriaUsers})});
    },

    createuser: (req,res)=>{
        let errorsregister = validationResult(req);
        if(errorsregister.errors.length>0){
            res.render('user/register', {errorsregister:errorsregister.mapped(), old:req.body});
        }
        let userInDb = User.findByEmail(req.body.email);
        if(userInDb) {
            res.render('user/register', {errorsregister:{
                email: {msg: 'Este email ya esta registrado'}
            }, old:req.body});
        }

        let userToCreate = {
            Email:req.body.Email,
            Nombre:req.body.Nombre,
            Apellido:req.body.Apellido,
            DNI:req.body.DNI,
            Telefono:req.body.Telefono,
            Avatar:req.file.filename,
            Password: bcryptjs.hashSync(req.body.Password,10),
            Password2: bcryptjs.hashSync(req.body.Password2,10),
            idUsersCategory:req.body.idUsersCategory,
        }

        let userCreated = db.User.create(userToCreate);
        res.redirect('user/login');
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
         res.render('../views/user/perfil',{
            user: req.session.userLogged
        });
    }
  }
module.exports = controladorLogin;