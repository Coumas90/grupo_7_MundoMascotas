const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiController = {
    listadoUsuarios: (req,res)=> {
        db.User.findAll({
            include: [
                {association: "User Category"},
                {association: "Compra"}
            ]
        })
        .then(usuarios => {
            return res.status(200).json({
                total: usuarios.length,
                data: usuarios,
                status:200
            })
        })
    },
    detalleUsuario: (req,res) => {
        db.User.findByPk (req.params.id)
        .then (usuario => {
            return res.status(200).json({
                data: usuario,
                status: 200
            })
        })
    },
    listadoProductos: (req,res)=> {
        db.Product.findAll({include: [
            {association: "Marca"},
		{association: "Categoria"},
		{association: "Color"},
		{association: "Talle"},
		{association:"Peso"},
		{association: "Mascota"},
		{association: "Detalle Compra"}
        ]})
        .then(productos => {
            return res.status(200).json({
                total: productos.length,
                data: productos,
                status:200
            })
        })
    },
    detalleProducto: (req,res) => {
        db.Product.findByPk (req.params.id)
        .then (producto => {
            return res.status(200).json({
                data: producto,
                status: 200
            })
        })
    }
}

module.exports = apiController