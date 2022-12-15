// Si tengo a un usuario logueado no voy a poder abrir las vistas que lo tengan como middleware

function guestMiddleware(req,res,next){
    if(req.session.userLogged){
        return res.redirect('../views/user/profile');
    }
    next();
}

module.exports = guestMiddleware;
