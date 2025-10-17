import React from "react";
import { NavLink } from "react-router";
import userProfile from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 flex justify-between">
      <div className=""></div>
      <div className="nav flex items-center gap-5">
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn px-4 py-2 rounded transition-colors duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-100"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn px-4 py-2 rounded transition-colors duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-100"
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `btn px-4 py-2 rounded transition-colors duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-100"
                }`
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logo_nav flex items-center gap-5">
        <img src={userProfile} alt="" />
        <button className="btn btn-neutral">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
