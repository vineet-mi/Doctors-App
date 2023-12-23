import liveQueue from "../models/liveQueueSchema.js";

const InsertLiveQueue = async (req, res) => {
  const { fullName, phone, gender, age, doctorId, patientId, receptionId } =
    req.body;
  console.log(req.body);
  try {
    const queue = await liveQueue.Insert(
      fullName,
      phone,
      gender,
      age,
      doctorId,
      patientId,
      receptionId
    );
    // const token = createToken(user._id);

    // res.status(200).json({ message: "User created successfully" });
    res.status(200).json({ queue });
    // console.log({ admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const deletepatient = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const patient = await Patient.findByIdAndRemove(id);
//     if (!patient) {
//       return res.status(404).json({ error: "patient not found" });
//     }
//     res.status(200).json(patient);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const getLiveByDoctorId = async (req, res) => {
  const { doctorId } = req.params;
  // console.log(req.params);
  try {
    const queue = await liveQueue.find({ doctorId });
    if (!queue || queue.length === 0) {
      return res
        .status(404)
        .json({ error: "Live queue is empty" });
    }

    res.status(200).json(queue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { InsertLiveQueue, getLiveByDoctorId };
