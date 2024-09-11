import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import tourRoutes from "./Routes/tourRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => console.error("DB Connection Error:", err));

app.use("/api", tourRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;
console.log(port);

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}...`);
});
