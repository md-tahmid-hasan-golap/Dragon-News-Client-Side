import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          draggable: true,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "Sign In with Google Successful!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Sign In Failed!",
          text: error.message,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-slate-900 px-4">
      <div className="card w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl rounded-lg">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Login Your Account
          </h1>
          <hr className="my-5 border-gray-300 dark:border-slate-600" />

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="label font-medium text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full mt-1"
                required
              />
              <div className="flex justify-end mt-1">
                <a href="#" className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>
            </div>

            <button className="btn btn-neutral w-full mt-4">Login</button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2"
          >
            <FcGoogle size={25} /> Sign In with Google
          </button>

          <p className="text-center py-4 text-gray-700 dark:text-gray-300">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
