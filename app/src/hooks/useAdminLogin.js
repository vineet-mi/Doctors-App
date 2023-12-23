import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useAdminLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const Navigate = useNavigate();

  const adminLogin = async (username, password) => {
    setIsLoading(true);
    setError(null);
  try {
    const response = await fetch("http://localhost:4000/api/admin/loginAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    }
  
    if (response.ok) {
      // Save the admin user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      localStorage.setItem("userType", JSON.stringify("admin"));
  
      // Update the auth context with the admin user type
      dispatch({ type: "LOGIN", payload: { user: json, userType: "admin" } });
      setIsLoading(false);
      Navigate("/admin-dashboard");
    }
  } catch (error) {
    console.error("Error during login:", error);
    // Handle the error appropriately
  }
  
  };
  return { adminLogin, isLoading, error };
};
