// Si tengo a un usuario logueado no voy a poder abrir las vistas que lo tengan como middleware

const guestMiddleware = function(req, res, next){
    if (!req.session && req.session.userLogged) {
        res.redirect('../views/user/profile');
      }else{
        next();
      }
    }      

module.exports = guestMiddleware;
