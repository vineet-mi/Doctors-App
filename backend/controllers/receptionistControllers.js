import Receptionist from "../models/receptionistSchema.js";

// Create a new receptionist
const registerReceptionist = async (req, res) => {
  const { fullName, email, phone, address, username, password, doctorId } =
    req.body;
  try {
    const receptionist = await Receptionist.register(
      fullName,
      email,
      phone,
      address,
      username,
      password,
      doctorId
    );
    // const token = createToken(user._id);

    // res.status(200).json({ message: "User created successfully" });
    res.status(200).json({ receptionist });
    // console.log({ receptionist });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginReception = async (req, res) => {
  const { username, password } = req.body;
  // console.log("hello");
  // console.log(req.body);
  try {
    const receptionist = await Receptionist.login(username, password);
    // const token = createToken(user._id);
    // Exclude the password field from the response
    res.status(200).json({ receptionist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a list of receptionists
const getReceptions = async (req, res) => {
  try {
    const receptionists = await Receptionist.find({}).sort({ createdAt: -1 });
    res.status(200).json(receptionists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReceptionsByDoctorId = async (req, res) => {
  console.log("hello");
  const { doctorId } = req.params;
  // console.log(doctorId);
  try {
    const receptionists = await Receptionist.find({ doctorId });
    if (!receptionists || receptionists.length === 0) {
      return res
        .status(404)
        .json({ error: "Patients not found for the given doctorId" });
    }

    res.status(200).json(receptionists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const toggleStatus = async (req, res) => {
  // console.log("tirgger"); 
  // assuming the doctorId is passed as a parameter
  try {
    const { receptionId } = req.params;
    // console.log(receptionId);
    const receptionist = await Receptionist.findById(receptionId);

    if (!receptionist) {
      return res.status(404).json({ message: "receptionist not found" });
    }

    // Toggle the isActive status
    receptionist.isActive = !receptionist.isActive;

    // Save the updated doctor
    await receptionist.save();

    return res
      .status(200)
      .json({ message: "Doctor status updated successfully", receptionist });
  } catch (error) {
    console.error("Error toggling doctor status:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
// Get a single receptionist by ID
const getReceptionistById = async (req, res) => {
  const { id } = req.params;
  try {
    const receptionist = await Receptionist.findById(id);
    if (!receptionist) {
      return res.status(404).json({ error: "Receptionist not found" });
    }
    res.status(200).json(receptionist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a receptionist by ID
const updateReceptionist = async (req, res) => {
  const { id } = req.params;
  try {
    const receptionist = await Receptionist.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!receptionist) {
      return res.status(404).json({ error: "Receptionist not found" });
    }
    res.status(200).json(receptionist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a receptionist by ID
const deleteReceptionist = async (req, res) => {
  const { id } = req.params;
  try {
    const receptionist = await Receptionist.findByIdAndDelete(id);
    if (!receptionist) {
      return res.status(404).json({ error: "Receptionist not found" });
    }
    res.status(200).json(receptionist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  registerReceptionist,
  loginReception,
  getReceptions,
  // getReceptionistById,
  updateReceptionist,
  // deleteReceptionist,
  getReceptionsByDoctorId,
  toggleStatus,
};
