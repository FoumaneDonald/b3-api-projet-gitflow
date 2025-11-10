import { Request, Response, NextFunction } from "express";
import { findProjectsByCourse } from "../services/dbService";
import { ZodError } from "zod";
import { filterProjectsByCourseSchema } from "../models/projectModel";

const projectController = {
  projectsHomes: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        message: "Welcome to the project home",
      });
    } catch (error) {
      next(error);
    }
  },

  getProjectsByCourseHandler: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      // ÉTAPE 1: VALIDER LES PARAMÈTRES DE LA REQUÊTE
      const { params } = filterProjectsByCourseSchema.parse({
        params: req.params,
      });

      const projects = await findProjectsByCourse(params.courseName);

      // Il est préférable de renvoyer 200 OK avec un tableau vide
      // si aucun projet n'est trouvé, plutôt qu'une erreur 404.
      return res.status(200).json(projects);
    } catch (error) {
      // On vérifie si l'erreur est bien une erreur de validation Zod
      if (error instanceof ZodError) {
        // Si c'est le cas, on renvoie une erreur 400 avec les détails.
        // .flatten() est une méthode très utile de Zod pour formater les erreurs.
        return res.status(400).json({
          message: "Les paramètres de la requête sont invalides.",
          errors: error.flatten().fieldErrors,
        });
      }
      // Si une erreur se produit (ex: le fichier db.json est inaccessible),
      // on la passe au middleware de gestion d'erreurs d'Express.
      return next(error);
    }
  },
};

module.exports = projectController;
