import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center max-w-6xl mx-auto justify-center sm:justify-between gap-3 shadow bg-gray-100 p-3 sm:p-4 rounded-md mt-5">
      <button className="btn bg-red-500 text-white text-sm sm:text-base px-4 sm:px-6">
        Latest
      </button>

      <div className="w-full sm:w-[85%]">
        <Marquee
          className="flex items-center gap-5 font-semibold sm:font-extrabold text-sm sm:text-base"
          speed={60}
          pauseOnHover={true}
        >
          <p className="text-green-600 ml-3">
            Match Highlights: Germany vs Spain — as it happened! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-amber-600 ml-3">
            Match Highlights: Argentina vs Brazil — full-time recap! Goals,
            highlights and analysis...
          </p>
          <p className="text-red-500 ml-3">
            Match Highlights: France vs England — thrilling finish at the
            stadium! Don’t miss it...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
