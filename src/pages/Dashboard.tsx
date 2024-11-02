import React, { useState } from "react";
import PorformanceCards from "../components/PorformanceCards";
import Dropdown from "../components/DropDown";
import Filtericons from "../components/icons/Filtericons";
import PopularCard from "../components/PopularCard";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("products");
  const [subActiveTab, setSubActiveTab] = useState("Upcoming Holidays");

  const handleProducts = () => setActiveTab("products");
  const handlePending = () => setActiveTab("pending");
  const handleScheduled = () => setActiveTab("scheduled");

  const handleHolidays = () => setSubActiveTab("Upcoming Holidays");
  const handleTrending = () => setSubActiveTab("Trending Hashtags");

  return (
    <div className="w-full px-6 py-5">
      <div className="px-5 rounded-lg gradient-background-dashboard  ">
        <div className="pt-5 gradient-background text-[28px] font-extrabold ">
          Performance
        </div>
        <div className="w-full flex md:flex-row flex-col py-1">
          <div className="w-full md:w-1/2 flex justify-between">
            <div className="w-1/2">
              <Dropdown label="All Account" />
            </div>
            <div className="w-1/2">
              <Dropdown label="All Team" />
            </div>
          </div>

          <div className="w-1/2 flex justify-between ">
            <div className="w-[25%] flex justify-start items-center gap-2">
              <p className="gradient-background text-xs">Last 30 days</p>{" "}
              <Filtericons />
            </div>

            <div className="w-[25%] flex justify-end items-center">
              <p className="text-xs text-[#E1B239] font-medium">See All</p>
            </div>
          </div>
        </div>
        <div className="flex  gap-4 flex-wrap">
          <div className="p-[0.5px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
            <PorformanceCards />
          </div>

          <div className="p-[0.5px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
            <PorformanceCards />
          </div>

          <div className="p-[0.5px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
            <PorformanceCards />
          </div>

          <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
            <PorformanceCards />
          </div>

          <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
            <PorformanceCards />
          </div>

          <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
            <PorformanceCards />
          </div>
        </div>
        <div className="w-full flex py-2">
          <div className="w-full flex gap-3">
            <p
              className={`cursor-pointer ${
                activeTab === "products"
                  ? "font-bold border-b-[2px] border-[#0C95C1] gradient-background"
                  : "border-b-[2px]"
              }`}
              onClick={handleProducts}
            >
              Products
            </p>
            <p
              className={`cursor-pointer ${
                activeTab === "pending"
                  ? "font-bold border-b-[2px] border-[#0C95C1] gradient-background"
                  : "border-b-[2px]"
              }`}
              onClick={handlePending}
            >
              Pending
            </p>
            <p
              className={`cursor-pointer ${
                activeTab === "scheduled"
                  ? "font-bold border-b-[2px] border-[#0C95C1] gradient-background"
                  : "border-b-[2px]"
              }`}
              onClick={handleScheduled}
            >
              Scheduled
            </p>
          </div>
        </div>
        <div className="flex justify-end -mt-8">
          <p className="text-xs text-[#E1B239] font-medium">See All</p>
        </div>

        <div className="py-5">
          {activeTab === "products" && (
            <div className="flex flex-wrap gap-5">
              <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
                <PopularCard />
              </div>
              <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-lg">
                <PopularCard />
              </div>
            </div>
          )}
          {activeTab === "pending" && <p>Pending demo content</p>}
          {activeTab === "scheduled" && <p>Scheduled demo content</p>}
        </div>

        <div className="w-full flex py-2">
          <div className="w-full flex gap-2">
            <p
              className={`cursor-pointer ${
                subActiveTab === "Upcoming Holidays"
                  ? "font-bold border-b-[2px] border-[#0C95C1] gradient-background"
                  : "border-b-[2px]"
              }`}
              onClick={handleHolidays}
            >
              Upcoming Holidays
            </p>
            <p
              className={`cursor-pointer ${
                subActiveTab === "Trending Hashtags"
                  ? "font-bold border-b-[2px] border-[#0C95C1] gradient-background"
                  : "border-b-[2px]"
              }`}
              onClick={handleTrending}
            >
              Trending Hashtags
            </p>
          </div>
        </div>
        <div className="flex justify-end -mt-8">
          <p className="text-xs text-[#E1B239] font-medium">See All</p>
        </div>

        <div className="py-5">
          {subActiveTab === "Upcoming Holidays" && (
            <div className="flex flex-wrap gap-5">
              <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-full">
                <p className="w-min-[119px] px-2 bg-white rounded-full w-full">
                  <span className="text-xs gradient-background">National Friends Day 
                  
                  </span>
                  <br/>
                  <span className="w-full text-xs text-[#0C95C1] flex justify-center">
                  09/04/2020
                  </span>
                </p>
              </div>
                <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-full">
                <p className="w-min-[119px] px-2  bg-white rounded-full w-full">
                  <span className="text-xs gradient-background">National Friends Day 
                  
                  </span>
                  <br/>
                  <span className="w-full  text-xs flex justify-center text-[#0C95C1]">
                  09/04/2020
                  </span>
                </p>
              </div>
            </div>
          )}
          {subActiveTab === "Trending Hashtags" && (
            <p>Trending Hashtags demo content</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
