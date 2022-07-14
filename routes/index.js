const { Router } = require("express");
const users = require("./users");
const tickets = require('./tickets');
const router = Router();

function routerApi(app) {
    app.use('/api', router)
    router.use('/users', users);
    router.use('/tickets', tickets);
}


module.exports = routerApi;