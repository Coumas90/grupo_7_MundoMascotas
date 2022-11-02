const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorDetalleProducto = {
    detalle: (req, res)=> {res.render('products/productDetail')
    },
};

module.exports = controladorDetalleProducto;