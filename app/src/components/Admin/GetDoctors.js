import React, { useState, useEffect } from "react";
import EditDoctor from "./EditDoctor";

const GetDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/doctors/getDoctors"
        );
        const data = await response.json();
        console.log("Doctors:", data); // Add this line
        setDoctors(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleDoctorStatus = async (doctorId, isActive) => {
     
     try {
       const response = await fetch(
         `http://localhost:4000/api/doctors/toggleStatus/${doctorId}`,
         {
           method: "PUT", // Change the method to PUT
           body: JSON.stringify({ isActive: !isActive }),
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
       const updatedDoctor = await response.json();
       setDoctors((prevDoctors) =>
         prevDoctors.map((doc) =>
           doc._id === updatedDoctor._id ? updatedDoctor : doc
         )
       );
     } catch (error) {
       console.error("Error toggling doctor status:", error);
     }
   };


  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
              {doctors &&
                doctors.map((doctor) => (
                  <tr key={doctor._id}>
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
                              src={"/images/profile-pic2.png"}
                              alt="Doctor Avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{doctor.name}</div>
                          <div className="text-sm opacity-50">
                            {doctor.specialization}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{doctor.email}</td>
                    <td>{doctor.phone}</td>
                    <td>
                      <div>{doctor.username}</div>
                    </td>
                    <th>
                      <button
                        onClick={() =>
                          toggleDoctorStatus(doctor._id, doctor.isActive)
                        }
                        disabled={loading} // Disable the button while the request is being processed
                        className={`btn ${
                          loading
                            ? "btn-disabled"
                            : doctor.isActive
                            ? "btn-danger"
                            : "btn-success"
                        }`}
                      >
                        {loading
                          ? "Processing..."
                          : doctor.isActive
                          ? "Deactivate"
                          : "Activate"}
                      </button> 
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetDoctors;
