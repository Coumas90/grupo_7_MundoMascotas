// Si no tengo a nadie logueado no podria entrar a determinadas vistas

const authMiddleware = function (req, res, next){
    if(!req.session.userLogged){
        res.redirect('/login');
    }else{
        next();
    }
    
}

module.exports = authMiddleware;
