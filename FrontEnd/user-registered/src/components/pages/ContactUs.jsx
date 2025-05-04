import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import help2 from "../../assets/imgs/help2.png";
import help3 from "../../assets/imgs/help3.png";
import help4 from "../../assets/imgs/help4.png";

const ContactUs = () => {
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
        <div className="flex min-h-screen ">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg md:p-5 p-3 bg-white shadow-lg">
                    {/* Left Section - Contact Form */}
                    <div className=" w-full p-5">
                        <h2 className="text-2xl font-semibold text-gray-900">Contact Us, Reach Out Anytime!</h2>
                        <p className="text-gray-600 mt-2">
                            We are here for your questions and suggestions. Feel free to contact us anytime for support and feedback.
                        </p>

                        <form className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium">First Name</label>
                                    <input type="text" placeholder="Enter your first name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Last Name</label>
                                    <input type="text" placeholder="Enter your last name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700 font-medium">Email</label>
                                    <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Mobile Phone</label>
                                    <input type="text" placeholder="Enter your mobile phone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700 font-medium">Message</label>
                                <textarea placeholder="Enter your message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                            </div>

                            <div className="flex justify-center mt-6">
                                <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ContactUs;
