const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.projectsHomes);
// router.get("/course", projectController.register);

module.exports = router;
