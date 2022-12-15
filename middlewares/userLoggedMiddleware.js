function userLoggedMiddleware (req,res,next){
    //muestro los botones de log in y registrarse si no estoy logueado
    res.locals.isLogged = false;

    //si estoy logueado
    if(req.session && session.userLogged){
        //muestro perfil y carrito de copras
        res.locals.isLogged = true;
    }

    next();
}

module.exports = userLoggedMiddleware;