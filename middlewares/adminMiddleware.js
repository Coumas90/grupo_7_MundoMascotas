const adminMiddleware = function (req, res, next){
    if(req.session.userLogged.id_user !== 17){
        return res.redirect ('/');
    }
        next();
    }

module.exports = adminMiddleware;

