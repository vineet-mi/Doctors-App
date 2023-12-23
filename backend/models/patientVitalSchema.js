import mongoose from "mongoose";
const patientVitalSchema = new mongoose.Schema(
  //JSON Format Type for Patient
  {
    bloodpressure: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
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
      required: true,
    },
  }
);
