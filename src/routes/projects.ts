const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");

router.get("/", projectController.projectsHomes);
// router.get("/course", projectController.register);

module.exports = router;
