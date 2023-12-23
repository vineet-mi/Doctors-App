import React from 'react'

const RegisterPatient = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("hello");
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default RegisterPatient





// import React, { useState } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext.js";
// import useAddPatient from "../../hooks/useAddPatient.js";

// const RegisterPatient = () => {
//   const { user } = useAuthContext();
//   const { addPatient, error, isLoading } = useAddPatient();
//   const doctorID = user.receptionist.doctorId;
//   const receptionID = user.receptionist._id;

//   const [patientData, setPatient] = useState({
//     fullName: "",
//     phone: "",
//     gender: "",
//     age: "",
//   });

//   const handleSubmitForm = async (e) => {
//     e.preventDefault();
//     alert("he");

//     await addPatient(patientData, doctorID, receptionID);
//   };

//   return (
//     <div>
//       <div className="card">
//         <form onSubmit={handleSubmitForm}>
//           <button type="submit"> submit</button>
//         </form>
//         <form
//           className="card-body mx-auto flex flex-col justify-center items-center"
//           onSubmit={handleSubmitForm}
//         >
//           <div className="flex gap-10">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 className="input input-bordered"
//                 onChange={(e) =>
//                   setPatient({ ...patientData, fullName: e.target.value })
//                 }
//                 value={patientData.fullName}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Phone</span>
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter Number"
//                 className="input input-bordered"
//                 onChange={(e) =>
//                   setPatient({ ...patientData, phone: e.target.value })
//                 }
//                 value={patientData.phone}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex gap-10">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Gender</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Gender"
//                 className="input input-bordered"
//                 onChange={(e) =>
//                   setPatient({ ...patientData, gender: e.target.value })
//                 }
//                 value={patientData.gender}
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Age</span>
//               </label>
//               <input
//                 type="Number"
//                 placeholder="Enter Age"
//                 className="input input-bordered"
//                 onChange={(e) =>
//                   setPatient({ ...patientData, age: e.target.value })
//                 }
//                 value={patientData.age}
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-control mt-6">
//             <button
//               className="btn btn-neutral"
//               disabled={isLoading}
//               type="submit"
//             >
//               {isLoading ? "Submitting..." : "Submit"}
//             </button>
//             {error && <div className="error">{error}</div>}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPatient;
