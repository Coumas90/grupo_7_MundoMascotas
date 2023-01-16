const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorDetalleProducto = {
    detalle: (req, res)=> {
		// let product = products.find(req.params.id);
		res.render('products/productDetail',{product : products.find(product => product.id == req.params.id)})
    },
	
    creacion: (req, res) => {res.render('products/creacionProductos');
	},

    store: (req, res) => {
		//const file = req.file;

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

	editar: (req, res) => {
		let idProducto = req.params.id;
  
		let productoAEditar = products.filter(productoAEditar => productoAEditar.id == idProducto);
		if (productoAEditar.length > 0) {
			let productoEditado = productoAEditar[0];
			res.render('products/editarProducto', {producto: productoAEditar});
			} else {
				// Maneja el caso de que el arreglo esté vacío o que el elemento no tenga una propiedad 'name'
				res.redirect("/products"); // Redirige a la lista de productos
			}
  	},
  
		
	actualizar: (req,res)=> {
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

	detalleSKU: (req,res) => {
        let filtroSKU = req.params.filtro
        let SKU = products.find(product => product.id == filtroSKU)
        res.render('products/productDetail',{producto:SKU})
	},

	eliminar: (req, res) => {
		// Obtener el ID del producto a eliminar
		let idProductoAEliminar = req.params.id;
		// Filtrar la lista de productos para obtener sólo el producto a eliminar
		let productosFiltrados = products.filter(producto => producto.id !== idProductoAEliminar);
		// Sobreescribir la lista de productos con la lista filtrada (sin el producto a eliminar)
		fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, ''));
		// Redirigir a la lista de productos
		res.redirect('/products');
	  }

}

module.exports = controladorDetalleProducto;