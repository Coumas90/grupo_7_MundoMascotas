// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

// Constante para traer el metodo path de express
const path = require('path');

//Traemos el middleware para loguearse
const guestMiddleware = require('../middlewares/guestMiddleware');
const checkSession = require('../middlewares/checkSession');
const authMiddleware = require('../middlewares/authMiddleware');


//Requerimos multer ya que vamos a querer almacenar las fotos de perfil
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,'./public/images/users')
        // donde va a ir a imagen fisicamente en /uploads
        // el destination indica donde va a ir a parar  y el Filename con que nombre
    },
    filename : function(req, file, cb){
        const avatar = file.filename + '-' + Date.now() + path.extname(file.originalname);
        cb(null, avatar);
        // genero el nombre con el cual se va a guardar el archivo  y datenow para que tenga nombre unico e irrepetible
    }
});
const uploadPhoto = multer({storage});

// requerimos la funcion body de express validator para hacer uso de la misma en el controlador. Body lo que hace es dejarnos trar el name del formulario para poder usarlo
const {body} = require ('express-validator');

//Validaciones del Log In
const validacionesLogIn = [
    body("email")
    .notEmpty().withMessage("El campo email es obligatorio").bail()
    .isEmail().withMessage("Ingresar email valido"),
    body("password")
    .notEmpty(). withMessage("El campo contraseña es obligatorio").bail()
    .isLength(min=8),
];

// Validaciones del register
const validacionesRegistro = [
    body("email")
    .isEmail().withMessage("Ingresar email valido").bail()
    .notEmpty().withMessage("El campo email es obligatorio"),
    body("password")
    .notEmpty(). withMessage("El campo contraseña es obligatorio").bail()
    .isLength(min=8),
    body("name")
    .notEmpty().withMessage("El campo nombre es obligatorio").bail()
    .isLength(min=2),
    body("surname")
    .notEmpty().withMessage("El campo apellido es obligatorio").bail()
    .isLength(min=2),
    body("telephone").notEmpty().withMessage("El campo telefono es obligatorio"),
    body("dni").notEmpty().withMessage("El campo dni es obligatorio"),
    body("image").custom((value,{req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif','.jpeg'];
        if(!file){
            throw new Error ('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ('Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}');
            }
        }
        return true;
    })
];


const controladorLogin = require('../controllers/loginController');
// Las validaciones se implementan en aquellas rutas que procesan el pedido, es decir, en las rutas POST

router.get('/',guestMiddleware,  controladorLogin.login);
router.post('/',validacionesLogIn ,controladorLogin.userLogin);
router.get('/register', guestMiddleware, controladorLogin.register);
router.post('/register', uploadPhoto.single('image'),validacionesRegistro , controladorLogin.createUser);
router.get('/olvido',guestMiddleware,  controladorLogin.olvido);
router.post('/olvido', controladorLogin.restablecer);
router.get('/perfil',authMiddleware, checkSession, controladorLogin.perfil);
router.get('/perfil/logout', controladorLogin.logOut);


module.exports = router;