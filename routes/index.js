const { Router } = require("express");
const users = require("./users");
const router = Router();

function routerApi(app) {
    app.use('/api', router)
    router.use('/users', users);
}


module.exports = routerApi;