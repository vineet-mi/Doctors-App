import React, { useState } from "react";
import DoctorSignup from './DoctorSignup';
import { useAuthContext } from "../../hooks/useAuthContext";

const Sidenavbar = ({ onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
      const { user } = useAuthContext();
      // console.log(user.admin.fullName);

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      onOptionSelect(option); // Notify the parent component (Admin) of the selected option
    };
  return (
    <div className="bg-base-200">
      <div className="drawer lg:drawer-open border-r border-base-content">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 max-h-screen gap-5 text-md text-base-content">
            {/* Sidebar content here */}
            {/* <li>
              <h1>{user.admin.fullName}</h1>
            </li> */}
            <li>
              <a
                onClick={() => handleOptionSelect("dashboard")}
                className=" text-base-content"
              >
                DashBoard
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOptionSelect("add-doctor")}
                className="text-base-content"
              >
                Add Doctor
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOptionSelect("medicines")}
                className="text-base-content"
              >
                Add Medicines
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOptionSelect("symptoms")}
                className="text-base-content"
              >
                Add Symptoms
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOptionSelect("diagnosis")}
                className="text-base-content"
              >
                Add Diagonosis
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOptionSelect("notification")}
                className="text-base-content"
              >
                Notification
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;