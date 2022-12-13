const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorIndex = {
    index: (req, res) => {
        res.render('products/index',{products : products});
    },
    search: (req, res) => {
        res.render('products/results',{product : product.name});
    },
};

module.exports = controladorIndex;