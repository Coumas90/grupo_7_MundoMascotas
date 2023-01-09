const userLoggedMiddleware = function(req,res,next){
    //muestro los botones de log in y registrarse si no estoy logueado
    

    //si estoy logueado
    if(!req.session && req.session.userLogged){
        //muestro perfil y carrito de copras
        res.locals.isLogged = true;
    }else {
        res.locals.isLogged = false;
    }

    next();
}

module.exports = userLoggedMiddleware;