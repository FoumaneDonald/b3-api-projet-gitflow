// Importations de style ES Modules pour TypeScript
import express, { Request, Response } from "express";
import cors from "cors";

// --- Importation des routes (à ajouter plus tard) ---
// import { router as exampleRouter } from './routes/exampleRoute';

const app = express();
// Le PORT est déjà défini par l'environnement ou 3000
const PORT = process.env.PORT || 3000;

// Middleware (Logiciel intermédiaire)
app.use(cors()); // Autorise les requêtes de domaines différents
app.use(express.json()); // Permet à Express de lire le corps des requêtes JSON

// --- 1. ROUTE DE BASE CORRIGÉE ---
// On utilise 'Request' et 'Response' de express pour le typage TypeScript
// On ajoute le paramètre 'req' (requête) qui manquait.
app.get("/", (req: Request, res: Response) => {
  // Le code de réponse par défaut est 200 (OK), donc on utilise .send()
  res.send("Bienvenue sur l'API b3-api-projet-gitflow !");
});

// --- 2. MONTAGE D'UN ROUTEUR EXTERNE (Pour structurer le projet) ---
// Ceci est comment vous ajouteriez un routage plus tard, ex: /api/v1/exemple
// app.use('/api/v1', exampleRouter);


// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});