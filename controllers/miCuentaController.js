const controladorMiCuenta = {
    crearProductos: (req, res)=> {res.render('products/creacioProductos');},
    actualizarProductos: (req, res)=> {res.render('products/actualizacionProductos');},
    carrito: (req, res)=> {res.render('products/productCart');},
    historialVentas: (req, res)=> {res.render('historialVentas');},
    historialCompras: (req, res)=> {res.render('historialCompras');},
    perfil: (req, res)=> {res.render('perfil');},
    administradorPerfiles: (req, res)=> {res.render('administradorPerfiles');},
};

module.exports = controladorMiCuenta;