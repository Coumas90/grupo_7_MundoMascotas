// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorLogin = require('../controllers/loginController');

router.get('/', controladorLogin.login);
router.get('/registrate', controladorLogin.registrate);
router.get('/olvido', controladorLogin.olvido);

module.exports = router;