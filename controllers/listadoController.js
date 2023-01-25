const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models")

const controladorIndex = {
    index: (req, res) => {res.render('products/listadoProductos',{products});},

// Como hacer la ruta por url
    detalleanimal: (req,res) => {
        let filtroanimal = req.params.filtro
        let animales = products.filter(product => product.mascota == filtroanimal)
        res.render('products/listadoProductos',{filtrados:animales})
},
    detallecategoria: (req,res) => {
        let filtrocategoria = req.params.filtro
        let categorias = products.filter(product => product.categoria == filtrocategoria)
        res.render('products/listadoProductos',{filtrados:categorias})
},
    detallemarca: (req,res) => {
        let filtromarca = req.params.filtro
        let marca = products.filter(product => product.marca == filtromarca)
        res.render('products/listadoProductos',{filtrados:marca})
},
    detalleProducto: (req,res)=>{
        let filtroproducto = req.params.filtro
        let productoelegido = products.filter (product => product.id == filtroproducto)
        res.render('products/listadoProductos',{filtrados:productoelegido})
    }
}

module.exports = controladorIndex;