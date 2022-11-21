// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');

//Constante con la extension de express router
const router = express.Router();

const controladorDetalleProducto = require('../controllers/productDetailController');
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images/Productos'))
        // donde va a ir a imagen fisicamente en /uploads
        // el destination indica donde va a ir a parar  y el Filename con que nombre
    },
    filename : function(req, file, cb){
        const newFileName = file.filename + '-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
        // genero el nombre con el cual se va a guardar el archivo  y datenow para que tenga nombre unico e irrepetible
    }
})
const upload = multer({storage})

router.get('/', controladorDetalleProducto.detalle);
router.get('/create', controladorDetalleProducto.creacion); // obtener un producto creado
router.post('/', upload.single('imagen_producto'), controladorDetalleProducto.store);

//rutas para la edicion de productos
router.get('/:id/editar',controladorDetalleProducto.editar);
router.put('/:id/editar',controladorDetalleProducto.storeedit);

//rutas para eliminar productos



module.exports = router;