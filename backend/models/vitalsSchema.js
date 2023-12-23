import mongoose from "mongoose";
const vitalsSchema = new mongoose.Schema({
  bloodpressure: {
    type: String,
    required: true,
  },
  heartrate: {
    type: Number,
    required: true,
  },
  respiratoryrate: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  sugarlevel: {
    type: Number,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },
  oxygensaturation: {
    type: Number,
    required: true,
  },
  pulseoximeter: {
    type: Number,
    required: true,
  },
  bmi: {
    type: Number,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  receptionId: {
    type: String,
    required: true,
  },
});

vitalsSchema.statics.Insert = async (
  bloodpressure,
  heartrate,
  respiratoryrate,
  temperature,
  sugarlevel,
  weight,
  height,
  oxygensaturation,
  pulseoximeter,
  bmi,
  doctorId,
  patientId,
  receptionId
) => {
  // console.log(fullName, phone, doctorId, receptionId);
  if (
    !bloodpressure ||
    !heartrate ||
    !respiratoryrate ||
    !temperature ||
    !sugarlevel ||
    !weight ||
    !height ||
    !oxygensaturation ||
    !pulseoximeter ||
    !bmi||
    !doctorId ||
    !patientId ||
    !receptionId
  ) {
    throw Error("Data was incomplete");
  }
  const vitals = await Vital.create({
    bloodpressure,
    heartrate,
    respiratoryrate,
    temperature,
    sugarlevel,
    weight,
    height,
    oxygensaturation,
    pulseoximeter,
    bmi,
    doctorId,
    patientId,
    receptionId,
  });
  return vitals;
};

const Vital = mongoose.model("vitals", vitalsSchema);

export default Vital;
