import React from "react";

const Stats = () => {
  return (
    <div className="bg-base-200 mx-auto py-10">
      <div className="stats p-5 bg-base-200 mx-36 gap-10 flex flex-row justify-center items-center">
        <div className="stat px-8 text-center flex flex-col justify-center items-center">
          <img src="/images/Doctor.gif" className="w-20 h-20" alt="#" />
          <div className="stat-value">4,500+</div>
          <div className="stat-title">Active Doctors</div>
        </div>
        <div className="stat px-8 text-center flex flex-col justify-center items-center">
          <img src="/images/Patient.gif" className="w-20 h-20" alt="#" />
          <div className="stat-value text-secondary">20K+</div>
          <div className="stat-title">Happy Patients</div>
        </div>
        <div className="stat px-8 text-center flex flex-col justify-center items-center">
          <img src="/images/document.gif" className="w-20 h-20" alt="#" />
          <div className="stat-value">31K</div>
          <div className="stat-title">Digital Prescriptions</div>
        </div>
        <div className="stat px-8 text-center flex flex-col justify-center items-center">
          <img src="/images/Location.gif" className="w-20 h-20" alt="#" />
          <div className="stat-value">10+</div>
          <div className="stat-title">Cities Served</div>
        </div>
        <div className="stat px-8 text-center flex flex-col justify-center items-center">
          <img src="/images/Speacility.gif" className="w-20 h-20" alt="#" />
          <div className="stat-value">20+</div>
          <div className="stat-title">Specialities</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
