const db = require("../database/models")
const Product = db.Product



const controladorAdmin = {
    administrar: (req, res) => {
		Product.findAll({association: "Marca"},
		{association: "Categoria"},
		{association: "Color"},
		{association: "Talle"},
		{association:"Peso"},
		{association: "Mascota"},
		{association: "Detalle Compra"})
		.then(listadoProductos =>{
			res.render('products/administrar',{listadoProductos});	
		})
    },
    creacion: (req, res) => {
		//res.render('products/creacionProductos');
		Promise.all([
			db.Categoria.findAll({
				association:"Product"
			}),
			db.Color.findAll({
				association:"Product"
			}),
			db.Marca.findAll({
				association:"Product"
			}),
			db.Mascota.findAll({
				association:"Product"
			}),
			db.Peso.findAll({
				association:"Product"
			}),
			db.Talle.findAll({
				association:"Product"
			}),
		])
		.then(([categorias,colores,marcas,mascotas,pesos,talles]) => {
			return res.render("products/creacionProductos",{categorias:categorias,colores:colores,marcas:marcas,mascotas:mascotas,pesos:pesos,talles:talles})
		});
	},

	store: function (req,res){
		db.Product.create({
			Nombre:req.body.Nombre,
			Descripcion:req.body.Descripcion,
			idMarcas:req.body.idMarcas,
			idCategoria:req.body.idCategoria,
			Precio:req.body.Precio,
			Descuento:req.body.Descuento,
			idColor:req.body.idColor,
			idTalle:req.body.idTalles,
			idPesos:req.body.idPesos,
			idMascota:req.body.idMascotas,
			imagen: req.file.filename
		});
		res.redirect("/")
	},

    editar: (req, res) => {
		let pedidoProducto = db.Product.findByPk(req.params.id);
		let pedidoColor = db.Color.findAll({
			association:"Product"
		});
		let pedidoPeso = db.Peso.findAll({
			association:"Product"
		});
		let pedidoTalle = db.Talle.findAll({
			association:"Product"
		});

		Promise.all([pedidoProducto,pedidoColor,pedidoPeso,pedidoTalle])
		.then(function([producto,color,peso,talle]){
			res.render('products/actualizacionProducto', {producto:producto,color:color,peso:peso,talle:talle})
		})
		// let idProducto = req.params.id;
		// let productoAEditar = products.filter(productoAEditar => productoAEditar.id == idProducto);
		// if (productoAEditar.length > 0) {
		// 	let productoEditado = productoAEditar[0];
		// 	res.render('products/actualizacionProducto', {productoEditado: productoEditado});
		// 	} else {
		// 		// Maneja el caso de que el arreglo esté vacío o que el elemento no tenga una propiedad 'name'
		// 		res.redirect("/products"); // Redirige a la lista de productos
		// 	}

  	},
  
	actualizar: (req,res)=> {
		db.Product.update({
			Nombre:req.body.Nombre,
			Descripcion:req.body.Descripcion,
			idMarcas:req.body.idMarcas,
			idCategoria:req.body.idCategoria,
			Precio:req.body.Precio,
			Descuento:req.body.Descuento,
			idColor:req.body.idColor,
			idTalle:req.body.idTalles,
			idPesos:req.body.idPesos,
			idMascota:req.body.idMascotas,
			imagen: req.file.filename
		}, {
			where: {
				idProducto: req.params.idProducto
			}
		});
		res.redirect("/")
	},

    eliminar: (req, res) => {
		// // Obtener el ID del producto a eliminar
		// let idProductoAEliminar = req.params.id;
		// // Filtrar la lista de productos para obtener sólo el producto a eliminar
		// let productosFiltrados = products.filter(producto => producto.id !== idProductoAEliminar);
		// // Sobreescribir la lista de productos con la lista filtrada (sin el producto a eliminar)
		// fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, ''));
		// // Redirigir a la lista de productos
		// res.redirect('/products');
	  },
	
	creaciontalles: (req,res)=> {
		res.render('products/talles')
	},

	storetalle: (req,res) => {
	 db.Talle.create({
		 	nombreTalla:req.body.nombreTalla,
		 });
		 res.redirect('/')
	},
	creacionmarcas: (req,res)=> {
		res.render('products/marcas')
	},

	storemarcas: (req,res) => {
	 db.Marca.create({
		 	nombreMarca:req.body.nombreMarca,
		 });
		 res.redirect('/')
	},
	creacioncolores: (req,res)=> {
		res.render('products/colores')
	},

	storecolores: (req,res) => {
	 db.Color.create({
		 	nombreColor:req.body.nombreColor,
		 });
		 res.redirect('/')
	},
	creacionmascotas: (req,res)=> {
		res.render('products/mascotas')
	},

	storemascotas: (req,res) => {
	 db.Mascota.create({
		 	NombreMascota:req.body.NombreMascota,
		 });
		 res.redirect('/')
	},
	creacionmediosdepago: (req,res)=> {
		res.render('products/medios_de_pago')
	},

	storemediosdepago: (req,res) => {
	 db.MedioDePago.create({
		 	NombreMedioDePago:req.body.NombreMedioDePago,
		 });
		 res.redirect('/')
	},
	creacionpesos: (req,res)=> {
		res.render('products/pesos')
	},

	storepesos: (req,res) => {
	 db.Peso.create({
		 	nombrePeso:req.body.nombrePeso,
		 });
		 res.redirect('/')
	},
	creacionenvios: (req,res)=> {
		res.render('products/envios')
	},

	storeenvios: (req,res) => {
	 db.Envio.create({
		 	NombreTipoDeEnvio:req.body.NombreTipoDeEnvio,
		 });
		 res.redirect('/')
	}

}

module.exports = controladorAdmin;