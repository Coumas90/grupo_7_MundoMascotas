const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiController = {
    listadoUsuarios: (req,res)=> {
        db.User.findAll({})
        .then((usuarios) => {
            const count = usuarios.length;
            const mappedUsers = usuarios.map((user) => ({
                id: user.id,
                name: '${user.nombre} ${user.apellido}',
                email: user.email,
                detail: 'localhost:3000/api/users/${user.id}'
            }));
            return res.status(200).json({
                count,
                users:mappedUsers,
                status:200,
            });
        });
    },
    detalleUsuario: (req,res) => {
        const { id } = req.params;
        db.User.findByPk(id, {
          attributes: {
            exclude: ["Password", "Password2","idUsersCategory"],
          },
        })
          .then((usuario) => {
            if (!usuario) {
              return res.status(404).json({
                message: "Usuario no encontrado",
                status: 404,
              });
            }
            const userImage = `/images/userImage/${usuario.filename}`;
            return res.status(200).json({
              ...usuario.dataValues,
              userImage,
              status: 200,
            });
          });
      },
      listadoProductos: (req,res)=> {
        db.Product.findAll({
            include: [{
                model: db.Category,
                as: 'categories'
            }]
        })
        .then(productos => {
            let countByCategory = {};
            productos.forEach(product => {
                product.categories.forEach(category => {
                    countByCategory[category.name] = (countByCategory[category.name] || 0) + 1;
                });
            });

            let products = productos.map(product => ({
                id: product.id,
                name: product.name,
                description: product.description,
                categories: product.categories.map(category => category.name),
                detail: `localhost:3000/api/products/${product.id}`
            }));

            return res.status(200).json({
                total: products.length,
                countByCategory,
                products,
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