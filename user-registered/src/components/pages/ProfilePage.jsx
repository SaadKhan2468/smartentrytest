import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const ProfilePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "john.Adaml",
    email: "john235@gmail.com",
    cnic: "37405-2008412-9",
    course: "Medical",
    feeStatus: "Paid",
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        localStorage.setItem("profileImage", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsPopupOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);
  const securityOptions = [
    {
      title: "Change Password",
      description: "Update your current password to ensure account security.",
    },
    {
      title: "Enable Two Factor Authentication",
      description:
        "Add an extra layer of protection with two factor authentication.",
    },
    {
      title: "Manage Personal Settings",
      description:
        " Adjust your privacy preferences and account recovery options.",
    },
    {
      title: "Review Security Activity",
      description:
        " View a log of recent security-related activities and changes.",
    },
  ];

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-5 p-3">
          <div className="border border-border-clr rounded-lg p-4 flex md:gap-11 gap-4 md:flex-row flex-col md:justify-start justify-center md:items-start items-center md:text-start text-center">
            <div className="bg-gray-300 rounded-full mb-2 img_upload relative">
              <img
                src={profileImage || "https://via.placeholder.com/64"}
                alt="User Profile"
                className="md:h-32 md:w-32 h-20 w-20 rounded-full object-cover"
              />
              <div
                className="absolute shadow-2xl top-0 right-0 md:w-8 md:h-8 h-5 w-5 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => document.getElementById("imageUpload").click()}
              >
                <MdModeEdit className="text-xl text-[#70777F] p-1" />
              </div>
              <input
                type="file"
                id="imageUpload"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div className="md:space-y-3 space-y-1">
              <h2 className="poppins font-semibold lg:text-4xl md:text-2xl text-lg capitalize text-black">
                {userDetails.username}
              </h2>
              <h1 className="poppins font-normal lg:text-xl text-sm text-black">
                {userDetails.email}
              </h1>
              <h1 className="poppins font-normal lg:text-xl text-sm text-black">
                {userDetails.cnic}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" name="" id="" className="accent-[#128E0C]" />
              <h1 className="poppins font-normal lg:text-xl text-sm text-black ">
                Active
              </h1>
            </div>
          </div>

          <div className="flex gap-5 mt-5 md:flex-row flex-col  ">
            <div className="md:w-1/2 w-full border border-border-clr rounded-lg p-4 ">
              <h1 className="text-xl text-black font-semibold poppins">
                User Details
              </h1>
              <div className="md:p-5 p-3 border border-border-clr rounded-lg mt-2 space-y-6 md:h-screen">
                <div className="md:space-y-2 space-y-1">
                  <h1 className="md:text-xl text-base text-black font-semibold poppins flex items-center justify-between">
                    Username
                    <button
                      className="md:text-base text-sm font-normal text-blue-600 underline"
                      onClick={handleEditClick}
                    >
                      Edit Details
                    </button>
                  </h1>
                  <h1 className="text-black md:text-base text-sm font-normal poppins">
                    {userDetails.username}
                  </h1>
                </div>
                <div className="md:space-y-2 space-y-1">
                  <h1 className="md:text-xl text-base text-black font-semibold poppins capitalize">
                    Email Address
                  </h1>
                  <h1 className="text-black md:text-base text-sm font-normal poppins">
                    {userDetails.email}
                  </h1>
                </div>
                <div className="md:space-y-2 space-y-1">
                  <h1 className="md:text-xl text-base text-black font-semibold poppins uppercase">
                    CNIC
                  </h1>
                  <h1 className="text-black md:text-base text-sm font-normal poppins">
                    {userDetails.cnic}
                  </h1>
                </div>
                <div className="md:space-y-2 space-y-1">
                  <h1 className="md:text-xl text-base text-black font-semibold poppins capitalize">
                    Course
                  </h1>
                  <h1 className="text-black md:text-base text-sm font-normal poppins capitalize">
                    {userDetails.course}
                  </h1>
                </div>
                <div className="md:space-y-2 space-y-1">
                  <h1 className="md:text-xl text-base text-black font-semibold poppins capitalize">
                    Fee Status
                  </h1>
                  <h1 className="text-black md:text-base text-sm font-normal poppins capitalize">
                    {userDetails.feeStatus}
                  </h1>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full border border-border-clr rounded-lg p-4 ">
              <h1 className="text-xl text-black font-semibold poppins">
                Login Activity
              </h1>
              <div className="md:p-5 p-3 border border-border-clr rounded-lg mt-2 space-y-6 md:h-screen">
                <div className="md:space-y-2 space-y-1">
                  <h1 className="md:text-xl text-base text-black font-semibold poppins flex items-center justify-between">
                    First access to site
                  </h1>
                  <h1 className="text-black md:text-base text-sm font-normal poppins">
                    Saturday, 6 November 2021, 3:19 PM (2 years 286 days)
                  </h1>
                </div>
                <div className="md:space-y-2 space-y-1">
                  <h1 className="md:text-xl text-base text-black font-semibold poppins capitalize">
                    Last access to site
                  </h1>
                  <h1 className="text-black md:text-base text-sm font-normal poppins">
                    Monday, 19 August 2024, 2:54 AM  (9 secs)
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className=" border border-border-clr rounded-lg p-4 mt-5 ">
            <h1 className="text-xl text-black font-semibold poppins">
              Security & Privacy
            </h1>
            <div className="space-y-4">
              {securityOptions.map((option, index) => (
                <div
                  key={index}
                  className="md:p-5 p-3 border border-border-clr rounded-lg mt-2 space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <div className="md:space-y-2 space-y-1">
                      <h1 className="md:text-xl text-sm text-black font-semibold poppins flex items-center justify-between">
                        {option.title}
                      </h1>
                      <h1 className="text-black md:text-base text-xs font-normal poppins">
                        {option.description}
                      </h1>
                    </div>
                    <div className="">
                      <MdKeyboardArrowRight className="text-3xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 md:m-0 m-5 ">
              <h2 className="text-xl font-bold mb-4">Edit Details</h2>
              <div className="lg:space-y-4 space-y-2">
                {Object.keys(userDetails).map((key) => (
                  <div key={key}>
                    <label className="block font-semibold mb-1 capitalize">
                      {key}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={userDetails[key]}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end lg:mt-4 mt-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded mr-2"
                  onClick={() => setIsPopupOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
