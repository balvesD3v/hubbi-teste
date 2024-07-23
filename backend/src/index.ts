import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app = express();

// Configuração do CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
