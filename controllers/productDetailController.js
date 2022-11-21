const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorDetalleProducto = {
    detalle: (req, res)=> {res.render('products/productDetail')
    },

    creacion: (req, res) => {res.render('products/creacionProductos');
	},

    store: (req, res) => {
		const file = req.file;

	// if(!file){
	// 	const error= new Error('Por favor seleccione un archivo')
	// 	error.httpStatusCode =400
	// 	return next (error)
	// }

		let productoNuevo = {
			//id : Math.random() *1000,
			id : Date.now(),
			nombre : req.body.nombre,
            descripción : req.body.descripción,
            marca : req.body.marca,
            categoria : req.body.categoria,
			precio : Number(req.body.precio),
			descuento : Number(req.body.descuento),
            colores : req.body.colores,
            talles : req.body.talles,
			kilogramos : Number(req.body.kilogramos),
            seccion : req.body.seccion,
			mascota : req.body.mascota,
		}

		products.push(productoNuevo);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));

		res.redirect ('/products');
},
	editar: (req,res)=>{res.render('products/actualizacionProducto');},
	storeedit: (req,res)=> {
	console.log(req.file);

		let productoActualizado = {
			//id : Math.random() *1000,
			id : Date.now(),
			nombre : req.body.nombre,
            descripción : req.body.descripción,
            marca : req.body.marca,
            categoria : req.body.categoria,
			precio : Number(req.body.precio),
			descuento : Number(req.body.descuento),
            colores : req.body.colores,
            talles : req.body.talles,
			kilogramos : Number(req.body.kilogramos),
            seccion : req.body.seccion,
			mascota : req.body.mascota,
		}

		products.push(productoActualizado);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));

		res.redirect ('/products');
	},
}

module.exports = controladorDetalleProducto;