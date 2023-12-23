import React, { useState, useEffect } from "react";
import useAddDoctor from "../../hooks/useAddDoctor";

const DoctorSignup = () => {
  //  const [username, setUsername] = useState("");
  //  const [password, setPassword] = useState("");
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    address: "",
    specialization: "",
    medicalLicenseNumber: "",
    drugenforcementNumber: "",
  });

  const [formattedData, setFormattedData] = useState(doctorData);

  useEffect(() => {
    // Update formattedData whenever doctorData changes
    setFormattedData({
      ...doctorData,
      phone: doctorData.phone === "" ? null : parseInt(doctorData.phone, 10),
    });
  }, [doctorData]);

  const { addDoctor, error, isLoading } = useAddDoctor();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoctor(formattedData);
    console.log(formattedData);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">On Board Doctor!</h1>
            <p className="py-6 max-w-md">
              "Unlocking Excellence in Healthcare: Welcoming Our On-Board
              Doctor!"
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Doctor's Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered"
                    onChange={(e) =>
                      setDoctorData({ ...doctorData, name: e.target.value })
                    }
                    value={doctorData.name}
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
                      setDoctorData({ ...doctorData, email: e.target.value })
                    }
                    value={doctorData.email}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter UserName"
                    className="input input-bordered"
                    onChange={(e) =>
                      setDoctorData({ ...doctorData, username: e.target.value })
                    }
                    value={doctorData.username}
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
                      setDoctorData({ ...doctorData, password: e.target.value })
                    }
                    value={doctorData.password}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Number"
                    className="input input-bordered"
                    onChange={(e) =>
                      setDoctorData({ ...doctorData, phone: e.target.value })
                    }
                    value={doctorData.phone}
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
                      setDoctorData({ ...doctorData, address: e.target.value })
                    }
                    value={doctorData.address}
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Specialization</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-2xl"
                  onChange={(e) =>
                    setDoctorData({
                      ...doctorData,
                      specialization: e.target.value,
                    })
                  }
                  required
                  value={doctorData.specialization || "-select-"}
                >
                  <option disabled selected>
                    -select-
                  </option>
                  <option value={"Pediatrician"}>Pediatrician</option>
                  <option value={"General Physician"}>General Physician</option>
                  <option value={"Dermatologist"}>Dermatologist</option>
                  <option value={"E.N.T"}>E.N.T</option>
                  <option value={"Dentist"}>Dentist</option>
                  <option value={"Other"}>Other</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Medical License Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Number"
                  className="input input-bordered"
                  onChange={(e) =>
                    setDoctorData({
                      ...doctorData,
                      medicalLicenseNumber: e.target.value,
                    })
                  }
                  value={doctorData.medicalLicenseNumber}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drug Enforcement Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Number"
                  className="input input-bordered"
                  onChange={(e) =>
                    setDoctorData({
                      ...doctorData,
                      drugenforcementNumber: e.target.value,
                    })
                  }
                  value={doctorData.drugenforcementNumber}
                  required
                />
              </div>
              {/* <div className="flex flex-row gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Board Certifications</span>
                  </label>
                  <input
                    type="file"
                    className="file-input w-full max-w-xs"
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        boradCertifications: e.target.value,
                      })
                    }
                    value={doctorData.boradCertifications}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile Picture</span>
                  </label>
                  <input
                    type="file"
                    className="file-input w-full max-w-xs"
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        profilePicture: e.target.value,
                      })
                    }
                    value={doctorData.profilePicture}
                  />
                </div>
              </div> */}
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
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;
