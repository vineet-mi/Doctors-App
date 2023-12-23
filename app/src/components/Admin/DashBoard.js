import React, { useState } from "react";
import EditDoctor from "./EditDoctor";
import EditPatient from "./EditPatient";
import EditReceptionist from "./EditReceptionist";
import { faCheck, faTimes, faTrash } from "@fortawesome/fontawesome-free"; // Import the required icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthContext } from "../../hooks/useAuthContext";
import GetDoctors from "./GetDoctors";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tab1");
    const { user } = useAuthContext();
// console.log(user);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
    const handleEnable = () => {
      if (window.confirm("Are you sure you want to enable this item?")) {
        // Perform the enable action
        console.log("Item enabled");
      }
    };

    const handleDisable = () => {
      if (window.confirm("Are you sure you want to disable this item?")) {
        // Perform the disable action
        console.log("Item disabled");
      }
    };

    const handleDelete = () => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        // Perform the delete action
        console.log("Item deleted");
      }
    };


  return (
    <div className="mx-auto py-10">
      <div className="tabs">
        <a
          className={`tab tab-bordered ${
            activeTab === "tab1" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("tab1")}
        >
          Doctors
        </a>
        <a
          className={`tab tab-bordered ${
            activeTab === "tab2" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("tab2")}
        >
          Receptionist
        </a>
        <a
          className={`tab tab-bordered ${
            activeTab === "tab3" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("tab3")}
        >
          Patients
        </a>
      </div>
      <div className="py-10 max-w-full">
        {activeTab === "tab1" && (
          <div>
            <GetDoctors />
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/images/profile-pic2.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Vineet Sharma</div>
                          <div className="text-sm opacity-50">Receptionist</div>
                        </div>
                      </div>
                    </td>
                    <td>vineet@mail.com</td>
                    <td>+91-8955607565</td>
                    <td>
                      <div>vineet05</div>
                    </td>
                    <th>
                      <button>
                        <EditReceptionist />
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/images/profile-pic2.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Vineet Kumar</div>
                          <div className="text-sm opacity-50">Patient</div>
                        </div>
                      </div>
                    </td>
                    <td>vineet@mail.com</td>
                    <td>+91-8955607565</td>
                    <td>
                      <div>vineet05</div>
                    </td>
                    <th>
                      <div className="">
                        <th>
                          <div className="flex flex-wrap gap-4">
                            <button onClick={() => handleEnable()}>
                              <i className="fas fa-check"></i>
                            </button>
                            <button onClick={() => handleDisable()}>
                              <i className="fas fa-times"></i>
                            </button>
                            <button onClick={() => handleDelete()}>
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </th>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
