import mongoose from "mongoose";
const liveQueueSchema = new mongoose.Schema({
  fullName: {
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
  doctorId: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required:true,
  },
  receptionId: {
    type: String,
    required: true,
  },
});

liveQueueSchema.statics.Insert = async (
  fullName,
  phone,
  gender,
  age,
  doctorId,
  patientId,
  receptionId
) => {
  // console.log(fullName, phone, doctorId, receptionId);
  if (!fullName || !phone || !gender || !age || !doctorId || !patientId || !receptionId) {
    throw Error("Data was incomplete");
  }
  const liveQueue = await LiveQueue.create({
    fullName,
    phone,
    gender,
    age,
    doctorId,
    patientId,
    receptionId,
  });
  return liveQueue;
};

const LiveQueue = mongoose.model("liveQueue", liveQueueSchema);

export default LiveQueue;
