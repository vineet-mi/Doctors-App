import React from "react";
import { useState } from "react";
import { useReceptionLogin } from "../hooks/useReceptionLogin";

const ReceptionistLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { receptionLogin, error, isLoading } = useReceptionLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await receptionLogin(username, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome Receptionist!</h1>
            <p className="py-6 max-w-md">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input input-bordered"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  aria-busy={isLoading}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
                {error && <div className="error">{error}</div>}{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceptionistLogin;
