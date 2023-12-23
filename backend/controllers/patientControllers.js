// controllers/patientController.js
import Patient from "../models/patientSchema.js";
// Create a new patient
const registerpatient = async (req, res) => {
  const { fullName, phone, gender, age, doctorId, receptionId } = req.body;
  console.log(req.body);
  try {
    const patient = await Patient.register(
      fullName,
      phone,
      gender,
      age,
      doctorId,
      receptionId,
    );
    // const token = createToken(user._id);

    // res.status(200).json({ message: "User created successfully" });
    res.status(200).json({ patient });
    console.log({ patient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const loginpatient = async (req, res) => {
  const { username, password } = req.body;
  try {
    const patient = await Patient.login(username, password);
    // const token = createToken(user._id);
    // Exclude the password field from the response
    res.status(200).json({ username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a list of patients
const getpatients = async (req, res) => {
  try {
    const patients = await Patient.find({}).sort({ createdAt: -1 });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single patient by ID
const getpatientById = async (req, res) => {
  const { patientID } = req.params;
  console.log(req.params);
  try {
    const patient = await Patient.findById(patientID);
    if (!patient) {
      return res.status(404).json({ error: "patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPatientsByDoctorId = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const patients = await Patient.find({ doctorId });
    if (!patients || patients.length === 0) {
      return res
        .status(404)
        .json({ error: "Patients not found for the given doctorId" });
    }

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a patient by ID
const updatepatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByIdAndUpdate(id, req.body, { new: true });
    if (!patient) {
      return res.status(404).json({ error: "patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a patient by ID
const deletepatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByIdAndRemove(id);
    if (!patient) {
      return res.status(404).json({ error: "patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  registerpatient,
  loginpatient,
  getpatients,
  getpatientById,
  updatepatient,
  deletepatient,
  getPatientsByDoctorId,
};
