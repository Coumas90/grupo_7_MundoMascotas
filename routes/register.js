// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorRegister = require('../controllers/registerController');


router.get('/register', controladorRegister.registro);

module.exports = router;