import React from "react";
import news1 from "../assets/imgs/news1.png";
import { Link } from "react-router-dom";

function NewsandUpdateCopmonent() {
  return (
    // <div className="md:m-[2%] m-0  md:border border-border-clr rounded-lg">
      <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-7 p-3 flex items-center gap-9  md:text-start text-center ">
        <div className="md:mb-0 mb-5">
          <h2 className="poppins font-semibold md:text-xl text-sm text-black">
            Latest News & Updates!
          </h2>
          <p className="poppins pt-2 mb-10 font-normal md:text-[13px] text-[10px] text-[#0000008a]">
            Stay Informed with the Latest Developments: Your Go-To Source for
            Exam Proctoring News and Updates!
          </p>
          <Link to="/newspagemain" className="  bg-[#1976d2] text-white   text-base font-medium poppins py-3 px-10 rounded">
            Discover More
          </Link>
        </div>
        <img src={news1} alt="" />
      </div>
    // </div> 

  );
}

export default NewsandUpdateCopmonent;
