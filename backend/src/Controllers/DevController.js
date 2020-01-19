const helpers = require(`../helpers`);
const Dev = require("../models/dev");
class DevController {
  /**
   * List all the devs
   */
  static async index(req, res) {
    return res.json({ data: await Dev.find(), code: 200 });
  }

  /**
   * List nearby devs by tech
   */
  static async findNearbyDevs(req, res) {
    const { latitude, longitude , techs } = req.query;
    const techArray = techs.split(",").map(curr => curr.trim());
    await Dev.find(
      {
        techs: techArray.length > 0 ? {
          $in: techArray
        } : {},
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude]
            },
            $maxDistance: 10000
          }
        }
      },
      (err, devs) => {
        if (err) return res.json({ error: 404, errorMessage: err });
        return res.json({ data: devs, code: 200 });
      }
    );
  }
  /**
   * Registers a new dev in our db
   */
  static async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    console.log(github_username, techs, latitude, longitude);
    // Used to not duplicate devs
    let duplicatedDev = await Dev.findOne({ github_username });
    if (!duplicatedDev) {
      try {
        var { name, login, avatar_url, bio } = await helpers.fetchGithubUserData(github_username);
      } catch (err) {
        return await res.json({ code: 404, errorMessage: "Error tryng to get your github profile" });
      }

      if (!name) name = login;
      const techArray = techs.split(",").map(curr => curr.trim());

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };
      let dev;
      try {
        dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          location,
          techs: techArray
        });
      } catch (error) {
        return res.json({
          code: 500,
          errorMessage: "Internal Error",
          specific: error
        });
      }

      return res.json({ code: 203, dev });
    }
    return res.json({
      code: 400,
      errorMessage: "There is already a Dev with that github username. Please try again."
    });
  }

  /**
   * Destroy dev in our db
   */
  static async destroy(req, res) {
    const { github_username } = req.params;
    await Dev.remove({ github_username }, err => {
      if (err) return res.json({ code: 500, errorMessage: `Could not remove the user ${github_username}` });
      return res.json({ code: 200 });
    });
  }
  static async update(req, res) {
    const { github_username } = req.params;
    const { ...rest } = req.body;
    await Dev.findOneAndUpdate({ github_username }, { ...rest }, (err, dev, res) => {
      if (err) return res.json({ code: 500, errorMessage: `Could not find the user ${github_username}` });
      return res.json({ code: 200, data: dev });
    });
  }
}

module.exports = DevController;
