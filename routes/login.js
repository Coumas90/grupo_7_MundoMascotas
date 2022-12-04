// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorLogin = require('../controllers/loginController');

router.get('/', controladorLogin.login);
router.post('/', controladorLogin.userlogin);
router.get('/register', controladorLogin.register);
router.post('/register', controladorLogin.createregister);
router.get('/olvido', controladorLogin.olvido);
router.post('/olvido', controladorLogin.restablecer);


module.exports = router;