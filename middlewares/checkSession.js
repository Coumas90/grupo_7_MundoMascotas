function checkSession (req, res, next){
    if (req.session.userLogged) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = checkSession;
