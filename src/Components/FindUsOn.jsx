import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const FindUsOn = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-4 mt-7">
      <h2 className="text-2xl font-medium">Find Us On</h2>
      <div className="grid grid-cols-1 gap-0 w-64 mx-auto border border-gray-300 rounded">
        <div className="flex items-center justify-center gap-2 border-b border-gray-300 p-2">
          <CiFacebook />
          Facebook
        </div>
        <div className="flex items-center justify-center gap-2 border-b border-gray-300 p-2">
          <CiTwitter />
          Twitter
        </div>
        <div className="flex items-center justify-center gap-2 p-2">
          <CiInstagram />
          Instagram
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
