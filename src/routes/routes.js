const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

const home = require("./home");
const competition = require("./competition");

router.get("/", home.get());
router.get("/competition/:id", competition.get());

module.exports = router;
