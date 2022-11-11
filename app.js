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
const rutasMiCuenta = require('./routes/miCuenta.js');
const rutasListado = require('./routes/listado.js');


// Uso recursos estaticos -> app.use(express.static('public))
app.use(express.static('public'));

//Le decimos a express que vamos a utilizar ejs
app.set('view engine', 'ejs');

// Levanto al servidor 3030
app.listen(3082, () => {console.log('Servidor corriendo')});

//Le indicamos a app.js que todas las rutas que inicien con x prefijo tienen que ir a x ruta
app.use('/', rutasIndex);
app.use('/productDetail',rutasProductDetail);
app.use('/productCart',rutasProductCart);
app.use('/login',rutasLogin);
app.use('/miCuenta', rutasMiCuenta);
app.use('/listado', rutasListado);