import { useState } from "react";

export const useInsertLiveQueue = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const InsertLive = async (patient, doctorID, receptionID) => {
    setIsLoading(true);
    setError(null);
    const fullName = patient.fullName;
    const phone = patient.phone;
    const gender = patient.gender;
    const age = patient.age;
    const patientId = patient._id;
    // const doctorID = doctorID;
    // const receptionID = receptionID;
    // console.log(fullName, phone, doctorID, receptionID);

    try {
      const response = await fetch(
        "http://localhost:4000/api/receptions/insertlivequeue",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            phone,
            gender,
            age,
            doctorId: doctorID,
            patientId,
            receptionId: receptionID,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.ok) {
        // Save the doctor user to local storage
      }
    } catch (error) {
      console.error("Error saving patient in live queue", error);
      // Handle the error appropriately
    }
  };
  return { InsertLive, isLoading, error };
};
