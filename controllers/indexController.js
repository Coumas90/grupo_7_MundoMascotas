const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorIndex = {
    index: (req, res) => {
        res.render('products/index',{products : products});
    },
    search: (req, res) => {
        //res.render('products/results',{product : product.name});
        let busquedaUsuario = req.query.search;
        
        let productoBuscado = [];
        for(let i = 0; i < product.length; i++){
            if(product[i].name.includes(busquedaUsuario))
            productoBuscado.push(product[i]);
        }
        res.render('productoBuscado',{productoBuscado : productoBuscado});
    },
};

module.exports = controladorIndex;