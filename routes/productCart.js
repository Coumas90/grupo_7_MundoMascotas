// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const controladorCarrito = require('../controllers/productCartController');

router.get('/carritoCompras', authMiddleware, controladorCarrito.carrito);
router.post('/agregarProductoCarrito/:id', authMiddleware, controladorCarrito.agregarProducto);
router.delete('/descartarProductoCarrito/:id', authMiddleware, controladorCarrito.descartarProducto);

module.exports = router;


