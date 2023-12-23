import React from 'react'

const Info = () => {
  return (
    <section class="text-gray-600 body-font bg-base-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="sm:flex-row py-6 mb-12 justify-center items-center flex">
          <h1 class="sm:w-2/5 text-base-content text-center font-semibold title-font text-4xl mb-2 sm:mb-0">
            Manage your ‍<span className="text-blue-700">Medical Records,</span>{" "}
            easily
          </h1>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6 px-28">
            <div class="rounded-lg h-64 overflow-hidden justify-center flex items-center">
              <img
                alt="content"
                class="object-cover object-center h-40 w-40 rounded-lg"
                src="/images/checklist.png"
              />
            </div>
            <h2 class="text-xl font-medium text-center title-font text-base-content text-center mt-5">
              Stay organised
            </h2>
            <p class="text-base text-center leading-relaxed mt-2">
              Maintain a timeline of your patients’ health history at ease.{" "}
            </p>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6 px-28">
            <div class="rounded-lg h-64 overflow-hidden justify-center flex items-center">
              <img
                alt="content"
                class="object-cover object-center h-40 w-40 rounded-lg"
                src="/images/prescription.png"
              />
            </div>
            <h2 class="text-xl font-medium title-font text-base-content text-center mt-5">
              Access notes
            </h2>
            <p class="text-base text-center leading-relaxed mt-2">
              Share data with your patients on your term{" "}
            </p>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6 px-28">
            <div class="rounded-lg h-64 overflow-hidden justify-center flex items-center">
              <img
                alt="content"
                class="object-cover object-center h-40 w-40 rounded-lg"
                src="/images/video-conference.png"
              />
            </div>
            <h2 class="text-xl font-medium title-font text-base-content text-center mt-5">
              No more paperwork
            </h2>
            <p class="text-base text-center leading-relaxed mt-2">
              With a tap of a button, you can go through your patient’s records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info