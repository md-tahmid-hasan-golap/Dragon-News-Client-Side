import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center max-w-6xl mx-auto justify-center gap-3 shadow bg-gray-100 p-2 rounded-md mt-5">
      <button className="btn bg-red-500 text-white">Latest</button>
      <Marquee
        className="flex items-center gap-5 font-extrabold"
        speed={60}
        pauseOnHover={true}
      >
        <p className="text-green-600 ml-3">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="text-amber-600 ml-3">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="text-red-500 ml-3">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
