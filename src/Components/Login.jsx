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
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Login SuccessFully!",
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

  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Sign In with Google SuccessFully!",
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
    <div className="my-32">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login your account</h1>
          <hr className="my-4" />

          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label font-bold text-black mt-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                required
              />

              <label className="label font-bold text-black mt-4">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />

              <div className="flex justify-between items-center mt-2">
                <a href="#" className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>

              <button className="btn btn-neutral mt-5 w-full">Login</button>
            </fieldset>
          </form>

          <button onClick={handelGoogleSignIn} className="btn btn-outline">
            <FcGoogle size={25} />
            Sign In With Google
          </button>
        </div>

        <p className="text-center py-4">
          Don’t Have An Account?{" "}
          <Link to="/auth/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
