import { Router, Request, Response } from "express";

const router = Router();

// Base de données simulée
const db = [
  {
    id: "1",
    name: "Projet A",
    description: "Description du projet A",
    grade: null,
  },
  {
    id: "2",
    name: "Projet B",
    description: "Description du projet B",
    grade: null,
  },
];

// === ENDPOINT: Permettre à un professeur de noter un projet ===
router.post("/:id/grade", (req: Request, res: Response) => {
  const { id } = req.params;
  const { grade } = req.body;

  const project = db.find((p) => p.id === id);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  project.grade = grade;
  res.json({ message: "Project graded successfully", project });
});

export default router;
