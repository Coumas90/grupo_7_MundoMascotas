const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models")

const controladorAdmin = {
    administrar: (req, res) => {
        res.render('products/administrar',{products});
    },
    creacion: (req, res) => {
		//res.render('products/creacionProductos');
		Promise.all([
			db.Categoria.findAll(),
			db.Color.findAll(),
			db.Marca.findAll(),
			db.Mascota.findAll(),
			db.Peso.findAll(),
			db.Talle.findAll(),
		])
		.then(([categorias,colores,marcas,mascotas,pesos,talles]) => {
			return res.render("products/creacionProductos",{categorias:categorias,colores:colores,marcas:marcas,mascotas:mascotas,pesos:pesos,talles:talles})
		});
	},

    // store: (req, res) => {
	// 	let ultimoProducto = products.pop();
	// 	products.push(ultimoProducto);
	// 	let productoNuevo = {
	// 	  id : ultimoProducto.id +1,
	// 	  nombre : req.body.nombre,
	// 	  descripción : req.body.descripción,
	// 	  marca : req.body.marca,
	// 	  categoria : req.body.categoria,
	// 	  precio : Number(req.body.precio),
	// 	  descuento : Number(req.body.descuento),
	// 	  imagen: req.file ? req.file.originalname : '',
	// 	  colores : req.body.colores,
	// 	  talles : req.body.talles,
	// 	  kilogramos : Number(req.body.kilogramos),
	// 	  seccion : req.body.seccion,
	// 	  mascota : req.body.mascota,
	// 	}
	// 	products.push(productoNuevo);
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));
	// 	res.redirect ('/administrar');
	//   },

	store: function (req,res){
		db.Producto.create({
			idProducto:req.body.idProducto,
			Nombre:req.body.Nombre,
			Descripcion:req.body.Descripcion,
			idMarcas:req.body.idMarcas,
			idCategoria:req.body.idCategoria,
			Precio:req.body.Precio,
			Descuento:req.body.Descuento,
			idColor:req.body.idColor,
			idTalle:req.body.idTalle,
			idPesos:req.body.idPesos,
			idMascota:req.body.idMascota
		});
		res.redirect("/")
	},

    editar: (req, res) => {
		let idProducto = req.params.id;
		let productoAEditar = products.filter(productoAEditar => productoAEditar.id == idProducto);
		if (productoAEditar.length > 0) {
			let productoEditado = productoAEditar[0];
			res.render('products/actualizacionProducto', {productoEditado: productoEditado});
			} else {
				// Maneja el caso de que el arreglo esté vacío o que el elemento no tenga una propiedad 'name'
				res.redirect("/products"); // Redirige a la lista de productos
			}
  	},
  
	actualizar: (req,res)=> {
		req.body.id = req.params.id;
		req.body.imagen = req.file ? req.file.filename : req.body.oldImage;
		let productoUpdate = productos.map(products =>{
			if(products.id == req.body.id){
				return products = req.body;
			}
			return products;
		})
		fs.writeFileSync(productsFilePath, JSON.stringify(productoUpdate, null, ''));
		res.redirect("/administrar");
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
	  },
	
	creaciontalles: (req,res)=> {
		res.render('products/talles')
	},

	storetalle: (req,res) => {
		db.Talle.create({
			NombreTalla: req.body.nombre,
		});
		res.redirect("products/administrar")
	}

}

module.exports = controladorAdmin;