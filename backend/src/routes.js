const { Router } = require(`express`)
const routes = Router()
const DevController = require("./Controllers/DevController")
routes.post("/devs", DevController.store)
routes.get("/devs/search", DevController.findNearbyDevs)
routes.get("/devs", DevController.index)
routes.delete("/devs/:github_username", DevController.destroy)
module.exports = routes
