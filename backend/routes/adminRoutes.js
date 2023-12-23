// routes/doctorRoutes.js
import express from "express";
import {
  registerAdmin,
  loginAdmin,
//   getAdmin,
} from "../controllers/adminControllers.js";
import {
  registerDoctor,
} from "../controllers/doctorControllers.js";


const router = express.Router();

// Create a new doctor
router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.post("/registerDoctor", registerDoctor);


export default router;
