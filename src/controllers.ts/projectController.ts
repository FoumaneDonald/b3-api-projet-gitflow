import * as fs from 'fs/promises';
import * as path from 'path';

// Le fichier db.json sera à la racine du projet
const DB_PATH = path.join(process.cwd(), 'db.json');

/**
 * [Issue #5] Supprime un projet par son ID du fichier db.json.
 * @param projectId L'ID du projet à supprimer.
 * @returns true si la suppression est réussie, false si le projet n'existe pas.
 */
export async function deleteProjectById(projectId: string): Promise<boolean> {
    try {
        // 1. Lire les données actuelles
        const data = await fs.readFile(DB_PATH, 'utf-8');
        let projects = JSON.parse(data);

        // 2. Trouver l'index du projet à supprimer
        // Nous allons utiliser 'filter' au lieu de 'splice' pour la simplicité et la sécurité
        const initialLength = projects.length;
        
        // Créer un nouveau tableau excluant le projet avec l'ID spécifié
        const updatedProjects = projects.filter((p: any) => p.id !== projectId);

        // 3. Vérifier si un projet a été effectivement supprimé
        if (updatedProjects.length === initialLength) {
            return false; // Projet non trouvé
        }

        // 4. Réécrire le fichier db.json avec les données mises à jour
        await fs.writeFile(DB_PATH, JSON.stringify(updatedProjects, null, 2), 'utf-8');

        return true; 

    } catch (error) {
        console.error('Erreur lors de la suppression du projet:', error);
        // Laissez la route gérer le statut 500
        throw new Error('Erreur interne du serveur.');
    }
}