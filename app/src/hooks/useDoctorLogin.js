import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useDoctorLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const Navigate = useNavigate();

    const doctorLogin = async (username, password) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "http://localhost:4000/api/doctors/logindoctor",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          }
        );

        const json = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          setError(json.error);
          localStorage.removeItem("user");
          dispatch({ type: "LOGOUT" });
        }

        if (response.ok) {
          // Save the doctor user to local storage
          localStorage.setItem("user", JSON.stringify(json));
          localStorage.setItem("userType", JSON.stringify("doctor"));

          // Update the auth context with the doctor user type
          dispatch({
            type: "LOGIN",
            payload: { user: json, userType: "doctor" },
          });
          setIsLoading(false);
          Navigate("/doctor-dash");
        }
      } catch (error) {
        console.error("Error during login:", error);
        // Handle the error appropriately
      }
    };
    return { doctorLogin, isLoading, error };



}
