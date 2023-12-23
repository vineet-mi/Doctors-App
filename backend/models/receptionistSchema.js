import validator from "validator";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const receptionistSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
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
  doctorId: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true, // You can set it to true by default
  },
  // Add more receptionist-specific fields as needed
});

receptionistSchema.statics.register = async (
  fullName,
  email,
  phone,
  address,
  username,
  password,
  doctorId
) => {
  if (
    !fullName ||
    !email ||
    !phone ||
    !address ||
    !username ||
    !password ||
    !doctorId
  ) {
    throw Error("All Fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not Strong Enough");
  }
  const exists = await Receptionist.findOne({ username });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const receptionist = await Receptionist.create({
    fullName,
    email,
    phone,
    address,
    username,
    password: hash,
    doctorId,
    isActive: false,
  });

  return receptionist;
};

receptionistSchema.statics.login = async (username, password) => {
  // console.log(username);
  if (!username || !password) {
    throw Error("All Fields must be filled");
  }
  const receptionist = await Receptionist.findOne({ username });
  if (!receptionist) {
    throw Error("Email is not registered");
  }

  const match = await bcrypt.compare(password, receptionist.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return receptionist;
};



const Receptionist = mongoose.model("Receptionist", receptionistSchema);

export default Receptionist;
