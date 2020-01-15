const express = require("express")
var bodyParser = require('body-parser')
const routes = require(`./routes`)
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
try {
  mongoose.connect(encodeURI(`mongodb+srv://joaopmendes:teste123@semanaomnistack-no4x6.mongodb.net/omnistack?retryWrites=true&w=majority`), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} catch (e) {
  console.log(e)
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(3000)
