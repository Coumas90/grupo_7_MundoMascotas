const db = require("../database/models")

const controladorAdmin = {
    administrar: (req, res) => {
		db.Product.findAll()
		.then(listadoProductos =>{
			res.render('products/administrar',{listadoProductos});	
		})
    },
    creacion: (req, res) => {
		//res.render('products/creacionProductos');
		Promise.all([
			db.Category.findAll(),
			db.Color.findAll(),
			db.Brand.findAll(),
			db.Pet.findAll(),
			db.Weight.findAll(),
			db.Size.findAll(),
		])
		.then(([categories,colors,brands,pets,weights,sizes]) => {
			return res.render("products/creacionProductos",{categories:categories,colors:colors,brands:brands,pets:pets,weights:weights,sizes:sizes})
		});
	},

	store: function (req,res){
		db.Product.create({
			name:req.body.name,
			description:req.body.description,
			id_brand:req.body.id_brand,
			id_category:req.body.id_category,
			price:req.body.price,
			discount:req.body.discount,
			id_color:req.body.id_color,
			id_size:req.body.id_size,
			id_weight:req.body.id_weight,
			id_pet:req.body.id_pet,
			image: req.file.filename
		});
		res.redirect("/")
	},

    editar: (req, res) => {
		let pedidoProducto = db.Product.findByPk(req.params.id);
		let pedidoColor = db.Color.findAll();
		let pedidoPeso = db.Weight.findAll();
		let pedidoTalle = db.Size.findAll();
		let pedidoMarca = db.Brand.findAll();
		let pedidoCategorias = db.Category.findAll();
		let pedidoMascotas = db.Pet.findAll();

		Promise.all([pedidoProducto,pedidoColor,pedidoPeso,pedidoTalle,pedidoMarca,pedidoCategorias,pedidoMascotas])
		.then(function([products,colors,weights,sizes,brands,categories,pets]){
			res.render('products/actualizacionProducto', {products:products,colors:colors,weights:weights,sizes:sizes,brands:brands,categories:categories,pets:pets})
		})
  	},
  
	actualizar: (req,res)=> {

		db.Product.update({
			name:req.body.name,
			description:req.body.description,
			id_brand:req.body.id_brand,
			id_category:req.body.id_category,
			price:req.body.price,
			discount:req.body.discount,
			id_color:req.body.id_color,
			id_size:req.body.id_size,
			id_weight:req.body.id_weight,
			id_pet:req.body.id_pet,
			image: req.file.filename
		}, {
			where: {
				id_product: req.params.id
			}
		});
		res.redirect("/administrar")
	},

    eliminar: (req, res) => {
		db.Product.destroy({
			where:{
				id_product:req.params.id
			}
		})
		res.redirect("/administrar")
	  },
	
	creaciontalles: (req,res)=> {
		res.render('products/talles')
	},

	storetalle: (req,res) => {
	 db.Size.create({
		name_size:req.body.name_size,
		 });
		 res.redirect('/administrar')
	},
	creacionmarcas: (req,res)=> {
		res.render('products/marcas')
	},

	storemarcas: (req,res) => {
	 db.Brand.create({
		name_brand:req.body.name_brand,
		 });
		 res.redirect('/administrar')
	},
	creacioncolores: (req,res)=> {
		res.render('products/colores')
	},

	storecolores: (req,res) => {
	 db.Color.create({
		name_color:req.body.name_color,
		 });
		 res.redirect('/administrar')
	},
	creacionmascotas: (req,res)=> {
		res.render('products/mascotas')
	},

	storemascotas: (req,res) => {
	 db.Pet.create({
		name_pet:req.body.name_pet,
		 });
		 res.redirect('/administrar')
	},
	creacionmediosdepago: (req,res)=> {
		res.render('products/medios_de_pago')
	},

	storemediosdepago: (req,res) => {
	 db.PaymentMethod.create({
		name_payment_method:req.body.name_payment_method,
		 });
		 res.redirect('/administrar')
	},
	creacionpesos: (req,res)=> {
		res.render('products/pesos')
	},

	storepesos: (req,res) => {
	 db.Weight.create({
		name_weight:req.body.name_weight,
		 });
		 res.redirect('/administrar')
	},
	creacionenvios: (req,res)=> {
		res.render('products/envios')
	},

	storeenvios: (req,res) => {
	 db.DeliveryMethod.create({
		name_id_delivery_method:req.body.name_id_delivery_method,
		 });
		 res.redirect('/administrar')
	}

}

module.exports = controladorAdmin;