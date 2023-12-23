import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
const adminSchema = new mongoose.Schema({
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
  // Add more admin-specific fields as needed
});
adminSchema.statics.register = async function (
  fullName,
  email,
  phone,
  address,
  username,
  password
) {
  if (!fullName || !email || !phone || !address || !username || !password) {
    throw Error("All Fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not Strong Enough");
  }
  const exists = await this.findOne({ username }); // Use 'this' instead of 'Admin'

  if (exists) {
    throw Error("Username already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const admin = await this.create({
    fullName,
    email,
    phone,
    address,
    username,
    password: hash,
  });

  return admin;
};

adminSchema.statics.login = async (username, password) => {
  console.log("Request received:", { username, password });
  if (!username || !password) {
    throw Error("All Fields must be filled");
  }

  const admin = await Admin.findOne({ username });

  if (!admin) {
    throw Error("Username is not registered");
  }

  const match = await bcrypt.compare(password, admin.password); // Corrected: use admin.password instead of user.password
  if (!match) {
    throw Error("Incorrect password");
  }
  return admin;
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
