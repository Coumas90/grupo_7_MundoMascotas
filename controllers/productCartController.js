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
        res.render("products/productCart", { producto });
        },
    // Agrega un producto al carrito
    agregarProducto: (req, res) => {
        // Obtiene el ID del producto a agregar
        const idProducto = req.params.id;
        // Obtiene los productos del carrito de la sesión
        let carrito = req.session.carrito || [];
        // Busca el producto a agregar en la lista de productos
        const producto = products.find(product => product.id == idProducto);
        // Si el producto existe, lo agrega al carrito
        if (producto) {
          carrito.push(producto);
          req.session.carrito = carrito;
        }
        // Redirige al usuario al carrito de compras
        res.redirect("/productCart");
      },
    // Elimina un producto del carrito
    descartarProducto: (req, res) => {
        // Obtiene el ID del producto a eliminar
        const idProducto = req.params.id;
        // Obtiene los productos del carrito de la sesión
        let carrito = req.session.carrito || [];
        // Filtra el carrito para obtener solo los productos que no son el producto a eliminar
        carrito = carrito.filter(product => product.id != idProducto);
        // Actualiza el carrito en la sesión
        req.session.carrito = carrito;
        // Redirige al usuario al carrito de compras
        res.redirect("/productCart");
        },
    };
    
    module.exports = controladorCarrito;