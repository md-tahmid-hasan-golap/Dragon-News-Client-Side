import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const FindUsOn = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-8 bg-white p-5 sm:p-6 rounded-lg shadow-sm w-full sm:max-w-xs mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        Find Us On
      </h2>

      <div className="w-full border border-gray-300 rounded-lg overflow-hidden">
        {/* Facebook */}
        <div className="flex items-center justify-start gap-3 border-b border-gray-200 p-3 hover:bg-blue-50 transition duration-300 cursor-pointer">
          <CiFacebook className="text-blue-600 text-2xl" />
          <span className="text-gray-800 font-medium">Facebook</span>
        </div>

        {/* Twitter */}
        <div className="flex items-center justify-start gap-3 border-b border-gray-200 p-3 hover:bg-sky-50 transition duration-300 cursor-pointer">
          <CiTwitter className="text-sky-500 text-2xl" />
          <span className="text-gray-800 font-medium">Twitter</span>
        </div>

        {/* Instagram */}
        <div className="flex items-center justify-start gap-3 p-3 hover:bg-pink-50 transition duration-300 cursor-pointer">
          <CiInstagram className="text-pink-500 text-2xl" />
          <span className="text-gray-800 font-medium">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
