// Aca llamamos a las validaciones para poder enviarlas a la vista
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs'); 
const db = require("../database/models")

const controladorLogin = {
    login: (req, res)=> {res.render('user/login')},
    userLogin: (req,res)=> {
        let errores = validationResult(req);

        if(errores.errors.length>0){
            res.render('user/login', {
              errores:errores.array(), 
              old:req.body});
        }
        let userToLogin = db.User.findByEmail(req.body.email);
        
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
              error: {
                email: { msg: 'No se encuentra este email en nuestra base de datos' }
              }
            });
          }
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
    // // Intento 2
    //   if(errores.errors.length >0){
    //     return res.render("user/register",{
    //       errors: errores.mapped(),
    //       oldData:req.body,
    //       categoriaUsers:categoriaUsers
    //     });
    //   }else{
    //     //evitar que se registren con un email que ya esta en la BD
    //     User.findOne({ where: { email: req.body.email } }).then((userInDb) => {
    //       if(userInDb){
    //         return res.render ("user/register",{
    //           errors:{
    //             email:{
    //               msg: "Este email ya esta registrado",
    //             },
    //           },
    //           oldData:req.body,
    //           categoriaUsers:categoriaUsers
    //         });
    //       }
    
    //       //Si el password no coincide con la confirmacion
    //       if(req.body.password !== req.body.password2){
    //         return res.render ("user/register",{
    //           errors:{
    //             password2:{
    //               msg: "Contraseña no coincide con la ingresada",
    //             },
    //           },
    //           oldData:req.body,
    //           categoriaUsers:categoriaUsers
    //         });
    //       }
    
    //       const image = req.file ? req.file.filename : "default.png";
    //       let userToCreate ={
    //         name: req.body.name,
    //         surname: req.body.surname,
    //         dni:req.body.dni,
    //         telephone: req.body.telephone,
    //         email:req.body.email,
    //         password: bcryptjs.hashSync(req.body.password,10),
    //         image: image,
    //         id_user_category: req.body.id_user_category,
    //       };
    //       User.create(userToCreate).then(() => {
    //         return res.redirect("user/login");
    //       });
    //     });
    //   }
    // },
      
    //   // Intento 1
    // //   const categoriaUsers = db.UserCategory.findAll();
    // //   const errors = validationResult(req);
    // //   if (!errors.isEmpty()) {
    // //     return res.render('user/register', {
    // //       errors: errors.mapped(),
    // //       old: req.body,
    // //       categoriaUsers
    // //     });
    // //   }
    
    // //   User.findByEmail(req.body.email)
    // //     .then((userInDb) => {
    // //       if (userInDb) {
    // //         return res.render('user/register', {
    // //           errors: {
    // //             email: { msg: 'Este email ya está registrado' }
    // //           },
    // //           old: req.body,
    // //           categoriaUsers
    // //         });
    // //       }
    
    // //       return db.User.create({
    // //         email: req.body.email,
    // //         name: req.body.name,
    // //         surname: req.body.surname,
    // //         dni: req.body.dni,
    // //         telephone: req.body.telephone,
    // //         image: req.file.filename,
    // //         password: bcryptjs.hashSync(req.body.password, 10),
    // //         password2: bcryptjs.hashSync(req.body.password2, 10),
    // //         id_user_category: req.body.id_user_category
    // //       })
    // //         .then(() => res.redirect('/login'));
    // //     });
    // // },
    
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