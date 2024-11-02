import React from "react";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";

function Layout({ children }) {
  return (
    // <div className="flex ">
    //   <Sidebar />
    //   <div className="flex-grow bg-ground">
    //     {children} 
        
    //   </div>
    //   <RightSideBar/>
    // </div>

<div className="flex">
<Sidebar />
<div className="flex flex-grow bg-ground ">
  {children}
  <div className="h-full w-[280px]">
    <RightSideBar/>
</div>
</div>

</div>
  );
}

export default Layout;











































// import React from "react";
// import Sidebar from "./Sidebar";

// function Layout({ children }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex flex-grow bg-ground h-screen">
//         {/* <div className="bg-ground mb-10"> */}
//         <div className="h-full overflow-auto flex-grow">
//         {children}
//         </div>
         
//         {/* </div> */}
//         <div className="h-full w-[200px]">
// right sidebar
//       </div>
//       </div>
      
//     </div>
//   );
// }

// export default Layout;
