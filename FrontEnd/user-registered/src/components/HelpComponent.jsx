
import React from "react";
import help1 from "../assets/imgs/help1.png";

function HelpComponent() {
  return (

      <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-7 p-3 flex items-center gap-9  md:text-start text-center ">
       <div className="md:w-[40%] w-full flex justify-center items-center">
        <img src={help1} alt="" />
        </div>
        <div className="md:w-[60%] w-full  flex items-center justify-center  flex-col text-center">
          <h2 className="poppins font-semibold mb-5 md:text-xl text-sm text-black text-center md:pt-0 pt-8">
          Need Some Help?
          </h2>
          
          <a href="/helppagemain" className=" w-full  border border-border-clr text-black  text-base font-normal poppins py-3 px-10 rounded">
          Our Help is just a click away Ask us twice!
          </a>
        </div>
      </div>
    

  );
} 

export default HelpComponent;
