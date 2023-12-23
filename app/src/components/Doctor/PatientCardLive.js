import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const PatientCard = ({ setSelectedPatient }) => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [livequeues, setLiveQueue] = useState(null);
  const [selectedPatient, setSelectedPatientState] = useState(null);

  const doctorID = user.doctor._id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/doctors/getlivequeue/${doctorID}`,
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
  }, [user.doctor._id]);

  const handlePatient = (value) => {
    setSelectedPatient(value);
    localStorage.setItem("selectedPatient", value);
  };

  return (
    <div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {livequeues.map((doc) => (
              <div
                key={doc.id}
                className={`flex border-b border-gray-200 border-opacity-50 p-4 sm:flex-row flex-row ${
                  selectedPatient === doc.patientId
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={() => handlePatient(doc.patientId)}
              >
                <div className="w-10 h-10 sm:mr-6 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <img src="/images/profile-pic2.png" alt="" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-base text-lg title-font font-medium">
                    {doc.fullName}
                  </h2>
                  <div className="flex gap-1 text-base">
                    <p className="leading-relaxed text-base">
                      <span className="font-semibold">Sex:</span> {doc.gender}
                    </p>
                    <p className="leading-relaxed text-base">
                      <span className="font-semibold">Age:</span> {doc.age}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientCard;
