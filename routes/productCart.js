// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorCarrito = require('../controllers/productCartController');



router.get('/carritoCompras', controladorCarrito.carrito);
router.post('/agregarProductoCarrito/:id', controladorCarrito.agregarProducto);
router.delete('/descartarProductoCarrito/:id', controladorCarrito.descartarProducto);


module.exports = router;