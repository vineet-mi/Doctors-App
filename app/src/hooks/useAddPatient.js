import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useAddPatient = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    const addPatient = async (patientData, doctorID, receptionID) => {
      console.log(patientData);
    setIsLoading(true);
    setError(null);
    const fullName = patientData.fullName;
    const phone = patientData.phone;
    const gender = patientData.gender;
      const age = patientData.age;
      
    try {
      // Perform the API call to add the doctor
      const response = await fetch(
        "http://localhost:4000/api/receptions/registerpatient",
        {
          method: "POST",
          body: JSON.stringify({
            fullName,
            phone,
            gender,
            age,
            doctorId: doctorID,
            receptionId: receptionID
          }), // Remove the extra object
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      // If successful, you can handle the response or perform additional actions

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(
        error.message || "An error occurred while adding the reception."
      );
    }
  };

  return { addPatient, isLoading, error };
};

export default useAddPatient;
