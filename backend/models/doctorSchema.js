// models/Doctor.js
import validator from "validator";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const doctorSchema = new mongoose.Schema(
  //JSON format type of Doctor
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    medicalLicenseNumber: {
      type: String,
      required: true,
    },
    drugenforcementNumber: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true, // You can set it to true by default
    },
    //file type could be any thing jpeg,png,jpg,pdf
    // boradCertifications: {
    //   type: String,
    //   required: true,
    // },
    // profilePicture: {
    //   type: String,
    //   required: true,
    // },
  }
);

doctorSchema.statics.register = async (
  name,
  email,
  username,
  password,
  phone,
  address,
  specialization,
  medicalLicenseNumber,
  drugenforcementNumber,
) => {
  if (
    !name ||
    !email ||
    !username ||
    !password ||
    !phone ||
    !address ||
    !specialization ||
    !medicalLicenseNumber ||
    !drugenforcementNumber 
  ) {
    throw Error("All Fields must be filled, please!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not Strong Enough");
  }
  const exists = await Doctor.findOne({ username });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const doctor = await Doctor.create({
    name,
    email,
    username,
    password: hash,
    phone,
    address,
    specialization,
    medicalLicenseNumber,
    drugenforcementNumber,
    isActive: false,
  });

  return doctor;
};

doctorSchema.statics.login = async (username, password) => {
  if (!username || !password) {
    throw Error("All Fields must be filled");
  }
  const doctor = await Doctor.findOne({ username });

  if (!doctor) {
    throw Error("Email is not registered");
  }

  const match = await bcrypt.compare(password, doctor.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return doctor;
};

// doctorSchema.statics.toggleStatus = async (doctorId, isActive) => {
//   const doctor = await Doctor.findById(doctorId);

//   if (!doctor) {
//     throw Error("Doctor not found");
//   }

//   doctor.isActive = isActive;
//   await doctor.save();

//   return doctor;
// };

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
