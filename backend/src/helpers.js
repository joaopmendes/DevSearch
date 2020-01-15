const axios = require(`axios`)

const fetchGithubUserData = async userName => {
  const githubResponse = await axios.get(`https://api.github.com/users/${userName}`)
  return githubResponse.data
}

module.exports = {
  fetchGithubUserData
}
