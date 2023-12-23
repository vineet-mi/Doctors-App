import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import doctorRoutes from "./routes/doctorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import patientsRoutes from "./routes/patientRoutes.js";
import receptionistRoutes from "./routes/receptionistRoutes.js"
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());

// Middleware for logging
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// er configuration for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer();
// app.use(upload.any());

app.use("/api/doctors", doctorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/patients", patientsRoutes);
app.use("/api/receptions", receptionistRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
      console.log("Database connected");
    });
  })
  .catch((error) => {
    console.log(error);
  });
