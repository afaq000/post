import React from "react";

function AccountConnect() {
  return (
    <div className="w-full flex justify-between">
      <div className="w-1/3">
        <p className="text-[#E1B239] text-[10px]">Add</p>
      </div>

      <div className="w-1/3">
        <p className="gradient-background font-medium">Accounts Connected</p>
      </div>

      <div className="w-1/3 flex justify-end">
        <p className="text-[#E1B239] text-[10px]">See All</p>
      </div>
    </div>
  );
}

export default AccountConnect;
