import React, { useState, useEffect } from "react";
import instruction from "../../assets/imgs/instruction.png";

const ViewInstructionPage = () => {
  const instructions = [
    "Ensure your webcam is connected and functioning properly, as the system records your session. Stay within the camera’s view at all times.",
    "Choose a quiet, well-lit room for taking the test. Make sure there are no unauthorized materials or electronic devices around.",
    "Use the provided credentials to log in to the system. Follow the on-screen instructions to verify your identity, including a face scan and ID verification.",
    "Familiarize yourself with the test interface before starting. The interface includes options to navigate between questions, save answers, and flag questions for review.",
    "Do not attempt to open other tabs, minimize the test window, or leave your seat during the test. Such actions may be flagged as potential cheating.",
    "If you encounter any technical problems, report them immediately using the built-in support chat.",
  ];

  const instructions2 = [
    "The practice test consists of multiple-choice questions (MCQs), each with four options.",
    "Click on the option you believe is correct. The selected option will be highlighted.",
    'After choosing an answer, click the "Save" button to ensure your response is recorded.',
    'Use the "Next" button to move to the next question. You can also go back to previous questions using the "Previous" button.',
    ' If you are unsure about an answer, click the "Flag" button to mark the question for later review. This will help you revisit the question before submitting the test.',
   'Once you have answered all the questions, review your flagged questions, make any necessary changes, and then click the "Submit" button to complete the test.',
  ];

  return (
    <>
      <section className="px-[3%] py-7">
        <div className="">
          <h1 className="text-xl text-black font-semibold poppins capitalize  text-center">
            PROCTOR AI{" "}
          </h1>
          <hr className="mt-5" />
        </div>

        <div className="md:my-7 my-3 sm:border border border-border-clr lg:space-y-10 space-y-5 rounded-lg md:p-5 p-3 ">
          <div className="border border-border-clr rounded-lg p-4 ">
            <h1 className="md:text-xl text-base text-black font-semibold poppins capitalize md:py-2 py-0 md:text-start text-center">
              NAR: Nursing - Pharm D (Practice Test)
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col space-y-3">
            <img src={instruction} alt="" />
            <p className="font-semibold text-black md:text-xl text-base   text-center ">
              NAR: Nursing - Pharm D (Practice Test)
            </p>
          </div>

          <div className="">
            <p className="font-semibold text-black md:text-xl text-sm">
              Adhere to these Instructions
            </p>

            <ul className="md:text-base text-sm text-black font-normal list-disc space-y-2 p-5">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>


          <div className="">
            <p className="font-semibold text-black md:text-xl text-sm">
            How to attempt questions?
            </p>

            <ul className="md:text-base text-sm text-black font-normal list-disc space-y-2 p-5">
              {instructions2.map((instruction2, index) => (
                <li key={index}>{instruction2}</li>
              ))}
            </ul>
          </div>
          <div className="">
          <p className="font-semibold text-black md:text-xl text-sm">
          Select the NEXT button to begin
            </p>
          </div>



          <div className="flex items-center justify-between border-t border-border-clr pt-4 font-semibold text-black md:text-xl text-sm">
          <a href="" className="">
          Back
            </a>
            <a href="" className="">
          Next
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewInstructionPage;
