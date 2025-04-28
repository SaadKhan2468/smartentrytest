import React, { useState } from "react";

const PracticeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which of the following drugs is a beta-blocker commonly used to treat hypertension?",
      options: ["Amlodipine", "Lisinopril", "Metoprolol", "Furosemide"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "What is the normal range for human body temperature in Fahrenheit?",
      options: ["96-98°F", "98-100°F", "97-99°F", "99-101°F"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Which organ is primarily responsible for detoxification in the human body?",
      options: ["Liver", "Kidney", "Lungs", "Heart"],
      correctAnswer: 0,
    },
    {
      id: 4,
      question: "What is the main function of hemoglobin in the blood?",
      options: ["Transport nutrients", "Fight infections", "Carry oxygen", "Regulate temperature"],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Which vitamin is known as the 'sunshine vitamin'?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      correctAnswer: 2,
    },
    {
      id: 6,
      question: "What is the chemical symbol for sodium?",
      options: ["Na", "So", "Sm", "Sn"],
      correctAnswer: 0,
    },
    {
      id: 7,
      question: "Which part of the brain is responsible for balance and coordination?",
      options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Which blood type is considered the universal donor?",
      options: ["A", "B", "AB", "O"],
      correctAnswer: 3,
    },
    {
      id: 9,
      question: "What is the primary energy source for the human body?",
      options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
      correctAnswer: 2,
    },
    {
      id: 10,
      question: "Which hormone regulates blood sugar levels?",
      options: ["Insulin", "Adrenaline", "Cortisol", "Glucagon"],
      correctAnswer: 0,
    },
  ];


  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleEndExam = () => {
    setShowResult(true);
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: index,
    });
  };

  const calculateResult = () => {
    return questions.reduce((score, question, index) => {
      return question.correctAnswer === selectedAnswers[index]
        ? score + 1
        : score;
    }, 0);
  };

  return (
    <section className="px-[3%] py-7">
      <div>
        <h1 className="text-xl text-black font-semibold poppins capitalize text-center">
          PROCTOR AI
        </h1>
        <hr className="mt-5" />
      </div>

      <div className="md:my-7 my-3 sm:border border border-border-clr  rounded-lg md:p-5 p-3">
        {!showResult ? (
          <>
            <div className="border border-border-clr rounded-lg p-4 gap-5 flex justify-between md:flex-row flex-col">
              <div className="md:w-1/2 w-full">
                <h1 className="lg:text-3xl md:text-xl text-base text-black font-semibold poppins capitalize md:py-2 py-0 ">
                  NAR: Nursing - Pharm D (Practice Test) PATHOLOGY
                </h1>
              </div>
              <div className="md:w-1/2 w-full text-black lg:text-lg text-sm font-normal md:space-y-1 text-end">
                <h1>Time Remaining : 00: 00:00</h1>
                <h1>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h1>
                <h1>Flag for REVIEW</h1>
              </div>
            </div>

            <div className="flex gap-10 mt-10 items-start md:flex-row flex-col-reverse">
              <div className="lg:w-[85%] md:w-[70%] w-full">
                <h1 className="text-black text-xl font-semibold ">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h1>
                <h1 className="text-black md:text-xl text-base font-semibold ">
                  {questions[currentQuestionIndex].question}
                </h1>
                <div className="md:space-y-3 space-y-1 mt-4">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-base text-[#0000008a] font-normal"
                      >
                        <input
                          type="radio"
                          className="accent-black"
                          name={`question-${currentQuestionIndex}`}
                          id={`option-${index}`}
                          checked={
                            selectedAnswers[currentQuestionIndex] === index
                          }
                          onChange={() => handleAnswerSelect(index)}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                      </div>
                    )
                  )}
                </div>

                <button className="text-base capitalize lg:w-[20%] md:w-[50%] w-[70%] font-medium bg-[#1976d2] text-white py-3 mt-5  rounded-lg">
                  Add Comments
                </button>
              </div>
              <div className="lg:w-[15%] md:w-[30%] w-full flex items-center  text-center  ">
                <button className="text-base text-[#1976d2] font-medium border border-[#1976d2] py-3 w-full rounded-lg">
                  Shuffle Subjects
                </button>
              </div>
            </div>
            <div className="md:mt-32 mt-20">
              <div className="flex items-end mb-5 md:justify-end  gap-5 md:flex-col flex-row">
                <button className="text-base  capitalize md:w-[20%] w-1/2 font-medium bg-[#1976d2] text-white py-3   rounded-lg">
                  Calculator
                </button>
                <button className="text-base  capitalize md:w-[20%] w-1/2 font-medium bg-[#1976d2] text-white py-3   rounded-lg">
                  White Board
                </button>
              </div>

              <div className="flex justify-between items-center border-t border-border-clr  pt-4">
                <div className="">
                  <button
                    onClick={handleEndExam}
                    className="font-semibold text-black md:text-xl text-sm"
                  >
                    End Exam
                  </button>
                </div>

                <div className=" ">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="font-semibold text-black md:text-xl text-sm"
                  >
                    Back
                  </button>

                  {currentQuestionIndex < questions.length - 1 ? (
                    <button
                      onClick={handleNext}
                      className="font-semibold text-black md:text-xl text-sm ml-5"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleEndExam}
                      className="font-semibold text-black md:text-xl text-sm ml-5"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center ">
            <h1 className="text-2xl font-semibold">Exam Completed!</h1>
            <p className="text-lg">
              Your Score: {calculateResult()} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticeTest;
