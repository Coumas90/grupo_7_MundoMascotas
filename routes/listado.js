// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorListado = require('../controllers/listadoController');
const controladorDetalleProducto = require('../controllers/productDetailController');

//Definir todas las rutas, yendo del controlador al metodo que necesitamos

//No esta funcionando
router.get('/', controladorListado.index);

router.get('/marca/:filtro', controladorListado.detallemarca);
router.get('/animal/:filtro', controladorListado.detalleanimal);
router.get('/categoria/:filtro', controladorListado.detallecategoria);

//Detalle productos
router.get('/:id', controladorDetalleProducto.vista);



module.exports = router;