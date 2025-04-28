import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import help from "../assets/imgs/help.png";
import update from "../assets/imgs/update.png";
import test from "../assets/imgs/test.png";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { FaDesktop } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (paths) =>
    paths.includes(location.pathname) ? "active-link" : "";

  return (
    <>
      {/* Sidebar for large screens */}
      <div
        className={`bg-white shadow-md lg:h-screen lg:sticky top-0 overflow-y-auto transition-transform hide-scrollbar lg:block hidden transform border border-r-[#E3E3E3] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 sidebar ${
          isOpen
            ? "w-28 sidebar-collapsed"
            : "2xl:w-96 lg:w-72 sidebar-expanded"
        }`}
      >
        <div
          className={`flex flex-col items-center px-6 pt-10  ${
            isOpen ? "space-y-6" : ""
          }`}
        >
          <Link to="/home">
            <h1
              className={`uppercase font-bold  text-[#1976d2]  text-center ${
                isOpen ? "text-lg" : " text-2xl"
              }`}
            >
              PROCTOR AI{" "}
            </h1>
          </Link>

          <nav className="w-full mt-10">
            <ul
              className={`2xl:space-y-6 space-y-3 ${
                isOpen ? "flex flex-col items-center" : ""
              }`}
            >
              <li className={isActive(["/"])}>
                <Link
                  to="/"
                  className={`flex ${
                    isOpen ? "justify-center p-3" : "py-3 pl-5"
                  } text-links-color font-normal hover:text-blue-600 rounded-md poppins text-base gap-[10px] ${isActive(
                    [
                      "/",
                      // "/selection_page",
                      // "/new_projects",
                      // "/done_projects_page",
                    ]
                  )}`}
                >
                  {/* <IoHome className="text-xl text-[#0000008a]  " /> */}
                  <IoHome className="text-xl text-black " />
                  {!isOpen && "Home"}
                </Link>
              </li>
              <li
                className={isActive([
                  "/dashboard",
                  // "/selection_page",
                  // "/new_projects",
                  // "/done_projects_page",
                ])}
              >
                <Link
                  to="/dashboard"
                  className={`flex ${
                    isOpen ? "justify-center p-3" : "py-3 pl-5"
                  } text-links-color font-normal gradient-bg hover:text-blue-600 rounded-md poppins text-base gap-[10px] ${isActive(
                    [
                      "/dashboard",
                      "/selection_page",
                      "/new_projects",
                      "/done_projects_page",
                    ]
                  )}`}
                >
                  <BiSolidDashboard className="text-xl text-black" />
                  {!isOpen && "Dashboard"}
                </Link>
              </li>
              <li className={isActive(["/servicepage"])}>
                <Link
                  to="/servicepage"
                  className={`flex ${
                    isOpen ? "justify-center p-3" : "py-3 pl-5"
                  } text-links-color rounded-md font-medium  hover:text-blue-600 text-base poppins gap-[10px] capitalize gradient-bg ${isActive(
                    ["/servicepage"]
                  )}`}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3136 16.3174C10.3722 16.0121 9.47341 16.4227 8.66682 16.8896L5.36993 18.7984L7.81146 23.1125L8.41991 22.7612C8.51968 22.7037 8.63819 22.6882 8.7494 22.7181L15.2395 24.4557C16.0576 24.6749 16.8313 24.5759 17.5546 24.1306C20.539 22.298 23.5198 20.4593 26.5021 18.623C26.9556 18.3437 27.0144 17.5808 26.7456 17.1478C26.1528 16.1926 24.5108 16.9879 23.8287 17.3852L18.8983 20.2569C18.5078 20.4842 18.1061 20.6288 17.6892 20.6988C17.2776 20.7679 16.8537 20.7631 16.4133 20.6927L15.8316 20.5983C15.8097 20.5948 15.7879 20.5916 15.7663 20.5863C14.6586 20.3588 13.5857 20.0125 12.4952 19.7203C12.3846 19.6891 12.2907 19.6157 12.2338 19.5159C12.1769 19.416 12.1617 19.2978 12.1913 19.1868C12.221 19.0758 12.2932 18.981 12.3923 18.9228C12.4914 18.8646 12.6094 18.8478 12.7208 18.876C13.787 19.1617 14.8439 19.5051 15.9249 19.7286C16.474 19.7958 16.927 19.6226 17.0795 19.0538C17.2177 18.5379 16.8924 18.0516 16.405 17.8828C14.9243 17.6117 13.4872 17.0922 12.3572 16.6837C11.964 16.5416 11.6087 16.4131 11.3136 16.3174ZM17.1151 8.35412C17.3727 8.09649 17.7943 8.09649 18.0519 8.35412L18.7231 9.02535L20.5393 7.20924C20.7969 6.9516 21.2185 6.9516 21.4761 7.20924C21.7337 7.46687 21.7337 7.88846 21.4761 8.14609L19.2045 10.4177C18.876 10.7462 18.4367 10.6127 18.1454 10.3214L17.115 9.29103C16.8574 9.03334 16.8574 8.61175 17.1151 8.35412ZM25.2056 7.46971C25.0569 6.8454 24.8096 6.24881 24.473 5.70243L24.9827 4.55465L23.6296 3.20152L22.4815 3.71142C21.9352 3.37489 21.3388 3.12762 20.7146 2.97894L20.2637 1.80731H18.3501L17.8991 2.97894C17.275 3.12763 16.6786 3.3749 16.1323 3.71142L14.9842 3.20152L13.6311 4.55471L14.1409 5.70271C13.8044 6.24899 13.5571 6.84547 13.4084 7.46966L12.2369 7.92061V9.83424L13.4083 10.2851C13.5569 10.9094 13.8042 11.506 14.1409 12.0524L13.6311 13.2001L14.9843 14.5532L16.1324 14.0433C16.6786 14.3799 17.275 14.6271 17.8992 14.7757L18.3501 15.9474H20.2637L20.7146 14.776C21.3389 14.6274 21.9355 14.3801 22.4819 14.0434L23.6296 14.5532L24.9827 13.2L24.4728 12.0519C24.8093 11.5057 25.0566 10.9093 25.2053 10.2851L26.3768 9.83418V7.92056L25.2056 7.46971ZM19.2956 12.5679C17.2217 12.5679 15.5405 10.8867 15.5405 8.81284C15.5405 6.73892 17.2217 5.05772 19.2956 5.05772C21.3694 5.05772 23.0507 6.73892 23.0507 8.81284C23.0507 10.8867 21.3694 12.5679 19.2956 12.5679ZM8.1888 8.75897L8.78998 10.3423C8.80803 10.3899 8.85013 10.4205 8.90094 10.4229L10.5926 10.5054C10.7077 10.511 10.7547 10.656 10.6649 10.7281L9.34484 11.7892C9.32559 11.8042 9.31128 11.8247 9.30373 11.8479C9.29618 11.8712 9.29574 11.8961 9.30245 11.9196L9.74679 13.554C9.77698 13.6651 9.65377 13.7547 9.55735 13.6916L8.14029 12.764C8.12002 12.7504 8.09614 12.7431 8.07171 12.7431C8.04728 12.7431 8.02341 12.7504 8.00313 12.764L6.58613 13.6916C6.48977 13.7547 6.3665 13.6652 6.39669 13.554L6.84102 11.9196C6.84773 11.8961 6.84728 11.8712 6.83973 11.8479C6.83218 11.8247 6.81788 11.8042 6.79864 11.7892L5.47854 10.7281C5.38874 10.6559 5.43583 10.511 5.55089 10.5054L7.24254 10.4229C7.26696 10.4221 7.29056 10.4139 7.31033 10.3996C7.3301 10.3852 7.34515 10.3653 7.35356 10.3423L7.95468 8.75897C7.99526 8.65189 8.14817 8.65189 8.1888 8.75897ZM8.1888 1.16698L8.78992 2.75035C8.80803 2.79792 8.85008 2.82849 8.90094 2.83096L10.5925 2.91342C10.7076 2.919 10.7547 3.06398 10.6649 3.13611L9.34478 4.19716C9.32556 4.21224 9.31127 4.23271 9.30372 4.25595C9.29617 4.27918 9.29571 4.30414 9.3024 4.32764L9.74674 5.96198C9.77698 6.0731 9.65371 6.16268 9.5573 6.09963L8.14029 5.17202C8.12002 5.15838 8.09614 5.1511 8.07171 5.1511C8.04728 5.1511 8.02341 5.15838 8.00313 5.17202L6.58613 6.09963C6.48977 6.16274 6.36645 6.07316 6.39669 5.96198L6.84102 4.32764C6.84771 4.30414 6.84726 4.27918 6.83971 4.25595C6.83216 4.23271 6.81786 4.21224 6.79864 4.19716L5.47854 3.13611C5.38874 3.06398 5.43588 2.919 5.55089 2.91342L7.24254 2.83096C7.26696 2.83008 7.29055 2.82194 7.31032 2.80758C7.33009 2.79322 7.34512 2.77329 7.3535 2.75035L7.95468 1.16698C7.99526 1.0599 8.14811 1.0599 8.1888 1.16698ZM7.90114 25.0475L3.8342 17.8615C3.63754 17.514 3.19238 17.3906 2.8449 17.5873L1.46158 18.3702C1.1141 18.5668 0.99072 19.012 1.18738 19.3595L5.25438 26.5455C5.45103 26.893 5.89619 27.0164 6.24367 26.8197L7.62699 26.0368C7.97437 25.8402 8.0978 25.395 7.90114 25.0475ZM3.04451 19.916C2.98019 19.9257 2.9146 19.9226 2.8515 19.9068C2.78839 19.8911 2.72902 19.8631 2.67678 19.8243C2.62455 19.7856 2.58048 19.7369 2.5471 19.6811C2.51373 19.6252 2.49171 19.5634 2.4823 19.499C2.4729 19.4347 2.4763 19.3691 2.4923 19.306C2.50831 19.243 2.5366 19.1838 2.57557 19.1317C2.61453 19.0796 2.6634 19.0357 2.71936 19.0026C2.77532 18.9695 2.83727 18.9477 2.90167 18.9386C3.03101 18.9202 3.16236 18.9538 3.26697 19.0321C3.37157 19.1104 3.4409 19.2269 3.4598 19.3562C3.47869 19.4854 3.44559 19.6169 3.36776 19.7219C3.28993 19.8268 3.1737 19.8966 3.04451 19.916Z"
                      fill="black"
                    />
                  </svg>

                  {/* <FaDownload className="text-2xl" /> */}
                  {!isOpen && "Services"}
                </Link>
              </li>
              <li className={isActive(["/testpage"])}>
                <Link
                  to="/testpage"
                  className={`flex ${
                    isOpen ? "justify-center p-3" : "py-3 pl-5"
                  } text-links-color rounded-md hover:text-blue-600 font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(
                    ["/testpage"]
                  )}`}
                >
                  <img src={test} alt="" className="w-5 h-full" />
                  {!isOpen && "Tests"}
                </Link>
              </li>
              <li className={isActive(["/newspage", "/newspagemain"])}>
                <Link
                  to="/newspage"
                  className={`flex ${
                    isOpen ? "justify-center p-3" : "py-3 pl-5"
                  } text-links-color rounded-md  hover:text-blue-600 font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(
                    ["/account_setting_page"]
                  )}`}
                >
                  {/* <IoSettingsSharp className="text-2xl" /> */}
                  <img src={update} alt="" className="w-5 h-full  " />
                  {!isOpen && "News & Updates"}
                </Link>
              </li>
              <li className={isActive(["/helppage", "/helppagemain"])}>
                <Link
                  to="/helppage"
                  className={`flex ${
                    isOpen ? "justify-center p-3" : "py-3 pl-5"
                  } text-links-color rounded-md hover:text-blue-600 font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(
                    ["/helppage"]
                  )}`}
                >
                  <img src={help} alt="" />
                  {!isOpen && "Help"}
                </Link>
              </li>

              <h1
                className={`text-base font-normal text-black poppins ml-5 text-start ${
                  isOpen ? "hidden" : "block"
                }`}
              >
                Account Page{" "}
              </h1>

              <li className={isActive(["/profilepage"])}>
                <Link
                  to="/profilepage"
                  className={`flex ${
                    isOpen ? "justify-center p-3" : "py-3 pl-5"
                  } text-links-color rounded-md hover:text-blue-600 font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(
                    ["/profilepage"]
                  )}`}
                >
                  <FaUser className="text-xl text-black" />
                  {!isOpen && "Profile"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar for mobile screens */}
      <div
        className={`bg-white shadow-md lg:hidden h-screen fixed top-0 overflow-y-auto hide-scrollbar  w-64 left-0  transition-transform duration-300 z-50 sidebar-mobile ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          <div className="flex justify-end">
            <IoClose
              className="text-2xl text-[#70777F] cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          <h1 className="uppercase font-bold  text-[#1976d2]  text-center   text-xl">
            PROCTOR AI{" "}
          </h1>

          <nav className="w-full mt-5">
            <ul className="space-y-2 flex flex-col">
              <li
                className={isActive([
                  "/",
                  
                ])}
              >
                <Link
                  to="/"
                  className="flex py-2 pl-5 text-links-color font-normal items-center gradient-bg rounded-md poppins text-base gap-[10px] ${isActive(['/'])}"
                >
                  <IoHome className="text-2xl" />
                  Home
                </Link>
              </li>
              <li
                className={isActive([
                  "/dashboard",
                  "/selection_page",
                  "/new_projects",
                ])}
              >
                <Link
                  to="/dashboard"
                  className="flex py-2 pl-5 text-links-color font-normal items-center gradient-bg rounded-md poppins text-base gap-[10px] ${isActive(['/dashboard', '/selection_page', '/new_projects'])}"
                >
                  <BiSolidDashboard className="text-2xl" />
                  Dashboard
                </Link>
              </li>
              <li
                className={isActive([
                  "/saved_searching_page",
                  "/detail_card_page",
                ])}
              >
                <Link
              to="/servicepage"
                  className="flex items-center py-2 pl-5 text-links-color rounded-md font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(['/saved_searching_page', '/detail_card_page'])}"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3136 16.3174C10.3722 16.0121 9.47341 16.4227 8.66682 16.8896L5.36993 18.7984L7.81146 23.1125L8.41991 22.7612C8.51968 22.7037 8.63819 22.6882 8.7494 22.7181L15.2395 24.4557C16.0576 24.6749 16.8313 24.5759 17.5546 24.1306C20.539 22.298 23.5198 20.4593 26.5021 18.623C26.9556 18.3437 27.0144 17.5808 26.7456 17.1478C26.1528 16.1926 24.5108 16.9879 23.8287 17.3852L18.8983 20.2569C18.5078 20.4842 18.1061 20.6288 17.6892 20.6988C17.2776 20.7679 16.8537 20.7631 16.4133 20.6927L15.8316 20.5983C15.8097 20.5948 15.7879 20.5916 15.7663 20.5863C14.6586 20.3588 13.5857 20.0125 12.4952 19.7203C12.3846 19.6891 12.2907 19.6157 12.2338 19.5159C12.1769 19.416 12.1617 19.2978 12.1913 19.1868C12.221 19.0758 12.2932 18.981 12.3923 18.9228C12.4914 18.8646 12.6094 18.8478 12.7208 18.876C13.787 19.1617 14.8439 19.5051 15.9249 19.7286C16.474 19.7958 16.927 19.6226 17.0795 19.0538C17.2177 18.5379 16.8924 18.0516 16.405 17.8828C14.9243 17.6117 13.4872 17.0922 12.3572 16.6837C11.964 16.5416 11.6087 16.4131 11.3136 16.3174ZM17.1151 8.35412C17.3727 8.09649 17.7943 8.09649 18.0519 8.35412L18.7231 9.02535L20.5393 7.20924C20.7969 6.9516 21.2185 6.9516 21.4761 7.20924C21.7337 7.46687 21.7337 7.88846 21.4761 8.14609L19.2045 10.4177C18.876 10.7462 18.4367 10.6127 18.1454 10.3214L17.115 9.29103C16.8574 9.03334 16.8574 8.61175 17.1151 8.35412ZM25.2056 7.46971C25.0569 6.8454 24.8096 6.24881 24.473 5.70243L24.9827 4.55465L23.6296 3.20152L22.4815 3.71142C21.9352 3.37489 21.3388 3.12762 20.7146 2.97894L20.2637 1.80731H18.3501L17.8991 2.97894C17.275 3.12763 16.6786 3.3749 16.1323 3.71142L14.9842 3.20152L13.6311 4.55471L14.1409 5.70271C13.8044 6.24899 13.5571 6.84547 13.4084 7.46966L12.2369 7.92061V9.83424L13.4083 10.2851C13.5569 10.9094 13.8042 11.506 14.1409 12.0524L13.6311 13.2001L14.9843 14.5532L16.1324 14.0433C16.6786 14.3799 17.275 14.6271 17.8992 14.7757L18.3501 15.9474H20.2637L20.7146 14.776C21.3389 14.6274 21.9355 14.3801 22.4819 14.0434L23.6296 14.5532L24.9827 13.2L24.4728 12.0519C24.8093 11.5057 25.0566 10.9093 25.2053 10.2851L26.3768 9.83418V7.92056L25.2056 7.46971ZM19.2956 12.5679C17.2217 12.5679 15.5405 10.8867 15.5405 8.81284C15.5405 6.73892 17.2217 5.05772 19.2956 5.05772C21.3694 5.05772 23.0507 6.73892 23.0507 8.81284C23.0507 10.8867 21.3694 12.5679 19.2956 12.5679ZM8.1888 8.75897L8.78998 10.3423C8.80803 10.3899 8.85013 10.4205 8.90094 10.4229L10.5926 10.5054C10.7077 10.511 10.7547 10.656 10.6649 10.7281L9.34484 11.7892C9.32559 11.8042 9.31128 11.8247 9.30373 11.8479C9.29618 11.8712 9.29574 11.8961 9.30245 11.9196L9.74679 13.554C9.77698 13.6651 9.65377 13.7547 9.55735 13.6916L8.14029 12.764C8.12002 12.7504 8.09614 12.7431 8.07171 12.7431C8.04728 12.7431 8.02341 12.7504 8.00313 12.764L6.58613 13.6916C6.48977 13.7547 6.3665 13.6652 6.39669 13.554L6.84102 11.9196C6.84773 11.8961 6.84728 11.8712 6.83973 11.8479C6.83218 11.8247 6.81788 11.8042 6.79864 11.7892L5.47854 10.7281C5.38874 10.6559 5.43583 10.511 5.55089 10.5054L7.24254 10.4229C7.26696 10.4221 7.29056 10.4139 7.31033 10.3996C7.3301 10.3852 7.34515 10.3653 7.35356 10.3423L7.95468 8.75897C7.99526 8.65189 8.14817 8.65189 8.1888 8.75897ZM8.1888 1.16698L8.78992 2.75035C8.80803 2.79792 8.85008 2.82849 8.90094 2.83096L10.5925 2.91342C10.7076 2.919 10.7547 3.06398 10.6649 3.13611L9.34478 4.19716C9.32556 4.21224 9.31127 4.23271 9.30372 4.25595C9.29617 4.27918 9.29571 4.30414 9.3024 4.32764L9.74674 5.96198C9.77698 6.0731 9.65371 6.16268 9.5573 6.09963L8.14029 5.17202C8.12002 5.15838 8.09614 5.1511 8.07171 5.1511C8.04728 5.1511 8.02341 5.15838 8.00313 5.17202L6.58613 6.09963C6.48977 6.16274 6.36645 6.07316 6.39669 5.96198L6.84102 4.32764C6.84771 4.30414 6.84726 4.27918 6.83971 4.25595C6.83216 4.23271 6.81786 4.21224 6.79864 4.19716L5.47854 3.13611C5.38874 3.06398 5.43588 2.919 5.55089 2.91342L7.24254 2.83096C7.26696 2.83008 7.29055 2.82194 7.31032 2.80758C7.33009 2.79322 7.34512 2.77329 7.3535 2.75035L7.95468 1.16698C7.99526 1.0599 8.14811 1.0599 8.1888 1.16698ZM7.90114 25.0475L3.8342 17.8615C3.63754 17.514 3.19238 17.3906 2.8449 17.5873L1.46158 18.3702C1.1141 18.5668 0.99072 19.012 1.18738 19.3595L5.25438 26.5455C5.45103 26.893 5.89619 27.0164 6.24367 26.8197L7.62699 26.0368C7.97437 25.8402 8.0978 25.395 7.90114 25.0475ZM3.04451 19.916C2.98019 19.9257 2.9146 19.9226 2.8515 19.9068C2.78839 19.8911 2.72902 19.8631 2.67678 19.8243C2.62455 19.7856 2.58048 19.7369 2.5471 19.6811C2.51373 19.6252 2.49171 19.5634 2.4823 19.499C2.4729 19.4347 2.4763 19.3691 2.4923 19.306C2.50831 19.243 2.5366 19.1838 2.57557 19.1317C2.61453 19.0796 2.6634 19.0357 2.71936 19.0026C2.77532 18.9695 2.83727 18.9477 2.90167 18.9386C3.03101 18.9202 3.16236 18.9538 3.26697 19.0321C3.37157 19.1104 3.4409 19.2269 3.4598 19.3562C3.47869 19.4854 3.44559 19.6169 3.36776 19.7219C3.28993 19.8268 3.1737 19.8966 3.04451 19.916Z"
                      fill="black"
                    />
                  </svg>
                  Services
                </Link>
              </li>
              <li className={isActive(["/testpage"])}>
                <Link
                  to="/testpage"
                  className="flex items-center py-2 pl-5 text-links-color rounded-md font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(['/recent_viewed_page'])}"
                >
                  <img src={test} alt="" />
                  Tests
                </Link>
              </li>
              <li className={isActive(["/newspage", "/newspagemain"])}>
                <Link
                  to="/newspage"
                  className="flex items-center py-2 pl-5 text-links-color rounded-md font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(['/account_setting_page'])}"
                >
                  <img src={update} alt="" />
                  News & Updates
                </Link>
              </li>
              <li className={isActive(["/helppage", "/helppagemain"])}>
                <Link
                  to="/helppage"
                  className="flex items-center py-2 pl-5 text-links-color rounded-md font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(['/create_new_user_page'])}"
                >
                  <img src={help} alt="" />
                  Help
                </Link>
              </li>

              <h1 className="text-base font-normal text-black poppins ml-5 text-start">
                Account Page{" "}
              </h1>

              <li className={isActive(["/profilepage"])}>
                <Link
                  to="/profilepage"
                  className="flex items-center py-2 pl-5 text-links-color rounded-md font-medium text-base poppins gap-[10px] capitalize gradient-bg ${isActive(['/profilepage'])}"
                >
                  <FaUser className="text-2xl" />
                  Profile
                </Link>
              </li>
            </ul>

            <div className="sm:hidden block">
              <hr />
              <ul className="ml-8 space-y-3 mt-6 text-black font-normal text-base">
                <li>Home</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>privacy Policy</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
