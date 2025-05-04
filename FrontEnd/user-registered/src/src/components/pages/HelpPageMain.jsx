import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import help2 from "../../assets/imgs/help2.png";
import help3 from "../../assets/imgs/help3.png";
import help4 from "../../assets/imgs/help4.png";

const HelpPageMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const securityOptions = [
    {
      title: "How can I register for courses?",
      description:
        "Step-by-step guide on using the online registration feature, reducing paperwork and minimizing errors.",
    },
    {
      title: "How are admit cards generated?",
      description:
        "Explanation of the automated  admit card generation process, ensuring timely delivery to students upon successful registration.",
    },
    {
      title: "How does the entry test work?",
      description:
        " Information on how entry tests  are administered with dynamically generated, randomized question sets to ensure fairness.",
    },
    {
      title: "What security measures are in  place during exams?",
      description:
        " Detailed description of security features like tab restrictions, abnormal movement detection, and safeguards to prevent academic dishonesty.",
    },
  ];

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-5 p-3">
          <div className="  gap-5 grid xl:grid-cols-2 grid-cols-1">
            <div className=" border border-border-clr rounded-lg p-4 flex items-center  md:gap-5 gap-4 md:flex-row flex-col-reverse justify-center  ">
              <img src={help2} alt="" />
              <h1 className=" text-black font-semibold poppins text-xl flex flex-col gap-2">
                Got a Question?
                <p className="font-normal text-[#0000008a] md:text-base  text-sm ">
                  We’re here to help
                </p>
              </h1>
            </div>
            <div className=" border border-border-clr rounded-lg p-4 md:text-start text-center  ">
              <h1 className="text-xl text-black font-semibold poppins capitalize">
                What is the Smart Entry Test Proctor System?
              </h1>

              <p className="font-normal text-[#0000008a] md:text-base  text-sm pt-1  ">
                A robust platform designed to automate and streamline key
                academic processes, including course registration, exam
                administration, and result processing. This ensures enhanced
                efficiency, accuracy, and security across all academic
                operations.
              </p>
            </div>
          </div>
         

          <div className=" mt-5  border border-border-clr rounded-lg p-4">
            <h1 className="text-xl text-black font-semibold poppins capitalize md:text-start text-center">
              Frequently Asked Questions
            </h1>
            <div className="space-y-4">
              {securityOptions.map((option, index) => (
                <div
                  key={index}
                  className="md:p-5 p-3 border border-border-clr rounded-lg mt-2 space-y-6"
                >
                  <div className="md:space-y-2 space-y-1">
                    <h1 className="md:text-xl text-sm text-black font-semibold poppins flex items-center justify-between">
                      {option.title}
                    </h1>
                    <h1 className="text-[#0000008a] md:text-sm  text-xs font-light poppins">
                      {option.description}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5  border border-border-clr rounded-lg p-4 gap-5 flex items-center md:flex-row flex-col-reverse">
            <div className="md:w-[60%] w-full space-y-3">
              <h1 className="text-xl text-black font-semibold poppins capitalize md:text-start text-center">
                Troubleshooting
              </h1>
              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-xl text-base font-semibold">
                  What to do if you encounter issues
                </h2>
                <p className="font-normal text-[#0000008a] md:text-base  text-sm   pt-1">
                  Solutions for common technical issues like login problems,
                  registration troubles, or exam difficulties.
                </p>
              </div>

              <div className="border border-border-clr rounded-lg p-4 ">
                <h2 className="text-black md:text-xl text-base font-semibold">
                  How to contact support
                </h2>
                <p className="font-normal text-[#0000008a] md:text-base  text-sm   pt-1">
                  Information on how to reach out for technical assistance or
                  other queries related to system usage.
                </p>
              </div>
            </div>
            <div className="md:w-[40%] w-full flex items-center justify-center flex-col space-y-3 ">
              <a
                href=""
                className="flex items-center justify-center  flex-col p-4 text-center border  border-border-clr rounded-lg w-full "
              >
                <h2 className="text-[#0000008a] md:text-base  text-sm font-semibold">
                  Still confusing?
                </h2>
                <p className="font-bold text-black xl:text-xl text-base">
                  Ask your Chatbot here !
                </p>
              </a>
              <img src={help3} alt="" />
            </div>
          </div>


















          <div className="mt-5  border border-border-clr rounded-lg p-4  ">
          <h1 className="text-xl xl:text-start text-center text-black font-semibold poppins capitalize ">
              System Usage
              </h1>

            <div className="flex items-center xl:flex-row flex-col-reverse gap-5 mt-3">
            <div className="xl:w-[70%] w-full space-y-3">
              <div className=" gap-5  grid lg:grid-cols-2 grid-cols-1">
              <div className="   space-y-2 ">
              <h2 className="text-black md:text-xl text-base font-semibold">
                Navigating the Platform
                </h2>
              <div className="border border-border-clr rounded-lg p-4 ">
               
                <p className="font-normal text-[#0000008a] md:text-base  text-sm ">
                Log in to your account and navigate the dashboard to access key features like fee status, exam schedules, and information dashboards, helping you stay informed and manage your academic progress.
                </p>
                </div>
              </div>


              <div className="   space-y-2 ">
              <h2 className="text-black md:text-xl text-base font-semibold">
              Post-Exam Processes
                </h2>
              <div className="border border-border-clr rounded-lg p-4 ">
               
                <p className="font-normal text-[#0000008a] md:text-base  text-sm ">
                Receive your exam results instantly in the "Results" section. The post-exam analysis report offers insights into your performance, highlighting strengths and areas for improvement.
                </p>
                </div>
              </div>

             
              </div>
              <div className="   space-y-2 mt-5 ">
              <h2 className="text-black md:text-xl text-base font-semibold ">
              Understanding Exam Security Features
                </h2>
              <div className="border border-border-clr rounded-lg p-4 ">
               
                <p className="font-normal text-[#0000008a] md:text-base  text-sm ">
                To ensure exam integrity, copying and pasting is prohibited, and eye movements are monitored. Multiple warnings will lead to escalating consequences, including possible disqualification.
                </p>
                </div>
              </div>
            </div>
            <div className="xl:w-[30%] w-full flex items-center justify-center flex-col space-y-3 ">
              
              <img src={help4} alt="" />
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HelpPageMain;
