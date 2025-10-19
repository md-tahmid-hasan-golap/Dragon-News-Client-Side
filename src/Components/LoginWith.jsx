import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const LoginWith = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
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
    <div className="flex flex-col items-center justify-center gap-3">
      <h2 className="text-2xl font-medium">Login With</h2>
      <h2 onClick={handelGoogleSignIn} className="btn btn-outline">
        <FcGoogle size={25} />
        Login With Google
      </h2>
      <h2 className="btn btn-outline">
        <FaGithub size={25} />
        Login With Github
      </h2>
    </div>
  );
};

export default LoginWith;
