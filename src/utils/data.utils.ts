import * as fs from 'fs/promises';
import * as path from 'path';

// Définition du chemin absolu du fichier de données
const DB_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');

/**
 * Lit le contenu du fichier db.json et retourne un objet JavaScript.
 * @returns Le contenu de db.json sous forme d'objet.
 */
export async function readDbFile(): Promise<any> {
    try {
        const data = await fs.readFile(DB_FILE_PATH, 'utf-8');
        // Si le fichier est vide, retourne un tableau vide par défaut
        return data.trim() ? JSON.parse(data) : { projects: [] };
    } catch (error: any) {
        // Crée le fichier si nécessaire (première exécution)
        if (error.code === 'ENOENT') {
             console.warn("db.json n'existe pas. Création avec structure par défaut.");
             await writeDbFile({ projects: [] });
             return { projects: [] };
        }
        console.error("Erreur lors de la lecture de db.json:", error);
        throw new Error("Impossible de lire la base de données.");
    }
}

/**
 * Écrit un objet JavaScript dans le fichier db.json.
 * @param data L'objet à écrire (qui doit contenir la clé 'projects').
 */
export async function writeDbFile(data: any): Promise<void> {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        await fs.writeFile(DB_FILE_PATH, jsonString, 'utf-8');
    } catch (error) {
        console.error("Erreur lors de l'écriture dans db.json:", error);
        throw new Error("Impossible d'écrire dans la base de données.");
    }
}
```eof

### 2. Créer et Coller le Code de la Route

**Action :** Exécutez la commande pour créer le fichier de route, puis collez-y le code :

```bash
code src/routes/projects.routes.ts