import React from "react";
import "../style/Porformance.css";
import HeartIcon from "./icons/HeartIcon";
import BagIcon from "./icons/BagIcon";
import DotsIcons from "./icons/DotsIcons";


function PopularCard() {
  return (
    <div className="w-[270px] p-1 h-auto gradient-background-color  rounded-lg ">
        <div className="w-full flex gap-4">
                <img src="/Frame 154.png" alt="" className="w-[50px] h-[50px] rounded-lg" />
        <div className="w-full flex flex-col">
            <span className="flex items-center gap-1 mt-1">
        <HeartIcon/> <p className="text-[#E1B239] font-bold text-[10px]">300 Likes</p>
        </span>
        <span className="w-full flex items-center gap-2 mt-2">
        <BagIcon/> <p className="text-[#E1B239] font-bold text-[10px]">Posted to Instagram</p>
        </span>
        </div>
        <div className="w-full flex justify-end">
            <DotsIcons/>
        </div>
        
        </div>
        <div className="text-[10px] px-5 py-4 text-[#0C95C1]">
        I’m just chilling waiting on some flat earthers...I mean...flat tires. #tirerepairAZ #fredstireshop
        </div>
      
    </div>
  );
}

export default PopularCard;
