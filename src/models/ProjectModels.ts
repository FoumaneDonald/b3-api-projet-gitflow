import { z } from "zod";

// ✅ Schéma Zod pour un projet
export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  grade: z.number().min(0).max(20).optional(),
});

// ✅ Schéma spécifique pour la mise à jour de la note
export const GradeSchema = z.object({
  grade: z.number().min(0).max(20),
});

// ✅ Type TypeScript dérivé du schéma
export type Project = z.infer<typeof ProjectSchema>;
