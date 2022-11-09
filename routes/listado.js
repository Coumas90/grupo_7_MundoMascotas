// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorListado = require('../controllers/listadoController');

//Definir todas las rutas, yendo del controlador al metodo que necesitamos
router.get('/', controladorListado.index);
router.get('/marca/:filtro', controladorListado.detallemarca);
router.get('/animal/:filtro', controladorListado.detalleanimal);
router.get('/categoria/:filtro', controladorListado.detallecategoria);


module.exports = router;