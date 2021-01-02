const dbConfig = require("../db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.questions = require("./question.model")(mongoose);
db.users = require("./user.model")(mongoose);
db.answers = require("./answer.model")(mongoose);

module.exports = db;

