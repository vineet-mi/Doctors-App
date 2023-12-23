import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useAddVitals = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addVitals = async ({ vitalData, vitalPatientId}) => {
    setIsLoading(true);
    setError(null);
    try {
      // Perform the API call to add the doctor
      const response = await fetch(
        `http://localhost:4000/api/receptions/insertvitals/${
          vitalPatientId ? vitalPatientId : null
        }`,
        {
          method: "POST",
          body: JSON.stringify(vitalData), // Remove the extra object
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

  return { addVitals, isLoading, error };
};

export default useAddVitals;
