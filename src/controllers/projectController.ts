import { Request, Response } from "express";
import { z } from "zod";
import fs from "fs";

// 🔹 Lecture des projets depuis le fichier JSON
const db = JSON.parse(fs.readFileSync("src/data/db.json", "utf-8"));

// 🔹 Définition du schéma Zod pour valider les données
const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  status: z.string(),
  author: z.string(),
});

// 🔹 Contrôleur pour lister les projets
export const listProjects = (req: Request, res: Response) => {
  try {
    // Validation des projets à l’aide de Zod
    const projects = z.array(projectSchema).parse(db.projects);

    res.status(200).json({
      message: "Liste des projets récupérée avec succès",
      data: projects,
    });
  } catch (error) {
    res.status(400).json({
      message: "Erreur de validation des données",
      error,
    });
  }
};
