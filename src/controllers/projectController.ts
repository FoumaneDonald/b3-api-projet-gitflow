const { readDB, writeDB } = require("../utils/dbUtils");
import { Router, Request, Response } from "express";

const projectController = {
  projectsHomes: async (req: any, res: any, next: any) => {
    try {
      res.status(200).json({
        message: "Welcome to the project home",
      });
    } catch (error) {
      next(error);
    }
  },
  updateGrade: (req: Request, res: Response) => {
    const { id } = req.params;
    const { grade } = req.body;

    const db = readDB(); // lire les projets depuis db.json
    const project = db.find((p: any) => p.id === id); // rechercher le projet
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    project.grade = grade;
    writeDB(db); // sauvegarder la note dans db.json

    res.json({ message: "Project graded successfully", project });
  },
};

module.exports = projectController;
