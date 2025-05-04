import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import news2 from "../../assets/imgs/news2.png";
import news3 from "../../assets/imgs/news3.png";

const NewsPageMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

 

 

 

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-5 p-3">
          <div className=" flex gap-5 xl:flex-row flex-col md:justify-start justify-center md:items-start items-center md:text-start text-center">
            <div className="xl:w-1/2 w-full border border-border-clr rounded-lg p-4 flex items-center  md:gap-10 gap-4 md:flex-row flex-col-reverse">
              <img src={news2} alt="" />
              <h1 className=" text-black font-semibold poppins">
                Stay Informed with the latest news & updates!
              </h1>
            </div>
            <div className="xl:w-1/2  w-full border border-border-clr rounded-lg p-4 text-center  flex items-center justify-center flex-col ">
              <div className="md:w-9/12 w-full space-y-3">
                <h1 className="text-xl text-black font-semibold poppins capitalize">
                  System Enhancements
                </h1>
                <div className="border border-border-clr rounded-lg">
                  <p className="font-normal text-black md:text-lg text-sm py-4 text-center ">
                    New Features Introduced
                  </p>
                </div>

                <div className="border border-border-clr rounded-lg">
                  <p className="font-normal text-black md:text-lg text-sm py-4 text-center ">
                    Upcoming System Improvements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-5 flex gap-5 md:flex-row flex-col  border border-border-clr rounded-lg p-4">
            <div className="md:w-[30%] w-full  flex items-center justify-center">
              <img src={news3} alt="" />
            </div>
            <div className="md:w-[70%]  w-full space-y-3 ">
              <h1 className="text-xl text-black font-semibold poppins capitalize md:text-start text-center">
                Important Dates & Events
              </h1>
              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-lg text-sm  font-semibold">
                  Upcoming Registration Deadlines
                </h2>
                <p className="font-normal text-black md:text-lg text-sm   pt-1">
                  Alerts about key dates for course registration, exam
                  schedules, and other critical timelines
                </p>
              </div>

              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-lg text-sm  font-semibold">
                  System Maintenance Notices
                </h2>
                <p className="font-normal text-black md:text-lg text-sm   pt-1">
                  Information about scheduled maintenance periods and how they
                  may affect system availability.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5  border border-border-clr rounded-lg p-4">
            <div className="  w-full space-y-3 ">
              <h1 className="text-xl text-black font-semibold poppins capitalize md:text-start text-center">
                Policy Changes
              </h1>
              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-xl text-base font-semibold">
                  Changes to Security Protocols
                </h2>
                <p className="font-normal text-black md:text-lg text-sm   pt-1">
                  Updates on security adjustments during exams, including
                  stricter monitoring and new test-taking restrictions.
                </p>
              </div>

              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-xl text-base font-semibold">
                  Revisions to Privacy Policy
                </h2>
                <p className="font-normal text-black md:text-lg text-sm   pt-1">
                  Notifications regarding changes to how user data is handled,
                  ensuring compliance with the latest privacy standards.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5  border border-border-clr rounded-lg p-4">
            <div className="  w-full space-y-3 ">
              <h1 className="text-xl text-black font-semibold poppins capitalize md:text-start text-center">
                User Feedback and Surveys
              </h1>
              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-xl text-base font-semibold">
                  Opportunities to Provide Feedback
                </h2>
                <p className="font-normal text-black md:text-lg text-sm   pt-1">
                  Invitations for users to share their experiences and
                  suggestions for further improvements to the system.
                </p>
              </div>

              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-xl text-base font-semibold">
                  Survey Results
                </h2>
                <p className="font-normal text-black md:text-lg text-sm   pt-1">
                  Summaries of user feedback and its impact on system
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPageMain;
