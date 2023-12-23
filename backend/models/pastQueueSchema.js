import mongoose from "mongoose";
const pastQueueSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  receptionId: {
    type: String,
    required: true,
  },
});

const PastQueue = mongoose.model("pastQueue", pastQueueSchema);

export default PastQueue;
