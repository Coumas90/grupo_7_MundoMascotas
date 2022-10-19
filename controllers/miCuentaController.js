const controladorMiCuenta = {
    crearProductos: (req, res)=> {res.render('creacionProductos')},
    actualizarProductos: (req, res)=> {res.render('actualizacionProductos')},
    carrito: (req, res)=> {res.render('productCart')},
    historialVentas: (req, res)=> {res.send('historialVentas')},
    historialCompras: (req, res)=> {res.send('historialCompras')},
    perfil: (req, res)=> {res.render('perfil')},
    administradorPerfiles: (req, res)=> {res.render('administradorPerfiles')},
};

module.exports = controladorMiCuenta;