// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorListado = require('../controllers/listadoController');



//Definir todas las rutas, yendo del controlador al metodo que necesitamos

//No esta funcionando
router.get('/', controladorListado.index);
router.get('/marca/:marca', controladorListado.detallemarca);
router.get('/animal/:animal', controladorListado.detalleanimal);
router.get('/categoria/:categoria', controladorListado.detallecategoria);
router.get('/search', controladorListado.search);

module.exports = router;