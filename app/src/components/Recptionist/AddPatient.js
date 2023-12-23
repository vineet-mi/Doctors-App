import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
// import RegisterPatient from "./RegisterPatien.text/index.js";
import { useInsertLiveQueue } from "../../hooks/useInsertLiveQueue.js";

const AddPatient = ({ onPatientSelect }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  const { InsertLive, error, isLoading } = useInsertLiveQueue();

  useEffect(() => {
    const fetchPatients = async () => {
      const doctorID = user.receptionist.doctorId;
      try {
        // Replace the API endpoint with your actual backend endpoint
        const response = await fetch(
          `http://localhost:4000/api/receptions/PatientbyDoctorId/${doctorID}`,
          {
            method: "GET", // Change the method to PUT
            // body: JSON.stringify({ isActive: !isActive }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [user.receptionist.doctorId]);

  const handlePatientSelect = async (patient) => {
    const doctorID = user.receptionist.doctorId;
    const receptionID = user.receptionist._id;

    // Pass the selected patient to the parent component
    await InsertLive(patient, doctorID, receptionID);
  };

  return (
    <>
      <div className="pt-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter Patient Number to Search Patients"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="overflow-x-auto h-96 mt-5 mb-5">
            {loading ? (
              <p>Loading...</p>
            ) : patients.length === 0 ? (
              <div className="flex justify-center items-center text-base text-center border h-full">
                <p>No patients available.</p>
              </div>
            ) : (
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index}>
                      <td>{patient.fullName}</td>
                      <td>{patient.phone}</td>
                      <td>
                        <button onClick={() => handlePatientSelect(patient)}>
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPatient;
