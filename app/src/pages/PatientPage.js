import React from "react";

const PatientPage = () => {
  return (
    <div>
      {" "}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/HeroImage.png"
            className="max-w-screen-lg"
            alt="Heroimg"
          />
          <div className="justify-start items-start text-left ">
            <h1 className="text-5xl font-bold text-blue-700">Get the care</h1>
            <h1 className="text-5xl font-bold text-base-content">
              that you need
            </h1>
            {/* <p className="py-6 pl-5 text-lg"> */}
            <ul className="py-6 ml-10 text-lg text-base list-disc">
              <li> View E-prescriptions anytime, anywhere</li>
              <li> Do Follow-up chats with your doctor</li>
              <li> Get important reminders before consult</li>
            </ul>
            {/* </p> */}
            <div className="form-control flex flex-row gap-2">
              <label className="input-group">
                <span className="bg-base border-e border-base-content">
                  +91
                </span>
                <input
                  type="Text"
                  placeholder="Enter your Phone Number"
                  className="input"
                />
              </label>
              <button className="btn btn-neutral">Book an Appointme</button>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font bg-base-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="sm:flex-row py-6 mb-12 justify-center items-center flex">
            <h1 class="sm:w-2/5 text-base-content text-center font-semibold title-font text-4xl mb-2 sm:mb-0">
              <span className="text-blue-700">Here to help</span> you to get the
              best care ‍
            </h1>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6 px-16">
              <div class="rounded-lg h-64 overflow-hidden justify-center flex items-center">
                <img
                  alt="content"
                  class="object-cover object-center h-40 w-40 rounded-lg"
                  src="/images/checklist.png"
                />
              </div>
              <h2 class="text-xl font-medium text-center title-font text-base-content text-center mt-5">
                E-health records
              </h2>
              <p class="text-base text-center leading-relaxed mt-2">
                Maintain a timeline of your medical history.{" "}
              </p>
            </div>
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6 px-16">
              <div class="rounded-lg h-64 overflow-hidden justify-center flex items-center">
                <img
                  alt="content"
                  class="object-cover object-center h-40 w-40 rounded-lg"
                  src="/images/checklist.png"
                />
              </div>
              <h2 class="text-xl font-medium text-center title-font text-base-content text-center mt-5">
                Secured Payments
              </h2>
              <p class="text-base text-center leading-relaxed mt-2">
                Schedule appointments with secured payment methods.{" "}
              </p>
            </div>
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6 px-16">
              <div class="rounded-lg h-64 overflow-hidden justify-center flex items-center">
                <img
                  alt="content"
                  class="object-cover object-center h-40 w-40 rounded-lg"
                  src="/images/prescription.png"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-base-content text-center mt-5">
                Quality health care
              </h2>
              <p class="text-base text-center leading-relaxed mt-2">
                Stay Connected with your doctor{" "}
              </p>
            </div>
            <div class="p-4 md:w-1/4 sm:mb-0 mb-6 px-16 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden justify-center flex items-center">
                <img
                  alt="content"
                  class="object-cover object-center h-40 w-40 rounded-lg"
                  src="/images/video-conference.png"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-base-content text-center mt-5">
                No location barriers
              </h2>
              <p class="text-base text-center leading-relaxed mt-2">
                Book in-clinic or Video Consultation Appointments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientPage;
