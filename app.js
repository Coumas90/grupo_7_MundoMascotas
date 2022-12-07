// Requerir Express
const express = require ('express');
// Requerir path
const path = require('path');

// Ejectuto Express
const app = express();

//Creo contantes que guardan las rutas
const rutasIndex = require('./routes/index.js');
const rutasLogin = require('./routes/login.js');
const rutasProductCart = require('./routes/productCart.js');
const rutasProductDetail = require('./routes/productDetail.js');
const rutasPerfil = require('./routes/perfil.js');
const rutasListado = require('./routes/listado.js');
//Necesario para poder utilizar los metodos put y delete en HTTP
const methodOverride = require ('method-override');


// Uso recursos estaticos -> app.use(express.static('public))
app.use(express.static('public'));

//Le decimos a express que vamos a utilizar ejs
app.set('view engine', 'ejs');

// Levanto al servidor 3030
app.listen(37, () => {console.log('Servidor corriendo')});

//Le indicamos a app.js que todas las rutas que inicien con x prefijo tienen que ir a x ruta
app.use('/', rutasIndex);
app.use('/productDetail',rutasProductDetail);
app.use('/productCart',rutasProductCart);
app.use('/login',rutasLogin);
app.use('/listado', rutasListado);
app.use('/perfil', rutasPerfil);

//Creamos estos dos entornos para poder trabajar con los datos que se envian desde el formulario, para poder capturar esta informacion
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Necesario para poder utilizar los metodos put y delete en HTTP
app.use(methodOverride('_method'));

//Error 404 nos va a redirigir a una vista creada para este error
app.use((req,res,next)=>{
    res.status(404).render('user/not-found');
});
