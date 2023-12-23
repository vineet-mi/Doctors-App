import React from 'react'

const PatientSignup = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Get Yourself Registered!</h1>
            <p className="py-6">
              "Secure Your Well-being Today! Register for Your Health and
              Happiness."
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body">
              {/* <div className="flex flex-row gap-10"> */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="input input-bordered"
                    required
                  />
                </div>
              {/* </div>   */}
              {/* <div className="flex flex-row gap-10"> */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter UserName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input input-bordered"
                    required
                  />
                </div>
              {/* </div> */}
              {/* <div className="flex flex-row gap-10"> */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="input input-bordered"
                    required
                  />
                </div>
              {/* </div> */}
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile Picture</span>
                  </label>
                  <input type="file" className="file-input w-full max-w-xs" />
                </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register Me!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientSignup;