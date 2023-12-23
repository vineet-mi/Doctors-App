import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GeneratePrescription = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  return (
    <div className="border border-black p-10">
      <div className="text-right py-2">
        <button className="btn">Print Px</button>
      </div>
      <div className="drawer lg:drawer-open h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="flex">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
         </div>
          <div className="w-full">
            <div className="prescription bg-white p-4 rounded-md shadow-md xl:h-[calc(100vh-20vh)]">
              <div className="prescription-header mb-4 flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-left">
                    Fortis Hospital
                  </h2>
                  <p className="text-sm">Airport Road, Sanaganer -302021</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-right">
                    Dr. Akash Mishra
                  </h1>
                  <p className="text-sm text-right">Physiotherepist</p>
                </div>
              </div>
              <div className="border border-black"></div>
              <div className="prescription-info flex justify-between py-2">
                <div className="text-left">
                  <h3 className="text-sm font-semibold mb-2">
                    Name: <span className="font-normal">Vineet Mishra</span>
                  </h3>
                  <h3 className="text-sm font-semibold mb-2">
                    Age/Sex: <span className="font-normal">21/M</span>
                  </h3>
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold mb-2">
                    Date: <span className="font-normal">17/10/2023</span>
                  </h3>
                  <h3 className="text-sm font-semibold mb-2">
                    Phone: <span className="font-normal">+91 8955607565</span>
                  </h3>
                </div>
              </div>
              <div className="prescription-body mt-4 text-left">
                <div>
                  <h1 className="font-semibold text-sm">
                    Symptoms: <span className="font-normal">Fever</span>
                  </h1>
                </div>
                <div>
                  <h1 className="font-semibold text-sm">
                    Vitals: <span className="font-normal">Weight: 85kg</span>
                  </h1>
                </div>
                <div>
                  <h1 className="font-semibold text-sm">
                    Diagnosis:{" "}
                    <span className="font-normal">Type 2 desease tablets</span>
                  </h1>
                </div>
                <table className="table-auto mt-4 mx-auto">
                  <thead>
                    <tr className="text-sm">
                      <th className="border px-2 py-2 w-1/12">Rx</th>
                      <th className="border px-2 py-2 w-3/12">Name</th>
                      <th className="border px-2 py-2 w-1/12">Frequency</th>
                      <th className="border px-2 py-2 w-2/12">Duration</th>
                      <th className="border px-2 py-2 w-3/12">Notes</th>
                      <th className="border px-2 py-2 w-2/12">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {data.map((item, index) => ( */}
                    {/* <tr key={index}> */}
                    <tr className="text-sm">
                      {/* <td className="border px-4 py-2">{item.column1}</td> */}
                      <td className="border px-2 py-2">1</td>
                      <td className="border px-2 py-2">Azithromicine</td>
                      <td className="border px-2 py-2">0-1-0</td>
                      <td className="border px-2 py-2">2 Days</td>
                      <td className="border px-2 py-2">Before lunch</td>
                      <td className="border px-2 py-2">2 Capsules</td>
                      {/* <td className="border px-4 py-2">{item.column6}</td> */}
                    </tr>
                    <tr className="text-sm">
                      {/* <td className="border px-4 py-2">{item.column1}</td> */}
                      <td className="border px-2 py-2">1</td>
                      <td className="border px-2 py-2">Azithromicine</td>
                      <td className="border px-2 py-2">0-1-0</td>
                      <td className="border px-2 py-2">2 Days</td>
                      <td className="border px-2 py-2">Before lunch</td>
                      <td className="border px-2 py-2">2 Capsules</td>
                      {/* <td className="border px-4 py-2">{item.column6}</td> */}
                    </tr>
                    <tr className="text-sm">
                      {/* <td className="border px-4 py-2">{item.column1}</td> */}
                      <td className="border px-2 py-2">1</td>
                      <td className="border px-2 py-2">Azithromicine</td>
                      <td className="border px-2 py-2">0-1-0</td>
                      <td className="border px-2 py-2">2 Days</td>
                      <td className="border px-2 py-2">Before lunch</td>
                      <td className="border px-2 py-2">2 Capsules</td>
                      {/* <td className="border px-4 py-2">{item.column6}</td> */}
                    </tr>
                    <tr className="text-sm">
                      {/* <td className="border px-4 py-2">{item.column1}</td> */}
                      <td className="border px-2 py-2">1</td>
                      <td className="border px-2 py-2">Azithromicine</td>
                      <td className="border px-2 py-2">0-1-0</td>
                      <td className="border px-2 py-2">2 Days</td>
                      <td className="border px-2 py-2">Before lunch</td>
                      <td className="border px-2 py-2">2 Capsules</td>
                      {/* <td className="border px-4 py-2">{item.column6}</td> */}
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
                <div className="mt-2">
                  <h1 className="font-semibold text-sm">
                    Adviced Investigation:{" "}
                    <span className="font-normal">Blood Test</span>
                  </h1>
                </div>
                <div className="mt-2">
                  <h1 className="font-semibold text-sm">
                    Instructions:{" "}
                    <ul className="text-sm font-normal list-disc ml-6">
                      <li className="">Drink Warm Water</li>
                      <li className="">Wake Up Early</li>
                      <li className="">Do atleast 2 time excercise Daily</li>
                      <li className="">Do atleast 2 time excercise Daily</li>
                      <li className="">Do atleast 2 time excercise Daily</li>
                    </ul>
                  </h1>
                </div>
              </div>
              <div className="prescription-footer mt-auto py-3">
                <div className="items-end text-right">
                  <img
                    className="w-12 h-10 ml-auto mr-10 flex"
                    src="/images/Digital-signature.webp"
                  ></img>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-right">
                    Dr. Akash Mishra
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side xl:h-[calc(100vh-20vh)]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="w-full justify-between px-6 p-2 flex flex-row border-b rounded-t-lg">
              <div className="font-medium text-base">Follow Up</div>
            </div>
            <div className=" w-full p-4 gap-4 flex flex-col rounded-b-lg items-center">
              <div className="flex w-full justify-evenly">
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
              </div>
              <div className="flex  items-center w-full justify-evenly">
                <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                  4
                </div>
                <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                  4
                </div>
                <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                  4
                </div>
                <div className="p-2 px-4 bg-neutral text-base text-white rounded-3xl">
                  4
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default GeneratePrescription;
