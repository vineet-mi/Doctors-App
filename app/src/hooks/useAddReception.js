import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useAddReception = () => {
      const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const addReception = async (formattedData) => {
      setIsLoading(true);
      setError(null);
      try {
        // Perform the API call to add the doctor
        const response = await fetch(
          "http://localhost:4000/api/doctors/registerReception",
          {
            method: "POST",
            body: JSON.stringify(formattedData), // Remove the extra object
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
        setError(error.message || "An error occurred while adding the reception.");
      }
    };

    return { addReception, isLoading, error };
}

export default useAddReception