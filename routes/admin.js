// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorAdmin = require('../controllers/adminController');

router.get('/administrar', controladorAdmin.administrar);

module.exports = router;