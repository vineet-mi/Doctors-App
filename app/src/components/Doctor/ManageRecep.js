import React, { useState,useEffect } from 'react';
// import { PaperClipIcon } from '@heroicons/react/20/solid'
import useAddReception from '../../hooks/useAddReception';
import AddReception from './AddReception';
import { useAuthContext } from '../../hooks/useAuthContext';


const ManageRecep = () => {
   const [receptions, setReception] = useState([]);

  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
//  console.log(user);
   useEffect(() => {
     const fetchData = async () => {
       const doctorId = user.doctor._id;
       try {
         const response = await fetch(
           `http://localhost:4000/api/doctors/getReceptionsByDoctorId/${doctorId}`
         );
         const data = await response.json();
        //  console.log("reception:", data); // Add this line
         setReception(data);
         setLoading(false);
       } catch (error) {
         console.error("Error fetching doctor data:", error);
         setLoading(false);
       }
     };

     fetchData();
   }, []);

   const togglereceptiontatus = async (receptionId, isActive) => {
     try {
       const response = await fetch(
         `http://localhost:4000/api/receptions/toggleStatus/${receptionId}`,
         {
           method: "PUT", // Change the method to PUT
           body: JSON.stringify({ isActive: !isActive }),
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
       const updatedReception = await response.json();
       setReception((prevreception) =>
         prevreception.map((doc) =>
           doc._id === updatedReception._id ? updatedReception : doc
         )
       );
     } catch (error) {
       console.error("Error toggling doctor status:", error);
     }
   };


  return (
    <div className="flex flex-col p-10 justify-center">
      <div className="flex text-2xl font-bold text-left w-full justify-between bg-neutral py-4 px-8 items-center rounded">
        <h1 className="text-white">Manage Receptionist</h1>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          + Add Receptionist
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <AddReception />
          </div>
        </dialog>
      </div>
      <div className="flex justify-center items-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto w-full mt-5 h-screen px-5 ">
            <table className="table mx-auto">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="mx-auto bg-neutral">
                {receptions &&
                Array.isArray(receptions) &&
                receptions.length > 0
                  ? receptions.map((reception) => (
                      <tr key={reception._id}>
                        <td>
                          {/* <div className="flex items-center space-x-3"> */}
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="/images/profile-pic2.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          {/* </div> */}
                        </td>
                        <td>
                          <div>
                            <div className="font-bold text-white">
                              {reception.fullName}
                            </div>
                          </div>
                        </td>
                        <td className="text-white">{reception.email}</td>
                        <td className="text-white">{reception.username}</td>
                        <td className="text-white">{reception.phone}</td>
                        <th>
                          <button
                            onClick={() =>
                              togglereceptiontatus(
                                reception._id,
                                reception.isActive
                              )
                            }
                            disabled={loading} // Disable the button while the request is being processed
                            className={`btn ${
                              loading
                                ? "btn-disabled"
                                : reception.isActive
                                ? "btn-danger"
                                : "btn-success"
                            }`}
                          >
                            {loading
                              ? "Processing..."
                              : reception.isActive
                              ? "Deactivate"
                              : "Activate"}
                          </button>
                        </th>
                      </tr>
                    ))
                    : <div>
                    <h1>No Data, Add Receptionist</h1>
                    </div>}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
}

export default ManageRecep

