import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";




const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const Navigate = useNavigate();
   const { logout } = useLogout();
   const { user, userType } = useAuthContext();

console.log(user);


const handleClick = () => {
  logout();
};
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  }
  
  // const handleManageRecepClick = () => {
  //   Navigate("/manage-recep");
  // }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme]);

    // const getInitials = (name) => {
    //   const names = name.split(" ");
    //   return names.map((n) => n[0]).join("");
    // };


  const renderUserNavbar = () => {
    switch (userType) {
      case "admin":
        return (
          // Admin Navbar
          <div>
            {/* Admin specific links and components */}
            <div className="flex items-center mr-4">
              <div className="dropdown dropdown-end mr-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="/images/profile-pic2.png"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user.admin.fullName}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <Link to={'/admin-dashboard'} >
                    <a>Dashboard</a>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <button
                        onClick={handleClick}
                        className="text-indigo-200 hover:text-white"
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ... other admin links */}
          </div>
        );
      case "doctor":
        return (
          // Doctor Navbar
          <div>
            {/* Doctor specific links and components */}
            <div className="flex items-center mr-4">
              <div className="dropdown dropdown-end mr-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="/images/profile-pic2.png"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user.doctor.username}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <Link to={"/doctor-dash"}>
                      <a>Dashboard</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/manage-recep"} >
                    <a>Manage Receptionist</a>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <button
                        onClick={handleClick}
                        className="text-indigo-200 hover:text-white"
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ... other doctor links */}
          </div>
        );
      case "patient":
        return (
          // Patient Navbar
          <div>
            {/* Patient specific links and components */}
            <Link to="/patient-dashboard">Patient Dashboard</Link>
            {/* ... other patient links */}
          </div>
        );
      case "reception":
        return (
          // Receptionist Navbar
          <div>
            {/* Doctor specific links and components */}
            <div className="flex items-center mr-4">
              <div className="dropdown dropdown-end mr-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="/images/profile-pic2.png"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user.receptionist.username}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <Link to={"/reception-dash"}>
                      <a>Dashboard</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={"/manage-recep"}>
                      <a>Manage Receptionist</a>
                    </Link>
                  </li> */}
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <button
                        onClick={handleClick}
                        className="text-indigo-200 hover:text-white"
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ... other doctor links */}
          </div>
        );
      default:
        return (
          // Default Navbar (when no user is logged in)
          <div>
            <Link to="/login">
              <button className='btn'>Login</button>
            </Link>
            {/* ... other default links */}
          </div>
        );
    }
  };

  return (
    <div>
      <div className="navbar bg-neutral">
        <div className="navbar-start">
          <Link to="/">
            <a className="btn text-white btn-ghost normal-case text-xl">DApp</a>
          </Link>
        </div>

        {/* If user is not present */}
        <div className="navbar-center">
          <div className="flex-none">
            <ul className="menu menu-horizontal text-white px-1 text-base">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Patients</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* if doctor is not logined */}

        <div className="navbar-end">
          <label className="swap swap-rotate text-white btn-circle">
            <input type="checkbox" onChange={handleToggle} />
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {renderUserNavbar()}
        </div>
      </div>
    </div>
  );
}

export default Navbar