import React from "react";
import Swimming from "../assets/swimming.png";
import Class from "../assets/class.png";
import PlayGround from "../assets/playground.png";
import bgImg from "../assets/bg.png";

const QZone = () => {
  const images = [Swimming, Class, PlayGround, bgImg];

  return (
    <div className="mt-7 bg-white p-5 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800 text-center sm:text-left">
        Q-Zone
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <img
              src={img}
              alt={`QZone-${index}`}
              className="w-full h-auto transform hover:scale-105 transition duration-500 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QZone;
