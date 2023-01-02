// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorPerfil = require('../controllers/perfilController');

const authMiddleware = require('../middlewares/authMiddleware');
//Definir todas las rutas, yendo del controlador al metodo que necesitamos
router.get('/', authMiddleware, controladorPerfil.perfil);

router.get('/logout', authMiddleware, controladorPerfil.logOut);


module.exports = router;