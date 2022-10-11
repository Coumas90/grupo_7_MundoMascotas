// Requerir Express
const express = require ('express');
// Requerir path
const path = require('path');

// Ejectuto Express
const app = express();

// Uso recursos estaticos -> app.use(express.static('public))
app.use(express.static(path.join(__dirname, '/public')));

// Levanto al servidor 3030
app.listen(3030, () => {console.log('Servidor corriendo')});

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/views/index.html'));});

app.get('/register', (req, res)=> {res.sendFile(__dirname + '/views/register.html');});

app.get('/productCart', (req, res)=> {res.sendFile(__dirname + '/views/productCart.html');});

app.get('/login', (req, res)=> {res.sendFile(__dirname + '/views/login.html');});
