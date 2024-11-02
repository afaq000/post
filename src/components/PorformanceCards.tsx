import React from "react";
import "../style/Porformance.css";
import IncreasGraph from "./icons/IncreasGraph";
import UpArrow from "./icons/UpArrow";

function PerformanceCards() {
  return (
    <div className="w-[270px] p-[1px] px-2 h-auto gradient-background-color rounded-lg">
      <div className="w-full flex ">
        <div className="w-[60%] font-Manrope text-4xl font-semibold gradient-background">
          11,500
        </div>
        <div className="w-[40%]">
          <div className="w-full flex">
            <div className="w-1/2">
              <IncreasGraph />
            </div>
            <div className="w-1/2 flex flex-col items-end">
              <UpArrow />
              <p className="font-semibold gradient-background">15%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full gradient-background text-xs">Total Posts</div>

      <div className="w-full flex">
        <div className="w-1/2 gradient-background text-xs">Admin Likes</div>
        <div className="w-1/2 flex justify-end">
          <p className="text-[#1D1B208C]">500</p>
        </div>
      </div>

      <div className="w-full flex">
        <div className="w-1/2 gradient-background text-xs">Admin Likes</div>
        <div className="w-1/2 flex justify-end">
          <p className="text-[#1D1B208C]">500</p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceCards;
