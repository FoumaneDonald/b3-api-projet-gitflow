import express from "express";
import projectRoutes from "./routes/project"; // <-- note le .js ici si tu compiles avec ts-node

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour lire le JSON dans le corps des requêtes
app.use(express.json());

// Utiliser les routes du projet
app.use("/api/projects", projectRoutes);

// Route test de base
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
