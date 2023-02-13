const db = require("../database/models")

const controladorDetalleProducto = {
    detalle: (req, res)=> {
		db.Product.findByPk(req.params.id)
		.then(producto=>{
		res.render('products/productDetail',{producto})
    })

}
}

module.exports = controladorDetalleProducto;