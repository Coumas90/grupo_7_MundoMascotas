// Siempre en cada hoja de ruteo hay que requerir express
const express = require ('express');
const path = require('path');
//Constante con la extension de express router
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './public/images/Productos')
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

const controladorAdmin = require('../controllers/adminController');

router.get('/', controladorAdmin.administrar);
// Crear un nuevo producto
router.get('/creacion', controladorAdmin.creacion); 
router.post('/creacion', upload.single('imagen'), controladorAdmin.store);
//rutas para la edicion de productos
router.get('/:id/editar', controladorAdmin.editar);
router.put('/:id/editar', upload.single('imagen'), controladorAdmin.actualizar);
//rutas para eliminar productos
router.delete('/delete/:id', controladorAdmin.eliminar);

//rutas para formularios de tablas
router.get('/tallas', controladorAdmin.creaciontalles);
router.post('/tallas', controladorAdmin.storetalle);
router.get('/marcas', controladorAdmin.creacionmarcas);
router.post('/marcas', controladorAdmin.storemarcas);
router.get('/colores', controladorAdmin.creacioncolores);
router.post('/colores', controladorAdmin.storecolores);
router.get('/mascotas', controladorAdmin.creacionmascotas);
router.post('/mascotas', controladorAdmin.storemascotas);
router.get('/mediosdepago', controladorAdmin.creacionmediosdepago);
router.post('/mediosdepago', controladorAdmin.storemediosdepago);
router.get('/pesos', controladorAdmin.creacionpesos);
router.post('/pesos', controladorAdmin.storepesos);
router.get('/envios', controladorAdmin.creacionenvios);
router.post('/envios', controladorAdmin.storeenvios);


module.exports = router;