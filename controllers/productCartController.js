const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorCarrito = {
    carrito: (req, res)=> {res.render('products/productCart');},
};

module.exports = controladorCarrito;