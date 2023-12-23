import React,{useState} from 'react'

const SymtomPage = () => {

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div class="flex flex-col lg:flex-1 lg:flex-row md:flex-col px-5 ">
        <div class="xl:w-1/2 xl:h-[calc(100vh-20vh)]">
          <div className="artboard text-center xl:h-[calc(100vh-24vh)] rounded-lg ">
            <div className="text-white text-2xl bg-neutral font-noto-serif p-3 mb-4 border-r rounded shadow-lg">
              Symptoms & Findings
            </div>
            <div className="flex justify-center w-full xl:h-[calc(100vh-30vh)]  h-[calc(100vh-45vh)] p-3">
              <div className="card bg-base-300 flex-shrink-0 w-full max-w-3xl shadow-2xl">
                <form className="card-body">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Search Symptom ...."
                      className="input input-bordered w-24 md:w-auto"
                    />
                  </div>
                  <div className="form-control">
                    <div className="grid grid-cols-5 gap-3 max-w-2xl pt-5 pb-10 phone-1 border-b border-gray-500   max-h-52">
                      <span
                        onClick={toggleDetails}
                        class="inline-flex items-center bg-gray-600 justify-between text-white border-0 py-3 px-5 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0"
                      >
                        Fever
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
                      {/* </div> */}
                    </div>
                  </div>

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
        <div class=" xl:w-1/2  xl:h-[calc(100vh-20vh)] mt-10 lg:mt-0">
          {showDetails ? (
            <div className="artboard text-center xl:h-[calc(100vh-24vh)]">
              <div className="text-white text-2xl bg-neutral font-noto-serif p-3 mb-4 border-r rounded shadow-lg">
                History
              </div>
              <div className="flex justify-center w-full xl:h-[calc(100vh-30vh)]  h-[calc(100vh-45vh)] p-3">
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
                        <a className="font-semibold normal-case text-xl">
                          Fever
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
                    <div className="form-control">
                      <div className="flex flex-col gap-3 max-w-xl pt-5  pb-10 phone-1 max-h-52">
                        <div className="flex items-center">
                          <h1 className="text-lg font-semibold">Duration :</h1>
                        </div>
                        <div className="p-2">
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
                                  1w
                                </td>
                                <td className="border-2 border-gray-400 hover:bg-gray-400 cursor-pointer hover:text-white p-2">
                                  2w
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
                    </div>

                    <div className="form-control">
                      <div className="flex flex-row max-w-xl mb-5 phone-1 max-h-52 items-center">
                        <h1 className="text-lg font-semibold">Severity:</h1>
                        <div className="mx-4">
                          <button className="btn btn-outline btn-md px-12 rounded-l-lg rounded-r-none">
                            Mild
                          </button>
                          <button className="btn btn-outline btn-md px-8 rounded-none">
                            Moderate
                          </button>
                          <button className="btn btn-outline btn-md px-12 rounded-l-none rounded-r-lg ">
                            Severe
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <h1 className="text-lg font-semibold">Instructions: </h1>
                      <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered  w-full max-w-lg resize-none"
                        style={{ height: "220px" }}
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="artboard text-center xl:h-[calc(100vh-24vh)]  rounded-lg">
              <div className="text-white text-2xl bg-neutral font-noto-serif p-3 mb-4 border-r rounded shadow-lg">
                Diagnosis
              </div>
              <div className="flex justify-center w-full xl:h-[calc(100vh-30vh)]  h-[calc(100vh-45vh)] p-3">
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
                      <div className="grid grid-cols-5 gap-3 max-w-2xl pt-5 pb-10 phone-1 border-b border-gray-500   max-h-52">
                        <span class="inline-flex items-center bg-gray-600 justify-between text-white border-0 px-auto p-3 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0">
                          Blood Test
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
                        {/* </div> */}
                      </div>
                    </div>

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
          )}
        </div>
      </div>
    </div>
  );
}

export default SymtomPage