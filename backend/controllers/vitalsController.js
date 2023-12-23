import vitals from "../models/vitalsSchema.js";

const InsertVitals = async (req, res) => {
  console.log("hello");
  const {
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
  } = req.body;
  console.log(req.body);
  try {
    const vital = await vitals.Insert(
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
    );
    // const token = createToken(user._id);

    // res.status(200).json({ message: "User created successfully" });
    res.status(200).json({ vital });
    // console.log({ admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVitalsDoctorId = async (req, res) => {
  const { patientId } = req.params;
  // console.log(req.params);
  try {
    const vital = await vitals.find({ patientId });
    if (!vital || vital.length === 0) {
      return res.status(404).json({ error: "Live queue is empty" });
    }

    res.status(200).json(vital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export { InsertVitals, getVitalsDoctorId };

