const express = require("express")
const routes = require(`./routes`)
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
try {
  mongoose.connect(encodeURI(`mongodb+srv://joaopmendes:teste123@semanaomnistack-no4x6.mongodb.net/test?retryWrites=true&w=majority`), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} catch (e) {
  console.log(e)
}
app.use(routes)

app.listen(9000)
