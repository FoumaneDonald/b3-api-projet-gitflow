import express from "express";
import { listProjects } from "../controllers/projectController";

const router = express.Router();

// Route pour lister les projets
router.get("/", listProjects);

export default router;
