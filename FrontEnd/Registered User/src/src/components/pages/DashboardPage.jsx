
import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
<div className="md:m-[2%] m-[3%]  md:border border-border-clr rounded-lg">
        <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
