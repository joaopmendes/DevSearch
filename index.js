const express = require("express")
const app = express()
const port = 9000
app.listen(port)
console.log("[i] Listening on port:", port)

app.get("/", function(req, res) {
  console.log("Connection established")
  return res.json({ status: "Okay" })
})
