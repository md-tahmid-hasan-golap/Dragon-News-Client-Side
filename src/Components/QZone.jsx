import React from "react";
import Swimming from "../assets/swimming.png";
import Class from "../assets/class.png";
import PlayGround from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="mt-7">
      <h2 className="text-2xl font-medium mb-4">Q-Zone</h2>
      <div className="flex flex-col gap-4">
        <img src={Swimming} alt="Swimming" className="w-full rounded" />
        <img src={Class} alt="Class" className="w-full rounded" />
        <img src={PlayGround} alt="Playground" className="w-full rounded" />
      </div>
    </div>
  );
};

export default QZone;
