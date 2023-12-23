// routes/doctorRoutes.js
import express from "express";
import {
  registerDoctor,
  loginDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  toggleStatus,
} from "../controllers/doctorControllers.js";
import {
  getReceptionsByDoctorId,
  registerReceptionist,
} from "../controllers/receptionistControllers.js";
import { getLiveByDoctorId } from "../controllers/liveQueueController.js";
import { getpatientById } from "../controllers/patientControllers.js";
import { getVitalsDoctorId } from "../controllers/vitalsController.js";

const router = express.Router();

// Create a new doctor
router.post("/registerdoctor", registerDoctor);
router.post("/loginDoctor", loginDoctor);
router.put("/toggleStatus/:doctorId", toggleStatus);
router.post("/registerReception", registerReceptionist);
router.get("/getReceptionsByDoctorId/:doctorId", getReceptionsByDoctorId);
router.get("/getlivequeue/:doctorId", getLiveByDoctorId);


// Get a list of doctors
router.get("/getDoctors", getDoctors);

// Get a single doctor by ID
router.get("/getDoctor/:id", getDoctorById);

// Update a doctor by ID
router.put("/:id", updateDoctor);

// Delete a doctor by ID
router.get("/getPatient/:patientID", getpatientById); 
router.delete("/:id", deleteDoctor);
router.get("/getvitals/:patientId", getVitalsDoctorId);

export default router;
