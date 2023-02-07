const db = require("../database/models")

const controladorListado = {
    index: (req, res) => {
        db.Product.findAll()
        .then(function(productos){
            res.render('products/index',{productos})
        })},
// Como hacer la ruta por url
    detalleanimal: (req,res) => {
        let filtroanimal = req.params.filtro
        let animales = Product.filter(Product => Product.idMascota == filtroanimal)
        res.render('products/listadoProductos',{filtrados:animales})
},
    detallecategoria: (req,res) => {
        let filtrocategoria = req.params.filtro
        let categorias = Product.filter(Product => Product.idCategoria == filtrocategoria)
        res.render('products/listadoProductos',{filtrados:categorias})
},
    detallemarca: (req,res) => {
        let filtromarca = req.params.filtro
        let marca = Product.filter(Product => Product.idMarca == filtromarca)
        res.render('products/listadoProductos',{filtrados:marca})
},
}

module.exports = controladorListado;