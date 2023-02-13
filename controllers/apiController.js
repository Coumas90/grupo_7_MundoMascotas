const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiController = {
    listadoUsuarios: (req,res)=> {
        db.User.findAll({})
        .then((users) => {
            const count = users.length;
            const mappedUsers = users.map((user) => ({
                id_user: user.id_user,
                name: user.name,
                surname:user.surname,
                email: user.email,
                dni:user.dni,
                telephone: user.telephone,
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
        db.User.findByPk(req.params.id, {
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
        db.Product.findAll({})
        .then((productos) => {
            const count = productos.length;
            const mappedProducts = productos.map((product) => ({
                id_product: product.id_product,
                name: product.name,
                description: product.description,
                id_category: product.id_category,
                id_brand:product.id_brand,
                price:product.price,
                image:product.image,
                detail: `localhost:3000/api/products/${product.id_product}`
            }));
            return res.status(200).json({
                count,
                products:mappedProducts,
                status:200,
            });
        });
    },
    detalleProducto: (req,res) => {
        db.Product.findByPk(req.params.id)
            .then((producto) => {
              if (!producto) {
                return res.status(404).json({
                  message: "Producto no encontrado",
                  status: 404,
                });
              }
              const image = `/images/productImage/${producto.filename}`;
              return res.status(200).json({
                ...producto.dataValues,
                image,
                status: 200,
              });
            });
        },
    
    countByCategory: (req,res) => {
    db.Product.findAll({
            include: [{
                model: db.Category,
                as: 'Categoria'
            }]
        })
        .then((productos) => {
            let countByCategory = {};
            productos.forEach(productos => {
                productos.categories.forEach(category => {
                    countByCategory[category.name_category] = (countByCategory[category.name_category] || 0) + 1;
                });
            });
            return res.status(200).json({
                countByCategory,
                status:200
            })
        })
    }
}

module.exports = apiController