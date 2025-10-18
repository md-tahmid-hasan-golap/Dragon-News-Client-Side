import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const acceptTerms = form.acceptTerms.checked;
    console.log("Name:", name);
    console.log("Photo URL:", photoURL);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Accepted Terms:", acceptTerms);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Register SuccessFully!",
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
          <h1 className="text-3xl text-center font-bold">
            Register your account
          </h1>
          <hr className="my-4" />

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label font-bold text-black mt-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />

              <label className="label font-bold text-black mt-4">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
              />

              <label className="label font-bold text-black mt-4">Email</label>
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

              <div className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  className="checkbox checkbox-sm"
                  required
                />
                <p className="text-sm">
                  Accept{" "}
                  <a href="#" className="font-bold link link-hover">
                    Terms & Conditions
                  </a>
                </p>
              </div>

              <button className="btn btn-neutral mt-5 w-full">Register</button>
            </fieldset>
          </form>
          <button onClick={handelGoogleSignIn} className="btn btn-outline">
            <FcGoogle size={25} />
            Sign In With Google
          </button>
        </div>

        <p className="text-center py-4">
          Already Have An Account{" "}
          <Link to="/auth/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
