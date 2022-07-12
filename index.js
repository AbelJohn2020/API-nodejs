require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const port = process.env.PORT;

const app = express();

// permite al servidor recibir y entender formatos json
app.use(express.json());

// settings
app.set('port', port);
// app.set('json spaces', 2); // esto es para que las llaves esten aisladas 


// middlewares
// esto es para la consola y el comportamiento del servidor
app.use(morgan('dev'));
// esto es para entender alguna aplicacion externa (css, html, js) y nos esta enviando datos de un formulario
app.use(express.urlencoded({extended: false}));

//port
app.get('port')


// routes
router(app);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})