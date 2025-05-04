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
        <div className=" flex-1 overflow-x-hidden">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="md:m-[2%] m-0  md:border border-border-clr rounded-lg">
            <div className="md:m-7 m-3 sm:border border border-border-clr rounded-lg md:p-7 p-3 flex items-center gap-9 md:flex-row flex-col-reverse md:text-start text-center ">
              <img src={home1} alt="" />
              <div className="">
                <h2 className="font-semibold poppins text-[#090909] lg:text-3xl 2xl:text-4xl md:text-2xl text-2xl">
                  Welcome to the Smart Entry <br className="xl:block hidden" />{" "}
                  test Proctor
                </h2>
                <p className="pt-1 lg:text-base md:text-sm text-sm poppins font-normal text-[#0000008a]">
                  Proctored with Care, Prepared with Precision
                </p>
              </div>
            </div>



            <Dashboard/>
            <div className="flex   xl:flex-row flex-col">
              <div className="xl:w-[60%] w-full">
              <NewsandUpdateCopmonent/>
              <div className="!mt-12">
              <HelpComponent />
              </div>

              </div>
              <div className="xl:w-[40%] w-full">
            <TestComponent/>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
