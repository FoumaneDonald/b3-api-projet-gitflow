import fs from "fs";
import path from "path";

// Chemin vers le fichier db.json
const dbPath = path.join(__dirname, "../data/db.json");

// Lire la base de données
const readDB = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data); // retourne un tableau de projets
};

// Écrire dans la base de données
const writeDB = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
};

module.exports = {
  readDB,
  writeDB,
};
