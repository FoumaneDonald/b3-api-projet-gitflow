import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Chemin vers ton fichier db.json
const dbPath = path.join(__dirname, "../data/db.json");

// Fonction pour lire la base de données
const readDB = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data); // retourne un tableau de projets
};

// Fonction pour écrire dans la base de données
const writeDB = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
};

// === ENDPOINT: Permettre à un professeur de noter un projet ===
router.post("/:id/grade", (req: Request, res: Response) => {
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
});

export default router;
