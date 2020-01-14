const { Router } = require(`express`)
const helpers = require(`./helpers`)
const routes = Router()

routes.post("/devs", async function(req, res) {
  console.log(req.body)
  //   const { github_username } = req.body

  //   //   console.log(helpers.fetchGithubUserData(github_username))
  //   return res.json({ github_username })
})

module.exports = routes
