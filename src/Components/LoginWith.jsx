import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const LoginWith = () => {
  const { signInWithGoogle, signInWithGithib } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Signed in with Google successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleGithub = () => {
    signInWithGithib()
      .then((result) => {
        Swal.fire({
          title: "Sign In with GitHub Successful!",
          icon: "success",
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "GitHub Sign In Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white p-5 sm:p-8 rounded-lg shadow-md w-full sm:max-w-sm mx-auto mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        Login With
      </h2>

      {/* Google Login */}
      <button
        onClick={handelGoogleSignIn}
        className="btn btn-outline w-full flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-300"
      >
        <FcGoogle size={25} className="text-gray-700" />
        <span className="font-medium text-gray-700">Login with Github</span>
      </button>

      {/* Github Login */}
      <button
        onClick={handleGithub}
        className="btn btn-outline w-full flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-300"
      >
        <FaGithub size={25} className="text-gray-700" />
        <span className="font-medium text-gray-700">Login with Github</span>
      </button>
    </div>
  );
};

export default LoginWith;
