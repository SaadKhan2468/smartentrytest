
import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import NewsandUpdateCopmonent from "../NewsandUpdateCopmonent";

const NewsAndUpdatePage = () => {
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
          <NewsandUpdateCopmonent />
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdatePage;
