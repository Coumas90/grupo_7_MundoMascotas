const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiController = {
    listadoUsuarios: (req,res)=> {
        db.User.findAll({})
        .then((users) => {
            const count = users.length;
            const mappedUsers = users.map((user) => ({
                id_user: user.id_user,
                name: '${user.name} ${user.surname}',
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
        const { id_user } = req.params;
        db.User.findByPk(id_user, {
          attributes: {
            exclude: ["password", "password2","id_user_category"],
          },
        })
          .then((usuario) => {
            if (!usuario) {
              return res.status(404).json({
                message: "Usuario no encontrado",
                status: 404,
              });
            }
            const image = `/images/userImage/${usuario.filename}`;
            return res.status(200).json({
              ...usuario.dataValues,
              image,
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
                    countByCategory[category.name_category] = (countByCategory[category.name_category] || 0) + 1;
                });
            });

            let products = productos.map(product => ({
                id_product: product.id_product,
                name: product.name,
                description: product.description,
                categories: product.categories.map(category => category.name_category),
                detail: `localhost:3000/api/products/${product.id_product}`
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