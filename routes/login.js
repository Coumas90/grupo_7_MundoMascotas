// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

//Requerimos multer ya que vamos a querer almacenar las fotos de perfil
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images/users'))
        // donde va a ir a imagen fisicamente en /uploads
        // el destination indica donde va a ir a parar  y el Filename con que nombre
    },
    filename : function(req, file, cb){
        const newPictureName = file.filename + '-' + Date.now() + path.extname(file.originalname);
        cb(null, newPictureName);
        // genero el nombre con el cual se va a guardar el archivo  y datenow para que tenga nombre unico e irrepetible
    }
})
const uploadPhoto = multer({storage})


const controladorLogin = require('../controllers/loginController');

router.get('/', controladorLogin.login);
router.post('/', controladorLogin.userlogin);
router.get('/register', controladorLogin.register);
router.post('/register', uploadPhoto.single('client_picture'),controladorLogin.createregister);
router.get('/olvido', controladorLogin.olvido);
router.post('/olvido', controladorLogin.restablecer);


module.exports = router;