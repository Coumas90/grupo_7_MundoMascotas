const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorUsuarios = require('../controllers/usersController');

//Definir todas las rutas, yendo del controlador al metodo que necesitamos
router.get('/', controladorIndex.index);



module.exports = router;