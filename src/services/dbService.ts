import { promises as fs } from "fs";
import path from "path";
import { Project } from "../models/projectModel";

// Chemin vers votre base de données JSON
// L'utilisation de path.join est plus robuste que les chemins relatifs comme ../../
const dbPath = path.join(process.cwd(), "src", "data", "db.json");

/**
 * Lit tous les projets depuis le fichier db.json.
 * @returns {Promise<Project[]>} Un tableau de tous les projets.
 */
async function readProjectsFromDb(): Promise<Project[]> {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // Si le fichier n'existe pas ou est vide, retournez un tableau vide.
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      // Maintenant, à l'intérieur de ce 'if', TypeScript sait que 'error'
      // est un objet avec une propriété 'code'.
      console.log(
        "Le fichier db.json n'a pas été trouvé. Initialisation avec un tableau vide.",
      );
      return [];
    }
    // Pour d'autres erreurs (ex: JSON malformé), propagez l'erreur.
    throw new Error("Impossible de lire la base de données de projets.");
  }
}

/**
 * Trouve tous les projets pour un cours spécifique (insensible à la casse).
 * @param {string} courseName - Le nom du cours à filtrer.
 * @returns {Promise<Project[]>} Un tableau des projets correspondants.
 */
export async function findProjectsByCourse(
  courseName: string,
): Promise<Project[]> {
  const projects = await readProjectsFromDb();

  // On utilise toLowerCase() pour rendre la recherche insensible à la casse
  const lowercasedCourseName = courseName.toLowerCase();

  const filteredProjects = projects.filter(
    (project) => project.course.toLowerCase() === lowercasedCourseName,
  );

  return filteredProjects;
}
