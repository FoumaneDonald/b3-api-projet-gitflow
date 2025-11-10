import { z } from "zod";

// 1. Définition du Schéma de Validation pour le corps de la requête POST
export const ProjectSubmissionSchema = z.object({
  studentName: z
    .string()
    .min(3, "Le nom de l'étudiant doit contenir au moins 3 caractères.")
    .trim(),

  course: z.string().min(2, "Le nom du cours est requis.").trim(),

  githubUrl: z
    .string()
    .url("L'URL GitHub doit être un lien valide.")
    .min(1, "L'URL GitHub est requise."),
});

// 2. Définition du Type TypeScript à partir du schéma Zod
// Ceci assure une forte typisation dans le reste de votre code.
export type ProjectSubmission = z.infer<typeof ProjectSubmissionSchema>;

// 3. Schéma pour la structure finale du projet (avec l'ID et le grade non encore défini)
// Ceci est la structure qui sera stockée dans db.json
export const ProjectSchema = ProjectSubmissionSchema.extend({
  id: z.string().uuid(),
  grade: z.number().nullable().default(null), // Peut être null car non noté initialement
});

export type Project = z.infer<typeof ProjectSchema>;
