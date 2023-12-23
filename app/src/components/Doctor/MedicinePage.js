import React, { useState } from "react";
const topics = [
  "Complete Blood Count (CBC)",
  "Blood Chemistry Panel",
  "Urinalysis",
  "Lipid Profile",
  "Thyroid Function Tests",
  "Electrocardiogram (ECG)",
  "Chest X-ray",
  "MRI Scan",
  "CT Scan",
  "Ultrasound",
  "Colonoscopy",
  "Endoscopy",
  "Bone Density Test",
  "Mammogram",
  "Pap Smear",
  "Prostate-Specific Antigen (PSA) Test",
  "Liver Function Tests",
  "Kidney Function Tests",
  "Glucose Tolerance Test",
  "Allergy Testing",
  // Add more topics as needed
];

const MedicinePage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicSelect = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <div class="flex flex-col lg:flex-1 lg:flex-row md:flex-col px-5">
        <div class=" xl:w-1/2 xl:h-[calc(100vh-20vh)] ">
          <div className="artboard text-center xl:h-[calc(100vh-24vh)] rounded-lg">
            <div className="text-white text-2xl bg-gray-600 font-noto-serif p-3 mb-4 border-r rounded shadow-lg">
              Medicines
            </div>
            <div className="flex justify-center w-full xl:h-[calc(100vh-30vh)] h-[calc(100vh-45vh)] p-3">
              <div className="card bg-base-300 flex-shrink-0 w-full max-w-3xl shadow-2xl">
                <form className="card-body">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Search Medicine...."
                      className="input input-bordered w-24 md:w-auto"
                    />
                  </div>
                  <div className="form-control ">
                    <div className="grid grid-cols-1 gap-2 max-w-full pt-5 pb-10 phone-1 max-h-52 overflow-y-auto ">
                      <span
                        onClick={toggleDetails}
                        class="inline-flex items-center max-w-fit gap-2 bg-gray-600 justify-between text-white border-0 py-3 px-5 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0 "
                      >
                        Paracetamol (500mg)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <button class="inline-flex items-center max-w-fit gap-2 bg-gray-600 justify-between text-white border-0 py-3 px-5 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0 ">
                        Paracetamoldsfjkshfdsfsf (500mg)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <button class="inline-flex items-center max-w-fit gap-2 bg-gray-600 justify-between text-white border-0 py-3 px-5 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0 ">
                        Paracetamoljhdsfjkkj (500mg)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="border border-gray-500"></div>

                  <div className="form-control mt-2">
                    <div className="grid grid-cols-5 gap-3 max-w-2xl pb-10 phone-1 max-h-52">
                      <button className="btn">Head Ace</button>
                      <button className="btn">Back Pain</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class=" xl:w-1/2  xl:h-[calc(100vh-20vh)] mt-10 lg:mt-0 h-[calc(100vh-30vh)]">
          {showDetails ? (
            <div className="artboard text-center xl:h-[calc(100vh-24vh)]">
              <div className="text-white text-2xl bg-gray-600 font-noto-serif p-3 mb-4 border-r rounded shadow-lg">
                Dose
              </div>
              <div className="flex justify-center w-full xl:h-[calc(100vh-30vh)] h-[calc(100vh-10vh)] p-3">
                {/* <MedicalHistory /> */}
                <div className="card bg-base-300  flex-shrink-0 w-full max-w-3xl shadow-2xl">
                  <div>
                    <div className="navbar bg-base-100 rounded">
                      <div className="navbar-start">
                        <button className="btn btn-ghost btn-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 64 64"
                          >
                            <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="navbar-center">
                        <a className="btn btn-ghost normal-case text-xl">
                          Paracetamol (500mg)
                        </a>
                      </div>
                      <div className="navbar-end">
                        <div className="dropdown">
                          <label className="btn btn-md btn-ghost btn-circle">
                            ✕
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="card-body">
                    <div className="form-control flex flex-col gap-5 overflow-y-auto xl:h-[calc(100vh-45vh)]">
                      <div className="flex flex-col items-start max-w-full phone-1 max-h-52 mx-5">
                        <div className="bg-gray-300 w-full justify-between px-6 p-2 flex flex-row border-b rounded-t-lg">
                          <div className="text-neutral font-medium text-base">
                            Tablet
                          </div>
                          <div className="text-neutral font-medium text-base">
                            Dose
                          </div>
                        </div>
                        <div className="bg-gray-300 w-full p-4 px-8 gap-4 flex flex-row rounded-b-lg items-center">
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            1
                          </div>
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            2
                          </div>
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            3
                          </div>
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            4
                          </div>
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            5
                          </div>
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            6
                          </div>
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            7
                          </div>
                          <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                            8
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Dose...."
                              className="input input-bordered w-full max-w-xs max-h-fit"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start max-w-full phone-1 max-h-52 mx-5">
                        <div className="bg-gray-300 w-full px-6 p-2 flex flex-row border-b rounded-t-lg">
                          <div className="text-neutral font-medium text-base">
                            Timming
                          </div>
                        </div>
                        <div className=" w-full gap-2 flex flex-row rounded-b-lg items-center">
                          <div className=" lg:w-1/3 text-base text-white">
                            <div className="bg-gray-600 text-white">
                              BreakFast
                            </div>
                            <div className="flex flex-row justify-evenly bg-base-200 text-black gap-2">
                              <button className="w-full">Before</button>
                              <div className="border"></div>
                              <button className="w-full">After</button>
                            </div>
                          </div>
                          <div className=" lg:w-1/3 text-base text-white">
                            <div className="bg-gray-600 text-white">
                              BreakFast
                            </div>
                            <div className="flex flex-row justify-evenly bg-base-200 text-black ">
                              <button className="w-full">Before</button>
                              <div className="border"></div>
                              <button className="w-full">After</button>
                            </div>
                          </div>
                          <div className=" lg:w-1/3 text-base text-white">
                            <div className="bg-gray-600 text-white">
                              BreakFast
                            </div>
                            <div className="flex flex-row justify-evenly bg-base-200 text-black  gap-2">
                              <button className="w-full">Before</button>
                              <div className="border"></div>
                              <button className="w-full">After</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start max-w-full phone-1 max-h-52 mx-5">
                        <div className="bg-gray-300 w-full px-6 p-2 flex flex-row border-b rounded-t-lg">
                          <div className="text-neutral font-medium text-base">
                            Duration
                          </div>
                        </div>
                        <div className=" w-full gap-2 flex flex-row rounded-b-lg items-center">
                          <table className="w-full border-2  border-gray-400">
                            <tbody>
                              <tr className="border border-gray-400 ">
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2 ">
                                  1d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  2d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  3d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  4d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  5d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  6d
                                </td>
                              </tr>
                              <tr className="border border-gray-400 ">
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2 ">
                                  1w
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  2w
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  3w
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  1m
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  2m
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  3m
                                </td>
                              </tr>
                              <tr className="border-2 border-gray-400">
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  1d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  1d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  1d
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  1d
                                </td>
                                <td
                                  className="border-2 border-gray-400 w-4"
                                  colSpan="2"
                                >
                                  <div className="flex">
                                    <input
                                      type="text"
                                      placeholder="Type here"
                                      className="w-1/2 px-4"
                                    />
                                    <select className="w-1/2 p-2">
                                      <option value="days">Days</option>
                                      <option value="months">Months</option>
                                    </select>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <h1>Instructions: </h1>
                        <textarea
                          placeholder="Bio"
                          className="textarea textarea-bordered  w-full max-w-lg resize-none"
                          style={{ height: "220px" }}
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="artboard text-center xl:h-[calc(100vh-24vh)] rounded-lg">
              <div className="text-white text-2xl bg-gray-600 font-noto-serif p-3 mb-4 border-r rounded shadow-lg">
                Investigations
              </div>
              <div className="flex justify-center w-full xl:h-[calc(100vh-30vh)] h-[calc(100vh-38vh)] p-3">
                <div className="card bg-base-300  flex-shrink-0 w-full max-w-3xl shadow-2xl">
                  <form className="card-body">
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Search Diagonsis ...."
                        className="input input-bordered w-24 md:w-auto"
                      />
                    </div>
                    <div className="form-control">
                      <div className="flex flex-col gap-2 max-w-2xl pt-5 pb-10 phone-1   max-h-52">
                        <div className="relative rounded-md shadow-sm">
                          <select
                            multiple
                            className="block w-full px-3 py-2 h-64 text-lg font-semibold focus:outline-none sm:text-md rounded-md"
                            onChange={(e) => handleTopicSelect(e.target.value)}
                          >
                            {topics.map((topic) => (
                              <option
                                key={topic}
                                value={topic}
                                className="hover:bg-gray-500 hover:text-white rounded px-4 p-1 my-2"
                              >
                                {topic}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex flex-col border mt-2">
                          <h2 className="text-md flex justify-start  font-semibold text-gray-600">
                            Selected Topics:
                          </h2>
                          <ul className="xl:h-[calc(100vh-80vh)] h-32 overflow-y-auto">
                            {selectedTopics.map((topic) => (
                              <li key={topic}>
                                <div className="grid grid-cols-1 gap-2 max-w-full py-2 phone-1 max-h-40">
                                  <span class="inline-flex items-center max-w-fit gap-2 bg-gray-600 justify-between text-white border-0 py-3 px-5 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0 ">
                                    {topic}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      class="w-4 h-4"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicinePage;
