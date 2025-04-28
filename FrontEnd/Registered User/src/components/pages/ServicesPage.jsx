import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import home1 from "../../assets/imgs/home1.png";
import { Link } from "react-router-dom";
import service1 from "../../assets/imgs/service1.png";
import service2 from "../../assets/imgs/service2.png";
import service3 from "../../assets/imgs/service3.png";
import service4 from "../../assets/imgs/service4.png";
import service5 from "../../assets/imgs/service5.png";

const ServicesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const services = [
    {
      imgSrc: service2,
      text: "Test your system",
    },
    {
      imgSrc: service3,
      text: "Find a distraction free space",
    },
    {
      imgSrc: service4,
      text: "Show consent to monitoring",
    },
    {
      imgSrc: service5,
      text: "Observe Test",
    },
  ];
  const resources = [
    {
      title: "Video Guides",
      subtitle: "Watch",
      description: "Get a preview of the check-in and testing experience",
    },
    {
      title: "FAQs",
      subtitle: "Get the",
      description: "Check out some helpful info and tips",
    },
    {
      title: "Online Testing Page",
      subtitle: "Visit",
      description: "Find your program’s rules for online testing",
    },
  ];

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-5 p-3">
          <div className=" sm:border border border-border-clr rounded-lg md:p-7 p-3 flex items-center gap-9 md:flex-row flex-col-reverse md:text-start text-center ">
            <img src={home1} alt="" />
            <div className="">
              <h2 className="font-semibold mb-10 poppins text-[#090909] xl:text-4xl md:text-2xl text-xl">
                Get Ready to Ace It: Your Journey Starts with Our Practice Test!
              </h2>
              <Link
                to="/practicetest"
                className="py-4 bg-black text-white rounded-lg px-12  text-base poppins font-normal"
              >
                Start Practice Test
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-5 md:flex-row flex-col">
            <div className="border md:w-1/2 w-full  border-border-clr rounded-lg p-4 flex justify-between items-center">
              <h1 className="font-medium md:text-xl text-base text-black">
                Are you a real user?
              </h1>
              <a
                href=""
                className="lg:py-4 py-2 bg-black text-white rounded-lg px-6  text-base poppins font-normal"
              >
                View
              </a>
            </div>
            <div className="border md:w-1/2 w-full  border-border-clr rounded-lg p-4 flex justify-between items-center">
              <h1 className="font-medium md:text-xl text-base text-black">
                Need Instructions
              </h1>
              <a
                href=""
                className="lg:py-4 py-2 bg-black text-white rounded-lg px-6   text-base poppins font-normal"
              >
                View
              </a>
            </div>
          </div>

          <div className=" sm:border border border-border-clr mt-5 rounded-lg md:p-7 p-3 flex items-center gap-7 md:flex-row flex-col md:text-start text-center ">
            <div className="md:w-[30%] w-full">
              <img src={service1} alt="" />
            </div>
            <div className="md:w-[70%] w-full">
              <h2 className="font-semibold pb-1 poppins text-[#090909] xl:text-4xl md:text-2xl text-xl">
                Make sure that its right option for you !
              </h2>
              <p className="md:text-base text-sm text-black  font-medium">
                Once you’ve confirmed you can test online, be sure it’s the
                right choice for your circumstances and environment. For
                example, taking your exam with OnVUE means you’ll need to:
              </p>

              <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center  flex-col text-center"
                  >
                    <img src={service.imgSrc} alt={service.text} />
                    <p className="text-base text-black font-medium capitalize">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center mt-5">
                <p className="text-base text-black  font-medium capitalize">
                  Still confused?{" "}
                  <a href="" className="text-[#348FF2] underline">
                    View More
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className=" sm:border border border-border-clr mt-5 rounded-lg md:p-7 p-3  text-center ">
            <div className="">
              <h2 className="font-semibold pb-1 poppins text-[#090909] xl:text-4xl md:text-2xl text-xl">
                Ready to go online?
              </h2>

              <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:gap-5 mt-5">
                {resources.map((resource, index) => (
                  <div key={index}>
                    <div className="border border-border-clr rounded-lg flex items-center justify-center flex-col p-5">
                      <p className="text-sm text-black font-medium">
                        {resource.subtitle}
                      </p>
                      <h1 className="text-black text-lg font-semibold">
                        {resource.title}
                      </h1>
                    </div>
                    <h1 className="text-black md:text-lg text-base font-semibold text-center pt-2">
                      {resource.description}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
