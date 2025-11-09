const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.projectsHomes);
// router.get("/course", projectController.register);
router.put("/:id/grade", projectController.updateGrade);

module.exports = router;
