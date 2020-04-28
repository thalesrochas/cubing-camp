const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/comp/:id", (req, res) => {
  let camp = true;
  res.render("competition", { camp });
});

module.exports = router;
