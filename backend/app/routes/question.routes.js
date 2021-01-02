module.exports = app => {
    const questions = require('../controller/question.controller');
  
    var router = require("express").Router();
  
    router.post("/create", questions.create);

    router.get("/findall", questions.findAll);

    router.get("/find/:id", questions.findOne);

    router.delete("/delete/:id", questions.delete);

    router.delete("/deleteall", questions.deleteAll);
  
    app.use('/api/questions', router);
};