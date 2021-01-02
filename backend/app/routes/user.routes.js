module.exports = app => {
    const users = require('../controller/user.controller');

    var router = require("express").Router();

    router.post('/authenticate', users.authenticate);
    router.post('/register', users.register);
    router.get('/getall', users.allUser);
    router.get('/getcurrent', users.getCurrent);
    router.get('/get/:id', users.getById);
    router.put('/update/:id', users.update);
    router.delete('/delete/:id', users._delete);

    app.use('/api/users', router);
}