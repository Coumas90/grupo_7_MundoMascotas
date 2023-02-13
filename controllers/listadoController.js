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
    search: (req, res) => {
        let query = req.query.q;
        db.Product.findAll().then(function(products) {
          let productoBuscado = products.filter(function(product) {
            return product.name.includes(query);
          });
          if (productoBuscado.length > 0) {
            res.render('products/productoBuscado', { products: productoBuscado });
          } else {
            res.render('user/not-found', { 
              message: {
                class: 'error-message',
                title: 'No se encontraron resultados',
                desc: 'No se encontraron productos con el término de búsqueda ingresado.'
              }
            });
          }
        });
      }

}

module.exports = controladorListado;