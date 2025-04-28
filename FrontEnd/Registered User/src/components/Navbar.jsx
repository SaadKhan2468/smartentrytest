
import React, { useState } from 'react';
import { IoSearch, IoSettingsOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import avatar2 from "../assets/imgs/avatar2.png";
import { Link } from 'react-router-dom';
import navlogo from '../assets/imgs/navlogo.png'

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  

  return (
    <>
      <section className='justify-between items-center bg-white py-4 xl:px-12 lg:px-6 px-5  flex border border-b-[#E3E3E3]'>
        <div className="">
          <RxHamburgerMenu className="text-2xl text-[#70777F] cursor-pointer" onClick={toggleSidebar} />
        
        </div>
        <div className=" items-center gap-5 sm:flex hidden">
         
          <div className="flex  items-center flex-row">
          <ul className='contents space-x-5 text-black font-medium text-base '>
            <li className=''>FAQs</li>
            <li className=''>Privacy Policy</li>
            <li>Cookie Settings</li>
            <li>Contact Us</li>
          </ul>
          </div>
          <div className="bg-black p-4 rounded-full">
            <Link to="/chatpage"><img src={navlogo} alt="" /></Link>
          </div>
          
        </div>
        <h1 className="uppercase font-bold  text-black  text-center   text-2xl sm:hidden block">
            PROCTOR AI{" "}
          </h1> 
      </section>

     
    </>
  );
}

export default Navbar;
