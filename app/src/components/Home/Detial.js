import React from "react";

const Detail = () => {
  

  return (
    <div className="bg-base-200 flex flex-col gap-10 py-24 sm:py-24">
      <div class="sm:flex-col py-4 mb-12 justify-center items-center flex">
        <h1 class="sm:w-2/5 font-semibold title-font text-center text-4xl mb-2 sm:mb-0">
          Simplified ‍<span className="text-blue-700 just">Clinic Management</span>
        </h1>
      </div>
      <div className="flex fex-row justify-center items-center gap-10 bg-base-200">
        <div className="card bg-base-300 lg:card-side shadow-xl">
          <figure>
            <img
              src="/images/3922314.png"
              alt="Album"
              className="w-40 h-40 p-2 "
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Patient Engagement</h2>
            <p className="mx-auto w-80">
              Increase patient retention by effectively using various tools that
              improve patient experience and outcomes. Continue to take care of
              them, even after consultation!
            </p>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
          </div>
        </div>
        <div className="card bg-base-300 lg:card-side shadow-xl ">
          <figure>
            <img
              src="/images/3896559.png"
              alt="Album"
              className="w-40 h-40  p-2 rounded-xl"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Telehealth & Appointment</h2>
            <p className="mx-auto w-80">
              With planned appointments, you can easily manage your queue and
              consult patients remotely from anywhere and on any device.
            </p>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
          </div>
        </div>
        <div className="card bg-base-300 lg:card-side shadow-xl ">
          <figure>
            <img
              src="/images/labtest.avif"
              alt="Album"
              className="w-40 h-40 mix-blend-multiply p-2 rounded-xl"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Medicines & Lab Tests</h2>
            <p className="mx-auto w-80">
              Our partners enable doctors to provide additional services like
              e-pharmacy and e-diagnostic services at discounted prices.
            </p>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
          </div>
        </div>
      </div>

      <div className="flex fex-row justify-center items-center gap-10 bg-base-200">
        <div className="card bg-base-300 lg:card-side shadow-xl ">
          <figure>
            <img
              src="/images/3515462.png"
              alt="Album"
              className="w-40 h-40 p-2 rounded-xl"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Reports & Analytics</h2>
            <p className="mx-auto w-80">
              Our advanced tools can help you understand your practice better
              and generate insights.
            </p>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
          </div>
        </div>
        <div className="card bg-base-300 lg:card-side shadow-xl ">
          <figure>
            <img
              src="/images/6506712.png"
              alt="Album"
              className="w-40 h-40 p-2 rounded-xl"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Electronic health records</h2>
            <p className="mx-auto w-80">
              Our technology enables doctors to maintain patient records more
              efficiently and effectively.
            </p>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
