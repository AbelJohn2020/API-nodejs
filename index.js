require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT;
const username = process.env.NAME;
const password = process.env.PASSWORD;
const db = process.env.DB;

const uri = `mongodb+srv://${username}:${password}@cluster0.izid1.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => console.log('Database conected'))
    .catch(e => console.log(e));

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
app.get('port')


// routes
router(app);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})