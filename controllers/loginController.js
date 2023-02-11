// Aca llamamos a las validaciones para poder enviarlas a la vista
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs'); 
const db = require("../database/models")

const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    userLogin: (req, res) => {
      let errores = validationResult(req);
    
      if (errores.errors.length > 0) {
          res.render('user/login', {
              errores: errores.array(), 
              old: req.body
          });
      }
    
      db.User.findByEmail(req.body.email)
        .then(user => {
          if (!user) {
            res.render('user/login', {
              errores: [{
                msg: "No se encuentra este email en nuestra base de datos"
              }],
              old: req.body
            });
          } else {
            let isOKPassword = bcryptjs.compareSync(req.body.password, user.password);
            if (isOKPassword) {
              req.session.userLogged = user;
              return res.redirect ('/login/perfil');
            } else {
              res.render('user/login', {
                errores: [{
                  msg: "Contraseña inválida"
                }],
                old: req.body
              });
            }
          }
        })
        .catch(err => {
          console.error(err);
          res.send("Hubo un error procesando su solicitud. Por favor, intente de nuevo más tarde.");
        });
    },
    register: (req, res) => {
        return res.render('user/register');
      },
    createUser: (req, res) => {
      let errores = validationResult(req);
      console.log(errores)
      if(!errores.isEmpty()){
          res.render("user/register", {
            errores: errores.array(),
            old: req.body,
          });
        } else {
        db.User.findByEmail(req.body.email).then((userInDB) => {
          if(userInDB){
            return res.render("user/register", {
              errores: [{
                msg:"Este email ya esta registrado",
                param: "email"
                }],
              old: req.body,
            });
          } else {
            let userToCreate = {
              name: req.body.name,
              surname: req.body.surname,
              dni: req.body.dni,
              telephone: req.body.telephone,
              email: req.body.email,
              password: bcryptjs.hashSync(req.body.password, 10),
              password2: bcryptjs.hashSync(req.body.password, 10),
              image: req.file.filename,
            };
            db.User.create(userToCreate).then(() => {
              return res.redirect("/login");
            });
          }
        });
      }
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
    perfil: (req,res) =>{
      res.render('user/perfil',{
        user: req.session.userLogged,
      });
  },
    logOut: (req,res) => {
    req.session.destroy();
    return res.redirect ('/');
}
  }
module.exports = controladorLogin;