const db = require("../database/models")

const controladorCarrito = {
    // Muestra la vista del carrito de compras
    carrito: (req, res) => {
        // Inicializa el carrito de compras si aún no existe
        if (!req.session.carrito) {
            req.session.carrito = [];
        }
        // Obtiene los productos del carrito de la sesión
        const carrito = req.session.carrito || [];
        res.render("products/productCart", { carrito });
      },
    
    // ordenCompra: (req, res) => {
    //   const idProducto = req.params.id;
    //   let carrito = req.session.carrito || [];
  
    //   // Obtiene el producto a partir de la base de datos
    //   db.Producto.findByPk(idProducto).then(producto => {
    //     if (producto) {
    //       carrito.push(producto);
    //       req.session.carrito = carrito;
    //       res.redirect("productCart");
    //     } else {
    //       res.render("error", {
    //         message: "Producto no encontrado"
    //       });
    //     }
    //   });
    // },

    ordenCompra: async function (req, res) {
      let ordenCompra = await db.ordenCompra.findByPk(req.params.id, {
        include: db.ordenCompra.OrdenItems,
      });
      // res.send(order);
      return res.render("ordenCompra", { ordenCompra });
    },
    // Elimina un producto del carrito
    descartarProducto: (req, res) => {
      const idProducto = req.params.id;
      let carrito = req.session.carrito || [];
      carrito = carrito.filter(product => product.id != idProducto);
      req.session.carrito = carrito;
      res.redirect("productCart");
    }
  };
  
  module.exports = controladorCarrito;