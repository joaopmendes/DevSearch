const express = require("express");
var bodyParser = require("body-parser");
const routes = require(`./routes`);
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

try {
  mongoose.connect(encodeURI(process.env.MONGO_STRING), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (e) {
  console.log(e);
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port);
