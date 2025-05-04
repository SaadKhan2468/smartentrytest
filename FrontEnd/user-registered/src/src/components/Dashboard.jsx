import React, { useState } from "react";
import { MdLaptop } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";
import { IoBulbOutline } from "react-icons/io5";

const Dashboard = () => {

  const cardData = [
    {
      id: 1,
      icon: <MdLaptop className="bg-gray-300 rounded p-2 text-4xl" />,
      title: "Test Status",
      description: "View the current status of your upcoming tests",
    },
    {
      id: 2,
      icon: <IoMdTime className="bg-gray-300 rounded p-2 text-4xl" />,
      title: "Recent Activity",
      description: "Review your recent activities within the platform",
    },
    {
      id: 3,
      icon: <GiTrophyCup className="bg-gray-300 rounded p-2 text-4xl" />,
      title: "Results",
      description: "Access and review your test scores & detailed results",
    },
    {
      id: 4,
      icon: <IoBulbOutline className="bg-gray-300 rounded p-2 text-4xl" />,
      title: "Study Tips",
      description: "Personalized tips to help improve your test performance",
    },
  ];

  return (
    <div className="md:m-6 m-3  ">
      <h2 className="font-semibold poppins text-[#090909] lg:text-[32px] md:text-3xl text-2xl">
        Dashboard
      </h2>
      <div className="grid md:gap-4 gap-2 my-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="border-border-clr rounded-lg border md:p-4 p-3  space-y-2"
          >
            {card.icon}
            <h1 className="poppins font-semibold md:text-xl text-sm text-black">
              {card.title}
            </h1>
            <h1 className="poppins font-normal md:text-[13px] text-[10px] text-[#0000008a] ">
              {card.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
