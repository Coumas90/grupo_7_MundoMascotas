// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorLogin = require('../controllers/loginController');


router.get('/login', controladorLogin.login);
router.get('/login/olvido', controladorLogin.olvido);
router.get('/login/registrate', controladorLogin.registrate);

module.exports = router;