const express = require ('express');
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const controladorCarrito = require('../controllers/productCartController');

router.get('/', authMiddleware, controladorCarrito.carrito);
router.post('/agregarProductoCarrito/:id', controladorCarrito.agregarProducto);

module.exports = router;