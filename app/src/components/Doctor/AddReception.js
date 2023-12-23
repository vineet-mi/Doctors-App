import React, { useState, useEffect } from "react";
import useAddReception from "../../hooks/useAddReception";
import { useAuthContext } from "../../hooks/useAuthContext";



const AddReception = () => {
  const { user } = useAuthContext();
  // console.log(user.doctor._id);
  const [receptionData, setReception] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    username: "",
    password: ""
  });

  const [formattedData, setFormattedData] = useState(receptionData);

  useEffect(() => {
    // Update formattedData whenever doctorData changes
    setFormattedData({
      ...receptionData,
      phone:
        receptionData.phone === "" ? null : parseInt(receptionData.phone, 10),
      doctorId: user.doctor._id,
    });
  }, [receptionData]);

  const { addReception, error, isLoading } = useAddReception();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addReception(formattedData);
    console.log(formattedData);
  };
                    
  return (
    <div className="card flex-shrink-0 w-full max-w-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Receptionist's Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered"
              onChange={(e) =>
                setReception({ ...receptionData, fullName: e.target.value })
              }
              value={receptionData.fullName}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered"
              onChange={(e) =>
                setReception({
                  ...receptionData,
                  email: e.target.value,
                })
              }
              value={receptionData.email}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="input input-bordered"
              onChange={(e) =>
                setReception({ ...receptionData, username: e.target.value })
              }
              value={receptionData.username}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered"
              onChange={(e) =>
                setReception({ ...receptionData, password: e.target.value })
              }
              value={receptionData.password}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              placeholder="Enter Number"
              className="input input-bordered"
              onChange={(e) =>
                setReception({ ...receptionData, phone: e.target.value })
              }
              value={receptionData.phone}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              className="input input-bordered"
              onChange={(e) =>
                setReception({
                  ...receptionData,
                  address: e.target.value,
                })
              }
              value={receptionData.address}
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-neutral"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default AddReception;
