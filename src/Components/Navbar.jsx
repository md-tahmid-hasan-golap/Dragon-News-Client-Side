import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import userProfile from "../assets/user.png";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "LogOut Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        {user ? (
          <div className="logo_nav flex items-center gap-5">
            <img
              className="w-12 h-12 rounded-full border-2 border-green-600"
              src={user.photoURL}
              title={user.displayName}
              alt="User Photo"
            />
            <button
              onClick={handelLogout}
              className="btn bg-red-600 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="logo_nav flex items-center gap-5">
            {" "}
            <img src={userProfile} alt="" />
            <Link to="/auth/login" className="btn btn-neutral">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
