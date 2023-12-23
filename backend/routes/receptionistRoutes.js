import express from "express";
import {
  loginReception,
  getReceptions,
  // updateReceptionist,
  toggleStatus,
} from "../controllers/receptionistControllers.js";


import {

  getDoctorById,
  
} from "../controllers/doctorControllers.js";
import {
  getPatientsByDoctorId,
  registerpatient,
} from "../controllers/patientControllers.js";
import {
  InsertLiveQueue,
  getLiveByDoctorId,
} from "../controllers/liveQueueController.js";
import { InsertVitals } from "../controllers/vitalsController.js";

const router = express.Router();

router.post("/loginReception", loginReception);

router.get("/getReceptions", getReceptions);

router.get("/getDoctor/:id", getDoctorById);

// router.put("update/:id", updateReceptionist);
router.put("/toggleStatus/:receptionId", toggleStatus);

router.get("/PatientbyDoctorId/:doctorId", getPatientsByDoctorId);
router.post("/registerpatient", registerpatient);

// router.post("/registerpatient", registerpatient);
router.post("/insertvitals/:patientId", InsertVitals);
router.post("/insertlivequeue", InsertLiveQueue);
router.get("/getlivequeue/:doctorId", getLiveByDoctorId);

export default router;
