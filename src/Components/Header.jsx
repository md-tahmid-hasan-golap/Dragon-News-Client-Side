import React from "react";
import HeaderImg from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const toDay = new Date();
  return (
    <div className="flex flex-col justify-center items-center py-5 gap-3">
      <img className="w-[350px]" src={HeaderImg} alt="" />
      <p className="text-gray-600">Journalism Without Fear or Favour</p>
      <p>{format(toDay, "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
