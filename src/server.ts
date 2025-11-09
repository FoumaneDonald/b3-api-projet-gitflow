import express from "express";
import cors from "cors";
import projectRoutes from "./routes/project"; // Assure-toi que le chemin est correct

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// === Route racine ===
app.get("/", (req, res) => {
  res.send("hello");
});

// === Routes projets ===
app.use("/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
