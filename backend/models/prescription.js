// const mongoose = require("mongoose");
import mongoose from "mongoose";

const prescription = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient", // Reference to the patient who the prescription is for
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor", // Reference to the doctor who issued the prescription
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  hospitalAddress: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  speaciality: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientAge: {
    type: String,
    required: true,
  },
  patientGender: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  patientNumber: {
    type: String,
    required: true,
  },

  symptoms: [
      {
          name: {
              type: String,
              required: true,
          },
      }
  ],
  vitals: [
      {
          name: {
              type: String,
              required: true,
            },
            value: {
                type: String,
                required: true,
            },
        }
    ],
    diagnosis: [
        {
            name: {
                type: String,
                required: true,
            },
        }
    ],
  medication: [
    {
      name: {
        type: String,
        required: true,
      },
      dosage: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
          instructions: String,
      totalMed:String,
    },
  ],
  advicedInvestigation: [
    {
      name: {
        type: String,
        required: true,
      }
    },
  ],
  instructions: [
    {
      name: {
        type: String,
        required: true,
      }
    },
    ],
  doctorSignature:String,
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;
