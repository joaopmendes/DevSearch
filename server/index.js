const express = require("express")
const app = express()
const port = 9000
app.listen(port)
app.use(express.json)
console.log("[i] Listening on port:", port)

app.get("/", function(req, res) {
  console.log("Connection established")
  return res.json({ status: "Okay" })
})
