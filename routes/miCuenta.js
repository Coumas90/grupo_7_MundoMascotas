// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorMiCuenta = require('../controllers/miCuentaController');

//Definir todas las rutas, yendo del controlador al metodo que necesitamos
router.get('/MiCuenta', controladorMiCuenta.perfil);

module.exports = router;