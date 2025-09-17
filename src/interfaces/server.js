import express from "express";
import tiqueteraRoutes from "../infrastucture/routes/tiqueteraRoutes.js"

const app = express();

app.use(express.json());
app.use("/tiquetera", tiqueteraRoutes);

export default app;
