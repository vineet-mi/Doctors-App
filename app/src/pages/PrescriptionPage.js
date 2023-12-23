import React, { useState } from "react";
import MedicalHistory from "../components/Doctor/MedicalHistory";
import Prescription from "../components/Doctor/Prescription";
import SymtomPage from "../components/Doctor/SymtomPage";
import MedicinePage from "../components/Doctor/MedicinePage";
import GeneratePrescription from "../components/Doctor/GeneratePrescription";
import {  useNavigate } from "react-router-dom";

const PrescriptionPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 2; // Total number of steps
  const Navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleGenerate = () => {
    Navigate("/generate-prescription");
  }
  return (
    <div>
      <div className="flex p-10 justify-center items-center">
        <div className="container h-full">
          <section class="text-gray-600 gap-2 body-font">
            {/* <div class="container mx-auto  border"> */}
            <div className="container mx-auto">
              <div style={{ display: currentStep === 0 ? "block" : "none" }}>
                <SymtomPage />
              </div>
              <div style={{ display: currentStep === 1 ? "block" : "none" }}>
                <MedicinePage />
              </div>
              {/* <div style={{ display: currentStep === 2 ? "block" : "none" }}>
                  <GeneratePrescription />
                </div> */}
              <div className="my-4 flex items-end justify-end">
                {currentStep > 0 && (
                  <div className="mx-2 flex gap-2">
                    <button
                      className="btn btn-neutral"
                      onClick={handleGenerate}
                    >
                      Generate Presciption
                    </button>
                    <button
                      onClick={handleBack}
                      className="btn bg-blue-700 text-white"
                    >
                      Back
                    </button>
                  </div>
                )}
                {currentStep < totalSteps - 1 && (
                  <button
                    onClick={handleNext}
                    className="btn bg-blue-700 text-white"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
            {/* </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionPage;
