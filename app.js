// Requerir Express
const express = require('express');
const cors = require('cors');
//requerimos session
const session = require('express-session');
// Ejectuto Express
const app = express();

// Requerir path
const path = require('path');

const cookies = require('cookie-parser');





//Creamos estos dos entornos para poder trabajar con los datos que se envian desde el formulario, para poder capturar esta informacion
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookies());
app.use(session({
    secret:"Mensaje secreto",
    resave: false,
    saveUninitialized: false,
}));
app.use(cors());

//Creo contantes que guardan las rutas
const rutasLogin = require('./routes/login.js');
const rutasProductCart = require('./routes/productCart.js');
const rutasProductDetail = require('./routes/productDetail.js');
const rutasListado = require('./routes/listado.js');
const rutasAdministrar = require('./routes/admin.js');
const rutasApi = require('./routes/api.js')

//Necesario para poder utilizar los metodos put y delete en HTTP
const methodOverride = require ('method-override');



// Uso recursos estaticos -> app.use(express.static('public))
app.use(express.static('public'));

//Le decimos a express que vamos a utilizar ejs
app.set('view engine', 'ejs');

// Levanto al servidor
app.listen(3002, () => {console.log('Servidor corriendo')});

//Le indicamos a app.js que todas las rutas que inicien con x prefijo tienen que ir a x ruta
app.use('/', rutasListado);
app.use('/productDetail',rutasProductDetail);
app.use('/productCart',rutasProductCart);
app.use('/login',rutasLogin);
app.use('/administrar', rutasAdministrar);
app.use('/api',rutasApi)

//Necesario para poder utilizar los metodos put y delete en HTTP
app.use(methodOverride('_method'));

// configuramos session como middleware a nivel aplicacion


//Error 404 nos va a redirigir a una vista creada para este error
app.use((req,res,next)=>{
    res.status(404).render('user/not-found');
});

