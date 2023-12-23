import mongoose from "mongoose";
const patientSchema = new mongoose.Schema(
  //JSON Format Type for Patient
  {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required:true,
    },
    gender: {
      type: String,
      required:true,
    },
    age: {
      type: Number,
      required:true,
    },
    address: String,

    doctorId: {
      type: String,
      required: true,
    },
    receptionId: {
      type: String,
      required: true,
    },
    isActive: {
      type: String,
      required:true,
    }
  }
);

patientSchema.statics.register = async (
  fullName,
  phone,
  gender,
  age,
  doctorId,
  receptionId
) => {
  if (
    !fullName ||
    !gender ||
    !age ||
    !doctorId ||
    !receptionId
  ) {
    throw Error("All Fields must be filled");
  }
// console.log(fullName, phone, gender, age, doctorId, receptionId);
  if (phone !== null && phone !== undefined) {
    const exists = await Patient.findOne({ phone });

    if (exists) {
      throw Error("Phone number already in use");
    }
  }

  const patient = await Patient.create({
    fullName,
    phone,
    gender,
    age,
    doctorId,
    receptionId,
    isActive: false,
  });

  return patient;
};

patientSchema.statics.login = async (username, password) => {
  // console.log(username);
  if (!username || !password) {
    throw Error("All Fields must be filled");
  }
  const patient = await Patient.findOne({ username });
  if (!patient) {
    throw Error("Email is not registered");
  }

  const match = await bcrypt.compare(password, receptionist.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return patient;
};




const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
