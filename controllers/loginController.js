const fs = require('fs');
const path = require('path');
// Aca llamamos a las validaciones para poder enviarlas a la vista
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs'); 
const db = require("../database/models")

const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    userLogin: (req,res)=> {
        let errors = validationResult(req);
        
        if(errors.errors.length>0){
            res.render('user/login', {errors:errors.mapped(), old:req.body});
        }
        let userToLogin = db.User.findByEmail(req.body.email);
        
        if (req.session === undefined || req.session.userLogged === undefined) {
            req.session = {};
          }
          req.session.userLogged = userToLogin;
        // Si el que intenta ingresar está en nuestra base de datos
        if (userToLogin) {
            // Comparamos la contraseña que ingresó en el formulario de Log In y el guardado en nuestra BD
            let isOKPassword = bcryptjs.compareSync(req.body.Password, userToLogin.Password);
          
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
    
    register: (req, res) => {
      db.UserCategory.findAll().then((categoriaUsers) => {
        return res.render('user/register', { categoriaUsers:categoriaUsers });
      });
    },
    
    createUser: (req, res) => {
      const categoriaUsers = db.UserCategory.findAll();
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('user/register', {
          errors: errors.mapped(),
          old: req.body,
          categoriaUsers
        });
      }
    
      User.findByEmail(req.body.email)
        .then((userInDb) => {
          if (userInDb) {
            return res.render('user/register', {
              errors: {
                email: { msg: 'Este email ya está registrado' }
              },
              old: req.body,
              categoriaUsers
            });
          }
    
          return db.User.create({
            email: req.body.email,
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            telephone: req.body.telephone,
            image: req.file.filename,
            password: bcryptjs.hashSync(req.body.password, 10),
            password2: bcryptjs.hashSync(req.body.password2, 10),
            id_user_category: req.body.id_user_category
          })
            .then(() => res.redirect('/login'));
        });
    },
    
    olvido: (req, res) => {res.render('user/restablecer');
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
        })
    }
  }
module.exports = controladorLogin;