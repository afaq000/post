import React from "react";
import IntroCard from "./IntroCard";
import AccountConnect from "./AccountConnect";

function RightSideBar() {
  return (
    <div className="w-[280px] py-5 ">
      <div className="px-3 rounded-t-lg  bg-RightSidbar-gradient mr-3 border-b-[1px] border-[#b8e1ef] ">
        <div className="py-2">
          <IntroCard />
        </div>

        <div className="w-full flex justify-between py-2  items-center ">
          <div className="w-1/2">
            <p className="text-xs gradient-background">Account Sitting</p>
          </div>
          <div className="w-1/2 text-[#E1B239] flex justify-end">
            <p className="text-xs">Logout</p>
          </div>
        </div>
        
      </div>


      <div className="px-3  bg-RightSidbar-gradient mr-3">
            <AccountConnect/>
        </div>
    </div>
  );
}

export default RightSideBar;
