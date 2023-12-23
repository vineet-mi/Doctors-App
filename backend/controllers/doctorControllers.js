// controllers/doctorController.js
import Doctor from "../models/doctorSchema.js";
// Create a new doctor
const registerDoctor = async (req, res) => {
  // console.log(req.body);
  const {
    name,
    email,
    username,
    password,
    phone,
    address,
    specialization,
    medicalLicenseNumber,
    drugenforcementNumber,
    // boradCertifications,
    // profilePicture,
  } = req.body;
  try {
    const doctor = await Doctor.register(
      name,
      email,
      username,
      password,
      phone,
      address,
      specialization,
      medicalLicenseNumber,
      drugenforcementNumber,
      // boradCertifications,
      // profilePicture
    );
    // const token = createToken(user._id);

    // res.status(200).json({ message: "User created successfully" });
    res.status(200).json({ doctor });
    console.log({ doctor });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
const loginDoctor = async (req, res) => {
  const { username, password } = req.body;
  try {
    const doctor = await Doctor.login(username, password);
    // const token = createToken(user._id);
    // Exclude the password field from the response
    res.status(200).json({ doctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a list of doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({}).sort({ createdAt: -1 });
    // console.log(doctors);
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const toggleStatus = async (req, res) => {
// console.log("tirgger");
  // assuming the doctorId is passed as a parameter
  try {
    const { doctorId } = req.params; // assuming the doctorId is passed as a parameter
    // console.log(doctorId)sudo apt-get remove brave-browser;
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Toggle the isActive status
    doctor.isActive = !doctor.isActive;

    // Save the updated doctor
    await doctor.save();

    return res
      .status(200)
      .json({ message: "Doctor status updated successfully", doctor });
  } catch (error) {
    console.error("Error toggling doctor status:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a single doctor by ID
const getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a doctor by ID
const updateDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a doctor by ID
const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findByIdAndRemove(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  registerDoctor,
  loginDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  toggleStatus,
};