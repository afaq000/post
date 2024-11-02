import React, { useState } from "react";
import DashboardIcons from "./icons/dashboard";
import SearchIcons from "./icons/SearchIcons";
import MailIcons from "./icons/MailIcons";
import AccountIcons from "./icons/AccountIcons";
import SystemIcons from "./icons/Team";
import FinancailIcon from "./icons/FinancailIcon";
import Posticon from "./icons/Posticon";
import { useNavigate } from "react-router-dom";
import Analytics from "./icons/Analytics";
import MediaIcon from "./icons/MediaIcon";
import Team from "./icons/Team";
import Sitting from "./icons/Sitting";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();

  const handleItemClick = (itemName, path) => {
    setActiveItem(itemName);
    navigate(path);
  };


  return (
    <div
      className="w-[280px] rounded-tl-lg rounded-bl-lg px-3 backdrop-blur-[80px] shadow-custom "
      style={{
        backgroundImage: `linear-gradient(to top right, rgba(255,255,255,1) 90%, #298DAD 100%),
                          linear-gradient(to bottom right, rgba(255,255,255,0.8) 90%, #298DAD 100%)`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="w-full flex justify-start items-start">
        <div className="h-[85px] w-[53px] mb-6 ">
      <img
        src="sidebar/Post Kraken Logo 1.png"
        alt="logo"
        className="h-[85px] w-[53px] mt-2 mx-auto"
      />
       </div>
      </div>

      <div className="mt-0 overflow-y-none h-[calc(110vh-85px-2.5rem)] px-2">
        <ul className="w-full flex flex-col">
          <li
            className="w-full min-w-[100px] gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Dashboard", "/dashboard")}
          >
            <div className="w-full gap-2 flex items-center">
              <DashboardIcons />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Dashboard" ? "gradient-background" : "text-[#8080808C]"}`}>
                Dashboard
              </p>
            </div>
            <div className="w-[30px] h-[30px] px-1 flex items-center rounded-full border-[1px] border-gray-300">
              <img
                src="sidebar/quick menu lightning icon 1.png"
                className="w-[15px] h-[15px] rounded-full"
              />
            </div>
          </li>

          <li
            className="gap-2 flex py-1"
            onClick={() => handleItemClick("Account Overview", "/account-overview")}
          >
            <div className="w-full gap-2 flex items-center">
              <SearchIcons />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Account Overview" ? "gradient-background" : "text-[#8080808C]"}`}>
                Account Overview
              </p>
            </div>
          </li>

          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Invite Tracking", "/invite-tracking")}
          >
            <div className="w-full gap-2 flex items-center">
              <MailIcons />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Invite Tracking" ? "gradient-background" : "text-[#8080808C]"}`}>
                Invite Tracking
              </p>
            </div>
          </li>

          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("User Moderation", "/user-moderation")}
          >
            <div className="w-full gap-2 flex items-center">
              <AccountIcons />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "User Moderation" ? "gradient-background" : "text-[#8080808C]"}`}>
                User Moderation
              </p>
            </div>
          </li>

          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("System Notifications", "/system-notifications")}
          >
            <div className="w-full gap-2 flex items-center">
              <SystemIcons />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "System Notifications" ? "gradient-background" : "text-[#8080808C]"}`}>
                System Notifications
              </p>
            </div>
          </li>

          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Financial Reports", "/financial-reports")}
          >
            <div className="w-full gap-2 flex items-center">
              <FinancailIcon />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Financial Reports" ? "gradient-background" : "text-[#8080808C]"}`}>
                Financial Reports
              </p>
            </div>
          </li>

          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Post", "/posts")}
          >
            <div className="w-full gap-2 flex items-center">
              <Posticon />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Post" ? "gradient-background" : "text-[#8080808C]"}`}>
                Posts
              </p>
            </div>
          </li>


          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Team", "/team")}
          >
            <div className="w-full gap-2 flex items-center">
              <Team />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Team" ? "gradient-background" : "text-[#8080808C]"}`}>
              Team
              </p>
            </div>
          </li>


          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Analytics", "/analytics")}
          >
            <div className="w-full gap-2 flex items-center">
              <Analytics />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Analytics" ? "gradient-background" : "text-[#8080808C]"}`}>
              Analytics
              </p>
            </div>
          </li>


          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Media Library", "/media-library")}
          >
            <div className="w-full gap-2 flex items-center">
              <MediaIcon />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Media Library" ? "gradient-background" : "text-[#8080808C]"}`}>
              Media Library
              </p>
            </div>
          </li>


          <li
            className="gap-2 flex py-[6px]"
            onClick={() => handleItemClick("Calendar", "/calendar")}
          >
            <div className="w-full gap-2 flex items-center">
              <Posticon />
              <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Calendar" ? "gradient-background" : "text-[#8080808C]"}`}>
              Calendar
              </p>
            </div>
          </li>


          <div className="w-[280px] flex mt-10 ">
          <Sitting/>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;


























































// import React, { useState } from "react";
// import DashboardIcons from "./icons/Dashboard";
// import SearchIcons from "./icons/SearchIcons";
// import MailIcons from "./icons/MailIcons";
// import AccountIcons from "./icons/AccountIcons";
// import SystemIcons from "./icons/Team";
// import FinancailIcon from "./icons/FinancailIcon";
// import Posticon from "./icons/Posticon";
// import { useNavigate } from "react-router-dom";
// import Analytics from "./icons/Analytics";
// import MediaIcon from "./icons/MediaIcon";
// import Team from "./icons/Team";
// import Sitting from "./icons/Sitting";

// function Sidebar() {
//   const [activeItem, setActiveItem] = useState("Dashboard");
//   const navigate = useNavigate();

//   const handleItemClick = (itemName, path) => {
//     setActiveItem(itemName);
//     navigate(path);
//   };


//   return (
//     <div
//       className="rounded-tl-lg rounded-bl-lg shadow-custom h-full flex flex-col border-[1px] shadow-r"
//       style={{
//         backgroundImage: `linear-gradient(to top right, rgba(255,255,255,1) 90%, #298DAD 100%),
//                           linear-gradient(to bottom right, rgba(255,255,255,0.8) 90%, #298DAD 100%)`,
//         backgroundBlendMode: 'multiply'
//       }}
//     >
//       <div className="w-full flex justify-start items-start">
//         <div className="h-[85px] w-[53px] mb-6 ">
//       <img
//         src="sidebar/Post Kraken Logo 1.png"
//         alt="logo"
//         className="h-[85px] w-[53px] mt-2 mx-auto"
//       />
//        </div>
//       </div>

//       <div className="mt-0 overflow-y-auto custom-scrollbar px-1 flex-grow">
//         <ul className="w-full flex flex-col">
//           <li
//             className="w-full min-w-[100px] gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Dashboard", "/dashboard")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <DashboardIcons />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Dashboard" ? "gradient-background" : "text-[#8080808C]"}`}>
//                 Dashboard
//               </p>
//             </div>
//             <div className="w-[30px] h-[30px] px-1 flex items-center rounded-full border-[1px] border-gray-300">
//               <img
//                 src="sidebar/quick menu lightning icon 1.png"
//                 className="w-[15px] h-[15px] rounded-full"
//               />
//             </div>
//           </li>

//           <li
//             className="gap-2 flex py-1"
//             onClick={() => handleItemClick("Account Overview", "/account-overview")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <SearchIcons />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Account Overview" ? "gradient-background" : "text-[#8080808C]"}`}>
//                 Account Overview
//               </p>
//             </div>
//           </li>

//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Invite Tracking", "/invite-tracking")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <MailIcons />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Invite Tracking" ? "gradient-background" : "text-[#8080808C]"}`}>
//                 Invite Tracking
//               </p>
//             </div>
//           </li>

//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("User Moderation", "/user-moderation")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <AccountIcons />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "User Moderation" ? "gradient-background" : "text-[#8080808C]"}`}>
//                 User Moderation
//               </p>
//             </div>
//           </li>

//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("System Notifications", "/system-notifications")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <SystemIcons />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "System Notifications" ? "gradient-background" : "text-[#8080808C]"}`}>
//                 System Notifications
//               </p>
//             </div>
//           </li>

//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Financial Reports", "/financial-reports")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <FinancailIcon />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Financial Reports" ? "gradient-background" : "text-[#8080808C]"}`}>
//                 Financial Reports
//               </p>
//             </div>
//           </li>

//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Post", "/posts")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <Posticon />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Post" ? "gradient-background" : "text-[#8080808C]"}`}>
//                 Posts
//               </p>
//             </div>
//           </li>


//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Team", "/team")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <Team />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Team" ? "gradient-background" : "text-[#8080808C]"}`}>
//               Team
//               </p>
//             </div>
//           </li>


//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Analytics", "/analytics")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <Analytics />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Analytics" ? "gradient-background" : "text-[#8080808C]"}`}>
//               Analytics
//               </p>
//             </div>
//           </li>


//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Media Library", "/media-library")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <MediaIcon />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Media Library" ? "gradient-background" : "text-[#8080808C]"}`}>
//               Media Library
//               </p>
//             </div>
//           </li>


//           <li
//             className="gap-2 flex py-[6px]"
//             onClick={() => handleItemClick("Calendar", "/calendar")}
//           >
//             <div className="w-full gap-2 flex items-center">
//               <Posticon />
//               <p className={`font-Manrope font-medium text-lg cursor-pointer ${activeItem === "Calendar" ? "gradient-background" : "text-[#8080808C]"}`}>
//               Calendar
//               </p>
//             </div>
//           </li>


//           <div className="w-[280px] flex mt-10 ">
//           <Sitting/>
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
