const express = require ('express');
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const controladorCarrito = require('../controllers/productCartController');
const { descartarProducto } = require('../controllers/productCartController');

router.get('/', authMiddleware, controladorCarrito.carrito);
router.get('/ordenCompra/:id', authMiddleware, controladorCarrito.ordenCompra);
router.delete('/descartarProducto/:id', authMiddleware, controladorCarrito.descartarProducto);

module.exports = router;