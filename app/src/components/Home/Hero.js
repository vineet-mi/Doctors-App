import React, { useState } from "react";
// import BoxOfficeNewsImage from "images/HeroImage.png";


const Hero = () => {
  const [number, setNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/HeroImage.png"
            className="max-w-screen-lg"
            alt="Heroimg"
          />
          <div className="justify-start items-start text-left ">
            <h1 className="text-5xl font-bold text-base-content">
              Your one stop
            </h1>
            <h1 className="text-5xl font-bold text-blue-700">
              digital Clinic.
            </h1>
            {/* <p className="py-6 pl-5 text-lg"> */}
            <ul className="py-6 ml-10 text-lg  list-disc">
              <li> View E-prescriptions anytime, anywhere</li>
              <li> Do Follow-up chats with your doctor</li>
              <li> Get important reminders before consult</li>
            </ul>
            {/* </p> */}
            <form onSubmit={handleSubmit}>
              <div className="form-control flex flex-row gap-2">
                <label className="input-group">
                  <span className="bg-base border-e border-base-content">
                    +91
                  </span>
                  <input
                    type="Text"
                    placeholder="Enter your Phone Number"
                    className="input"
                    onChange={(e) => setNumber()}
                    value={number}
                  />
                </label>
                <button className="btn btn-neutral">Enroll Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
