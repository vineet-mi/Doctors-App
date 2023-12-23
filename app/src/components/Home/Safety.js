import React from 'react'

const Safety = () => {
  return (
    <div>
      <section class="text-gray-600 body-font bg-base-200 flex flex-col justify-center items-center">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center px-40 mb-20">
            <div class="sm:flex-row py-4 justify-center items-center flex">
              <h1 class="sm:w-2/5 text-base-content font-semibold title-font text-4xl mb-2 sm:mb-0">
                Your data is in ‍
                <span className="text-blue-700">safe hands</span>
              </h1>
            </div>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Health should never come at the expense of privacy. With Docon,
              you decide what you want to share. We use the latest encryption
              technologies and comply with the NDHM Act 2018.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 gap-6 justify-center items-center">
            <div class="p-4 lg:w-1/2  h-32 max-w-xl">
              <div class="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src="/images/medal.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h1 class="title-font font-medium text-2xl text-base-content">
                    ABDM compliant
                  </h1>
                  <p class="mb-4">
                    Docon is ABDM milestone-3 compliant. Authorised healthcare
                    workers can view patient’s medical history with the consent
                    of the patient.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2  h-32 max-w-xl">
              <div class="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src="/images/lock.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h1 class="title-font font-medium text-2xl text-base-content">
                    End-to-end Encryption
                  </h1>
                  <p class="mb-4">
                    Multiple backups are done with 128-bit advanced encryption
                    standards (AES) to protect your sensitive data.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2  h-32 max-w-xl">
              <div class="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src="/images/folder.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h1 class="title-font font-medium text-2xl text-base-content">
                    Adherence to Guidelines
                  </h1>
                  <p class="mb-4">
                    Docon complies with the guidelines for tele-consultation,
                    issued by Niti Aayog in 2020.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2  h-32 max-w-xl">
              <div class="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src="/images/chat.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h1 class="title-font font-medium text-2xl text-base-content">
                    If In Doubt, Reach Out
                  </h1>
                  <p class="mb-4">
                    Have any queries? Our team will be more than happy to
                    answer! Reach out to us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <button className="btn btn-neutral">Start Your Journey</button>
        </div>
      </section>
    </div>
  );
}

export default Safety