// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorIndex = require('../controllers/indexController');

//Definir todas las rutas, yendo del controlador al metodo que necesitamos
router.get('/', controladorIndex.index);

module.exports = router;