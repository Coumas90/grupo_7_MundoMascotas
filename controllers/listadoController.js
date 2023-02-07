const db = require("../database/models")

const controladorListado = {
    index: (req, res) => {
        db.Product.findAll()
        .then(function(productos){
            res.render('products/index',{productos})
        })},
// Como hacer la ruta por url
    detalleanimal: (req,res) => {
        db.Product.findAll().then(animales => {
            let filtroanimal = req.params.animal;
            let mascota = animales.filter(Product => Product.id_pet == filtroanimal);
            res.render('products/listadoProductos', {filtrados: mascota});
        });
    },
    detallecategoria: (req,res) => {
        db.Product.findAll().then(categorias => {
            let filtrocategoria = req.params.categoria;
            let categoria = categorias.filter(Product => Product.id_category == filtrocategoria);
            res.render('products/listadoProductos', {filtrados: categoria});
        });
    },
    detallemarca: (req,res) => {
        db.Product.findAll().then(marcas => {
            let filtromarca = req.params.marca;
            let marca = marcas.filter(Product => Product.id_brand == filtromarca);
            res.render('products/listadoProductos', {filtrados: marca});
        });
    },
}

module.exports = controladorListado;