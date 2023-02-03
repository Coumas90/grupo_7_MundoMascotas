// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorDetalleProducto = require('../controllers/productDetailController');

router.get('/:id', controladorDetalleProducto.detalle); // seleccionar un producto 


module.exports = router;