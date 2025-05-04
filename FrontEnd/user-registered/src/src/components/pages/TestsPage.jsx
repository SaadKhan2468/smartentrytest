import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import TestComponent from "../TestComponent";

const TestsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />

        <TestComponent />
      </div>
    </div>
  );
};

export default TestsPage;
