const controladorMiCuenta = {
    crearProductos: (req, res)=> {res.render('creacioProductos')},
    actualizarProductos: (req, res)=> {res.render('actualizacionProductos')},
    carrito: (req, res)=> {res.render('productCart')},
    historialVentas: (req, res)=> {res.render('historialVentas')},
    historialCompras: (req, res)=> {res.render('historialCompras')},
    perfil: (req, res)=> {res.render('perfil')},
    administradorPerfiles: (req, res)=> {res.render('administradorPerfiles')},
};


module.exports = controladorLogin;