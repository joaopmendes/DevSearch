const express = require("express")
var bodyParser = require('body-parser')
const routes = require(`./routes`)
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

const port = process.env.PORT || 3000

try {
  mongoose.connect(encodeURI(process.env.MONGO_STRING), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} catch (e) {
  console.log(e)
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(port)
