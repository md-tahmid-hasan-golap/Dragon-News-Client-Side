import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginWith = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h2 className="text-2xl font-medium">Login With</h2>
      <h2 className="btn btn-outline">
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
