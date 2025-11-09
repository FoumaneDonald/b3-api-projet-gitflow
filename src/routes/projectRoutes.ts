import { Router, Request, Response } from 'express';
// Assurez-vous d'avoir le bon chemin vers votre fichier de contrôleur
import { deleteProjectById } from '../controllers/projectController'; 

const router = Router();

// ... (Gardez ici toutes les autres routes déjà implémentées)

// [Issue #5] Route DELETE /projects/:id
router.delete('/projects/:id', async (req: Request, res: Response) => {
    // Récupérer l'ID depuis les paramètres d'URL
    const projectId = req.params.id;

    try {
        const deleted = await deleteProjectById(projectId);

        if (deleted) {
            // Statut 204 No Content: Succès pour une suppression sans corps de réponse
            return res.status(204).send(); 
        } else {
            // Statut 404 Not Found: L'ID n'a pas été trouvé
            return res.status(404).json({ message: `Soumission ID ${projectId} non trouvée.` });
        }
    } catch (error) {
        // Statut 500: Erreur interne du serveur
        return res.status(500).json({ message: 'Erreur lors de la tentative de suppression.' });
    }
});

export default router;