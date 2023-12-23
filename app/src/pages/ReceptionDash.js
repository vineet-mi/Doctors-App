import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import AddPatient from "../components/Recptionist/AddPatient";
import RegisterPatient from "../components/Recptionist/RegisterPatient";
import useAddVitals from "../hooks/useAddVitals";

const ReceptionDash = () => {
  const { user } = useAuthContext();
  const [getDoctor, setDoctor] = useState();
  const [loading, setLoading] = useState(true);
  const [patient, onPatientSelect] = useState(null);
  const [selectedTab, setSelectedTab] = useState("live");
  const [livequeues, setLiveQueue] = useState(null);
  const [vitalPatientId, setVitalPatientId] = useState(null);
  console.log(livequeues);

  const [vitalData, setVitals] = useState({
    bloodpressure: "",
    heartrate: "",
    respiratoryrate: "",
    temperature: "",
    sugarlevel: "",
    weight: "",
    height: "",
    oxygensaturation: "",
    pulseoximeter: "",
    bmi: "",
    doctorId: user.receptionist.doctorId,
    patientId: vitalPatientId,
    receptionId: user.receptionist._id,
  });

  const { addVitals, error, isLoading } = useAddVitals();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      const doctorID = user.receptionist.doctorId;
      try {
        const response = await fetch(
          `http://localhost:4000/api/receptions/getDoctor/${doctorID}`,
          {
            method: "GET", // Change the method to PUT
            // body: JSON.stringify({ isActive: !isActive }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        //  console.log("reception:", data); // Add this line
        setDoctor(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const doctorID = user.receptionist.doctorId;
      try {
        const response = await fetch(
          `http://localhost:4000/api/receptions/getlivequeue/${doctorID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setLiveQueue(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live queue data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async(e) => {
     e.preventDefault();

    await addVitals(vitalData, vitalPatientId);
    console.log(vitalData);
  }

  const handleAddVitals = (value) => {
    setVitalPatientId(value);
    // console.log(value);
  }

  return (
    <div>
      <div className="flex flex-col p-20 justify-center">
        <div className="flex text-2xl font-bold text-left w-full justify-between bg-neutral py-4 px-8 items-center rounded">
          <h1 className="text-white">{getDoctor ? getDoctor.name : loading}</h1>
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${selectedTab === "live" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("live")}
            >
              Live Queue
            </a>
            <a
              role="tab"
              className={`tab ${selectedTab === "past" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("past")}
            >
              Past Queue
            </a>
          </div>
          <div className="gap-2 flex">
            <button
              className="btn btn-sm"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Add Patient
            </button>
            {/* <button
              className="btn btn-sm"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              New Patient
            </button> */}
          </div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <AddPatient onPatientSelect={onPatientSelect} />
              </form>
              {/* <AddReception /> */}
            </div>
          </dialog>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box max-w-3xl">
              <form method="dialog ">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <RegisterPatient />
              </form>
              {/* <AddReception /> */}
            </div>
          </dialog>
        </div>
        {selectedTab === "live" && (
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
                      <th>Phone Number</th>
                      <th>Add Vitals</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="mx-auto bg-neutral">
                    {Array.isArray(livequeues) && livequeues.length > 0 ? (
                      livequeues.map((livequeue) => (
                        <tr key={livequeue._id}>
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
                            </div>
                          </td>
                          <td>
                            <div>
                              <div className="font-bold text-white">
                                {livequeue.fullName}
                              </div>
                            </div>
                          </td>
                          <td className="text-white">{livequeue.phone}</td>
                          {/* <td></td> */}
                          <th>
                            <button
                              className="btn"
                              onClick={() =>{

                                document
                                  .getElementById("my_modal_1")
                                  .showModal();
                                handleAddVitals(livequeue.patientId);
                              }
                              }
                            >
                              Add Vitals
                            </button>
                          </th>
                          <th>
                            <button className="btn">Delete</button>
                          </th>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No live queues available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
        {/* vital form  */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box flex relative max-w-fit">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form className="card-body " onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Blood Pressure</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Blood Pressure"
                    className="input input-bordered"
                    onChange={(e) =>
                setVitals({ ...vitalData, bloodpressure: e.target.value })
              }
              value={vitalData.bloodpressure}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Heart Rate</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Heart Rate"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, heartrate: e.target.value })
              }
              value={vitalData.heartrate}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Respiratory Rate</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Respiratory Rate"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, respiratoryrate: e.target.value })
              }
              value={vitalData.respiratoryrate}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Temperture</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Temperature"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, temperature: e.target.value })
              }
              value={vitalData.temperature}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sugar Level</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Sugar Level"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, sugarlevel: e.target.value })
              }
              value={vitalData.sugarlevel}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bmi</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Bmi"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, bmi: e.target.value })
              }
              value={vitalData.bmi}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Weight</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Weight"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, weight: e.target.value })
              }
              value={vitalData.weight}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Height</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Height"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, height: e.target.value })
              }
              value={vitalData.height}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Oxygen Saturation</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Oxygen Saturation"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, oxygensaturation: e.target.value })
              }
              value={vitalData.oxygensaturation}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pulse Oximeter</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Pulse Oximeter"
                    className="input input-bordered"
                     onChange={(e) =>
                setVitals({ ...vitalData, pulseoximeter: e.target.value })
              }
              value={vitalData.pulseoximeter}
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
            {/* </div> */}
          </div>
        </dialog>

        {selectedTab === "past" && (
          <div>{/* Put your past queue content here */}</div>
        )}
      </div>
    </div>
  );
};

export default ReceptionDash;
