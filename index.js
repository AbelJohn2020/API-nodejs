require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT;

const app = express();

// settings
app.set('port', port);
// app.set('json spaces', 2); // esto es para que las llaves esten aisladas 


// middlewares
// esto es para la consola y el comportamiento del servidor
app.use(morgan('dev'));
// esto es para entender alguna aplicacion externa (css, html, js) y nos esta enviando datos de un formulario
app.use(express.urlencoded({extended: false}));
// permite al servidor recibir y entender formatos json
app.use(express.json());

//port
const getPort = app.get('port')


// routes
app.get('/', (req, res) => {
    res.json({'id': 1, name: 'Abel'})
})

// starting the server
app.listen(getPort, () => {
    console.log(`Server on port ${port}`);
})