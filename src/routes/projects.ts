const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
import { filterProjectsByCourseSchema } from "../models/projectModel";

router.get("/", projectController.projectsHomes);
router.get("/course/:courseName", projectController.getProjectsByCourseHandler);
// router.get("/course", projectController.register);

module.exports = router;
