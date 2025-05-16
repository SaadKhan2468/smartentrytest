// import React from 'react'

// function HelpPage() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default HelpPage

import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import NewsandUpdateCopmonent from "../NewsandUpdateCopmonent";
import HelpComponent from "../HelpComponent";

const HelpPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="md:m-[2%] m-0  md:border border-border-clr rounded-lg">
          <HelpComponent />
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
