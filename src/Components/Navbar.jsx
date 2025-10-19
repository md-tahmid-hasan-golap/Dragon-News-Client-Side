import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import userProfile from "../assets/user.png";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Menu, X } from "lucide-react"; // react icons alternative

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Dragon News
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <ul
          className={`flex flex-col sm:flex-row absolute sm:static left-0 w-full sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in-out shadow-sm sm:shadow-none ${
            isOpen
              ? "top-16 opacity-100"
              : "top-[-400px] opacity-0 sm:opacity-100"
          } sm:top-auto sm:opacity-100 gap-4 sm:gap-6 items-center sm:items-center py-4 sm:py-0`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded font-medium transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-100"
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
                `px-4 py-2 rounded font-medium transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-100"
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
                `px-4 py-2 rounded font-medium transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-100"
                }`
              }
            >
              Career
            </NavLink>
          </li>

          {/* User Section */}
          {user ? (
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:ml-5">
              <img
                className="w-10 h-10 rounded-full border-2 border-green-600"
                src={user.photoURL}
                alt="User"
                title={user.displayName}
              />
              <button
                onClick={handelLogout}
                className="btn bg-red-600 text-white text-sm px-4 py-1 rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:ml-5">
              <img className="w-10 h-10" src={userProfile} alt="User" />
              <Link
                to="/auth/login"
                className="btn btn-neutral text-sm px-4 py-1 rounded-md"
              >
                Login
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
