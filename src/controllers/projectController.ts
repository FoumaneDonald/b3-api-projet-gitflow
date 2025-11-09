import { Request, Response, NextFunction } from "express";
import { GradeSchema } from "../models/ProjectModels"; // ✅ Schéma Zod importé
const { readDB, writeDB } = require("../utils/dbUtils");

const projectController = {
  // === Route d'accueil ===
  projectsHomes: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        message: "Welcome to the project home",
      });
    } catch (error) {
      next(error);
    }
  },

  // === Mise à jour de la note d'un projet ===
  updateGrade: (req: Request, res: Response) => {
    const { id } = req.params;

    // ✅ Étape 1 : Validation des données entrantes avec Zod
    const parseResult = GradeSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        error: "Invalid data",
        details: parseResult.error?.issues,
      });
    }

    const { grade } = parseResult.data;

    // ✅ Étape 2 : Lecture de la base de données
    const db = readDB();

    // ✅ Étape 3 : Recherche du projet
    const project = db.find((p: any) => p.id === id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // ✅ Étape 4 : Mise à jour de la note
    project.grade = grade;

    // ✅ Étape 5 : Sauvegarde dans db.json
    writeDB(db);

    // ✅ Étape 6 : Réponse finale
    res.status(200).json({
      message: "Project graded successfully",
      project,
    });
  },
};

module.exports = projectController;
