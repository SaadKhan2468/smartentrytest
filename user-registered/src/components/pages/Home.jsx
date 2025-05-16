import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import home1 from "../../assets/imgs/home1.png";
import Dashboard from "../Dashboard";
import NewsandUpdateCopmonent from "../NewsandUpdateCopmonent";
import HelpComponent from "../HelpComponent";
import TestComponent from "../TestComponent";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-x-hidden">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="md:m-[2%] m-0 md:border border-border-clr rounded-lg">
            <div className="md:m-7 m-3 sm:border border border-border-clr rounded-lg md:p-7 p-3 flex items-center gap-9 md:flex-row flex-col-reverse md:text-start text-center">
              <img src={home1} alt="Home" />
              <div>
                <h2 className="font-semibold inter text-[#090909] text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  Welcome to the Smart Entry <br className="xl:block hidden" /> test Proctor
                </h2>
                <p className="pt-1 text-base md:text-lg lg:text-xl xl:text-2xl font-normal inter">
                  Proctored with Care, Prepared with Precision
                </p>
              </div>
            </div>

            <Dashboard />
            <div className="flex xl:flex-row flex-col">
              <div className="xl:w-[100%] w-full">
                <NewsandUpdateCopmonent />
                <div className="!mt-12">
                  <HelpComponent />
                </div>
              </div>
              <div className="xl:w-[40%] w-full">
                <TestComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
