const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('./app/_helper/jwt');
const errorHandler = require('./app/_helper/error-handler');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwt());
const db = require('./app/models');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Forum application." });
});

require('./app/routes/question.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/answer.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});