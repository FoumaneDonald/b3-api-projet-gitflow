import express from "express";
import routes from "./routes";
import projectRoutes from "./routes";

const app = express();
app.get("/", (req, res) => {
  res.send("🚀 Serveur Express opérationnel !");
});

app.use(express.json());
app.use("/", routes);
app.use("/projects", projectRoutes);

export default app;
