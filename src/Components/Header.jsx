import React from "react";
import HeaderImg from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const toDay = new Date();

  return (
    <header className="flex flex-col justify-center items-center py-6 px-4 text-center gap-2 md:gap-3">
      <img
        className="w-52 sm:w-64 md:w-80 lg:w-[350px] object-contain"
        src={HeaderImg}
        alt="Logo"
      />
      <p className="text-sm sm:text-base text-gray-600">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
        {format(toDay, "EEEE, MMMM dd, yyyy")}
      </p>
    </header>
  );
};

export default Header;
