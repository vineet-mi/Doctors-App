// import { workoutsReducer } from "../context/WorkoutContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
// import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const Navigate = useNavigate();
  const { dispatch } = useAuthContext();
  //   const { dispatch: workoutsDispatch } = useWorkoutsContext();
  const logout = () => {
    //remove use from storage
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    dispatch({ type: "LOGOUT" });
    return Navigate('/login');
    // workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
};
