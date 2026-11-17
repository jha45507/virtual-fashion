
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Virtual Fashion API is running",
        environment: process.env.NODE_ENV ?? "development"
    });
});

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});