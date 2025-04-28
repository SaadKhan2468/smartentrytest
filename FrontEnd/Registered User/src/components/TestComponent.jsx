import React from "react";
import { PiBookOpenTextFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import test1 from "../assets/imgs/test1.png";
import { IoMdSettings } from "react-icons/io";

function TestComponent() {
    const linkData = [
        {
          id: 1,
          href: "/viewinstructionpage",
          icon: <PiBookOpenTextFill className="bg-gray-300 rounded p-2 text-4xl" />,
          title: "View Instructions",
          description: "Review all necessary instructions before starting your test.",
        },
        {
          id: 2,
          href: "/practicetest",
          icon: (
            <img
              src={test1} // Replace with your image import or URL
              alt=""
              className="bg-gray-300 rounded p-2 text-4xl"
            />
          ),
          title: "Start Test",
          description: "Ensure you meet the requirements before starting your test.",
        },
        {
          id: 3,
          href: "",
          icon: <IoMdSettings className="bg-gray-300 rounded p-2 text-4xl" />,
          title: "View Settings",
          description:
            "Fully customize your test experience for maximum comfort and efficiency.",
        },
      ];
  return (
    <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-5 p-3  ">
      <div className="">
        <h2 className="poppins font-semibold md:text-xl text-sm text-black pb-3">
          Test Interface
        </h2>

          <div className="space-y-5">
      {linkData.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="flex gap-4 cursor-pointer border border-border-clr rounded p-3"
        >
          <div className="w-[90%]">
            <div className="flex gap-2 items-center">
              {link.icon}
              <h2 className="poppins font-semibold md:text-xl text-sm text-black">
                {link.title}
              </h2>
            </div>
            <h2 className="poppins font-normal md:text-[13px] text-[10px] text-black pt-2">
              {link.description}
            </h2>
          </div>
          <div className="w-[10%] flex justify-end ">
            <MdKeyboardArrowRight className="text-3xl" />
          </div>
        </a>
      ))}
    </div>

      </div>
    </div>
  );
}

export default TestComponent;
