const User = require ('../database/models/Users')

function userLoggedMiddleware (req,res,next){
    //muestro los botones de log in y registrarse si no estoy logueado
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.email;
    let userFromCookie = User. findByFiels('email', emailInCookie);

//si tengo a alguien en la cookie lo busco en la DB y si coincide lo logueo.
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;