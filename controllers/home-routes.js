const router = require("express").Router();
const { User } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll();
    const users = dbUserData.map((user) =>
      user.get({ plain: true })
    );

    console.log(users);

    res.render("home");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
