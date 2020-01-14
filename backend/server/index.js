require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect(
  `
mongodb+srv://${process.env.DB_USERNAME}:<${process.env.DB_PASSWORD}>@semanaomnistack-no4x6.mongodb.net/semanaomnistack?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const port = 9000

app.listen(port)
console.log("[i] Listening on port:", port)

app.get("/", function(req, res) {
  console.log("Connection established with", req.hostname)
  return res.json({ status: "Okay" })
})
