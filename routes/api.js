// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/users', apiController.listadoUsuarios);
router.get('/users/:id', apiController.detalleUsuario);
router.get('/products', apiController.listadoProductos);
router.get('/products/:id', apiController.detalleProducto);
router.get('/products/category', apiController.countByCategory);


module.exports = router;