import React, { useEffect, useState } from "react";

const MedicalHistory = ({ patient }) => {
  console.log(patient);
  

const [patientVital, setPatientVital] = useState(null);
// console.log(patientVital);

useEffect(() => {
  const fetchPatients = async () => {
    const patientId = patient?._id;
    try {
      // Replace the API endpoint with your actual backend endpoint
      const response = await fetch(
        `http://localhost:4000/api/doctors/getvitals/${patientId}`,
        {
          method: "GET", // Change the method to PUT
          // body: JSON.stringify({ isActive: !isActive }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setPatientVital(data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  fetchPatients();
}, [patient]);




  return (
    <div>
      {" "}
      <div className="prescription bg-white p-4 rounded-md shadow-md xl:h-[calc(100vh-28vh)] flex flex-col gap-16">
        <div>
          <div className="prescription-header mb-4">
            <div>
              <h2 className="text-lg font-semibold text-left">
                Medical Problems
              </h2>
              <p className="text-sm text-left">History</p>
            </div>
          </div>
          <div className="border border-black"></div>

          <div className="mt-2 text-left">
            <h1 className="font-semibold text-sm">
              List of Medical Problems:{" "}
              <ul className="text-sm font-normal list-disc ml-6">
                <li className="font-medium">
                  Disbeties <span className="font-normal">(Since 1yr)</span>
                </li>
                <li className="">Wake Up Early</li>
                <li className="">Do atleast 2 time excercise Daily</li>
                <li className="">Do atleast 2 time excercise Daily</li>
                <li className="">Do atleast 2 time excercise Daily</li>
              </ul>
            </h1>
          </div>
        </div>
        <div>
          <div className="prescription-header my-4 ">
            <div>
              <h2 className="text-lg font-semibold text-left">
                Vitals Recorded
              </h2>
              {/* <p className="text-sm text-left">History</p> */}
            </div>
          </div>
          <div className="border border-gray-300"></div>

          <div className="mt-2 text-left">
            <h1 className="font-semibold text-sm">
              List of Vitals:{" "}
              <div className="grid grid-cols-2 gap-6">
                <ul className="text-sm font-normal list-disc ml-6">
                  <li className="font-medium">
                    Blood Pressure:{" "}
                    {patientVital ? patientVital[0]?.bloodpressure : "null"}{" "}
                    mmHg
                  </li>
                  <li className="">
                    Heart Rate:{" "}
                    {patientVital ? patientVital[0]?.heartrate : "null"} bpm
                  </li>
                  <li className="">
                    Respiratory Rate:{" "}
                    {patientVital ? patientVital[0]?.respiratoryrate : "null"}{" "}
                    breaths/min
                  </li>
                  <li className="">
                    Temperature:{" "}
                    {patientVital ? patientVital[0]?.temperature : "null"}°F
                  </li>
                  <li className="">
                    Blood Sugar:{" "}
                    {patientVital ? patientVital[0]?.sugarlevel : "null"} mg/dL
                  </li>
                </ul>
                <ul className="text-sm font-normal list-disc ml-6">
                  <li className="font-medium">
                    Weight: {patientVital ? patientVital[0]?.weight : "null"} kg
                  </li>
                  <li className="">
                    Height: {patientVital ? patientVital[0]?.height : "null"} cm
                  </li>
                  <li className="">
                    BMI: {patientVital ? patientVital[0]?.bmi : "null"}
                  </li>
                  <li className="">
                    Oxygen Saturation:{" "}
                    {patientVital ? patientVital[0]?.oxygensaturation : "null"}%
                  </li>
                  <li className="">
                    Pulse Oximeter:{" "}
                    {patientVital ? patientVital[0]?.pulseoximeter : "null"}%
                  </li>
                </ul>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
