import { z } from "zod";
import id from "zod/v4/locales/id.js";

export const projectSchema = z.object({
  id: z.uuid(),
  studentName: z.string().min(3),
  course: z.string(),
  githubUrl: z.string(),
  grade: z.number().int().positive(),
});

export type Project = z.infer<typeof projectSchema>;

// Schéma pour GET /projects/course/:courseName
export const filterProjectsByCourseSchema = z.object({
  params: z.object({
    courseName: projectSchema.shape.course,
  }),
});
