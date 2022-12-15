// Si no tengo a nadie logueado no podria entrar a determinadas vistas

function authMiddleware(req,res,next){
    if(!req.session.userLogged){
        return res.redirect('../views/user/login');
    }
    next();
}

module.exports = authMiddleware;
