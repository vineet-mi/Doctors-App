// routes/patientRoutes.js
import express from "express";
const router = express.Router();
// const patientController = require("../controllers/patientController.js");
import {
  registerpatient,
  loginpatient,
  getpatients,
  getpatientById,
  updatepatient,
  deletepatient
} from "../controllers/patientControllers.js";
// Create a new patient
router.post("/registerpatient", registerpatient);
router.post("/loginpatient", loginpatient);

// Get a list of patients
router.get("/getPatients", getpatients);

// Get a single patient by ID
router.get("getPatient/:id", getpatientById); // Add this route

// Update a patient by ID
router.put("update/:id", updatepatient);

// Delete a patient by ID
router.delete("delete/:id", deletepatient);

export default router;
