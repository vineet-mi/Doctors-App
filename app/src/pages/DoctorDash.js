import React from "react";
import { useEffect, useState } from "react";
import PatientCardLive from "../components/Doctor/PatientCardLive";
import Prescription from "../components/Doctor/Prescription";
import MedicalHistory from "../components/Doctor/MedicalHistory";
import PatientCardHistory from "../components/Doctor/PatientCardHistory";

const DoctorDash = () => {
  const [selectedPatient, setSelectedPatient] = useState(
    localStorage.getItem("selectedPatient") || null
  );
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Replace the API endpoint with your actual backend endpoint
        const response = await fetch(
          `http://localhost:4000/api/doctors/getPatient/${selectedPatient}`,
          {
            method: "GET", // Change the method to PUT
            // body: JSON.stringify({ isActive: !isActive }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatients();
  }, [selectedPatient]);

  const handleExit = () => {
    // Clear the selected patient and remove it from localStorage
    setSelectedPatient(null);
    localStorage.removeItem("selectedPatient");
  };

  return (
    <div className="flex flex-row">
      <div className="bg-base-200">
        <div className="drawer lg:drawer-open border-r border-base-content ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side overflow-hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <h1 className="text-center py-4 bg-base-300">Live Queue</h1>
            <ul className="w-80 gap-5 text-md text-base-content overflow-auto max-h-72 custom-scrollbar">
              <li>
                <button className="text-base-content">
                  <PatientCardLive setSelectedPatient={setSelectedPatient} />
                </button>
              </li>
            </ul>
            <h1 className="text-center py-4 bg-base-300">Earlier Today</h1>
            <ul className="w-80 gap-5 text-md text-base-content h-[calc(100vh-40vh)] overflow-auto custom-scrollbar">
              <li>
                <a className="text-base-content">
                  <PatientCardHistory selectedPatient={selectedPatient} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-full w-10/12 flex flex-col">
        <div className="navbar bg-base-100 shadow-lg">
          <div className="flex-1 gap-4">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="/images/profile-pic2.png" />
              </div>
            </div>
            <div>
              <h2 class="text-gray-900 text-lg title-font font-medium">
                {patient ? patient.fullName : "Name"}
              </h2>
              <div className="flex gap-1 text-base">
                <p class="leading-relaxed text-base">
                  {patient ? patient.gender : "Gender"}
                </p>
                <p class="leading-relaxed text-base">
                  {patient ? patient.age + "y" : "Age"}
                </p>
                {/* <p class="leading-relaxed text-base">2m</p> */}
              </div>
            </div>
          </div>
          <div className="flex-none gap-3">
            <div>
              <button className="btn btn-neutral px-8">New Consult</button>
            </div>
            <div>
              <button className="btn btn-square" onClick={handleExit}>
                exit
              </button>
            </div>
          </div>
        </div>
        <div className="flex p-10 ">
          <div className="container bg-base-200 h-[calc(100vh-16vh)] shadow-2xl">
            <section class="text-gray-600 gap-2 body-font">
              {/* <div class="container mx-auto  border"> */}
              <div class="flex flex-row px-5 mt-4">
                <div class="p-4 xl:w-1/2 xl:h-[calc(100vh-20vh)] border-r">
                  <div className="artboard text-center xl:h-[calc(100vh-24vh)]">
                    <div className="text-base-content border-b rounded-lg p-2">
                      Medical Hostroy
                    </div>
                    <div className="py-4">
                      <MedicalHistory patient={patient? patient : null} />
                    </div>
                  </div>
                </div>
                <div class=" p-4 xl:w-1/2  xl:h-[calc(100vh-20vh)] border-l">
                  <div className="artboard text-center xl:h-[calc(100vh-24vh)]">
                    <div className=" text-base-content border-b rounded-lg p-2">
                      Preciptions
                    </div>
                    <div className="py-4">
                      <Prescription />
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDash;
