const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorMiCuenta = {
    crearProductos: (req, res)=> {res.render('products/creacionProductos')},
    actualizarProductos: (req, res)=> {res.render('products/actualizacionProductos')},
    carrito: (req, res)=> {res.render('products/productCart')},
    historialVentas: (req, res)=> {res.send('historialVentas')},
    historialCompras: (req, res)=> {res.send('historialCompras')},
    perfil: (req, res)=> {res.render('user/perfil')},
    administradorPerfiles: (req, res)=> {res.send('administradorPerfiles')},
};

module.exports = controladorMiCuenta;