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
  projectGrade: (req: Request, res: Response) => {
    const { id } = req.params;
    const db = readDB();
    const project = db.find((p: any) => p.id === id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  },
};

module.exports = projectController;
