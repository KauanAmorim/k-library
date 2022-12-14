import express from "express";
import "./config/database/connection.js";
import appRoutes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(appRoutes);

export default app;