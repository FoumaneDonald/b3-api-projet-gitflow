import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Chemin vers le fichier db.json
const dbPath = path.join(__dirname, "../data/db.json");

// Lire la base de données
const readDB = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data); // retourne un tableau de projets
};

// Écrire dans la base de données
const writeDB = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
};

// === Endpoint pour donner les détails d’un projet ===
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const db = readDB();
  const project = db.find((p: any) => p.id === id);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.json(project);
});

// === Endpoint pour noter un projet ===
router.post("/:id/grade", (req: Request, res: Response) => {
  const { id } = req.params;
  const { grade } = req.body;

  const db = readDB();
  const project = db.find((p: any) => p.id === id);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  project.grade = grade;
  writeDB(db);

  res.json({ message: "Project graded successfully", project });
});

export default router;
