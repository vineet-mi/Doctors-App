import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
 

export const useReceptionLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const Navigate = useNavigate();

    const receptionLogin = async (username, password) => {
        // console.log(username, password);
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "http://localhost:4000/api/receptions/loginReception",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          }
        );

          const json = await response.json();
          console.log(json);

        if (!response.ok) {
          setIsLoading(false);
          setError(json.error);
          localStorage.removeItem("user");
          dispatch({ type: "LOGOUT" });
        }

        if (response.ok) {
          // Save the doctor user to local storage
          localStorage.setItem("user", JSON.stringify(json));
          localStorage.setItem("userType", JSON.stringify("reception"));

          // Update the auth context with the doctor user type
          dispatch({
            type: "LOGIN",
            payload: { user: json, userType: "reception" },
          });
          setIsLoading(false);
          Navigate("/reception-dash");
        }
      } catch (error) {
        console.error("Error during login:", error);
        // Handle the error appropriately
      }
    };
        return { receptionLogin, isLoading, error };
}