import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="text-gray-600 body-font relative bg-base-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <div class="sm:flex-row py-4 justify-center items-center flex px-60">
              <h1 class="sm:w-2/5 text-base-content font-semibold title-font text-4xl mb-2 sm:mb-0">
                Achieve your
                <span> </span>
                <span className="text-blue-700">Performance with us</span>
              </h1>
            </div>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Let us know a little about yourself, and we’ll reach out to
              schedule an inside look at how we can partner together to drive
              your success.
            </p>
          </div>
          <div class="md:w-2/4 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Type Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Type Email"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Type Number"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <select className="select select-bordered w-full max-w-xs text-base-content">
                    <option disabled selected>
                      specialization
                    </option>
                    <option value={"Pediatrician"}>Pediatrician</option>
                    <option value={"General Physician"}>
                      General Physician
                    </option>
                    <option value={"Dermatologist"}>Dermatologist</option>
                    <option value={"E.N.T"}>E.N.T</option>
                    <option value={"Dentist"}>Dentist</option>
                    <option value={"Other"}>Other</option>
                  </select>
                </div>
              </div>

              <div class="p-2 w-full mx-auto justify-center items-center flex">
                <button class="btn btn-neutral mt-16">Connect</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
